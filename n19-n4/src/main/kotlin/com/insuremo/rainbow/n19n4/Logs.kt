package com.insuremo.rainbow.n19n4

object Logs {
	val empties = (0..100).map { " ".repeat(it) }
	val indexes = ArrayList<Int>(listOf<Int>(0))

	private fun linePrefix(indent: Int): String {
		if (indent == -1) {
			return empties[indexes.joinToString(".").length + 2]
		}

		val size = indexes.size
		when {
			size == indent + 1 -> indexes[indent] = indexes[indent] + 1
			size <= indent -> indexes += 1
			else -> {
				indexes[indent] = indexes[indent] + 1
				indexes.subList(indent + 1, size).clear()
			}
		}
		return indexes.joinToString(".") + ". "
	}

	fun log(msg: String, indent: Int) {
		println("${linePrefix(indent)}${msg}")
	}
}
