package com.insuremo.rainbow.n19n4

import java.io.File

fun generateJars(jarsDir: String, classLoaderInfo: ClassLoaderInfo) {
	File(jarsDir)
		.listFiles { it.name.endsWith(".jar") }
		?.forEach {
			Logs.log("Generating from temporary JAR file[\u001B[33m\u001B[3m${it.name}\u001B[0m]", 2)
			generateJar(it.absolutePath, classLoaderInfo)
		}
}
