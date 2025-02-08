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
	val targetFileName = targetDir + File.separator + "${modFileName}.jar"
	if (!Envs.shouldTransformMod2jar) {
		return
	}
	val moduleFile = ZipFile(modFilePath)
	val zipOutputStream = ZipOutputStream(FileOutputStream(targetFileName))
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

private fun createClassLoaderFile(targetDir: String) {
	val content = "import {Java} from '@rainbow-n19/n2';\n\n" +
			"export class JDKClassLoader extends Java.JREClassLoader {\n" +
			"\tconstructor() {\n" +
			"\t\tsuper('${System.getProperty("java.version")}');\n" +
			"\t}\n\n" +
			"\tvendor(): string {\n" +
			"\t\treturn '${System.getProperty("java.vendor")}';\n" +
			"\t}\n" +
			"}\n\n" +
			"export const JdkClassLoader = new JDKClassLoader();\n" +
			"export const JdkClassCreateHelper = Java.ClassCreateHelper.on(JdkClassLoader);\n"
	writeFile(targetDir + File.separator + "JdkClassLoader.ts", content)
	appendToIndexFile(Envs.jreDir, "export * from './JdkClassLoader';\n")
}

private fun generateFromJar(path: String, classLoaderInfo: ClassLoaderInfo) {
	val classes = ZipFile(path).entries().toList().filter { entry -> entry.name.endsWith(".class") }
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

private fun generateFromJars(targetDir: String, classLoaderInfo: ClassLoaderInfo) {
	File(targetDir)
		.listFiles { it.name.endsWith(".jar") }
		?.forEach {
			Logs.log("Generating from temporary JAR file[\u001B[33m\u001B[3m${it.name}\u001B[0m]", 2)
			generateFromJar(it.absolutePath, classLoaderInfo)
		}
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

	Logs.log("Preparing JDK directory", 0)
	createIndexFile(Envs.jreDir)
	appendToIndexFile(Envs.libDir, "export * from './Jdk';\n")
	createClassLoaderFile(Envs.jreDir)

	Logs.log("Generating from temporary JAR files", 1)
	generateFromJars(targetDir, ClassLoaderInfo(name = "JdkClassCreateHelper", fileName = "JdkClassLoader"))
}
