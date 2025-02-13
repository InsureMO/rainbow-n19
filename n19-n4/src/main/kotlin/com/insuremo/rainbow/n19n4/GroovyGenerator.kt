package com.insuremo.rainbow.n19n4

import groovy.lang.GroovySystem
import java.io.File

private fun createClassLoaderFile(targetDir: String) {
	val content = "import {Groovy, Java} from '@rainbow-n19/n2';\n\n" +
			"export class GroovyClassLoader extends Groovy.GroovyClassLoader {\n" +
			"\tconstructor(parent: Java.JREClassLoader) {\n" +
			"\t\tsuper(parent, '${GroovySystem.getVersion()}');\n" +
			"\t}\n\n" +
			"\tvendor(): string {\n" +
			"\t\treturn 'The Apache Software Foundation';\n" +
			"\t}\n" +
			"}\n\n" +
			"export const GroovyClassCreateHelper = Java.ClassCreateHelper.intermediary();\n" +
			"export const createGroovyClassLoader = (parent: Java.JREClassLoader): GroovyClassLoader => {\n" +
			"\tconst classLoader = new GroovyClassLoader(parent);\n" +
			"\tGroovyClassCreateHelper.passAllClassesTo(classLoader);\n" +
			"\treturn classLoader;\n" +
			"}\n"
	writeFile(targetDir + File.separator + "GroovyClassLoader.ts", content)
}

fun generateGroovy(): JarGeneratingTargetInfo? {
	if (!Envs.shouldGenerateGroovy) {
		return null
	}

	Logs.log("Preparing Groovy directory", 0)

	createIndexFile(Envs.groovyDir)
	appendToIndexFile(Envs.libDir, "export {createGroovyClassLoader} from './Groovy';\n")
	createClassLoaderFile(Envs.groovyDir)

	Logs.log("Generating from JAR files", 1)
	val targetInfo = JarGeneratingTargetInfo(
		classCreateHelperName = "GroovyClassCreateHelper",
		classLoaderName = "createGroovyClassLoader",
		classLoaderFileName = "GroovyClassLoader",
		classDocHtmlUrl = { clazz ->
			val version = GroovySystem.getVersion()
			val classPath = clazz.name.replace('.', '/').replace('$', '.')
			"https://docs.groovy-lang.org/${version}/html/gapi/${classPath}.html"
		},
		parameterNamesOfMethodFromDocHtml = { method, docHtml ->
//			"${method.name}(${method.parameters.joinToString(",") { transformClassNameForDocHtmlId(it) }})"
			listOf()
		},
		rootDir = Envs.groovyDir
	)
	val location = GroovySystem::class.java.protectionDomain.codeSource.location
	if (location != null) {
		println(location.path)
	}
//	generateJars(jarsDir, targetInfo)

	return targetInfo
}
