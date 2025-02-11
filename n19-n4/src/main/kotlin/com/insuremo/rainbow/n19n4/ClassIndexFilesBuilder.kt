package com.insuremo.rainbow.n19n4

import java.io.File

fun buildClassIndexFiles(targetInfo: JarGeneratingTargetInfo) {
	// import all class files
	val imports = File(targetInfo.rootDir)
		.listFiles { file -> file.isDirectory }
		?.apply { this.forEach { generatePackageIndexFile(it.absolutePath) } }
		?.sortedBy { it.name.lowercase() }
		?.joinToString("\n") { file -> "import './${file.name}';" }
		?: ""

	appendToIndexFile(
		Envs.jreDir,
		"${if (imports.isEmpty()) imports else (imports + "\n\n")}export {${targetInfo.classLoaderName}} from './${targetInfo.classLoaderFileName}';\n"
	)
}