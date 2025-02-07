package com.insuremo.rainbow.n19n4

import java.io.File
import kotlin.contracts.ExperimentalContracts

private const val KEY_PREFIX = "n19n4."
private const val TEMP_DIR_MOD2JAR = "mod2jarTempdir"
private val DEFAULT_TEMP_DIR_MOD2JAR = ".temp${File.separator}.mod2jar"
private const val TEMP_DIR_MOD2JAR_POST_DEL = "mod2jarTempDirPostDel"

private fun argsToMap(args: Array<String>): Map<String, String> {
	return args
		.map { it.takeIf { it.startsWith(KEY_PREFIX) }?.substring(6)?.trim()?.split("=")?.let { Pair(it[0], it[1]) } }
		.filter { it != null }
		.associate { it!!.first to it.second }
}

@OptIn(ExperimentalContracts::class)
private fun askMod2JarTempdir(workPath: String, envsMap: Map<String, String>): String {
	val dir = envsMap[TEMP_DIR_MOD2JAR] ?: DEFAULT_TEMP_DIR_MOD2JAR
	val mod2jarTempdir = File(dir).takeIf { it.isAbsolute }?.absolutePath ?: (workPath + File.separator + dir)
	File(mod2jarTempdir)
		.throwIf({ it.exists() }, { RuntimeException("[${it.absolutePath}] exists.") })
		.apply { this.mkdirs() }
	return mod2jarTempdir
}

fun initializeEnv(args: Array<String>): Envs {
	val envMap = argsToMap(args)

	val workPath = File(".").absolutePath
	val mod2jarTempdir = askMod2JarTempdir(workPath, envMap)

	return object : Envs {
		private val envs: Map<String, String> = envMap

		override fun workPath(): String {
			return workPath
		}

		override fun get(envKey: String): String? {
			return envs[envKey]
		}

		override fun get(envKey: String, defaultValue: String): String {
			return envs[envKey] ?: defaultValue
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
	}
}

private fun rmdir(dir: String): Boolean {
	return File(dir).takeIf { it.exists() }?.deleteRecursively() != false
}

fun finalizeEnv(envs: Envs) {
	envs.shouldDeleteMod2JarTempdir().takeIf { it }?.apply { rmdir(envs.mod2JarTempdir()) }
}