package com.insuremo.rainbow.n19n4

fun prepareOutputDir() {
	Logs.log("Preparing output directory", 0)
	// index file of all
	Logs.log("Preparing source index file", 1)
	writeIndexFile(Envs.outputDir, "export * from './lib';")
	// index file of jars
	Logs.log("Preparing lib index file", 1)
	createIndexFile(Envs.libDir)
}
