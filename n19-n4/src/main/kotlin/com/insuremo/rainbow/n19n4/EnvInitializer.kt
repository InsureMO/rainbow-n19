package com.insuremo.rainbow.n19n4

import java.io.File
import kotlin.contracts.ExperimentalContracts

fun initializeEnv(args: Array<String>): Envs {
	return object : Envs {
		// constants
		private val KEY_PREFIX = "n19n4."
		private val HELP = "help"
		private val TEMP_DIR_MOD2JAR = "mod2jarTempdir"
		private val DEFAULT_TEMP_DIR_MOD2JAR = ".temp${File.separator}.mod2jar"
		private val TEMP_DIR_MOD2JAR_POST_DEL = "mod2jarTempDirPostDel"
		private val OUTPUT_DIR = "outputDir"
		private val DEFAULT_OUTPUT_DIR = "output"
		private val CLEAN_OUTPUT_DIR = "outputClean"
		private val OUTPUT_MODE = "outputMode"
		private val OUTPUT_MODE_TILED = "tiled"
		private val OUTPUT_MODE_HIERARCHICAL = "package"

		// instances
		private val envsMap: Map<String, String?> = this.argsToMap(args)
		private val workPath = File(".").absolutePath
		private val mod2jarTempdir by lazy {
			this.askDir(workPath, envsMap[TEMP_DIR_MOD2JAR] ?: DEFAULT_TEMP_DIR_MOD2JAR)
		}
		private val outputDir by lazy { this.askDir(workPath, envsMap[OUTPUT_DIR] ?: DEFAULT_OUTPUT_DIR) }

		private fun argsToMap(args: Array<String>): Map<String, String?> {
			return args.map {
				it.takeIf { it.startsWith(KEY_PREFIX) }?.substring(6)?.trim()?.split("=")
					?.let { Pair(it[0], if (it.size == 1) null else it[1]) }
			}.filter { it != null }.associate { it!!.first to it.second }
		}

		@OptIn(ExperimentalContracts::class)
		private fun askDir(workPath: String, dir: String): String {
			return File(File(dir).takeIf { it.isAbsolute }?.absolutePath ?: ("$workPath${File.separator}$dir"))
				.throwIf({ it.exists() }, { RuntimeException("[${it.absolutePath}] exists.") })
				.apply { this.mkdirs() }
				.absolutePath
		}

		override fun printHelp(): Boolean {
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
				"${KEY_PREFIX}${TEMP_DIR_MOD2JAR}"
						to "Directory for saving the JAR files transformed from JDK modular files. "
						+ "Default \"${cdv(DEFAULT_TEMP_DIR_MOD2JAR)}\"",
				"${KEY_PREFIX}${TEMP_DIR_MOD2JAR_POST_DEL}"
						to "Delete temporary JAR files after generation is completed. Default \"${cdv("true")}\"",
				"${KEY_PREFIX}${OUTPUT_DIR}"
						to "Destination directory for output files. Default \"${cdv(DEFAULT_OUTPUT_DIR)}\"",
				"${KEY_PREFIX}${CLEAN_OUTPUT_DIR}"
						to "Clean the destination directory before generating files. Default \"${cdv("true")}\"",
				"${KEY_PREFIX}${OUTPUT_MODE}"
						to "Structure of output files, either "
						+ "\"${cpv(OUTPUT_MODE_TILED)}\" or \"${cpv(OUTPUT_MODE_HIERARCHICAL)}\". "
						+ "Default \"${cdv(OUTPUT_MODE_HIERARCHICAL)}\"",
			)

			val maxCommandLength = args.keys.maxOf { it.length } + 5

			val helpMessage = StringBuilder()
			helpMessage.append("Usage: java -jar n19n4.jar [args]\n")
			helpMessage.append("Arguments:\n")

			args.forEach { (arg, description) ->
				helpMessage.append("\u001B[36m${arg.padEnd(maxCommandLength)}\u001B[0m: $description\n")
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

		override fun workPath(): String {
			return workPath
		}

		override fun get(envKey: String): String? {
			return envsMap[envKey]
		}

		override fun get(envKey: String, defaultValue: String): String {
			return envsMap[envKey] ?: defaultValue
		}

		override fun getInt(envKey: String): Int? {
			return this.get(envKey)?.toInt()
		}

		override fun getInt(envKey: String, defaultValue: Int): Int {
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

		override fun isEnabled(envKey: String, defaultValue: Boolean): Boolean {
			val v = this.get(envKey)
			return if (v == null) defaultValue else this.toBoolean(v)
		}

		override fun mod2JarTempdir(): String {
			return mod2jarTempdir
		}

		override fun shouldDeleteMod2JarTempdir(): Boolean {
			return this.isEnabled(TEMP_DIR_MOD2JAR_POST_DEL, true)
		}

		override fun outputDir(): String {
			return outputDir
		}

		override fun shouldCleanOutputDir(): Boolean {
			return this.isEnabled(CLEAN_OUTPUT_DIR, true)
		}

		override fun outputMode(): OutputMode {
			return when (this.get(OUTPUT_MODE, OUTPUT_MODE_HIERARCHICAL).lowercase()) {
				OUTPUT_MODE_TILED -> OutputMode.TILED
				OUTPUT_MODE_HIERARCHICAL -> OutputMode.HIERARCHICAL
				else -> OutputMode.HIERARCHICAL
			}
		}
	}
}


fun finalizeEnv(envs: Envs) {
	fun rmdir(dir: String): Boolean {
		return File(dir).takeIf { it.exists() }?.deleteRecursively() != false
	}

	envs.shouldDeleteMod2JarTempdir().takeIf { it }?.apply { rmdir(envs.mod2JarTempdir()) }
}
