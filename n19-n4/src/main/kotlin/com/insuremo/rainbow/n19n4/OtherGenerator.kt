package com.insuremo.rainbow.n19n4

import createDocsCollectorFile
import java.io.File
import java.util.Locale

private fun createClassLoaderFile(targetDir: String, name: String) {
	val content = "import {DependenciesClassLoader, Groovy, Java} from '@rainbow-n19/n2';\n\n" +
			"export interface ThirdLib {\n" +
			"\treadonly version: string;\n" +
			"\treadonly vendor?: string;\n" +
			"}\n\n" +
			"export class ${name}ClassLoader extends DependenciesClassLoader {\n" +
			"\tconstructor(parent: Java.JREClassLoader | Groovy.GroovyClassLoader | DependenciesClassLoader) {\n" +
			"\t\tsuper(parent);\n" +
			"\t}\n\n" +
			"\tlibs(): Array<ThirdLib> {\n" +
			"\t\treturn [\n" +
			"${Envs.otherLibs.joinToString(",\n") { "\t\t\t${it}" }}\n" +
			"\t\t].map(([vendor, version]) => {\n" +
			"\t\t\treturn {vendor, version};\n" +
			"\t\t});\n" +
			"\t}\n" +
			"}\n\n" +
			"export const ${name}ClassCreateHelper = Java.ClassCreateHelper.intermediary();\n" +
			"export const create${name}ClassLoader = (parent: Java.JREClassLoader | Groovy.GroovyClassLoader | DependenciesClassLoader): ${name}ClassLoader => {\n" +
			"\tconst classLoader = new ${name}ClassLoader(parent);\n" +
			"\t${name}ClassCreateHelper.passAllClassesTo(classLoader);\n" +
			"\treturn classLoader;\n" +
			"}\n"
	writeFile(targetDir + File.separator + "${name}ClassLoader.ts", content)
}

fun generateOther(): JarGeneratingTargetInfo? {
	if (!Envs.shouldGenerateOther) {
		return null
	}

	Logs.log("Preparing directory for third-party libs", 0)

	val name = Envs.otherName.replaceFirstChar {
		if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString()
	}
	createIndexFile(Envs.otherDir)
	appendToIndexFile(Envs.libDir, "export {create${name}ClassLoader} from './${name}';\n")
	createClassLoaderFile(Envs.otherDir, name)

	// for docs
	if (Envs.shouldGenerateDocs) {
		createIndexFile(Envs.otherDocsDir)
		appendToIndexFile(Envs.libDir, "export {DocsCollector} from './${name}-Docs';\n")
		createDocsCollectorFile(Envs.otherDocsDir)
	}

	Logs.log("Generating from JAR files", 1)
	val targetInfo = JarGeneratingTargetInfo(
		classCreateHelperName = "${name}ClassCreateHelper",
		classLoaderName = "create${name}ClassLoader",
		classLoaderFileName = "${name}ClassLoader",
		classDocHtml = { clazz ->
			// TODO
			""
		},
		parameterNamesOfMethodFromHtmlDoc = { method, doc ->
			standardParameterNamesOfMethodFromDocHtml(method, doc) { method ->
				val parameters = method.parameters.joinToString(",") { parameter ->
					transformClassNameForDocHtmlId(parameter)
				}
				"${method.name}(${parameters})"
			}
		},
		rootDir = Envs.otherDir,
		docRootDir = Envs.otherDocsDir
	)

	Envs.classesToFindJars.forEach {
		val location = Class.forName(it).protectionDomain.codeSource.location
		if (location != null) {
			generateJars(jarsDir = File(location.path).parentFile.absolutePath, targetInfo)
		}
	}

	return targetInfo
}
