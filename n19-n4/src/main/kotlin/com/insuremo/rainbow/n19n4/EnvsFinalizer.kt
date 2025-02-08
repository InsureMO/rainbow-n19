package com.insuremo.rainbow.n19n4;

fun finalizeEnv(envs: Envs) {
	envs.shouldDeleteMod2JarTempdirOnFinalization().takeIf { it }?.apply { rmdir(envs.mod2JarTempdir()) }
}
