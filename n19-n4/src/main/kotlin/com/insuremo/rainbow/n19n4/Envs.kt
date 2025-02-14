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

	// common
	private const val OUTPUT_DIR = "outputDir"
	private val DEFAULT_OUTPUT_DIR = ".output${File.separator}src"
	private const val CLEAN_OUTPUT_DIR = "cleanOutputDir"
	private const val OUTPUT_MODE = "outputMode"
	private const val OUTPUT_MODE_TILED = "tiled"
	private const val OUTPUT_MODE_HIERARCHICAL = "package"
	private const val INCLUDED_CLASSES = "includedClasses"
	private const val EXCLUDED_PACKAGES = "excludedPackages"
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
//			"groovy.beans",
//			"groovy.cli",
//			"groovy.grape",
//			"groovy.inspect",
//			"groovy.io",
//			"groovy.lang.groovydoc",
//			"groovy.namespace",
//			"groovy.security",
//			"groovy.transform",
//			"groovy.ui",
//			"groovy.util.logging",
			"groovyjarjarantlr4",
			"groovyjarjarasm",
			"groovyjarjarpicocli",
//			"org.apache.groovy",
//			"org.codehaus.groovy"
		).joinToString(",")
	}
	private const val EXCLUDED_CLASSES = "excludedClasses"
	private val DEFAULT_EXCLUDED_CLASSES by lazy {
		listOf(
			"java.beans.AppletInitializer",
//			"groovy.beans.BindableASTTransformation",
//			"groovy.lang.DelegatingMetaClass",
//			"groovy.lang.ExpandoMetaClass",
//			"groovy.lang.GroovyClassLoader",
//			"groovy.lang.GroovyClassLoader\$ClassCollector",
//			"groovy.lang.GroovyClassLoader\$InnerLoader",
//			"groovy.lang.GroovyRuntimeException",
//			"groovy.lang.IntRange",
//			"groovy.lang.MetaBeanProperty",
//			"groovy.lang.MetaClass",
//			"groovy.lang.MetaClassImpl",
//			"groovy.lang.MetaMethod",
//			"groovy.lang.MissingClassException",
//			"groovy.lang.NumberRange",
//			"groovy.lang.Script",
//			"groovy.lang.GroovyShell",
//			"groovy.beans.ListenerListASTTransformation",
//			"groovy.beans.VetoableASTTransformation",
//			"groovy.util.AbstractFactory",
//			"groovy.util.ConfigSlurper",
//			"groovy.util.Eval",
//			"groovy.util.Factory",
//			"groovy.util.FactoryBuilderSupport",
//			"groovy.util.GroovyScriptEngine",
//			"groovy.util.ObjectGraphBuilder",
			"org.codehaus.groovy.control.XStreamUtils",
		).joinToString(",")
	}

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
		this.get(INCLUDED_CLASSES, "").split(",").toList().map { it.trim() }.associate { Pair(it, true) }
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
				"public abstract java.awt.Component java.beans.beancontext.BeanContextChildComponentProxy.getComponent()",
				"public abstract java.awt.Container java.beans.beancontext.BeanContextContainerProxy.getContainer()",
				"public abstract java.awt.Image java.beans.BeanInfo.getIcon(int)",
				"public static java.lang.Object java.beans.Beans.instantiate(java.lang.ClassLoader,java.lang.String,java.beans.beancontext.BeanContext,java.beans.AppletInitializer) throws java.io.IOException,java.lang.ClassNotFoundException",
				"public abstract void java.beans.PropertyEditor.paintValue(java.awt.Graphics,java.awt.Rectangle)",
				"public abstract java.awt.Component java.beans.PropertyEditor.getCustomEditor()",
				"public void java.beans.PropertyEditorSupport.paintValue(java.awt.Graphics,java.awt.Rectangle)",
				"public java.awt.Component java.beans.PropertyEditorSupport.getCustomEditor()",
				"public java.awt.Image java.beans.SimpleBeanInfo.loadImage(java.lang.String)",
				"public java.awt.Image java.beans.SimpleBeanInfo.getIcon(int)"
			).contains(method.toGenericString())
		}
	}
	val excludedAnnotationClasses by lazy {
		listOf(
			"jdk.internal.util.random.RandomSupport\$RandomGeneratorProperties",
			"org.codehaus.groovy.transform.GroovyASTTransformationClass"
		)
	}

	// dev
	val shouldTransformMod2jar by lazy { this.isEnabled(TRANSFORM_MOD_2_JAR, true) }

	// values
	val libDir by lazy { outputDir + File.separator + "lib" }
	val jreDir by lazy { libDir + File.separator + "Jdk" }
	val groovyDir by lazy { libDir + File.separator + "Groovy" }
	val thirdDir by lazy { libDir + File.separator + this.get(THIRD_PARTY_LIB_NAME, "ThirdParty") }

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
			"${KEY_PREFIX}${INCLUDED_CLASSES}"
					to "Classes that must be included, separated by commas, " +
					"taking priority over [${cpv(EXCLUDED_PACKAGES)}] " +
					"and [${cpv(EXCLUDED_CLASSES)}] declarations." +
					"\nNo default value.",
			"${KEY_PREFIX}${EXCLUDED_PACKAGES}"
					to "Packages that be excluded, separated by commas." +
					"\nDefault \"${cdv(DEFAULT_EXCLUDED_PACKAGES)}\".",
			"${KEY_PREFIX}${EXCLUDED_CLASSES}" to "Classes that be excluded, separated by commas." +
					"\nDefault \"${cdv(DEFAULT_EXCLUDED_CLASSES)}\".",
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

	fun getInt(envKey: String): Int? {
		return this.get(envKey)?.toInt()
	}

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

