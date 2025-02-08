package com.insuremo.rainbow.n19n4

fun cleanOutputDir(envs: Envs) {
	if (!envs.shouldCleanOutputDir()) {
		return
	}
	val dir = envs.outputDir()

}