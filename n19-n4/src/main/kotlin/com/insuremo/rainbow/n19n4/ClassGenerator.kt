package com.insuremo.rainbow.n19n4

import java.io.File
import java.lang.reflect.AnnotatedType
import java.lang.reflect.Constructor
import java.lang.reflect.Executable
import java.lang.reflect.Field
import java.lang.reflect.GenericArrayType
import java.lang.reflect.Method
import java.lang.reflect.Modifier
import java.lang.reflect.Parameter
import java.lang.reflect.ParameterizedType
import java.lang.reflect.TypeVariable
import java.lang.reflect.Type
import java.lang.reflect.WildcardType
import java.util.Locale
import kotlin.jvm.javaClass
import org.objectweb.asm.ClassReader
import org.objectweb.asm.ClassVisitor
import org.objectweb.asm.Label
import org.objectweb.asm.MethodVisitor
import org.objectweb.asm.Opcodes
import kotlin.jvm.java

val IGNORE_ANNOTATION_TYPE_NAMES = listOf("jdk.internal.util.random.RandomSupport\$RandomGeneratorProperties", "")
val IGNORE_ANNOTATION_METHOD_NAMES = listOf("annotationType", "equals", "hashCode", "toString")

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
	Summary.takeBack(className)
	return "${indent}'${className}'"
}

private fun generateBoundsOfTypeVariable(tv: TypeVariable<*>, indent: String): String {
	val bounds = tv.bounds
	if (bounds == null || bounds.isEmpty()) {
		return "${indent}/* bounds */ UDF"
	}
	val indent1 = indent + "\t"
	return listOf(
		"${indent}[/* bounds */",
		bounds.joinToString(",\n") { bound -> generateType(bound, indent1) },
		"${indent}]"
	).joinToString("\n")
}

private fun generateAnnotation(annotation: Annotation, indent: String): String {
	val methods = annotation.javaClass.declaredMethods.filter { method ->
		Modifier.isPublic(method.modifiers)
				&& method.parameters.isEmpty()
				&& !IGNORE_ANNOTATION_METHOD_NAMES.contains(method.name)
	}
	if (methods.isEmpty()) {
		return "${indent}['${annotation.annotationClass.java.name}']"
	}
	val indent1 = indent + "\t"
	if (annotation is java.lang.Deprecated) {
		return listOf(
			"${indent}[",
			"${indent1}'${annotation.annotationClass.java.name}',",
			"${indent1}['p', 'since', '${annotation.since}'],",
			"${indent1}['p', 'forRemoval', ${annotation.forRemoval}]",
			"${indent}]",
		).joinToString("\n")
	} else {
		return listOf(
			"${indent}[",
			"${indent1}'${annotation.annotationClass.java.name}',",
			methods.joinToString(",\n") { method ->
				val name = method.name
				try {
					method.isAccessible = true
					val value = method.invoke(annotation)
					return@joinToString when (value) {
						is Annotation -> "${indent1}['a', '$name', ${generateAnnotation(value, indent1)}]"
						is Enum<*> -> "${indent1}['p', '$name', '${value.javaClass.name}.${value.name}']"
						is Class<*> -> "${indent1}['p', '$name', '${value.name}']"
						is String, Char -> "${indent1}['p', '$name', '$value']"
						is Int, Long, Short, Float, Double, Byte, Boolean -> "${indent1}['p', '$name', $value]"
						is Array<*> -> {
							val indent2 = indent1 + "\n"
							val type = method.returnType.componentType
							when {
								Annotation::class.java.isAssignableFrom(type) -> {
									listOf(
										"${indent1}['m', '$name', [",
										@Suppress("UNCHECKED_CAST")
										(value as Array<Annotation>).joinToString(",\n") {
											"'${generateAnnotation(it, indent2)}'"
										},
										"${indent1}]]"
									).joinToString("\n")
								}

								Enum::class.java.isAssignableFrom(type) -> {
									@Suppress("UNCHECKED_CAST")
									"${indent1}['p', '$name', [${(value as Array<Enum<*>>).joinToString(", ") { "'${it.javaClass.name}.${it.name}'" }}]]"
								}

								Class::class.java.isAssignableFrom(type) -> {
									@Suppress("UNCHECKED_CAST")
									"${indent1}['p', '$name', [${(value as Array<Class<*>>).joinToString(", ") { "'${it.name}'" }}]]"
								}

								type == String.javaClass || type == Char.javaClass -> {
									@Suppress("UNCHECKED_CAST")
									"${indent1}['p', '$name', [${(value as Array<String>).joinToString(", ") { "'${it}'" }}]]"
								}

								type.isPrimitive -> "['p', '$name', [${value.map { it }.joinToString(", ")}]]"
								else -> throw RuntimeException("Cannot recognize annotation value[class=${value.javaClass}, value=${value}].")
							}
						}

						else -> throw RuntimeException("Cannot recognize annotation value[class=${value.javaClass}, value=${value}].")
					}
				} catch (_: Throwable) {
					return@joinToString "${indent1}['p', '$name', '\$Unreadable Value']"
				}
			},
			"${indent}]"
		).joinToString("\n")
	}
}

private fun generateAnnotations(annotations: List<Annotation>, comment: String, udf: Boolean, indent: String): String {
	val filtered = annotations.filter { annotation ->
		!IGNORE_ANNOTATION_TYPE_NAMES.contains(annotation.annotationClass.java.name)
	}
	if (filtered.isEmpty()) {
		return generateComment(if (udf) "$comment UDF" else comment, indent)
	}
	return listOf<String>(
		"${indent}[${comment}",
		filtered.joinToString(",\n") { generateAnnotation(it, "${indent}\t") },
		"${indent}]"
	).joinToString("\n")
}

private fun generateTypeVariable(tv: TypeVariable<*>, indent: String): String {
	val annotations = tv.declaredAnnotations.toList()
	val indent1 = indent + "\t"
	return listOf(
		"${indent}[/* type variable */",
		"${indent1}/* name */ '${tv.name}',",
		generateBoundsOfTypeVariable(tv, indent1) + ",",
		generateAnnotations(annotations, "/* annotations */", true, indent1),
		"${indent}]"
	).joinToString("\n")
}

private fun generateGenericArrayType(ga: GenericArrayType, indent: String): String {
	return "${indent}[/* generic array type */ 'ga', [${
		generateType(ga.genericComponentType, indent).substring(indent.length)
	}]]"
}

private fun generateActualTypeArgumentsOfParameterizedType(pt: ParameterizedType, indent: String): String {
	val actualTypeArguments = pt.actualTypeArguments
	if (actualTypeArguments == null || actualTypeArguments.isEmpty()) {
		return "${indent}/* actual argument types */"
	}
	val indent1 = indent + "\t"
	return listOf(
		"${indent}[/* actual argument types */",
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
		"${indent}[/* upper bounds */",
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
		"${indent}[/* lower bounds */",
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

private fun generateSuperClass(clazz: Class<*>): String {
	val superclass = clazz.genericSuperclass
	if (superclass == null) {
		return generateComment("/* super class */", "\t")
	}

	return listOf<String>(
		generateComment("/* super class, extends ${superclass.typeName} */", "\t"),
		generateType(superclass, "\t")
	).joinToString("\n")
}

private fun generateInterfaces(clazz: Class<*>): String {
	val interfaces = clazz.genericInterfaces
	if (interfaces == null || interfaces.isEmpty()) {
		return generateComment("/* interfaces */", "\t")
	}

	return listOf<String>(
		"\t[/* interfaces, implements ${interfaces.joinToString(", ") { it.typeName }} */",
		interfaces.joinToString(",\n") { generateType(it, "\t\t") },
		"\t]"
	).joinToString("\n")
}

private fun generateTypeParameters(typeParameters: List<TypeVariable<*>>?, udf: Boolean, indent: String): String {
	if (typeParameters == null || typeParameters.isEmpty()) {
		return generateComment(if (udf) "/* type parameters */ UDF" else "/* type parameters */", indent)
	}
	return listOf<String>(
		"${indent}[/* type parameters */",
		typeParameters.joinToString(",\n") { generateTypeVariable(it, "${indent}\t") },
		"${indent}]"
	).joinToString("\n")
}

private fun generateParameter(parameter: Parameter, name: String, indent: String): String {
	val indent1 = indent + "\t"
	return listOf(
		"${indent}[/* parameter */",
		"${indent1}/* name */ '${name}',",
		"${indent1}/* type */ ${generateType(parameter.annotatedType.type, indent1).substring(indent1.length)},",
		"${indent1}/* modifiers */ ${parameter.modifiers},",
		generateAnnotations(parameter.annotations.toList(), "/* annotations */", true, indent1),
		"${indent}]"
	).joinToString("\n")
}

private class MethodVisitorForParameterNames(val parameterNames: MutableList<String>) :
	MethodVisitor(Opcodes.ASM9) {
	override fun visitLocalVariable(
		name: String, descriptor: String, signature: String?, start: Label, end: Label, index: Int
	) {
		if (index > 0) { // Skip 'this' parameter for non - static methods
			parameterNames.add(name)
		}
	}
}

private class ClassVisitorForMethodParameterNames(val executable: Executable, val parameterNames: MutableList<String>) :
	ClassVisitor(Opcodes.ASM9) {
	val name: String
	val descriptor: String

	init {
		this.name = executableToName()
		this.descriptor = executableToDescriptor()
	}

	private fun executableToName(): String {
		return if (executable is Method) {
			executable.name
		} else if (executable is Constructor<*>) {
			"<init>"
		} else {
			throw RuntimeException("Cannot recognize executable[${executable.javaClass.name}]")
		}
	}

	private fun classToName(clazz: Class<*>): String {
		return when {
			clazz.isArray -> clazz.name
			clazz == Byte::class.java -> "B"
			clazz == Short::class.java -> "S"
			clazz == Int::class.java -> "I"
			clazz == Long::class.java -> "J"
			clazz == Float::class.java -> "F"
			clazz == Double::class.java -> "D"
			clazz == Char::class.java -> "C"
			clazz == Boolean::class.java -> "Z"
			clazz == Void.TYPE -> "V"
			else -> "L" + clazz.name.replace('.', '/') + ";"
		}

	}

	private fun executableToDescriptor(): String {
		return if (executable is Method) {
			"(${executable.parameters.joinToString("") { p -> this.classToName(p.type) }})" + this.classToName(
				executable.returnType
			)
		} else if (executable is Constructor<*>) {
			"(${executable.parameters.joinToString("") { p -> this.classToName(p.type) }})V"
		} else {
			throw RuntimeException("Cannot recognize executable[${executable.javaClass.name}]")
		}
	}

	override fun visitMethod(
		access: Int, name: String, descriptor: String?, signature: String?, exceptions: Array<String>?
	): MethodVisitor? {
		if (name == this.name && this.descriptor == descriptor) {
			return MethodVisitorForParameterNames(parameterNames)
		}
		return null
	}
}

private fun getParameterNames(executable: Executable): List<String> {
	val parameterNames = mutableListOf<String>()
	val clazz = executable.declaringClass
	val inputStream = clazz.getResourceAsStream("/" + clazz.getName().replace('.', '/') + ".class")
	ClassReader(inputStream).accept(ClassVisitorForMethodParameterNames(executable, parameterNames), 0)
	return parameterNames
}

@Suppress("SameParameterValue")
private fun generateParameters(executable: Executable, indent: String): String {
	val parameters = executable.parameters
	if (parameters == null || parameters.isEmpty()) {
		return "${indent}/* parameters */"
	}

	val names = getParameterNames(executable)
	return listOf(
		"${indent}[/* parameters */",
		parameters.mapIndexed { i, p ->
			if (i >= names.size) {
				Pair(p.name, p)
			} else {
				Pair(names[i], p)
			}
		}.joinToString(",\n") {
			generateParameter(it.second, it.first, indent + "\t")
		},
		"${indent}]"
	).joinToString("\n")
}

private fun generateThrown(thrown: AnnotatedType, indent: String): String {
	val indent1 = indent + "\t"
	return listOf(
		"${indent}[/* exception */",
		"${indent1}/* type */ ${generateType(thrown.type, indent1).substring(indent1.length)},",
		generateAnnotations(thrown.annotations.toList(), "/* annotations */", true, indent1),
		"${indent}]"
	).joinToString("\n")
}

@Suppress("SameParameterValue")
private fun generateThrowns(executable: Executable, indent: String): String {
	val throwns = executable.annotatedExceptionTypes
	if (throwns == null || throwns.isEmpty()) {
		return "${indent}/* exceptions */"
	}
	return listOf(
		"${indent}[/* exceptions */",
		throwns.joinToString(",\n") { generateThrown(it, indent + "\t") },
		"${indent}]"
	).joinToString("\n")
}

private fun generateConstructor(constructor: Constructor<*>): String {
	val indent = "\t\t"
	val indent1 = "\t\t\t"
	return listOf(
		"${indent}[/* ${constructor.toGenericString()} */",
		generateParameters(constructor, indent1) + ",",
		generateThrowns(constructor, indent1) + ",",
		"${indent1}/* modifiers */ ${constructor.modifiers},",
		generateAnnotations(constructor.annotations.toList(), "/* annotations */", true, indent1) + ",",
		generateTypeParameters(constructor.typeParameters.toList(), true, indent1),
		"${indent}]"
	).joinToString("\n")
}

private fun generateConstructors(clazz: Class<*>): String {
	val constructors = clazz.declaredConstructors.filter { constructor ->
		Modifier.isPublic(constructor.modifiers) || Modifier.isProtected(constructor.modifiers)
	}
	if (constructors.isEmpty()) {
		return generateComment("/* declared constructors */", "\t")
	}
	return listOf(
		"\t[/* declared constructors */",
		constructors.joinToString(",\n") { generateConstructor(it) },
		"\t]"
	).joinToString("\n")
}

private fun generateMethod(method: Method): String {
	val indent = "\t\t"
	val indent1 = "\t\t\t"
	return listOf(
		"${indent}[/* ${method.toGenericString()} */",
		"${indent1}/* name */ '${method.name}',",
		generateParameters(method, indent1) + ",",
		"${indent1}/* return */ ${generateType(method.genericReturnType, indent1).substring(3)},",
		generateThrowns(method, indent1) + ",",
		"${indent1}/* modifiers */ ${method.modifiers},",
		generateAnnotations(method.annotations.toList(), "/* annotations */", true, indent1) + ",",
		generateTypeParameters(method.typeParameters.toList(), true, indent1),
		"${indent}]"
	).joinToString("\n")
}

private fun generateMethods(clazz: Class<*>): String {
	val methods = clazz.declaredMethods.filter { method ->
		(Modifier.isPublic(method.modifiers) || Modifier.isProtected(method.modifiers))
				&& !Envs.excludeMethods(method)
	}
	if (methods.isEmpty()) {
		return generateComment("/* declared methods */", "\t")
	}
	return listOf(
		"\t[/* declared methods */",
		methods.joinToString(",\n") { generateMethod(it) },
		"\t]"
	).joinToString("\n")
}

private fun generateField(field: Field): String {
	val indent = "\t\t"
	val indent1 = "\t\t\t"
	return listOf(
		"${indent}[/* ${field.toGenericString()} */",
		"${indent1}/* name */ '${field.name}',",
		"${indent1}/* type */ ${generateType(field.genericType, indent1).substring(3)},",
		generateAnnotations(field.annotations.toList(), "/* annotations */", true, indent1) + ",",
		"${indent1}/* modifiers */ ${field.modifiers}",
		"${indent}]"
	).joinToString("\n")
}

private fun generateFields(clazz: Class<*>): String {
	val fields = clazz.declaredFields.filter { field ->
		Modifier.isPublic(field.modifiers) || Modifier.isProtected(field.modifiers)
	}.filter { field ->
		!(field.type === clazz && clazz.isEnum)
	}
	if (fields.isEmpty()) {
		return generateComment("/* declared fields */", "\t")
	}
	return listOf(
		"\t[/* declared fields */",
		fields.joinToString(",\n") { generateField(it) },
		"\t]"
	).joinToString("\n")
}

private fun generateEnumValue(value: Enum<*>): String {
	return "\t\t[" + listOf(
		"'${value.name}'",
		"${value.ordinal}"
	).joinToString(", ") + "]"
}

private fun generateEnumValues(clazz: Class<*>): String {
	val values = clazz.enumConstants
	if (values == null || values.isEmpty()) {
		return "\t/* enum values */ UDF"
	}

	return listOf(
		"\t[/* enum values */",
		values.joinToString(",\n") { generateEnumValue(it as Enum<*>) },
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

	val simpleName = className.substring(className.lastIndexOf('.') + 1)
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
				"${
					generateAnnotations(clazz.declaredAnnotations.toList(), "/* declared annotations */", false, "\t")
				},\n" +
				"${generateTypeParameters(clazz.typeParameters.toList(), false, "\t")},\n" +
				"${generateConstructors(clazz)},\n" +
				"${generateMethods(clazz)},\n" +
				"${generateFields(clazz)},\n" +
				"${generateEnumValues(clazz)}\n" +
				"]);\n"
	)
}
