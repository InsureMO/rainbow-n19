package com.insuremo.rainbow.n19n4

enum class OutputMode {
	TILED, HIERARCHICAL
}

interface Envs {
	fun printHelp(): Boolean
	fun workPath(): String
	fun get(envKey: String): String?
	fun get(envKey: String, defaultValue: String): String
	fun getInt(envKey: String): Int?
	fun getInt(envKey: String, defaultValue: Int): Int
	fun isEnabled(envKey: String, defaultValue: Boolean = false): Boolean
	fun mod2JarTempdir(): String
	fun shouldDeleteMod2JarTempdir(): Boolean
	fun outputDir(): String
	fun shouldCleanOutputDir(): Boolean
	fun outputMode(): OutputMode
}
