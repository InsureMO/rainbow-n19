package com.insuremo.rainbow.n19n4

import kotlin.contracts.ExperimentalContracts

@OptIn(ExperimentalContracts::class)
fun main(args: Array<String>) {
	initializeEnv(args)
	if (!Envs.printHelp()) {
		try {
			cleanOutputDir()
			prepareOutputDir()
			var targetInfo: JarGeneratingTargetInfo? = generateJre()
			if (targetInfo != null) {
				generateTakenBackClasses(targetInfo)
				buildClassIndexFiles(targetInfo)
			}
		} finally {
			finalizeEnv()
			Logs.log("\u001B[31mDone!", 0)
		}
	}
}
