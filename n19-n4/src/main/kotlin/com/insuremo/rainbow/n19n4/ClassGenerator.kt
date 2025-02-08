package com.insuremo.rainbow.n19n4

import java.io.File
import java.util.Locale

data class ClassLoaderInfo(
	val name: String,
	val fileName: String
)

private fun createPackageDir(targetDir: String, packageName: String): Pair<String, Int> {
	var dir: String
	var level: Int
	val names = packageName.split(".")
	when (Envs.outputMode) {
		OutputMode.HIERARCHICAL -> {
			dir = targetDir + File.separator + names.joinToString(File.separator)
			level = names.size
		}

		OutputMode.TILED -> {
			dir =
				names.joinToString("") { it.replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() } }
			level = 1
		}
	}
	createIndexFile(dir)
	return Pair(dir, level)
}

fun generateClass(targetDir: String, className: String, classLoaderInfo: ClassLoaderInfo) {
	val clazz = Class.forName(className)
	val packageName = clazz.packageName
	val (packageDir, packageLevel) = createPackageDir(targetDir, packageName)

	val simpleName = clazz.simpleName
	writeFile(
		packageDir + File.separator + simpleName + ".ts",
		"import {${classLoaderInfo.name}} from '${"../".repeat(packageLevel)}${classLoaderInfo.fileName}';\n" +
				"import {UDF} from '${"../".repeat(packageLevel + 1)}utils';\n" +
				"\n" +
				"// noinspection JSConsecutiveCommasInArrayLiteral\n" +
				"${classLoaderInfo.name}.class('${className}', [\n" +
				"\t/* super class */,\n" +
				"\t/* interfaces */,\n" +
				"\t/* modifiers */\n" +
				"\t${clazz.modifiers},\n" +
				"\t/* declared annotations */,\n" +
				"\t/* type parameters */,\n" +
				"\t/* declared constructors */,\n" +
				"\t/* declared methods */,\n" +
				"\t/* declared fields */,\n" +
				"\t/* enum values */\n" +
				"\tUDF\n" +
				"]);\n"
	)
	appendToIndexFile(packageDir, "import './${simpleName}';\n")
}
