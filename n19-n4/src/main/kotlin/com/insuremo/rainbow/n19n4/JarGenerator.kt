package com.insuremo.rainbow.n19n4

import java.lang.reflect.Method
import java.util.zip.ZipFile

data class JarGeneratingTargetInfo(
	val classCreateHelperName: String,
	val classLoaderName: String,
	val classLoaderFileName: String,
	val classDocHtmlUrl: (clazz: Class<*>) -> String,
	val parameterNamesOfMethodFromDocHtml: (method: Method, docHtml: String) -> List<String?>,
	val rootDir: String
)

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
		generateClass(it, targetInfo)
		Summary.addTreatedClass(it)
	}
}
