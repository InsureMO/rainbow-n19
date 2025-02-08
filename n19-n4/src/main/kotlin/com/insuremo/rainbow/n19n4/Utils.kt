package com.insuremo.rainbow.n19n4

import java.io.File

fun rmdir(dir: String): Boolean {
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
