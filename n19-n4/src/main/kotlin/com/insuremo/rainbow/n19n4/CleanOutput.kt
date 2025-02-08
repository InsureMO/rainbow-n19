package com.insuremo.rainbow.n19n4

fun cleanOutputDir() {
	Logs.log("Checking output directory", 0)
	val dir = Envs.outputDir
	if (Envs.shouldCleanOutputDir) {
		Logs.log("Cleaning output directory", 1)
		cleanDir(dir)
	}
}
