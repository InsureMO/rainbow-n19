package com.insuremo.rainbow.n19n4

import java.io.File

object Summary {
	private val treatedClasses = mutableMapOf<String, Boolean>()
	private val ignoredClasses = mutableMapOf<String, Boolean>()
	private val temporarilyIgnoredClasses = mutableMapOf<String, Boolean>()
	private val necessaryClasses = mutableMapOf<String, MutableList<String>>()
	private val takenBackClasses = mutableMapOf<String, List<String>>()
	private val externalClasses = mutableMapOf<String, Boolean>()
	private val parameterNames = mutableMapOf<String, Boolean>()

	fun addTreatedClass(className: String) {
		this.treatedClasses.put(className, true)
	}

	fun addIgnoredClass(className: String) {
		this.ignoredClasses.put(className, true)
	}

	fun markClassAsIgnoredTemporarily(className: String) {
		this.temporarilyIgnoredClasses.put(className, true)
	}

	private fun putIntoNecessaryClasses(className: String, causeClassName: String) {
		val causes = this.necessaryClasses[className]
		if (causes == null) {
			this.necessaryClasses.put(className, mutableListOf(causeClassName))
		} else if (!causes.contains(causeClassName)) {
			causes.add(causeClassName)
		}
	}

	fun takeBack(className: String, causeClassName: String) {
		if (this.temporarilyIgnoredClasses.containsKey(className)) {
			this.temporarilyIgnoredClasses.remove(className)
			this.putIntoNecessaryClasses(className, causeClassName)
		} else if (this.ignoredClasses.contains(className)) {
			this.ignoredClasses.remove(className)
			this.putIntoNecessaryClasses(className, causeClassName)
		} else if (this.necessaryClasses.containsKey(className)) {
			// do nothing, already marked as necessary
		} else {
			// class is not in jar, do nothing
			externalClasses.put(className, true)
		}
	}

	fun retrieveTakenBackClasses(): List<String> {
		val cloned = this.necessaryClasses.keys.toList()
		this.takenBackClasses.putAll(this.necessaryClasses)
		this.necessaryClasses.clear()
		return cloned
	}

	fun addParameterName(name: String) {
		this.parameterNames.put(name, true)
	}

	fun printSummary() {
		val content = listOf<String>(
			"Classes Treated: ${this.treatedClasses.size}",
			this.treatedClasses.keys.sortedBy { it.lowercase() }.joinToString("\n"),
			"",
			"Classes Taken Back: ${takenBackClasses.size}",
			this.takenBackClasses.keys.sortedBy {
				it.lowercase()
			}.joinToString("\n") {
				"$it leads by [${this.takenBackClasses[it]?.sortedBy { it.lowercase() }?.joinToString(",") ?: "?"} ]"
			},
			"",
			"Classes Ignored On Processing: ${this.temporarilyIgnoredClasses.size}",
			this.temporarilyIgnoredClasses.keys.sortedBy { it.lowercase() }.joinToString("\n"),
			"",
			"Classes Ignored On Declaration: ${ignoredClasses.size}",
			this.ignoredClasses.keys.sortedBy { it.lowercase() }.joinToString("\n"),
			"",
			"Classes Relevant From External: ${externalClasses.size}",
			this.externalClasses.keys.filter { className ->
				!this.treatedClasses.containsKey(className)
						&& !this.takenBackClasses.containsKey(className)
						&& !this.temporarilyIgnoredClasses.containsKey(className)
						&& !this.ignoredClasses.containsKey(className)
			}.sortedBy { it.lowercase() }.joinToString("\n"),
			"",
			"Parameter names:",
			this.parameterNames.keys.sortedBy { it.lowercase() }.joinToString("\n"),
			""
		).joinToString("\n")

		writeFile(Envs.workPath + File.separator + Envs.SUMMARY_FILE, content)
	}
}