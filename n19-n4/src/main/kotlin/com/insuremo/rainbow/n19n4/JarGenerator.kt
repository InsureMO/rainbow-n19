package com.insuremo.rainbow.n19n4

import java.util.zip.ZipFile

fun generateJar(jarPath: String, classLoaderInfo: ClassLoaderInfo) {
	val classes = ZipFile(jarPath).entries().toList().filter { entry -> entry.name.endsWith(".class") }
	val filtered = classes
		.map { entry -> entry.name.substring(0, entry.name.length - 6) }
		.map { name -> name.replace('/', '.') }
		.filter { name ->
			if (Envs.isClassExcluded(name)) {
				Summary.addIgnoredClass(name)
				false
			} else if (name.contains("$")) {
				// put into mediator, if this class is found being used publicly, generate it at that time
				Mediator.addClass(name)
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
		generateClass(Envs.jreDir, it, classLoaderInfo)
		Summary.addTreatedClass(it)
	}
}
