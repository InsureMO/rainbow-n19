package com.insuremo.rainbow.n19n4

import java.io.File
import java.lang.reflect.GenericArrayType
import java.lang.reflect.Modifier
import java.lang.reflect.ParameterizedType
import java.lang.reflect.TypeVariable
import java.lang.reflect.Type
import java.lang.reflect.WildcardType
import java.util.Locale

fun createPackageDir(targetDir: String, packageName: String): Pair<String, Int> {
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
	Summary.takeBack(className)
	return "${indent}\"${className}\""
}

private fun generateBoundsOfTypeVariable(tv: TypeVariable<*>, indent: String): String {
	val bounds = tv.bounds
	if (bounds == null || bounds.isEmpty()) {
		return "${indent}/* bounds */ UDF"
	}
	val indent1 = indent + "\t"
	return listOf(
		"${indent}/* bounds */ [",
		bounds.joinToString(",\n") { bound -> generateType(bound, indent1) },
		"${indent}]"
	).joinToString("\n")
}

private fun generateTypeVariable(tv: TypeVariable<*>, indent: String): String {
	val indent1 = indent + "\t"
	return listOf(
		"${indent}[/* type variable */",
		"${indent1}/* name */ '${tv.name}',",
		generateBoundsOfTypeVariable(tv, indent1) + ",",
		"${indent1}/* annotations */ UDF", // TODO annotations
//		generateOwnerTypeOfParameterizedType(pt, indent1),
		"${indent}]"
	).joinToString("\n")
}

private fun generateGenericArrayType(ga: GenericArrayType, indent: String): String {
	return "${indent}/* generic array type */ ['ga', [${generateType(ga.genericComponentType, "")}]]"
}

private fun generateActualTypeArgumentsOfParameterizedType(pt: ParameterizedType, indent: String): String {
	val actualTypeArguments = pt.actualTypeArguments
	if (actualTypeArguments == null || actualTypeArguments.isEmpty()) {
		return "${indent}/* actual argument types */"
	}
	val indent1 = indent + "\t"
	return listOf(
		"${indent}/* actual argument types */ [",
		actualTypeArguments.joinToString(",\n") { arg -> generateType(arg, indent1) },
		"${indent}]"
	).joinToString("\n")
}

private fun generateRawTypeOfParameterizedType(pt: ParameterizedType, indent: String): String {
	val rawType = pt.rawType
	return if (rawType == null) {
		"${indent}/* raw type */"
	} else {
		"${indent}/* raw type */ " + generateClassName(rawType.typeName, "")
	}
}

private fun generateOwnerTypeOfParameterizedType(pt: ParameterizedType, indent: String): String {
	val ownerType = pt.ownerType
	return if (ownerType == null) {
		"${indent}/* owner type */ UDF"
	} else if (ownerType is Class<*>) {
		"${indent}/* owner type */ " + generateClassName(ownerType.name, "")
	} else {
		listOf("${indent}/* owner type */", generateType(ownerType, indent)).joinToString("\n")
	}
}

private fun generateParameterizedType(pt: ParameterizedType, indent: String): String {
	val indent1 = indent + "\t"
	return listOf(
		"${indent}[/* parameterized type */ 'pt', [",
		generateActualTypeArgumentsOfParameterizedType(pt, indent1) + ",",
		generateRawTypeOfParameterizedType(pt, indent1) + ",",
		generateOwnerTypeOfParameterizedType(pt, indent1),
		"${indent}]]"
	).joinToString("\n")
}

private fun generateUpperBoundsOfWildcardType(wt: WildcardType, indent: String): String {
	val upperBounds = wt.upperBounds
	if (upperBounds == null || upperBounds.isEmpty()) {
		return "${indent}/* upper bounds */"
	}
	val indent1 = indent + "\t"
	return listOf(
		"${indent}/* upper bounds */ [",
		upperBounds.joinToString(",\n") { arg -> generateType(arg, indent1) },
		"${indent}]"
	).joinToString("\n")
}

private fun generateLowerBoundsOfWildcardType(wt: WildcardType, indent: String): String {
	val lowerBounds = wt.lowerBounds
	if (lowerBounds == null || lowerBounds.isEmpty()) {
		return "${indent}/* lower bounds */ UDF"
	}
	val indent1 = indent + "\t"
	return listOf(
		"${indent}/* lower bounds */ [",
		lowerBounds.joinToString(",\n") { arg -> generateType(arg, indent1) },
		"${indent}]"
	).joinToString("\n")
}

private fun generateWildcardType(wt: WildcardType, indent: String): String {
	val indent1 = indent + "\t"

	return listOf(
		"${indent}[/* wildcard type */ 'wt', [",
		generateUpperBoundsOfWildcardType(wt, indent1) + ",",
		generateLowerBoundsOfWildcardType(wt, indent1),
		"${indent}]]"
	).joinToString("\n")
}

private fun generateTypeVariableRef(tv: TypeVariable<*>, indent: String): String {
	return "${indent}[/* type variable ref */ 'tr', [/* name */ '${tv.name}']]"
}

private fun generateType(type: Type, indent: String): String {
	return when (type) {
		is Class<*> -> generateClassName(type.name, indent)
		is TypeVariable<*> -> generateTypeVariableRef(type, indent)
		is GenericArrayType -> generateGenericArrayType(type, indent)
		is ParameterizedType -> generateParameterizedType(type, indent)
		is WildcardType -> generateWildcardType(type, indent)
		else -> throw RuntimeException("Cannot recognize type[${type.javaClass.name}].")
	}
}

fun generateSuperClass(clazz: Class<*>): String {
	val superclass = clazz.genericSuperclass
	if (superclass == null) {
		return generateComment("/* super class */", "\t")
	}

	return listOf<String>(
		generateComment("/* super class, extends ${superclass.typeName} */", "\t"),
		generateType(superclass, "\t")
	).joinToString("\n")
}

fun generateInterfaces(clazz: Class<*>): String {
	val interfaces = clazz.genericInterfaces
	if (interfaces == null || interfaces.isEmpty()) {
		return generateComment("/* interfaces */", "\t")
	}

	return listOf<String>(
		"\t[ /* interfaces, implements ${interfaces.joinToString(", ") { it.typeName }} */",
		interfaces.joinToString(",\n") { generateType(it, "\t\t") },
		"\t]"
	).joinToString("\n")
}

fun generateClassTypeParameters(clazz: Class<*>): String {
	val parameters = clazz.typeParameters
	if (parameters == null || parameters.isEmpty()) {
		return generateComment("/* type parameters */", "\t")
	}
	return listOf<String>(
		"\t[ /* type parameters */",
		parameters.joinToString(",\n") { generateTypeVariable(it, "\t\t") },
		"\t]"
	).joinToString("\n")
}

fun generateClass(className: String, targetInfo: JarGeneratingTargetInfo, checkVisibility: Boolean? = true) {
	val clazz = Class.forName(className)
	if (checkVisibility == true) {
		val modifiers = clazz.modifiers
		if (Modifier.isPrivate(modifiers) || (!Modifier.isPublic(modifiers) && !Modifier.isProtected(modifiers))) {
			// ignore private, friendly class
			Summary.markClassAsIgnoredTemporarily(className)
			return
		}
	}

	val packageName = clazz.packageName
	val (packageDir, packageLevel) = createPackageDir(targetInfo.rootDir, packageName)

	val simpleName = clazz.simpleName
	writeFile(
		packageDir + File.separator + simpleName + ".ts",
		"import {UDF} from '${"../".repeat(packageLevel + 1)}utils';\n" +
				"import {${targetInfo.classCreateHelperName}} from '${"../".repeat(packageLevel)}${targetInfo.classLoaderFileName}';\n" +
				"\n" +
				"// noinspection JSConsecutiveCommasInArrayLiteral\n" +
				"${targetInfo.classCreateHelperName}.class('${className}', [\n" +
				"${generateSuperClass(clazz)},\n" +
				"${generateInterfaces(clazz)},\n" +
				"\t/* modifiers */ ${clazz.modifiers},\n" +
				"\t/* declared annotations */,\n" +
				"${generateClassTypeParameters(clazz)},\n" +
				"\t/* declared constructors */,\n" +
				"\t/* declared methods */,\n" +
				"\t/* declared fields */,\n" +
				"\t/* enum values */\n" +
				"\tUDF\n" +
				"]);\n"
	)
}
