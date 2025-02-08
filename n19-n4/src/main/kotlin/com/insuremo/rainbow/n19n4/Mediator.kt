package com.insuremo.rainbow.n19n4

object Mediator {
	private val classes = mutableMapOf<String, Boolean>()

	fun addClass(className: String) {
		classes.put(className, true)
	}
}