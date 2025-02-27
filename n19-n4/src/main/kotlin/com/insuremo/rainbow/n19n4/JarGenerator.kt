package com.insuremo.rainbow.n19n4

import java.io.BufferedReader
import java.io.InputStreamReader
import java.lang.reflect.Method
import java.net.URL
import java.util.zip.ZipFile
import org.jsoup.nodes.Document

data class JarGeneratingTargetInfo(
	val classCreateHelperName: String,
	val classLoaderName: String,
	val classLoaderFileName: String,
	val classDocHtml: (clazz: Class<*>) -> String,
	val parameterNamesOfMethodFromHtmlDoc: (method: Method, doc: Document) -> List<String?>,
	val rootDir: String,
	val docRootDir: String
)

fun classDocHtmlByUrl(url: String): String {
	if (url.isEmpty()) {
		return ""
	}

	try {
		val connection = URL(url).openConnection()
		return connection.getInputStream()
			.use {
				BufferedReader(InputStreamReader(it)).use { reader ->
					StringBuilder().apply {
						var line: String?
						while (reader.readLine().also { line = it } != null) {
							this.append(line)
							this.append("\n")
						}
					}.toString()
				}
			}
	} catch (_: Throwable) {
		Logs.warn("Failed to retrieve javadoc html file[${url}]", -1)
		return ""
	}
}

fun generateJar(jarFilePath: String, targetInfo: JarGeneratingTargetInfo) {
	val classes = ZipFile(jarFilePath).entries().toList().filter { entry -> entry.name.endsWith(".class") }
	val filtered = classes
		.map { entry -> entry.name.substring(0, entry.name.length - 6) }
		.map { name -> name.replace('/', '.') }
		.filter { name ->
			if (Envs.isClassExcluded(name)) {
				Summary.addIgnoredClass(name)
				false
			} else if (name.contains("$")) {
				// mark as temporarily ignored, if this class is found being used publicly, generate it at that time
				Summary.markClassAsIgnoredTemporarily(name)
				false
			} else {
				true
			}
		}
	if (filtered.size != classes.size) {
		Logs.log("Total ${classes.size} classes detected, ${classes.size - filtered.size} filtered", -1)
	} else {
		Logs.log("Total ${classes.size} classes detected", -1)
	}

	filtered.forEach {
		try {
			if (generateClass(it, targetInfo)) {
				Summary.addTreatedClass(it)
			}
		} catch (t: Throwable) {
			println(t)
		}
	}
}
