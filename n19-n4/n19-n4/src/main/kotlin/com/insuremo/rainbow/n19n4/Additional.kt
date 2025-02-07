package com.insuremo.rainbow.n19n4

import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract

@ExperimentalContracts
inline fun <T> T.throwIf(predicate: (T) -> Boolean, orThrow: (T) -> Throwable): T {
	contract {
		callsInPlace(predicate, InvocationKind.EXACTLY_ONCE)
	}
	return if (predicate(this)) {
		throw orThrow(this)
	} else {
		this
	}
}
