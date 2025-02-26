package com.insuremo.rainbow.n19n4

fun generateTakenBackClasses(targetInfo: JarGeneratingTargetInfo) {
	Logs.log("Checking taken back classes", 0)
	var classNames = Summary.retrieveTakenBackClasses()
	if (classNames.isEmpty()) {
		Logs.log("No taken back class found", 1)
	} else {
		var count = classNames.size
		while (classNames.isNotEmpty()) {
			classNames.forEach { generateClass(it, targetInfo, false) }
			classNames = Summary.retrieveTakenBackClasses()
			count += classNames.size
		}
		if (count == 1) {
			Logs.log("1 taken back class found", 1)
		} else {
			Logs.log("$count taken back classes found", 1)
		}
	}
}
