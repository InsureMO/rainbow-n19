package com.insuremo.rainbow.n19n4

import java.io.File
import java.lang.reflect.GenericArrayType
import java.lang.reflect.ParameterizedType
import java.lang.reflect.Type
import java.util.Locale
import javax.lang.model.type.TypeVariable
import javax.lang.model.type.WildcardType

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
			dir = targetDir + File.separator + names.joinToString("") {
				it.replaceFirstChar {
					if (it.isLowerCase()) {
						it.titlecase(Locale.getDefault())
					} else {
						it.toString()
					}
				}
			}
			level = 1
		}
	}
	return Pair(dir, level)
}

private fun generateComment(comment: String?, indent: String): String {
	return indent + (comment ?: "")
}

private fun generateClassName(className: String, indent: String): String {
	return "${indent}\"${className}\""
}

private fun generateTypeVariable(tv: TypeVariable, indent: String): String {
	return ""
}

private fun generateGenericArrayType(tv: GenericArrayType, indent: String): String {
	return ""
}

private fun generateParameterizedType(tv: ParameterizedType, indent: String): String {
	return ""
}

private fun generateWildcardType(tv: WildcardType, indent: String): String {
	return ""
}

private fun generateType(type: Type, indent: String): String {
	return when (type) {
		is Class<*> -> generateClassName(type.name, indent)
		is TypeVariable -> generateTypeVariable(type, indent)
		is GenericArrayType -> generateGenericArrayType(type, indent)
		is ParameterizedType -> generateParameterizedType(type, indent)
		is WildcardType -> generateWildcardType(type, indent)
		else -> throw RuntimeException("Cannot recognize type[${type.javaClass.name}].")
	}
}

private fun generateSuperClass(clazz: Class<*>): String {
//	return generateType(clazz.genericSuperclass, "/* super class */", "\t")
	val superclass = clazz.genericSuperclass
	if (superclass == null) {
		return generateComment("/* super class */", "\t")
	}

	return listOf<String>(
		generateComment("/* super class */", "\t"),
		generateType(superclass, "\t")
	).joinToString("\n")
}

private fun generateInterfaces(clazz: Class<*>): String {
	val interfaces = clazz.genericInterfaces
	if (interfaces == null || interfaces.size == 0) {
		return generateComment("/* interfaces */", "\t")
	}

	return listOf<String>(
		generateComment("/* interfaces */", "\t"),
		"\t[",
		interfaces.joinToString(",\n") { generateType(it, "\t\t") },
		"\t]"
	).joinToString("\n")
}

fun generateClass(className: String, targetInfo: JarGeneratingTargetInfo) {
	val clazz = Class.forName(className)
	val packageName = clazz.packageName
	val (packageDir, packageLevel) = createPackageDir(targetInfo.rootDir, packageName)

	val simpleName = clazz.simpleName
	writeFile(
		packageDir + File.separator + simpleName + ".ts",
		"import {${targetInfo.classCreateHelperName}} from '${"../".repeat(packageLevel)}${targetInfo.classLoaderFileName}';\n" +
				"import {UDF} from '${"../".repeat(packageLevel + 1)}utils';\n" +
				"\n" +
				"// noinspection JSConsecutiveCommasInArrayLiteral\n" +
				"${targetInfo.classCreateHelperName}.class('${className}', [\n" +
				"${generateSuperClass(clazz)},\n" +
				"${generateInterfaces(clazz)},\n" +
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
}
