package com.insuremo.rainbow.n19n4

import java.io.File
import java.lang.reflect.Method

enum class OutputMode {
	TILED, HIERARCHICAL
}

object Envs {
	// constants
	private const val KEY_PREFIX = "n19n4."
	private const val HELP = "help"
	private const val VERBOSE = "verbose"

	private const val GENERATE_TARGET = "generateTarget"
	private const val GENERATE_TARGET_JDK = "jdk"
	private const val GENERATE_TARGET_GROOVY = "groovy"
	private const val GENERATE_TARGET_OTHER = "other"

	// jdk
	private const val MOD2JAR_TEMP_DIR = "mod2jarTempdir"
	private const val CLEAN_MOD2JAR_TEMP_DIR = "cleanMod2jarTempDir"
	private val DEFAULT_MOD2JAR_TEMP_DIR = ".temp${File.separator}.mod2jar"
	private const val TEMP_DIR_MOD2JAR_POST_DEL = "mod2jarTempDirPostDel"

	// groovy and others
	private const val CLASSES_TO_LOCATE_JARS = "classesToLocateJars"
	private val GROOVY_CLASSES_TO_LOCATE_JARS by lazy {
		listOf(
			"groovy.lang.GroovySystem"
		).joinToString(",")
	}
	private const val THIRD_PARTY_LIB_NAME = "thirdPartyLibName"
	private const val THIRD_PARTY_LIBS = "thirdPartyLibs"

	// common
	private const val OUTPUT_DIR = "outputDir"
	private val DEFAULT_OUTPUT_DIR = ".output${File.separator}src"
	private const val CLEAN_OUTPUT_DIR = "cleanOutputDir"
	private const val OUTPUT_MODE = "outputMode"
	private const val OUTPUT_MODE_TILED = "tiled"
	private const val OUTPUT_MODE_HIERARCHICAL = "package"
	private const val INCLUDED_CLASSES = "includedClasses"
	private const val EXCLUDED_PACKAGES = "excludedPackages"
	private val DEFAULT_INCLUDED_CLASSES by lazy {
		listOf(
			// groovy
			"groovy.lang.EmptyRange",
			"groovy.lang.IntRange",
			"groovy.lang.ListWithDefault",
			"groovy.lang.MapWithDefault",
			"groovy.lang.NonEmptySequence",
			"groovy.lang.NumberRange",
			"groovy.lang.ObjectRange",
			"groovy.lang.Range",
			"groovy.lang.Sequence",
			"groovy.lang.SpreadMap",
			"groovy.lang.Tuple",
			"groovy.lang.Tuple0",
			"groovy.lang.Tuple1",
			"groovy.lang.Tuple2",
			"groovy.lang.Tuple3",
			"groovy.lang.Tuple4",
			"groovy.lang.Tuple5",
			"groovy.lang.Tuple6",
			"groovy.lang.Tuple7",
			"groovy.lang.Tuple8",
			"groovy.lang.Tuple9",
			"groovy.lang.Tuple10",
			"groovy.lang.Tuple11",
			"groovy.lang.Tuple12",
			"groovy.lang.Tuple13",
			"groovy.lang.Tuple14",
			"groovy.lang.Tuple15",
			"groovy.lang.Tuple16",
			"groovy.time.BaseDuration",
			"groovy.time.DatumDependentDuration",
			"groovy.time.Duration",
			"groovy.time.TimeDatumDependentDuration",
			"groovy.time.TimeDuration",
			"groovy.util.GroovyCollections",
			"groovy.util.MapEntry",
			"groovy.util.OrderBy",
		).joinToString(",")
	}
	private val DEFAULT_EXCLUDED_PACKAGES by lazy {
		listOf(
			// jdk
			"apple.security",
			"apple.laf",
			"com.apple",
			"java.applet",
			"java.awt",
			"java.beans",
			"java.rmi",
			"java.lang.constant",
			"java.lang.instrument",
			"java.lang.module",
			"java.lang.management",
			"java.lang.runtime",
			"java.net",
			"java.nio",
			"java.sql",
			"java.security",
			"java.util.concurrent",
			"java.util.jar",
			"java.util.logging",
			"java.util.prefs",
			"java.util.spi",
			"javax.rmi",
			"javax.print",
			"javax.smartcardio",
			"javax.accessibility",
			"javax.sound",
			"javax.imageio",
			"javax.swing",
			"javax.annotation",
			"javax.crypto",
			"javax.lang.model",
			"javax.management",
			"javax.naming",
			"javax.net",
			"javax.script",
			"javax.security",
			"javax.sql",
			"javax.tools",
			"javax.transaction",
			"javax.xml",
			"jdk",
			"com.sun",
			"sun",
			"netscape.javascript",
			"org.ietf.jgss",
			"org.jcp.xml",
			"org.w3c.dom",
			"org.xml.sax",
			// groovy
			// generally, there are relatively few commonly used classes in Groovy.
			// therefore, by default, all classes are excluded.
			// however, some utility classes are introduced by default in the included classes.
			"groovy",
			"groovyjarjarantlr4",
			"groovyjarjarasm",
			"groovyjarjarpicocli",
			"org.apache.groovy",
			"org.codehaus.groovy"
		).joinToString(",")
	}
	private const val EXCLUDED_CLASSES = "excludedClasses"
	private val DEFAULT_EXCLUDED_CLASSES by lazy {
		listOf(
			"java.beans.AppletInitializer",
			"java.lang.System",
			"java.util.ServiceLoader"
		).joinToString(",")
	}
	private const val GENERATE_DOCS = "generateDocs"
	private const val DOC_DIR_SUFFIX = "-Docs"

	// dev constants
	private const val TRANSFORM_MOD_2_JAR = "dev.transformMod2Jar"
	const val SUMMARY_FILE = ".summary.txt"

	// instances
	private val envsMap = mutableMapOf<String, String?>()
	val isVerboseEnabled by lazy { this.isEnabled(VERBOSE, false) }
	val workPath: String = File(".").absolutePath
	val mod2jarTempdir by lazy { this.askDir(this.get(MOD2JAR_TEMP_DIR, DEFAULT_MOD2JAR_TEMP_DIR)) }
	val outputDir by lazy { this.askDir(this.get(OUTPUT_DIR, DEFAULT_OUTPUT_DIR)) }
	val shouldCleanOutputDir by lazy { this.isEnabled(CLEAN_OUTPUT_DIR, true) }
	val outputMode by lazy {
		when (this.get(OUTPUT_MODE, OUTPUT_MODE_HIERARCHICAL).lowercase()) {
			OUTPUT_MODE_TILED -> OutputMode.TILED
			OUTPUT_MODE_HIERARCHICAL -> OutputMode.HIERARCHICAL
			else -> OutputMode.HIERARCHICAL
		}
	}
	val shouldGenerateJre by lazy { this.get(GENERATE_TARGET) == GENERATE_TARGET_JDK }
	val shouldCleanMod2jarTempdir by lazy { this.isEnabled(CLEAN_MOD2JAR_TEMP_DIR, true) }
	val shouldDeleteMod2jarTempdirOnFinalization by lazy {
		this.shouldGenerateJre && this.isEnabled(TEMP_DIR_MOD2JAR_POST_DEL, true)
	}
	val shouldGenerateGroovy by lazy { this.get(GENERATE_TARGET) == GENERATE_TARGET_GROOVY }
	val shouldGenerateOther by lazy { this.get(GENERATE_TARGET, GENERATE_TARGET_OTHER) == GENERATE_TARGET_OTHER }
	val classesToFindJars by lazy {
		if (this.shouldGenerateJre) {
			listOf<String>()
		} else if (this.shouldGenerateGroovy) {
			this.get(CLASSES_TO_LOCATE_JARS, GROOVY_CLASSES_TO_LOCATE_JARS).split(",").toList().map { it.trim() }
		} else {
			this.get(CLASSES_TO_LOCATE_JARS, "").split(",").toList().filter { it.isNotEmpty() }.map { it.trim() }
		}
	}
	val includeClasses by lazy {
		this.get(INCLUDED_CLASSES, DEFAULT_INCLUDED_CLASSES).split(",").toList().map { it.trim() }
			.associate { Pair(it, true) }
	}
	val excludedPackages by lazy {
		this.get(EXCLUDED_PACKAGES, DEFAULT_EXCLUDED_PACKAGES).split(",").map { name -> "${name.trim()}." }
	}
	val excludedClasses by lazy {
		this.get(EXCLUDED_CLASSES, DEFAULT_EXCLUDED_CLASSES).split(",").toList()
			.map { it.trim() }.associate { Pair(it, true) }
	}

	/** this is programmatic */
	val excludedMethods by lazy {
		{ method: Method ->
			listOf(
				// jdk
				"public abstract java.awt.Component java.beans.beancontext.BeanContextChildComponentProxy.getComponent()",
				"public abstract java.awt.Container java.beans.beancontext.BeanContextContainerProxy.getContainer()",
				"public abstract java.awt.Image java.beans.BeanInfo.getIcon(int)",
				"public static java.lang.Object java.beans.Beans.instantiate(java.lang.ClassLoader,java.lang.String,java.beans.beancontext.BeanContext,java.beans.AppletInitializer) throws java.io.IOException,java.lang.ClassNotFoundException",
				"public abstract void java.beans.PropertyEditor.paintValue(java.awt.Graphics,java.awt.Rectangle)",
				"public abstract java.awt.Component java.beans.PropertyEditor.getCustomEditor()",
				"public void java.beans.PropertyEditorSupport.paintValue(java.awt.Graphics,java.awt.Rectangle)",
				"public java.awt.Component java.beans.PropertyEditorSupport.getCustomEditor()",
				"public java.awt.Image java.beans.SimpleBeanInfo.loadImage(java.lang.String)",
				"public java.awt.Image java.beans.SimpleBeanInfo.getIcon(int)",
				// groovy
				// groovy.lang.GroovyObject
				"public abstract groovy.lang.MetaClass groovy.lang.GroovyObject.getMetaClass()",
				"public abstract void groovy.lang.GroovyObject.setMetaClass(groovy.lang.MetaClass)",
				// groovy.lang.GroovyObjectSupport
				"public groovy.lang.MetaClass groovy.lang.GroovyObjectSupport.getMetaClass()",
				"public void groovy.lang.GroovyObjectSupport.setMetaClass(groovy.lang.MetaClass)",
				// groovy.lang.Sequence
				"public java.lang.Object groovy.lang.Sequence.getProperty(java.lang.String)",
				"public void groovy.lang.Sequence.setProperty(java.lang.String,java.lang.Object)",
				"public groovy.lang.MetaClass groovy.lang.Sequence.getMetaClass()",
				"public void groovy.lang.Sequence.setMetaClass(groovy.lang.MetaClass)",
				"public java.lang.Object groovy.lang.Sequence.invokeMethod(java.lang.String,java.lang.Object)",
				// groovy.lang.Closure
				"public java.lang.Object groovy.lang.Closure.getProperty(java.lang.String)",
				"public void groovy.lang.Closure.setProperty(java.lang.String,java.lang.Object)",
				// groovy.util.FileNameByRegexFinder
				// "public groovy.lang.MetaClass groovy.util.FileNameByRegexFinder.getMetaClass()",
				// "public void groovy.util.FileNameByRegexFinder.setMetaClass(groovy.lang.MetaClass)",
				// groovy.util.FileTreeBuilder
				// "public groovy.lang.MetaClass groovy.util.FileTreeBuilder.getMetaClass()",
				// "public void groovy.util.FileTreeBuilder.setMetaClass(groovy.lang.MetaClass)",
				// groovy.lang.IntRange
				"public org.codehaus.groovy.runtime.RangeInfo groovy.lang.IntRange.subListBorders(int)",
				// groovy.lang.NumberRange
				"public org.codehaus.groovy.runtime.RangeInfo groovy.lang.NumberRange.subListBorders(int)"
			).contains(method.toGenericString())
		}
	}
	val excludedAnnotationClasses by lazy {
		listOf(
			"jdk.internal.reflect.CallerSensitive",
			"jdk.internal.ValueBased",
			"jdk.internal.vm.annotation.ForceInline",
			"jdk.internal.vm.annotation.IntrinsicCandidate",
			"jdk.internal.util.random.RandomSupport\$RandomGeneratorProperties",
			"java.lang.invoke.MethodHandle\$PolymorphicSignature",
			"groovy.transform.Internal",
			"groovy.transform.Generated",
			"groovy.transform.stc.ClosureParams",
			"org.apache.groovy.lang.annotation.Incubating",
			"org.codehaus.groovy.transform.GroovyASTTransformationClass"
		)
	}
	val ignoredDocLinks by lazy {
		listOf(
			"/package-summary.html",
			"/specs/serialization/",
			"/doc-files/",
			"/specs/jni/",
			"/serialized-form.html",
			"/specs/jvmti.html",
			"/specs/security/",
			"/Collection.html#optional-restrictions",
			"/ResourceBundleProvider.html#obtain-resource-bundle",
			"/Configuration.html#service-binding",
			"/Character.html#unicode",
			"/ModuleFinder.html#automatic-modules",
			"/Instrumentation.html#isModifiableClass"
		)
	}

	// dev
	val shouldTransformMod2jar by lazy { this.isEnabled(TRANSFORM_MOD_2_JAR, true) }

	// values
	val libDir by lazy { outputDir + File.separator + "lib" }
	val jreDir by lazy { libDir + File.separator + "Jdk" }
	val jreDocsDir by lazy { jreDir + DOC_DIR_SUFFIX }
	val groovyDir by lazy { libDir + File.separator + "Groovy" }
	val groovyDocsDir by lazy { groovyDir + DOC_DIR_SUFFIX }
	val otherName by lazy { this.get(THIRD_PARTY_LIB_NAME, "ThirdParty") }
	val otherLibs by lazy {
		this.get(THIRD_PARTY_LIBS, "unspecified,unspecified")
			.split(",")
			.chunked(2)
			.map { if (it.size == 1) listOf(it[0], "") else it }
			.map {
				listOf(
					if (it[0].trim().isEmpty()) "unspecified" else it[0].trim(),
					if (it[1].trim().isEmpty()) "unspecified" else it[1].trim()
				)
			}
			.map {
				"['${it[0]}', '${it[1]}']"
			}
	}
	val otherDir by lazy { libDir + File.separator + this.otherName }
	val otherDocsDir by lazy { otherDir + DOC_DIR_SUFFIX }
	val shouldGenerateDocs by lazy { this.isEnabled(GENERATE_DOCS, true) }

	fun initialize(args: Array<String>) {
		envsMap.putAll(this.argsToMap(args))
	}

	private fun argsToMap(args: Array<String>): Map<String, String?> {
		return args
			.map {
				it.takeIf { it.startsWith(KEY_PREFIX) }?.substring(6)?.trim()?.split("=")
					?.let { Pair(it[0], if (it.size == 1) null else it[1]) }
			}
			.filter { it != null }
			.associate { it!!.first to it.second }
	}

	/**
	 * raise exception when given path exists and is a file
	 */
	private fun askDir(dir: String): String {
		val folder = File(File(dir).takeIf { it.isAbsolute }?.absolutePath ?: ("${workPath}${File.separator}$dir"))
		return folder
			.takeIf { !it.exists() || it.isDirectory }
			?.apply {
				if (!this.exists()) {
					this.mkdirs()
				}
			}
			?.absolutePath
		// exists and is a file
			?: throw RuntimeException("[${folder.absolutePath}] exists and is a file.")
	}

	fun printHelp(): Boolean {
		if (!envsMap.contains(HELP)) {
			return false
		}

		/** colorize default value */
		fun cdv(v: String): String {
			return "\u001B[31m\u001B[3m${v}\u001B[0m"
		}

		/** colorize possible value */
		fun cpv(v: String): String {
			return "\u001B[32m\u001B[3m${v}\u001B[0m"
		}

		val args = mapOf(
			"${KEY_PREFIX}${HELP}" to "Print help, ignoring all other arguments",
			"${KEY_PREFIX}${VERBOSE}" to "\u001B[31m\u001B[3mMore logs, an extraordinary amount of more logs!\u001B[0m." +
					"\nDefault \"${cdv("false")}\"",
			"${KEY_PREFIX}${GENERATE_TARGET}"
					to "Generate target, should be one of " +
					"\"${cpv(GENERATE_TARGET_JDK)}\", \"${cpv(GENERATE_TARGET_GROOVY)}\" " +
					"or \"${GENERATE_TARGET_OTHER}\"." +
					"\nDefault \"${cdv(GENERATE_TARGET_OTHER)}\"",
			"${KEY_PREFIX}${MOD2JAR_TEMP_DIR}"
					to "Temporary directory for saving the JAR files transformed from JDK modular files." +
					"\nDefault \"${cdv(DEFAULT_MOD2JAR_TEMP_DIR)}\"",
			"${KEY_PREFIX}${CLEAN_MOD2JAR_TEMP_DIR}"
					to "Clean the temporary directory for JAR files transformed from JDK modular files." +
					"\nDefault \"${cdv("true")}\"",
			"${KEY_PREFIX}${TEMP_DIR_MOD2JAR_POST_DEL}"
					to "Delete temporary JAR files after generation is completed." +
					"\nDefault \"${cdv("true")}\"",
			"${KEY_PREFIX}${CLASSES_TO_LOCATE_JARS}"
					to "Locate the JAR file by class names, separated by commas. Only one class from each JAR file is needed." +
					"\nIf the [${cpv(GENERATE_TARGET)}] is \"${cdv(GENERATE_TARGET_JDK)}\", there is no need for location." +
					"\nIf the [${cpv(GENERATE_TARGET)}] is \"${cdv(GENERATE_TARGET_GROOVY)}\", " +
					"the default \"${cdv(GROOVY_CLASSES_TO_LOCATE_JARS)}\" should be used." +
					"\nIf the [${cpv(GENERATE_TARGET)}] is \"${cdv(GENERATE_TARGET_OTHER)}\", " +
					"there are no default values, and custom specifications are required.",
			"${KEY_PREFIX}${OUTPUT_DIR}"
					to "Destination directory for output files." +
					"\nDefault \"${cdv(DEFAULT_OUTPUT_DIR)}\"",
			"${KEY_PREFIX}${CLEAN_OUTPUT_DIR}"
					to "Clean the destination directory before generating files." +
					"\nDefault \"${cdv("true")}\"",
			"${KEY_PREFIX}${OUTPUT_MODE}"
					to "Structure of output files, either " +
					"\"${cpv(OUTPUT_MODE_TILED)}\" or \"${cpv(OUTPUT_MODE_HIERARCHICAL)}\"." +
					"\nDefault \"${cdv(OUTPUT_MODE_HIERARCHICAL)}\"",
			"${KEY_PREFIX}${THIRD_PARTY_LIB_NAME}"
					to "Specify the directory for the output files," +
					"it is sub folder of \"${cpv(OUTPUT_DIR) + cdv("/lib")}\". " +
					"\nThis setting will only take effect " +
					"when the [${cpv(GENERATE_TARGET)}] is set to \"${cdv(GENERATE_TARGET_OTHER)}\".",
			"${KEY_PREFIX}${THIRD_PARTY_LIBS}"
					to "Specify the vendors and versions of libs, separated by commas." +
					"\nFormat: ${cpv("[vendor, version [, vendor, version [, vendor, version...]]]")}." +
					"\nThis setting will only take effect " +
					"when the [${cpv(GENERATE_TARGET)}] is set to \"${cdv(GENERATE_TARGET_OTHER)}\"." +
					"\n Default \"${cdv("unspecified, unspecified")}\"",
			"${KEY_PREFIX}${INCLUDED_CLASSES}"
					to "Classes that must be included, separated by commas, " +
					"taking priority over [${cpv(EXCLUDED_PACKAGES)}] " +
					"and [${cpv(EXCLUDED_CLASSES)}] declarations." +
					"\nDefault \"${DEFAULT_INCLUDED_CLASSES}\".",
			"${KEY_PREFIX}${EXCLUDED_PACKAGES}"
					to "Packages that be excluded, separated by commas." +
					"\nDefault \"${cdv(DEFAULT_EXCLUDED_PACKAGES)}\".",
			"${KEY_PREFIX}${EXCLUDED_CLASSES}" to "Classes that be excluded, separated by commas." +
					"\nDefault \"${cdv(DEFAULT_EXCLUDED_CLASSES)}\".",
			"${KEY_PREFIX}${GENERATE_DOCS}"
					to "Whether to generate documentation-related content simultaneously." +
					"\nDefault \"${cdv("true")}\"",
		)

		val maxCommandLength = args.keys.maxOf { it.length } + 5
		val prefix = " ".repeat(maxCommandLength + 2)

		val helpMessage = StringBuilder()
		helpMessage.append("Usage: java -jar n19n4.jar [args]\n")
		helpMessage.append("Arguments:\n")

		args.forEach { (arg, description) ->
			val lines = description.split("\n")
			helpMessage.append("\u001B[36m${arg.padEnd(maxCommandLength)}\u001B[0m: ")
			lines.forEachIndexed { i, l ->
				if (i == 0) {
					helpMessage.append(l + "\n")
				} else {
					helpMessage.append(prefix + l + "\n")
				}
			}
		}

		helpMessage.append("\n")
		helpMessage.append("For example:\n")
		helpMessage.append("- Print help by \"\u001B[36mjava -jar n19n4.jar n19n4.help\u001B[0m\"\n")
		helpMessage.append("- Use tiled structure for outputting by \"\u001B[36mjava -jar n19n4.jar n19n4.outputMode=tiled\u001B[0m\"\n")

		helpMessage.append("\n")
		helpMessage.append("🌈\u001B[31mR\u001B[32ma\u001B[33mi\u001B[34mn\u001B[35mb\u001B[36mo\u001B[37mw \u001B[0m\u001B[1mProduction \uD83E\uDEF6, Powered by InsureMO.")


		println(helpMessage.toString())
		return true
	}

	fun get(envKey: String): String? {
		return envsMap[envKey]
	}

	fun get(envKey: String, defaultValue: String): String {
		return envsMap[envKey] ?: defaultValue
	}

	@Suppress("unused")
	fun getInt(envKey: String): Int? {
		return this.get(envKey)?.toInt()
	}

	@Suppress("unused")
	fun getInt(envKey: String, defaultValue: Int): Int {
		val v = this.get(envKey)
		return v?.toInt() ?: defaultValue
	}

	private fun toBoolean(v: String): Boolean {
		val l = v.lowercase()
		return when (l) {
			"1", "t", "true", "y", "yes", "on", "enable", "enabled" -> true
			"0", "f", "false", "n", "no", "off", "disable", "disabled" -> false
			else -> false
		}
	}

	fun isEnabled(envKey: String, defaultValue: Boolean): Boolean {
		val v = this.get(envKey)
		return if (v == null) defaultValue else this.toBoolean(v)
	}

	fun isClassExcluded(className: String): Boolean {
		if (this.includeClasses.containsKey(className)) {
			return false
		}
		if (this.excludedClasses.containsKey(className)) {
			return true
		}
		if (this.excludedPackages.any { className.startsWith(it) }) {
			return true
		}
		return false
	}
}

