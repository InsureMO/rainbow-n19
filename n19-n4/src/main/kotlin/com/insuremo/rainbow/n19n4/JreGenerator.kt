package com.insuremo.rainbow.n19n4

import java.io.File
import java.io.FileOutputStream
import java.util.zip.ZipEntry
import java.util.zip.ZipFile
import java.util.zip.ZipOutputStream

private fun createJarFromJmod(modFilePath: String, targetDir: String) {
	val modFileName = File(modFilePath).name
	Logs.log(
		"Transform JDK modular file[\u001B[33m\u001B[3m${modFileName}\u001B[0m] "
				+ "to [\u001B[32m\u001B[3m${modFileName}.jar\u001B[0m]", 2
	)
	if (!Envs.shouldTransformMod2jar) {
		return
	}
	val moduleFile = ZipFile(modFilePath)
	val zipOutputStream = ZipOutputStream(FileOutputStream(targetDir + File.separator + "${modFileName}.jar"))
	moduleFile.entries().toList().forEach { entry ->
		entry.name
			.takeIf { name -> (name.startsWith("classes") && !name.contains("module-info")) || name.startsWith("resources") }
			?.apply {
				val name = this
				zipOutputStream.putNextEntry(ZipEntry(name.substring(name.indexOf('/') + 1)))
				val entryInputStream = moduleFile.getInputStream(entry)
				while (entryInputStream.available() > 0) {
					zipOutputStream.write(entryInputStream.read())
				}
				zipOutputStream.flush()
			}
	}
	zipOutputStream.close()
}

private fun extractJarsFromJre(targetDir: String) {
	Logs.log("Transform JAR files from JDK modular files", 1)
	File(System.getProperty("java.home") + File.separator + "jmods")
		.takeIf { folder -> folder.exists() && folder.isDirectory }
		?.listFiles { file -> file.isFile && file.extension == "jmod" }
		?.forEach { createJarFromJmod(it.absolutePath, targetDir) }
}

fun generateJre() {
	if (!Envs.shouldGenerateJre) {
		return
	}

	Logs.log("Checking temporary directory for saving the JAR files transformed from JDK modular files", 0)
	val targetDir = Envs.mod2jarTempdir
	if (Envs.shouldCleanMod2jarTempdir) {
		Logs.log("Cleaning temporary directory for saving the JAR files transformed from JDK modular files", 1)
		cleanDir(targetDir)
	}

	extractJarsFromJre(targetDir)
}
