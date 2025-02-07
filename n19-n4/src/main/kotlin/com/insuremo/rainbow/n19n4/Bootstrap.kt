package com.insuremo.rainbow.n19n4

fun main(args: Array<String>) {
	val envs = initializeEnv(args)
	findJmods(envs)

	finalizeEnv(envs)
}
