package com.insuremo.rainbow.n19n4;

fun finalizeEnv() {
	Logs.log("Finalizing", 0)
	if (Envs.shouldDeleteMod2JarTempdirOnFinalization()) {
		Logs.log("Cleaning temporary directory for saving the JAR files transformed from JDK modular files", 1)
		rmdir(Envs.mod2JarTempdir())
	}
}
