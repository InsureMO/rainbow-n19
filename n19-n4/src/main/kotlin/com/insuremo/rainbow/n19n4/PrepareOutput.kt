package com.insuremo.rainbow.n19n4

import java.io.File

fun prepareOutputDir() {
	Logs.log("Preparing output directory", 0)
	// index file of all
	Logs.log("Preparing source index file", 1)
	writeIndexFile(Envs.outputDir, "export * from './lib';")
	// index file of jars
	Logs.log("Preparing lib index file", 1)
	createIndexFile(Envs.libDir)
	writeFile(Envs.libDir + File.separator + "utils.ts", "export const UDF: undefined = (void 0);\n")
}
