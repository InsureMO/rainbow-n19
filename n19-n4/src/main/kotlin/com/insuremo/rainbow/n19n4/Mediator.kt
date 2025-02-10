package com.insuremo.rainbow.n19n4

object Mediator {
	private val classes = mutableMapOf<String, Boolean>()

	fun addClass(className: String) {
		this.classes.put(className, true)
	}

	fun exists(className: String): Boolean {
		return this.classes.containsKey(className)
	}

	fun classes(): List<String> {
		return this.classes.keys.toList()
	}
}
