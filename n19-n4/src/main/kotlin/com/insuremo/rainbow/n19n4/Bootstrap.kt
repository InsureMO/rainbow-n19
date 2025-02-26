package com.insuremo.rainbow.n19n4

import buildDocsIndexFiles

fun main(args: Array<String>) {
	initializeEnv(args)
	if (!Envs.printHelp()) {
		try {
			cleanOutputDir()
			prepareOutputDir()
			var targetInfo: JarGeneratingTargetInfo? = null
			targetInfo = generateJre() ?: generateGroovy() ?: generateOther()
			if (targetInfo != null) {
				generateTakenBackClasses(targetInfo)
				buildClassIndexFiles(targetInfo)
				if (Envs.shouldGenerateDocs) {
					buildDocsIndexFiles(targetInfo)
				}
			}
		} finally {
			finalizeEnv()
			Logs.log("\u001B[31mDone!", 0)
		}
	}
}
