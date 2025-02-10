package com.insuremo.rainbow.n19n4

import java.io.File
import java.lang.reflect.GenericArrayType
import java.lang.reflect.Modifier
import java.lang.reflect.ParameterizedType
import java.lang.reflect.TypeVariable
import java.lang.reflect.Type
import java.lang.reflect.WildcardType
import java.util.Locale

class ClassGenerator {
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
		return "${indent}\"${className}\""
	}

	private fun generateBoundsOfTypeVariable(tv: TypeVariable<*>, indent: String): String {
		val bounds = tv.bounds
		if (bounds == null || bounds.size == 0) {
			return "${indent}/* bounds */ UDF"
		}
		val indent1 = indent + "\t"
		return listOf(
			"${indent}/* bounds */ [",
			bounds.joinToString(",\n") { bound -> this.generateType(bound, indent1) },
			"${indent}]"
		).joinToString("\n")
	}

	private fun generateTypeVariable(tv: TypeVariable<*>, indent: String): String {
		val indent1 = indent + "\t"
		return listOf(
			"${indent}[/* type variable */ 'tv', [",
			"${indent1}/* name */ '${tv.name}',",
			this.generateBoundsOfTypeVariable(tv, indent1) + ",",
			"${indent1}/* annotations */ UDF", // TODO annotations
//		generateOwnerTypeOfParameterizedType(pt, indent1),
			"${indent}]]"
		).joinToString("\n")
	}

	private fun generateGenericArrayType(ga: GenericArrayType, indent: String): String {
		return "${indent}/* generic array type */ ['ga', [${this.generateType(ga.genericComponentType, "")}]]"
	}

	private fun generateActualTypeArgumentsOfParameterizedType(pt: ParameterizedType, indent: String): String {
		val actualTypeArguments = pt.actualTypeArguments
		if (actualTypeArguments == null || actualTypeArguments.size == 0) {
			return "${indent}/* actual argument types */"
		}
		val indent1 = indent + "\t"
		return listOf(
			"${indent}/* actual argument types */ [",
			actualTypeArguments.joinToString(",\n") { arg -> this.generateType(arg, indent1) },
			"${indent}]"
		).joinToString("\n")
	}

	private fun generateRawTypeOfParameterizedType(pt: ParameterizedType, indent: String): String {
		val rawType = pt.rawType
		return if (rawType == null) {
			"${indent}/* raw type */"
		} else {
			"${indent}/* raw type */ " + this.generateClassName(rawType.typeName, "")
		}
	}

	private fun generateOwnerTypeOfParameterizedType(pt: ParameterizedType, indent: String): String {
		val ownerType = pt.ownerType
		return if (ownerType == null) {
			"${indent}/* owner type */ UDF"
		} else if (ownerType is Class<*>) {
			"${indent}/* owner type */ " + this.generateClassName(ownerType.name, "")
		} else {
			listOf("${indent}/* owner type */", this.generateType(ownerType, indent)).joinToString("\n")
		}
	}

	private fun generateParameterizedType(pt: ParameterizedType, indent: String): String {
		val indent1 = indent + "\t"
		return listOf(
			"${indent}[/* parameterized type */ 'pt', [",
			this.generateActualTypeArgumentsOfParameterizedType(pt, indent1) + ",",
			this.generateRawTypeOfParameterizedType(pt, indent1) + ",",
			this.generateOwnerTypeOfParameterizedType(pt, indent1),
			"${indent}]]"
		).joinToString("\n")
	}

	private fun generateUpperBoundsOfWildcardType(wt: WildcardType, indent: String): String {
		val upperBounds = wt.upperBounds
		if (upperBounds == null || upperBounds.size == 0) {
			return "${indent}/* upper bounds */"
		}
		val indent1 = indent + "\t"
		return listOf(
			"${indent}/* upper bounds */ [",
			upperBounds.joinToString(",\n") { arg -> this.generateType(arg, indent1) },
			"${indent}]"
		).joinToString("\n")
	}

	private fun generateLowerBoundsOfWildcardType(wt: WildcardType, indent: String): String {
		val lowerBounds = wt.lowerBounds
		if (lowerBounds == null || lowerBounds.size == 0) {
			return "${indent}/* lower bounds */ UDF"
		}
		val indent1 = indent + "\t"
		return listOf(
			"${indent}/* lower bounds */ [",
			lowerBounds.joinToString(",\n") { arg -> this.generateType(arg, indent1) },
			"${indent}]"
		).joinToString("\n")
	}

	private fun generateWildcardType(wt: WildcardType, indent: String): String {
		val indent1 = indent + "\t"

		return listOf(
			"${indent}[/* wildcard type */ 'wt', [",
			this.generateUpperBoundsOfWildcardType(wt, indent1) + ",",
			this.generateLowerBoundsOfWildcardType(wt, indent1),
			"${indent}]]"
		).joinToString("\n")
	}

	private fun generateType(type: Type, indent: String): String {
		return when (type) {
			is Class<*> -> this.generateClassName(type.name, indent)
			is TypeVariable<*> -> this.generateTypeVariable(type, indent)
			is GenericArrayType -> this.generateGenericArrayType(type, indent)
			is ParameterizedType -> this.generateParameterizedType(type, indent)
			is WildcardType -> this.generateWildcardType(type, indent)
			else -> throw RuntimeException("Cannot recognize type[${type.javaClass.name}].")
		}
	}

	fun generateSuperClass(clazz: Class<*>): String {
		val superclass = clazz.genericSuperclass
		if (superclass == null) {
			return this.generateComment("/* super class */", "\t")
		}

		return listOf<String>(
			this.generateComment("/* super class, extends ${superclass.typeName} */", "\t"),
			this.generateType(superclass, "\t")
		).joinToString("\n")
	}

	fun generateInterfaces(clazz: Class<*>): String {
		val interfaces = clazz.genericInterfaces
		if (interfaces == null || interfaces.size == 0) {
			return this.generateComment("/* interfaces */", "\t")
		}

		return listOf<String>(
			"\t[ /* interfaces, implements ${interfaces.joinToString(", ") { it.typeName }} */",
			interfaces.joinToString(",\n") { this.generateType(it, "\t\t") },
			"\t]"
		).joinToString("\n")
	}
}

fun generateClass(className: String, targetInfo: JarGeneratingTargetInfo, checkVisibility: Boolean? = true) {
	val clazz = Class.forName(className)
	if (checkVisibility == true) {
		val modifiers = clazz.modifiers
		if (Modifier.isPrivate(modifiers) || (!Modifier.isPublic(modifiers) && !Modifier.isProtected(modifiers))) {
			// ignore private, friendly class
			Mediator.addClass(className)
			return
		}
	}

	val generator = ClassGenerator()

	val packageName = clazz.packageName
	val (packageDir, packageLevel) = generator.createPackageDir(targetInfo.rootDir, packageName)

	val simpleName = clazz.simpleName
	writeFile(
		packageDir + File.separator + simpleName + ".ts",
		"import {UDF} from '${"../".repeat(packageLevel + 1)}utils';\n" +
				"import {${targetInfo.classCreateHelperName}} from '${"../".repeat(packageLevel)}${targetInfo.classLoaderFileName}';\n" +
				"\n" +
				"// noinspection JSConsecutiveCommasInArrayLiteral\n" +
				"${targetInfo.classCreateHelperName}.class('${className}', [\n" +
				"${generator.generateSuperClass(clazz)},\n" +
				"${generator.generateInterfaces(clazz)},\n" +
				"\t/* modifiers */ ${clazz.modifiers},\n" +
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
