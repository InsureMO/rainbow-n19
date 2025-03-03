package com.insuremo.rainbow.n19n4

import java.io.File
import java.lang.reflect.Method
import java.lang.reflect.Parameter
import java.nio.charset.StandardCharsets
import org.jsoup.nodes.Document

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
	return file.writeText(content)
}

fun writeIndexFile(dir: String, content: String) {
	val file = createIndexFile(dir)
	return file.writeText(content)
}

fun appendToFile(path: String, content: String) {
	val file = createFile(path)
	file.appendText(content)
}

fun appendToIndexFile(dir: String, content: String) {
	appendToFile(dir + File.separator + "index.ts", content)
}

private fun transformClassNameForDocHtmlId(clazz: Class<*>): String {
	return if (clazz.isPrimitive) {
		clazz.simpleName
	} else if (clazz.isArray) {
		transformClassNameForDocHtmlId(clazz.componentType) + "[]"
	} else {
		clazz.name.replace('$', '.')
	}
}

fun transformClassNameForDocHtmlId(parameter: Parameter): String {
	return if (parameter.isVarArgs) {
		transformClassNameForDocHtmlId(parameter.type.componentType) + "..."
	} else {
		transformClassNameForDocHtmlId(parameter.type)
	}
}

fun standardParameterNamesOfMethodFromDocHtml(
	method: Method, doc: Document, computeId: (method: Method) -> String
): List<String?> {
	var id = computeId(method)
	var element = doc.getElementById(id)
	if (element == null) {
		// regarding java.lang.invoke.TypeDescriptor.OfMethod.insertParameterTypes,
		// the id of this method should be "insertParameterTypes(int,java.lang.invoke.TypeDescriptor.OfField...)"
		// but in javadoc, id is "insertParameterTypes(int,java.lang.invoke.TypeDescriptor.OfField[])"
		// the varargs is presented as "[]", not "...", which leads id match missed
		// so add the following logic to fix it.
		if (id.contains("...")) {
			id = id.replace("...", "[]")
			element = doc.getElementById(id)
		}
		if (element == null) {
			return listOf()
		}
	}
	if (element.tagName() == "h3") {
		element = element.parent()
	}
	val parametersElement = element.getElementsByClass("parameters").first()
	val innerHtml = parametersElement?.html()
	if (innerHtml == null) {
		return listOf()
	}
	return innerHtml
		.drop(1) // drop "("
		.dropLast(1) // drop ")"
		.replace("&nbsp;", " ")
		.split("\n")
		.map { it.trim() }
		.map {
			if (it.startsWith("<")) {
				"any ${it.substring(it.lastIndexOf(' ') + 1).trim()}"
			} else {
				it
			}
		}
		.map { it.split(" ") }
		.map { if (it[1].endsWith(",")) it[1].dropLast(1).trim() else it[1].trim() }
}