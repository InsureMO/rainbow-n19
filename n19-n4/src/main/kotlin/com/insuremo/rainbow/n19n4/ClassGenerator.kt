package com.insuremo.rainbow.n19n4

import groovy.transform.Internal
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
import org.apache.groovy.lang.annotation.Incubating
import org.jsoup.Jsoup
import org.jsoup.nodes.Element
import org.jsoup.nodes.Node
import org.objectweb.asm.ClassReader
import org.objectweb.asm.ClassVisitor
import org.objectweb.asm.Label
import org.objectweb.asm.MethodVisitor
import org.objectweb.asm.Opcodes
import kotlin.jvm.java
import kotlin.jvm.javaClass

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

private fun executableToName(executable: Executable): String {
	return if (executable is Method) {
		executable.name
	} else if (executable is Constructor<*>) {
		"<init>"
	} else {
		throw RuntimeException("Cannot recognize executable[${executable.javaClass.name}]")
	}
}

private class ClassVisitorForMethodParameterNames(
	val executable: Executable,
	val parameterNames: MutableList<String?>
) :
	ClassVisitor(Opcodes.ASM9) {
	val name: String = executableToName(executable)
	val descriptor: String

	init {
		this.descriptor = executableToDescriptor()
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

	private val htmlDocument by lazy {
		val html = targetInfo.classDocHtml(clazz)
		if (html.trim().isEmpty()) {
			null
		} else {
			try {
				val doc = Jsoup.parse(html)
				doc.outputSettings().prettyPrint(false)
				doc
			} catch (t: Throwable) {
				Logs.error(t, -1)
				null
			}
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
						Logs.error(t, -1)
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
					return htmlDocument?.let { doc ->
						targetInfo.parameterNamesOfMethodFromHtmlDoc(executable, doc)
					} ?: names
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

	private fun findClassConstructors(): List<Constructor<*>> {
		return clazz.declaredConstructors.filter { constructor ->
			when {
				constructor.isAnnotationPresent(Internal::class.java)
						|| constructor.isAnnotationPresent(Incubating::class.java) -> false

				Modifier.isPublic(constructor.modifiers) -> true
				Modifier.isProtected(constructor.modifiers) -> true
				else -> false
			}
		}.sortedBy { it.toGenericString().lowercase() }
	}

	private fun generateConstructors(): String {
		val constructors = findClassConstructors()
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

	private fun findClassMethods(): List<Method> {
		return clazz.declaredMethods.filter { method ->
			when {
				method.isAnnotationPresent(Internal::class.java)
						|| method.isAnnotationPresent(Incubating::class.java) -> false

				(method.modifiers and Opcodes.ACC_SYNTHETIC) != 0 -> false
				Envs.excludedMethods(method) -> false
				Modifier.isPublic(method.modifiers) -> true
				Modifier.isProtected(method.modifiers) && !Modifier.isStatic(method.modifiers) -> true
				else -> false
			}
		}.sortedBy { it.toGenericString().lowercase() }
	}

	private fun generateMethods(): String {
		val methods = findClassMethods()
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

	private fun findClassFields(): List<Field> {
		return clazz.declaredFields.filter { field ->
			when {
				field.isAnnotationPresent(Internal::class.java)
						|| field.isAnnotationPresent(Incubating::class.java) -> false

				Modifier.isPublic(field.modifiers) -> true
				Modifier.isProtected(field.modifiers) -> true
				else -> false
			}
		}.filter { field ->
			!(field.type === clazz && clazz.isEnum)
		}.sortedBy { it.name.lowercase() }
	}

	private fun generateFields(): String {
		val fields = findClassFields()
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

	private fun String.escapeDocChars(): String {
		return this
			.replace("""\""", """\\""")
			.replace("\${", """\""" + "$" + "{")
			.replace("`", """\`""")
			.replace("&nbsp;", " ")
			.replace("&thinsp;", " ")
			.replace(" ", " ")
			.replace("%5B", "[")
			.replace("%5D", "]")
			.replace("%3C", "<")
			.replace("%3E", ">")
			.replace("&lt;", "<")
			.replace("&gt;", ">")
			.replace("&amp;", "&")
			.let {
				if (it.startsWith("<!--") && it.endsWith("-->")) {
					""
				} else {
					it
				}
			}
	}

	private fun generateDocSegmentOfChildren(node: Node, level: Int, inCodeBlock: Boolean): String {
		val indent = "\t".repeat(level)
		val childNodes = node.childNodes().filter { node ->
			node.nodeName() != "#text" || node.outerHtml().trim().isNotEmpty()
		}
		return when (childNodes.size) {
			0 -> "''"
			1 -> {
				val node = childNodes.first()
				if (node.nodeName() == "#text") {
					"`${node.outerHtml().escapeDocChars()}`"
				} else {
					"[\n${generateDocSegment(node, level + 1, inCodeBlock)}\n${indent}]"
				}
			}

			else -> {
				childNodes.joinToString(",\n", "[\n", "\n${indent}]") { child ->
					generateDocSegment(child, level + 1, inCodeBlock)
				}
			}
		}
	}

	private fun getPackageNameFromLinkNode(a: Element): String {
		val title = a.attr("title")
		return when {
			title.startsWith("class in ") -> title.substring("class in ".length)
			title.startsWith("interface in ") -> title.substring("interface in ".length)
			title.startsWith("annotation in ") -> title.substring("annotation in ".length)
			title.startsWith("class or interface in ") -> title.substring("class or interface in ".length)
			else -> title
		}
	}

	private fun getInternalLink(a: Element): String {
		val href = a.attr("href")
		val title = a.attr("title")
		return if (!title.isEmpty()) {
			val className = href.substring(href.lastIndexOf("/") + 1).replace(".html", "")
			"${getPackageNameFromLinkNode(a)}.${className}"
		} else {
			val myPackageName = clazz.packageName.split(".").toMutableList()
			val link = href
			val internalLink = if (link.contains("/java.base/")) {
				link.substring(link.indexOf("/java.base/") + 11).replace(".html", "").replace("/", ".")
			} else if (link.startsWith("../")) {
				// another package
				val prePackages =
					myPackageName.take(myPackageName.size - (link.split("../").size - 1)).joinToString(".")
				if (prePackages.isEmpty()) {
					link.replace("../", "").replace(".html", "").replace("/", ".")
				} else {
					prePackages + "." + link.replace("../", "").replace(".html", "").replace("/", ".")
				}
			} else if (link.startsWith("./")) {
				"${clazz.packageName}." + link.replace("./", "").replace(".html", "").replace("/", ".")
			} else {
				"${clazz.packageName}." + link.replace(".html", "").replace("/", ".")
			}

			if (internalLink.contains("#") && !internalLink.contains("(")) {
				internalLink.split("#").takeIf { link ->
					try {
						val cls = link[0].let {
							try {
								Class.forName(it)
							} catch (_: Throwable) {
								it.split(".").let {
									try {
										Class.forName("${it.dropLast(1).joinToString(".")}$${it.last()}")
									} catch (_: Throwable) {
										Class.forName(
											"${it.dropLast(2).joinToString(".")}$${it.takeLast(2).joinToString("$")}"
										)
									}
								}
							}
						}
						var found = !cls.isEnum && cls.declaredFields.any {
							it.name == link[1]
						}
						if (!found) {
							found = cls.isEnum && cls.enumConstants.any {
								(it as Enum<*>).name == link[1]
							}
						}
						!found
					} catch (_: Throwable) {
						true
					}
				}?.let {
					Summary.addReferId(internalLink, clazz.name + "," + href)
				}
			}
			internalLink
		}
	}

	private fun generateDocSegment(node: Node, level: Int, inCodeBlock: Boolean): String {
		val indent = "\t".repeat(level)
		return when (node.nodeName()) {
			"#text" -> {
				"${indent}[/* text */ 't', `${node.outerHtml().escapeDocChars()}`]"
			}

			"em", "strong", "b", "i", "cite" -> {
				val element = node as Element
				if (element.childrenSize() == 1) {
					return generateDocSegment(element.child(0), level, inCodeBlock)
				} else {
					"${indent}[/* text */ 't', `${element.html().escapeDocChars()}`]"
				}
			}

			"sup" -> "${indent}[/* text */ 't', `${(node as Element).text().escapeDocChars()}`, 'sup']"
			"sub" -> "${indent}[/* text */ 't', `${(node as Element).text().escapeDocChars()}`, 'sub']"
			"small" -> "${indent}[/* text */ 't', `${(node as Element).text().escapeDocChars()}`, 'small']"
			"p" -> {
				val element = node as Element
				if (element.children().size == 1
					&& (element.child(0).nodeName() == "strong"
							|| element.child(0).nodeName() == "em"
							|| element.child(0).nodeName() == "b")
				) {
					"${indent}[/* block */ 'b', ${generateDocSegmentOfChildren(node.child(0), level, inCodeBlock)}]"
				} else {
					"${indent}[/* block */ 'b', ${generateDocSegmentOfChildren(node, level, inCodeBlock)}]"
				}
			}

			"h2", "h3", "h4" -> "${indent}[/* block */ 'b', ${generateDocSegmentOfChildren(node, level, inCodeBlock)}]"
			"blockquote" -> "${indent}[/* block */ 'b', ${generateDocSegmentOfChildren(node, level, inCodeBlock)}]"
			"li" -> "${indent}[/* block */ 'b', ${generateDocSegmentOfChildren(node, level, inCodeBlock)}]"
			"ul" -> "${indent}[/* list */ 'l', ${generateDocSegmentOfChildren(node, level, inCodeBlock)}]"
			"ol" -> "${indent}[/* list */ 'l', ${generateDocSegmentOfChildren(node, level, inCodeBlock)}]"
			"pre" -> "${indent}[/* code block */ 'c', ${generateDocSegmentOfChildren(node, level, true)}]"
			"span" -> {
				val element = node as Element
				if (element.attr("class") == "descfrm-type-label") {
					if (element.parent()?.attr("class") == "block"
						&& element.parent()?.nextElementSibling()?.attr("class") == "block"
					) {
						"${indent}[/* block */ 'b', " +
								generateDocSegmentOfChildren(
									element.parent()?.nextElementSibling()!!, level, inCodeBlock
								) +
								"]"
					} else {
						val from = element.children()
							.firstOrNull { child -> child.nodeName() == "code" }
							?.children()
							?.firstOrNull { child -> child.nodeName() == "a" }
							?.attr("href") ?: "Undetected"
						"${indent}[/* text, ignored since it is the description reference from [${from}] */ 't', '']"
					}
				} else if (element.childrenSize() == 1) {
					return generateDocSegment(element.child(0), level, inCodeBlock)
				} else {
					"${indent}[/* text */ 't', `${element.html().escapeDocChars()}`]"
				}
			}

			"a" -> {
				val element = node as Element
				val hasId = element.attribute("id") != null
				val hasTitle = element.attribute("title") != null
				val href = element.attr("href") ?: ""
				val hrefIgnored = Envs.ignoredDocLinks.any { href.contains(it) }
				val hrefStartsWithHash = href.startsWith("#")
				val hrefToExternal = href.startsWith("http")
				val hrefToAnotherPackage = !hrefToExternal && href.startsWith("../")
				val hrefToSamePackage = !hrefToExternal && !hrefToAnotherPackage && !href.contains("/")
				val hrefToSubPackage = !hrefToExternal && !hrefToAnotherPackage && href.contains("/")
				val hasChildElement = element.childrenSize() != 0
				when {
					hrefIgnored -> "${indent}[/* text */ 't', `${element.text().escapeDocChars()}`]"
					hasId -> {
						val id = element.attr("id")
						Summary.addAnchorId(clazz.name + "#" + id)
						"${indent}[/* anchor */ 'r', '#-id', `${id}`, `${element.text().escapeDocChars()}`]"
					}

					inCodeBlock -> {
						"${indent}[/* text */ 't', `${element.text().escapeDocChars()}`]"
					}

					!hasTitle && hrefStartsWithHash && !href.contains("(") -> {
						"${indent}[/* text */ 't', `${element.text().escapeDocChars()}`]"
					}

					!hasTitle && hrefStartsWithHash && !hasChildElement -> {
						"${indent}[/* reference */ 'r', `${href}`, `${element.text().escapeDocChars()}`]"
					}

					!hasTitle && hrefStartsWithHash && hasChildElement -> {
						"${indent}[/* reference */ 'r', `${href}`, `${element.child(0).text().escapeDocChars()}`]"
					}

					hrefToExternal -> {
						"${indent}[/* external link */ 'a', `${href}`, `${element.text().escapeDocChars()}`]"
					}

					hrefToAnotherPackage || hrefToSamePackage || hrefToSubPackage -> {
						"${indent}[/* reference */ 'r', `${getInternalLink(node).escapeDocChars()}`, `${
							element.text().escapeDocChars()
						}`]"
					}

					else -> {
						"${indent}[/* reference */ 'r', " +
								"`${getPackageNameFromLinkNode(node)}.${node.child(0).text().escapeDocChars()}`]"
					}
				}
			}

			"code" -> "${indent}[/* inline code block */ 'i', `${(node as Element).text().escapeDocChars()}`]"
			"var" -> "${indent}[/* inline code block */ 'i', `${(node as Element).text().escapeDocChars()}`]"
			"br", "hr" -> "${indent}[/* new line */ 'n']"
			"td", "th" -> {
				val prefix =
					if (node.nodeName() == "td") {
						"/* table cell */ 'tbc'"
					} else {
						"/* table header cell */ 'thc'"
					}
				val colSpan = node.let {
					val v = it.attr("colspan")
					if (v.isEmpty() || v == "1") "1" else v
				}

				val rowSpan = node.let {
					val v = it.attr("rowspan")
					if (v.isEmpty() || v == "1") "1" else v
				}
				val pos = if (colSpan == "1" && rowSpan == "1") "" else ", ${colSpan}, $rowSpan"
				val childNodes = node.childNodes()
				if (childNodes.isEmpty()) {
					"${indent}[${prefix}${pos}]"
				} else {
					listOf(
						"${indent}[${prefix}${pos}, [",
						childNodes.joinToString(",\n") { node ->
							generateDocSegment(node, level + 1, inCodeBlock)
						},
						"${indent}]]"
					).joinToString("\n")
				}
			}

			"tr" -> {
				val childNodes = (node as Element).children()
				if (childNodes.isEmpty()) {
					"${indent}[/* table row */ 'tr']"
				} else {
					listOf(
						"${indent}[/* table row */ 'tr', [",
						childNodes.joinToString(",\n") { node ->
							generateDocSegment(node, level + 1, inCodeBlock)
						},
						"${indent}]]"
					).joinToString("\n")
				}
			}

			"table" -> {
				val childNodes = (node as Element).children()
				if (childNodes.isEmpty()) {
					"${indent}[/* table */ 'tbl']"
				} else {
					val indent1 = "\t".repeat(level + 1)
					var caption: String
					val captionNode = node.getElementsByTag("caption").firstOrNull()
					caption = if (captionNode == null
						|| captionNode.attr("style").contains("display:none")
						|| captionNode.childNodes().isEmpty()
					) {
						"${indent1}[/* caption */ 'tc'],"
					} else {
						listOf(
							"${indent1}[/* caption */ 'tc', [",
							captionNode.childNodes().joinToString(",\n") { node ->
								generateDocSegment(node, level + 2, inCodeBlock)
							},
							"${indent1}]],"
						).joinToString("\n")
					}
					var header: String
					val headerNode = node.getElementsByTag("thead").firstOrNull()
					header = if (headerNode == null || headerNode.children().isEmpty()) {
						"${indent1}[/* table header */ 'th'],"
					} else {
						listOf(
							"${indent1}[/* table header */ 'th', [",
							headerNode.children().joinToString(",\n") { node ->
								generateDocSegment(node, level + 2, inCodeBlock)
							},
							"${indent1}]],"
						).joinToString("\n")
					}
					var body: String
					val bodyNode = node.getElementsByTag("tbody").firstOrNull()
					body = if (bodyNode == null || bodyNode.children().isEmpty()) {
						"${indent1}[/* table body */ 'tb'],"
					} else {
						listOf(
							"${indent1}[/* table body */ 'tb', [",
							bodyNode.children().joinToString(",\n") { node ->
								generateDocSegment(node, level + 2, inCodeBlock)
							},
							"${indent1}]],"
						).joinToString("\n")
					}
					listOf(
						"${indent}[/* table */ 'tbl',",
						caption,
						header,
						body,
						"${indent}]"
					).joinToString("\n")
				}
			}

			"dt", "dd" -> {
				val name = node.nodeName()
				val childNodes = node.childNodes()
				if (childNodes.isEmpty()) {
					"${indent}[/* $name */ '${name}']"
				} else {
					listOf(
						"${indent}[/* $name */ '${name}', [",
						childNodes.joinToString(",\n") { node -> generateDocSegment(node, level + 1, inCodeBlock) },
						"${indent}]]"
					).joinToString("\n")
				}
			}

			"dl" -> {
				val childNodes = (node as Element).children()
				if (childNodes.isEmpty()) {
					"${indent}[/* dl */ 'dl']"
				} else {
					listOf(
						"${indent}[/* dl */ 'dl', [",
						childNodes.joinToString(",\n") { node -> generateDocSegment(node, level + 1, inCodeBlock) },
						"${indent}]]"
					).joinToString("\n")
				}
			}

			else -> "${indent}[/* block */ 'b', `${node.outerHtml().escapeDocChars()}`]"
		}
	}

	private fun generateDescDoc(node: Element?, level: Int, comments: String): String {
		val indent = "\t".repeat(level)
		return node?.childNodes()
			?.filter { node -> node.nodeName() != "#text" || node.outerHtml().trim().isNotEmpty() }
			?.joinToString(",\n", "${indent}[${comments}\n", "\n${indent}],") { node ->
				generateDocSegment(node, level + 1, false)
			}
			?: "${indent}${comments} UDF,"
	}

	private fun generateClassDoc(classDescriptionNode: Element): String {
		return classDescriptionNode.getElementsByClass("type-signature").first()
			?.nextElementSibling()
			?.takeIf { element -> element.className() == "block" }
			.let { element -> generateDescDoc(element, 1, "/* class description */") }
	}

	private fun generateFieldDoc(field: Field, fieldDetailNode: Element): String {
		val name = field.name
		val fieldNode = fieldDetailNode.getElementById(name)
		if (fieldNode == null) {
			return "\t\t[/* field */ '${name}', UDF]"
		}

		val childNodes = fieldNode.children()
		val descNode = childNodes.firstOrNull { child -> child.attr("class") == "block" }

		return listOf(
			"\t\t[/* field */ '${name}', [",
			generateDescDoc(descNode, 3, "/* field description */"),
			"\t\t]]"
		).joinToString("\n")
	}

	private fun generateClassFieldDocs(fieldDetailNode: Element?): String {
		if (fieldDetailNode == null) {
			return "\t/* fields */ UDF,"
		}

		val fields = findClassFields()
		if (fields.isEmpty()) {
			return "\t/* fields */ UDF,"
		}

		return listOf(
			"\t[/* fields */",
			fields.joinToString(",\n") { generateFieldDoc(it, fieldDetailNode) },
			"\t],"
		).joinToString("\n")
	}

	@Suppress("SameParameterValue")
	private fun generateParameterDocs(node: Element?, level: Int): String {
		val indent = "\t".repeat(level)
		if (node == null) {
			return "${indent}/* parameters */ UDF,"
		}
		val leadNode =
			node.children().firstOrNull { child -> child.nodeName() == "dt" && child.text() == "Parameters:" }
		if (leadNode == null) {
			return "${indent}/* parameters */ UDF,"
		}
		val parameterNodes = leadNode.nextElementSiblings().takeWhile { sibling -> sibling.nodeName() == "dd" }
		if (parameterNodes.isEmpty()) {
			return "${indent}/* parameters */ UDF,"
		}

		val indent1 = "\t".repeat(level + 1)
		return listOf(
			"${indent}[/* parameters */",
			parameterNodes.joinToString(",\n") { node ->
				val name = node.child(0).text()
				val descriptionNodes = node.childNodes()
					.drop(if (node.child(0) === node.childNode(0)) 1 else 2)
					.filter { node ->
						node.nodeName() != "#text" || node.outerHtml().trim().isNotEmpty()
					}
				if (descriptionNodes.isEmpty()) {
					"${indent1}[/* parameter */ '${name}', UDF]"
				} else {
					val description = descriptionNodes
						.joinToString(",\n", "[/* parameter description */\n", "\n${indent1}]") { node ->
							generateDocSegment(node, level + 2, false).replace(
								"[/* text */ 't', ` - ",
								"[/* text */ 't', `"
							)
						}.replace("\${", """\""" + "$" + "{")

					"${indent1}[/* parameter */ '${name}', ${description}]"
				}
			},
			"${indent}],",
		).joinToString("\n")
	}

	@Suppress("SameParameterValue")
	private fun generateThrownDocs(node: Element?, level: Int, lastElement: Boolean): String {
		val lastComma = if (lastElement) "" else ","
		val indent = "\t".repeat(level)
		if (node == null) {
			return "${indent}/* throws */ UDF${lastComma}"
		}
		val leadNode =
			node.children().firstOrNull { child -> child.nodeName() == "dt" && child.text() == "Throws:" }
		if (leadNode == null) {
			return "${indent}/* throws */ UDF${lastComma}"
		}
		val parameterNodes = leadNode.nextElementSiblings().takeWhile { sibling -> sibling.nodeName() == "dd" }
		if (parameterNodes.isEmpty()) {
			return "${indent}/* throws */ UDF${lastComma}"
		}

		val indent1 = "\t".repeat(level + 1)
		return listOf(
			"${indent}[/* throws */",
			parameterNodes.joinToString(",\n") { node ->
				val name = node.child(0).let { node ->
					if (node.childrenSize() == 0) {
						"${node.text()}"
					} else {
						node.child(0).let { "${getPackageNameFromLinkNode(it)}.${it.text()}" }
					}
				}
				val descriptionNodes = node.childNodes()
					.drop(if (node.child(0) === node.childNode(0)) 1 else 2)
					.filter { node ->
						node.nodeName() != "#text" || node.outerHtml().trim().isNotEmpty()
					}
				if (descriptionNodes.isEmpty()) {
					"${indent1}[/* throw */ '${name}', UDF]"
				} else {
					val description = descriptionNodes
						.joinToString(",\n", "[/* throw description */\n", "\n${indent1}]") { node ->
							generateDocSegment(node, level + 2, false).replace(
								"[/* text */ 't', ` - ",
								"[/* text */ 't', `"
							)
						}.replace("\${", """\""" + "$" + "{")

					"${indent1}[/* throw */ '${name}', ${description}]"
				}
			},
			"${indent}]${lastComma}",
		).joinToString("\n")
	}

	private fun generateConstructorDoc(constructor: Constructor<*>, constructorDetailNode: Element): String {
		val id = constructor.let {
			val parameters = it.parameters.joinToString(",") { parameter ->
				transformClassNameForDocHtmlId(parameter)
			}
			"${executableToName(constructor)}(${parameters})"
		}
		var constructorNode = constructorDetailNode.getElementById(id)
		if (constructorNode == null) {
			return "\t\t[/* constructor */ '${id}', UDF]"
		}
		// if the parameters include generic type, id is declared in first H3 child, so move to its parent node
		if (constructorNode.nodeName() != "section") {
			constructorNode = constructorNode.parent()
		}

		val childNodes = constructorNode.children()
		val descNode = childNodes.firstOrNull { child -> child.attr("class") == "block" }
		val notesNode = childNodes.firstOrNull { child -> child.attr("class") == "notes" }

		return listOf(
			"\t\t[/* constructor */ '${id}', [",
			generateDescDoc(descNode, 3, "/* constructor description */"),
			generateParameterDocs(notesNode, 3),
			generateThrownDocs(notesNode, 3, true),
			"\t\t]]"
		).joinToString("\n")
	}

	private fun generateClassConstructorDocs(constructorDetailNode: Element?): String {
		if (constructorDetailNode == null) {
			return "\t/* constructors */ UDF,"
		}

		val constructors = findClassConstructors()
		if (constructors.isEmpty()) {
			return "\t/* constructors */ UDF,"
		}

		return listOf(
			"\t[/* constructors */",
			constructors.joinToString(",\n") { generateConstructorDoc(it, constructorDetailNode) },
			"\t],"
		).joinToString("\n")
	}

	@Suppress("SameParameterValue")
	private fun generateReturnDoc(node: Element?, level: Int): String {
		val indent = "\t".repeat(level)
		if (node == null) {
			return "${indent}/* return */ UDF"
		}
		val leadNode =
			node.children().firstOrNull { child -> child.nodeName() == "dt" && child.text() == "Returns:" }
		if (leadNode == null) {
			return "${indent}/* return */ UDF"
		}
		val parameterNodes = leadNode.nextElementSiblings().takeWhile { sibling -> sibling.nodeName() == "dd" }
		if (parameterNodes.isEmpty()) {
			return "${indent}/* return */ UDF"
		}

		val nodes = parameterNodes.map { node ->
			node.childNodes().filter { node ->
				node.nodeName() != "#text" || node.outerHtml().trim().isNotEmpty()
			}
		}.flatten()
		if (nodes.isEmpty()) {
			return "${indent}/* return */ UDF"
		}
		return nodes.joinToString(",\n", "${indent}[/* return description */\n", "\n${indent}]") { node ->
			generateDocSegment(node, level + 1, false)
		}.replace("\${", """\""" + "$" + "{")
	}

	private fun generateMethodDoc(method: Method, methodDetailNode: Element): String {
		val id = method.let {
			val parameters = it.parameters.joinToString(",") { parameter ->
				transformClassNameForDocHtmlId(parameter)
			}
			"${executableToName(method)}(${parameters})"
		}
		var methodNode = methodDetailNode.getElementById(id)
		if (methodNode == null) {
			return "\t\t[/* method */ '${id}', UDF]"
		}
		// if the parameters include generic type, id is declared in first H3 child, so move to its parent node
		if (methodNode.nodeName() != "section") {
			methodNode = methodNode.parent()
		}

		val childNodes = methodNode.children()
		val descNode = childNodes.firstOrNull { child -> child.attr("class") == "block" }
		val notesNode = childNodes.firstOrNull { child -> child.attr("class") == "notes" }

		return listOf(
			"\t\t[/* method */ '${id}', [",
			generateDescDoc(descNode, 3, "/* method description */"),
			generateParameterDocs(notesNode, 3),
			generateThrownDocs(notesNode, 3, false),
			generateReturnDoc(notesNode, 3),
			"\t\t]]"
		).joinToString("\n")
	}

	private fun generateClassMethodDocs(methodDetailNode: Element?): String {
		if (methodDetailNode == null) {
			return "\t/* methods */ UDF,"
		}

		val methods = findClassMethods()
		if (methods.isEmpty()) {
			return "\t/* methods */ UDF,"
		}

		return listOf(
			"\t[/* methods */",
			methods.joinToString(",\n") { generateMethodDoc(it, methodDetailNode) },
			"\t],"
		).joinToString("\n")
	}

	fun generateDoc(packageLevel: Int): String {
		return htmlDocument?.let { doc ->
			val classDescriptionNode = doc.getElementById("class-description")
			val classDoc = generateClassDoc(classDescriptionNode!!)
			val fieldDocs = generateClassFieldDocs(doc.getElementById("field-detail"))
			val constructorDocs = generateClassConstructorDocs(doc.getElementById("constructor-detail"))
			val methodDocs = generateClassMethodDocs(doc.getElementById("method-detail"))
			val imports = if (classDoc.contains("UDF")
				|| fieldDocs.contains("UDF")
				|| constructorDocs.contains("UDF")
				|| methodDocs.contains("UDF")
			) {
				"import {UDF} from '${"../".repeat(packageLevel + 1)}utils';\n" +
						"import {DocsCollector} from '${"../".repeat(packageLevel)}DocsCollector';"
			} else {
				"import {DocsCollector} from '${"../".repeat(packageLevel)}DocsCollector';"
			}
			listOf(
				imports,
				"",
				"DocsCollector.collect('${clazz.name}', [",
				classDoc,
				fieldDocs,
				constructorDocs,
				methodDocs,
				"]);",
				""
			).joinToString("\n")
		} ?: listOf(
			"import {UDF} from '${"../".repeat(packageLevel + 1)}utils';",
			"import {DocsCollector} from '${"../".repeat(packageLevel)}DocsCollector';",
			"",
			"DocsCollector.collect('${clazz.name}', UDF);",
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

	if (checkVisibility == true) {
		val modifiers = clazz.modifiers
		if (Modifier.isPrivate(modifiers) || (!Modifier.isPublic(modifiers) && !Modifier.isProtected(modifiers))) {
			// ignore private, friendly class
			Summary.markClassAsIgnoredTemporarily(className)
			return false
		}
	}

	Logs.verbose("Generating class[${className}]", -1)

	val generator = ClassGenerator(clazz, targetInfo)
	val packageName = clazz.packageName
	val (packageDir, packageLevel) = generator.createPackageDir(targetInfo.rootDir, packageName)

	val simpleName = className.substring(className.lastIndexOf('.') + 1)
	writeFile(
		packageDir + File.separator + simpleName + ".ts",
		generator.generate(packageLevel)
	)

	if (Envs.shouldGenerateDocs) {
		val (packageDir, packageLevel) = generator.createPackageDir(targetInfo.docRootDir, packageName)
		writeFile(
			packageDir + File.separator + simpleName + ".ts",
			generator.generateDoc(packageLevel)
		)
	}

	return true
}
