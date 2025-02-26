package com.insuremo.rainbow.n19n4

import java.io.File
import java.io.FileOutputStream
import java.util.Spliterator
import java.util.function.DoubleConsumer
import java.util.function.IntConsumer
import java.util.function.LongConsumer
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
}

fun generateJre(): JarGeneratingTargetInfo? {
	if (!Envs.shouldGenerateJre) {
		return null
	}

	Logs.log("Checking temporary directory for saving the JAR files transformed from JDK modular files", 0)
	val jarsDir = Envs.mod2jarTempdir
	if (Envs.shouldCleanMod2jarTempdir) {
		Logs.log("Cleaning temporary directory for saving the JAR files transformed from JDK modular files", 1)
		cleanDir(jarsDir)
	}

	extractJarsFromJre(jarsDir)

	Logs.log("Preparing JDK directory", 0)
	createIndexFile(Envs.jreDir)
	appendToIndexFile(Envs.libDir, "export {JdkClassLoader} from './Jdk';\n")
	createClassLoaderFile(Envs.jreDir)

	Logs.log("Generating from temporary JAR files", 1)
	val targetInfo = JarGeneratingTargetInfo(
		classCreateHelperName = "JdkClassCreateHelper",
		classLoaderName = "JdkClassLoader",
		classLoaderFileName = "JdkClassLoader",
		classDocHtml = { clazz ->
			val version = Runtime.version().feature()
			val module = clazz.module.name
			val classPath = clazz.name.replace('.', '/').replace('$', '.')
			classDocHtmlByUrl("https://docs.oracle.com/en/java/javase/${version}/docs/api/${module}/${classPath}.html")
		},
		parameterNamesOfMethodFromDocHtml = { method, docHtml ->
			standardParameterNamesOfMethodFromDocHtml(method, docHtml, {
				val clazz = method.declaringClass
				when {
					// the "tryAdvance" method is overridden in these three interfaces, and which is unnecessary.
					// and javadoc has no section for these overridden methods,
					// therefore here using another method which has same parameter names instead
					(clazz == Spliterator.OfDouble::class.java && method.name == "tryAdvance" && method.parameters?.first()?.type == DoubleConsumer::class.java)
							|| (clazz == Spliterator.OfInt::class.java && method.name == "tryAdvance" && method.parameters?.first()?.type == IntConsumer::class.java)
							|| (clazz == Spliterator.OfLong::class.java && method.name == "tryAdvance" && method.parameters?.first()?.type == LongConsumer::class.java) -> {
						"tryAdvance(java.util.function.Consumer)"
					}

					else -> "${method.name}(${method.parameters.joinToString(",") { transformClassNameForDocHtmlId(it) }})"
				}
			})
		},
		rootDir = Envs.jreDir,
		docRootDir = Envs.jreDocsDir
	)
	generateJars(jarsDir, targetInfo)

	return targetInfo
}
