package com.insuremo.rainbow.n19n4

import groovy.transform.Internal
import org.apache.groovy.lang.annotation.Incubating
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
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.URL
import kotlin.jvm.java

private class MethodVisitorForParameterNames(val executable: Executable, val parameterNames: MutableList<String?>) :
	MethodVisitor(Opcodes.ASM9) {
	override fun visitLocalVariable(
		name: String, descriptor: String, signature: String?, start: Label, end: Label, index: Int
	) {
		var nameIndex = -1
		if (Modifier.isStatic(this.executable.modifiers)) {
			nameIndex = index
		} else if (index > 0) { // Skip the first one(this) parameter for non - static methods
			nameIndex = index - 1
		}
		if (nameIndex != -1) {
			while (parameterNames.size < nameIndex + 1) {
				parameterNames.add(null)
			}
			parameterNames[nameIndex] = name
		}
	}
}

private class ClassVisitorForMethodParameterNames(
	val executable: Executable,
	val parameterNames: MutableList<String?>
) :
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
			clazz.isArray -> clazz.name.replace('.', '/')
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
			return MethodVisitorForParameterNames(this.executable, parameterNames)
		}
		return null
	}
}

private class ClassGenerator(
	private val clazz: Class<*>,
	private val targetInfo: JarGeneratingTargetInfo
) {
	private companion object {
		val IGNORE_ANNOTATION_METHOD_NAMES = listOf("annotationType", "equals", "hashCode", "toString")
	}

	private val readExecutable by lazy {
		val classReader = clazz.getResourceAsStream("/" + clazz.getName().replace('.', '/') + ".class")
			.use { inputStream -> ClassReader(inputStream) }
		return@lazy { executable: Executable, parameterNames: MutableList<String?> ->
			classReader.accept(ClassVisitorForMethodParameterNames(executable, parameterNames), 0)
			parameterNames.filter { it != null }
		}
	}

	private val docHtml by lazy {
		val url = targetInfo.classDocHtmlUrl(clazz)
		if (url == null || url.isEmpty()) {
			return@lazy ""
		}

		try {
			val connection = URL(url).openConnection()
			return@lazy connection.getInputStream()
				.use {
					BufferedReader(InputStreamReader(it)).use { reader ->
						StringBuilder().apply {
							var line: String?
							while (reader.readLine().also { line = it } != null) {
								this.append(line)
								this.append("\n")
							}
						}.toString()
					}
				}
		} catch (_: Throwable) {
			Logs.warn("Failed to retrieve javadoc html file[${url}]", -1)
			return@lazy ""
		}
	}

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

	private fun generateClassName(clazz: Class<*>, indent: String): String {
		if (clazz.isArray) {
			var c = clazz.componentType
			while (c.isArray) {
				c = c.componentType
			}
			Summary.takeBack(c.name, this.clazz.name)
		} else {
			Summary.takeBack(clazz.name, this.clazz.name)
		}
		return "${indent}'${clazz.name}'"
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
		val annotationValueMethods = annotation.javaClass.declaredMethods.filter { method ->
			Modifier.isPublic(method.modifiers)
					&& method.parameters.isEmpty()
					&& !IGNORE_ANNOTATION_METHOD_NAMES.contains(method.name)
		}
		if (annotationValueMethods.isEmpty()) {
			return "${indent}[${generateClassName(annotation.annotationClass.java, "")}]"
		}
		val indent1 = indent + "\t"
		if (annotation is java.lang.Deprecated) {
			return listOf(
				"${indent}[",
				"${indent1}'java.lang.Deprecated',",
				"${indent1}['p', 'since', '${annotation.since}'],",
				"${indent1}['p', 'forRemoval', ${annotation.forRemoval}]",
				"${indent}]",
			).joinToString("\n")
		} else {
			return listOf(
				"${indent}[",
				"${generateClassName(annotation.annotationClass.java, indent1)},",
				annotationValueMethods.joinToString(",\n") { method ->
					val name = method.name
					try {
						method.isAccessible = true
						val value = method.invoke(annotation)
						return@joinToString when (value) {
							is Annotation -> "${indent1}['a', '$name', ${generateAnnotation(value, indent1)}]"
							is Enum<*> -> "${indent1}['p', '$name', '${value.javaClass.name}.${value.name}']"
							is Class<*> -> "${indent1}['c', '$name', '${value.name}']"
							is String, is Char -> "${indent1}['p', '$name', '$value']"
							is Int, is Long, is Short, is Float, is Double, is Byte, is Boolean -> "${indent1}['p', '$name', $value]"
							is Array<*> -> {
								val indent2 = indent1 + "\t"
								val type = method.returnType.componentType
								when {
									Annotation::class.java.isAssignableFrom(type) -> {
										listOf(
											"${indent1}['m', '$name', [",
											@Suppress("UNCHECKED_CAST")
											(value as Array<Annotation>).joinToString(",\n") {
												generateAnnotation(it, indent2)
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
										"${indent1}['c', '$name', [${(value as Array<Class<*>>).joinToString(", ") { "'${it.name}'" }}]]"
									}

									type == String::class.java || type == Char::class.java -> {
										@Suppress("UNCHECKED_CAST")
										"${indent1}['p', '$name', [${(value as Array<String>).joinToString(", ") { "'${it}'" }}]]"
									}

									type == Boolean::class.java -> {
										@Suppress("UNCHECKED_CAST")
										"${indent1}['p', '$name', [${(value as Array<String>).joinToString(", ") { it }}]]"
									}

									type.isPrimitive -> "['p', '$name', [${value.map { it }.joinToString(", ")}]]"
									else -> throw RuntimeException("Cannot recognize annotation value[class=${value.javaClass}, value=${value}].")
								}
							}

							else -> throw RuntimeException("Cannot recognize annotation value[class=${value.javaClass}, value=${value}].")
						}
					} catch (t: Throwable) {
						Logs.error(t)
						return@joinToString "${indent1}['p', '$name', '\$Unreadable Value']"
					}
				},
				"${indent}]"
			).joinToString("\n")
		}
	}

	private fun generateAnnotations(
		annotations: List<Annotation>,
		comment: String,
		udf: Boolean,
		indent: String
	): String {
		val filtered = annotations.filter { annotation ->
			!Envs.excludedAnnotationClasses.contains(annotation.annotationClass.java.name)
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
		} else if (rawType is Class<*>) {
			"${indent}/* raw type */ " + generateClassName(rawType, "")
		} else {
			listOf("${indent}/* raw type */", generateType(rawType, indent)).joinToString("\n")
		}
	}

	private fun generateOwnerTypeOfParameterizedType(pt: ParameterizedType, indent: String): String {
		val ownerType = pt.ownerType
		return if (ownerType == null) {
			"${indent}/* owner type */ UDF"
		} else if (ownerType is Class<*>) {
			"${indent}/* owner type */ " + generateClassName(ownerType, "")
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
			is Class<*> -> generateClassName(type, indent)
			is TypeVariable<*> -> generateTypeVariableRef(type, indent)
			is GenericArrayType -> generateGenericArrayType(type, indent)
			is ParameterizedType -> generateParameterizedType(type, indent)
			is WildcardType -> generateWildcardType(type, indent)
			else -> throw RuntimeException("Cannot recognize type[${type.javaClass.name}].")
		}
	}

	private fun generateSuperClass(): String {
		val superclass = clazz.genericSuperclass
		if (superclass == null) {
			return generateComment("/* super class */", "\t")
		}

		return listOf<String>(
			generateComment("/* super class, extends ${superclass.typeName} */", "\t"),
			generateType(superclass, "\t")
		).joinToString("\n")
	}

	private fun generateInterfaces(): String {
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
		Summary.addParameterName(name)
		return listOf(
			"${indent}[/* parameter */",
			"${indent1}/* name */ '${name}',",
			"${indent1}/* type */ ${generateType(parameter.annotatedType.type, indent1).substring(indent1.length)},",
			"${indent1}/* modifiers */ ${parameter.modifiers},",
			generateAnnotations(parameter.annotations.toList(), "/* annotations */", true, indent1),
			"${indent}]"
		).joinToString("\n")
	}

	private fun tryToGetParameterNames(executable: Executable): List<String?> {
		if (executable.parameters.size == 0) {
			return listOf()
		}
		val names = readExecutable(executable, mutableListOf<String?>())
		if (names.isEmpty()) {
			// typically only abstract method cannot get parameter names from class
			// try to get document and find them
			return when (executable) {
				is Method -> {
					return if (docHtml.isEmpty()) {
						names
					} else {
						targetInfo.parameterNamesOfMethodFromDocHtml(executable, docHtml)
					}
				}

				is Constructor<*> -> {
					println("Found constructor[${executable}], should get parameter names but now is ignored")
					return names
				}
//				else -> throw RuntimeException("Cannot recognize executable[${executable}]")
			}
		}
		return names
	}

	@Suppress("SameParameterValue")
	private fun generateParameters(executable: Executable, indent: String): String {
		val parameters = executable.parameters
		if (parameters == null || parameters.isEmpty()) {
			return "${indent}/* parameters */"
		}

		val names = tryToGetParameterNames(executable)
		return listOf(
			"${indent}[/* parameters */",
			parameters.mapIndexed { i, p ->
				if (i >= names.size) {
					Pair(p.name, p)
				} else {
					Pair(names[i] ?: p.name, p)
				}
			}.joinToString(",\n") {
				if (it.first.startsWith("arg0")) {
					if (!Modifier.isAbstract(executable.modifiers)) {
						Logs.warn(
							"Non-abstract executable[${executable}] with no explicit parameter name detected.",
							-1
						)
					}
				}
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

	private fun generateConstructors(): String {
		val constructors = clazz.declaredConstructors.filter { constructor ->
			when {
				constructor.isAnnotationPresent(Internal::class.java)
						|| constructor.isAnnotationPresent(Incubating::class.java) -> false

				Modifier.isPublic(constructor.modifiers) -> true
				Modifier.isProtected(constructor.modifiers) -> true
				else -> false
			}
		}
		if (constructors.isEmpty()) {
			return generateComment("/* declared constructors */", "\t")
		}
		return listOf(
			"\t[/* declared constructors */",
			constructors.sortedBy { it.toGenericString() }.joinToString(",\n") { generateConstructor(it) },
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

	private fun generateMethods(): String {
		val methods = clazz.declaredMethods.filter { method ->
			when {
				method.isAnnotationPresent(Internal::class.java)
						|| method.isAnnotationPresent(Incubating::class.java) -> false

				(method.modifiers and Opcodes.ACC_SYNTHETIC) != 0 -> false
				Envs.excludedMethods(method) -> false
				Modifier.isPublic(method.modifiers) -> true
				Modifier.isProtected(method.modifiers) && !Modifier.isStatic(method.modifiers) -> true
				else -> false
			}
		}
		if (methods.isEmpty()) {
			return generateComment("/* declared methods */", "\t")
		}
		return listOf(
			"\t[/* declared methods */",
			methods.sortedBy { it.toGenericString() }.joinToString(",\n") { generateMethod(it) },
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

	private fun generateFields(): String {
		val fields = clazz.declaredFields.filter { field ->
			when {
				field.isAnnotationPresent(Internal::class.java)
						|| field.isAnnotationPresent(Incubating::class.java) -> false

				Modifier.isPublic(field.modifiers) -> true
				Modifier.isProtected(field.modifiers) -> true
				else -> false
			}
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

	private fun generateEnumValues(): String {
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

	fun generate(packageLevel: Int): String {
		return listOf(
			"import {UDF} from '${"../".repeat(packageLevel + 1)}utils';",
			"import {${targetInfo.classCreateHelperName}} from '${"../".repeat(packageLevel)}${targetInfo.classLoaderFileName}';",
			"",
			"// noinspection JSConsecutiveCommasInArrayLiteral",
			"${targetInfo.classCreateHelperName}.class('${clazz.name}', [",
			"${generateSuperClass()},",
			"${generateInterfaces()},",
			"\t/* modifiers */ ${clazz.modifiers},",
			"${generateAnnotations(clazz.declaredAnnotations.toList(), "/* declared annotations */", false, "\t")},",
			"${generateTypeParameters(clazz.typeParameters.toList(), false, "\t")},",
			"${generateConstructors()},",
			"${generateMethods()},",
			"${generateFields()},",
			generateEnumValues(),
			"]);",
			""
		).joinToString("\n")
	}
}

fun generateClass(className: String, targetInfo: JarGeneratingTargetInfo, checkVisibility: Boolean? = true): Boolean {
	val clazz = Class.forName(className)
	if (clazz.isAnnotationPresent(Internal::class.java)
		|| clazz.isAnnotationPresent(Incubating::class.java)
	) {
		Summary.addIgnoredClass(className)
		return false
	}

	Logs.verbose("Generating class[${className}]", -1)
	if (checkVisibility == true) {
		val modifiers = clazz.modifiers
		if (Modifier.isPrivate(modifiers) || (!Modifier.isPublic(modifiers) && !Modifier.isProtected(modifiers))) {
			// ignore private, friendly class
			Summary.markClassAsIgnoredTemporarily(className)
			return false
		}
	}

	val generator = ClassGenerator(clazz, targetInfo)
	val packageName = clazz.packageName
	val (packageDir, packageLevel) = generator.createPackageDir(targetInfo.rootDir, packageName)

	val simpleName = className.substring(className.lastIndexOf('.') + 1)
	writeFile(
		packageDir + File.separator + simpleName + ".ts",
		generator.generate(packageLevel)
	)
	return true
}
