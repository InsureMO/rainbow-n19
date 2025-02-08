package com.insuremo.rainbow.n19n4

fun finalizeEnv() {
	Logs.log("Finalizing", 0)
	Logs.log("Create summary file", 1)
	Summary.printSummary()

	if (Envs.shouldDeleteMod2jarTempdirOnFinalization) {
		Logs.log("Cleaning temporary directory for saving the JAR files transformed from JDK modular files", 1)
		deleteDir(Envs.mod2jarTempdir)
	}
}
