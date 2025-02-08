package com.insuremo.rainbow.n19n4

import java.io.File
import kotlin.collections.mutableListOf

object Summary {
	private val treatedClasses = mutableListOf<String>()
	private val ignoredClasses = mutableListOf<String>()

	fun addTreatedClass(className: String) {
		treatedClasses += className
	}

	fun addIgnoredClass(className: String) {
		ignoredClasses += className
	}

	fun printSummary() {
		val content = listOf<String>(
			"Classes Treated: ${treatedClasses.size}",
			treatedClasses.sortedBy { it.lowercase() }.joinToString("\n"),
			"",
			"Classes Ignored: ${ignoredClasses.size}",
			ignoredClasses.sortedBy { it.lowercase() }.joinToString("\n"),
			""
		).joinToString("\n")

		writeFile(Envs.workPath + File.separator + Envs.SUMMARY_FILE, content)
	}
}