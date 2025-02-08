package com.insuremo.rainbow.n19n4

import java.io.File

fun generatePackageIndexFile(dir: String) {
	val content = File(dir).listFiles()
		?.map { file ->
			if (file.isDirectory) {
				generatePackageIndexFile(file.absolutePath)
				// directory name might be same as file,
				// use internal index importing to avoid this problem
				file.name + "/index"
			} else {
				file.name.substring(0, file.name.length - 3)
			}
		}
		?.sortedBy { it.lowercase() }
		?.joinToString("\n") { name -> "import './$name';" }
		?: ""
	writeIndexFile(dir, if (content.isEmpty()) "" else (content + "\n"))
}
