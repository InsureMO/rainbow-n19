package com.insuremo.rainbow.n19n4

import createDocsCollectorFile
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

	// for docs
	if (Envs.shouldGenerateDocs) {
		createIndexFile(Envs.groovyDocsDir)
		appendToIndexFile(Envs.libDir, "export {DocsCollector} from './Groovy-Docs';\n")
		createDocsCollectorFile(Envs.groovyDocsDir)
	}

	Logs.log("Generating from JAR files", 1)
	val targetInfo = JarGeneratingTargetInfo(
		classCreateHelperName = "GroovyClassCreateHelper",
		classLoaderName = "createGroovyClassLoader",
		classLoaderFileName = "GroovyClassLoader",
		classDocHtml = { clazz ->
			val version = GroovySystem.getVersion()
			val classPath = clazz.name.replace('.', '/').replace('$', '.')
			when {
				classPath.startsWith("groovyjarjarantlr4")
						|| classPath.startsWith("groovyjarjarpicocli")
						|| classPath.startsWith("groovyjarjarasm") -> ""

				else -> classDocHtmlByUrl("https://docs.groovy-lang.org/${version}/html/api/${classPath}.html")
			}
		},
		parameterNamesOfMethodFromHtmlDoc = { method, doc ->
			standardParameterNamesOfMethodFromDocHtml(method, doc) { method ->
				val parameters = method.parameters.joinToString(",") { parameter ->
					transformClassNameForDocHtmlId(parameter)
				}
				"${method.name}(${parameters})"
			}
		},
		rootDir = Envs.groovyDir,
		docRootDir = Envs.groovyDocsDir
	)

	Envs.classesToFindJars.forEach {
		val location = Class.forName(it).protectionDomain.codeSource.location
		if (location != null) {
			generateJars(jarsDir = File(location.path).parentFile.absolutePath, targetInfo)
		}
	}

	return targetInfo
}
