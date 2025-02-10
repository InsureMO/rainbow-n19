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
		val treated = treatedClasses.filter { className -> !Mediator.exists(className) }
		val classesIgnoredOnProcessing = Mediator.classes()
		val content = listOf<String>(
			"Classes Treated: ${treated.size}",
			treated.sortedBy { it.lowercase() }.joinToString("\n"),
			"",
			"Classes Ignored On Processing: ${classesIgnoredOnProcessing.size}",
			classesIgnoredOnProcessing.sortedBy { it.lowercase() }.joinToString("\n"),
			"",
			"Classes Ignored On Declaration: ${ignoredClasses.size}",
			ignoredClasses.sortedBy { it.lowercase() }.joinToString("\n"),
			""
		).joinToString("\n")

		writeFile(Envs.workPath + File.separator + Envs.SUMMARY_FILE, content)
	}
}