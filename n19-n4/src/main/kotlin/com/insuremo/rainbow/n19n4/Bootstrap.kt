package com.insuremo.rainbow.n19n4

import kotlin.contracts.ExperimentalContracts

@OptIn(ExperimentalContracts::class)
fun main(args: Array<String>) {
	val envs = initializeEnv(args)
	if (!envs.printHelp()) {
		try {
			generateJre(envs)
		} finally {
			finalizeEnv(envs)
		}
	}
}
