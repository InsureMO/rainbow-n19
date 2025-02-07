package com.insuremo.rainbow.n19n4

import java.io.File
import java.io.FileOutputStream
import java.util.zip.ZipEntry
import java.util.zip.ZipFile
import java.util.zip.ZipOutputStream

private fun createJarFromJmod(modFilePath: String, envs: Envs) {
	try {
		val moduleFile = ZipFile(modFilePath)
		val zipOutputStream =
			ZipOutputStream(FileOutputStream(envs.mod2JarTempdir() + File.separator + "${File(modFilePath).name}.jar"))
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
	} catch (t: Throwable) {
		t.printStackTrace()
	}
}

fun generateJre(envs: Envs) {
	File(System.getProperty("java.home") + File.separator + "jmods")
		.takeIf { folder -> folder.exists() && folder.isDirectory }
		?.listFiles { file -> file.isFile && file.extension == "jmod" }
		?.forEach { createJarFromJmod(it.absolutePath, envs) }
}
