package com.insuremo.rainbow.n19n4

import java.io.File
import java.nio.charset.StandardCharsets

fun createDir(dir: String): Boolean {
	val folder = File(dir)
	if (folder.exists()) {
		if (folder.isFile) {
			throw RuntimeException("[${folder.absolutePath}] exists and is a file.")
		}
		return true
	} else {
		return folder.mkdirs()
	}
}

fun deleteDir(dir: String): Boolean {
	return File(dir).takeIf { it.exists() }?.deleteRecursively() != false
}

fun cleanDir(dir: String): Boolean {
	val folder = File(dir)
	if (!folder.exists()) {
		return true
	}
	val files = folder.listFiles()
	if (files == null || files.size == 0) {
		return true
	}
	return files
		.map { if (it.isFile) it.delete() else it.deleteRecursively() }
		.all { it }
}

fun createFile(path: String): File {
	val file = File(path)
	if (file.exists()) {
		if (file.isDirectory) {
			throw RuntimeException("[${file.absolutePath}] exists and is a directory.")
		}
	} else {
		createDir(file.parent)
		file.createNewFile()
	}
	return file
}

fun createIndexFile(dir: String): File {
	return createFile(dir + File.separator + "index.ts")
}

fun writeFile(path: String, content: String) {
	val file = createFile(path)
	return file.writeText(content, StandardCharsets.UTF_8)
}

fun writeIndexFile(dir: String, content: String) {
	val file = createIndexFile(dir)
	return file.writeText(content)
}

fun appendToFile(path: String, content: String) {
	val file = createFile(path)
	file.appendText(content, StandardCharsets.UTF_8)
}

fun appendToIndexFile(dir: String, content: String) {
	appendToFile(dir + File.separator + "index.ts", content)
}
