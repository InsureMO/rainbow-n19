import com.insuremo.rainbow.n19n4.JarGeneratingTargetInfo
import com.insuremo.rainbow.n19n4.appendToIndexFile
import com.insuremo.rainbow.n19n4.generatePackageIndexFile
import com.insuremo.rainbow.n19n4.writeFile
import java.io.File

fun createDocsCollectorFile(targetDir: String) {
	val content = "import {Java} from '@rainbow-n19/n2';\n" +
			"\n" +
			"const TEMPORARY_CACHE = new Map<Java.ClassName, Java.ClassDocContents>();\n" +
			"\n" +
			"class TemporaryDocsCollector {\n" +
			"\tcollect(className: Java.ClassName, contents?: Java.ClassDocContents): void {\n" +
			"\t\tif (contents == null) {\n" +
			"\t\t\t// console.debug(`No document provided for class[\${className}].`);\n" +
			"\t\t} else {\n" +
			"\t\t\tTEMPORARY_CACHE.set(className, contents);\n" +
			"\t\t}\n" +
			"\t}\n" +
			"\n" +
			"\tconsume(docs: Java.IClassDocs): void {\n" +
			"\t\t[...TEMPORARY_CACHE.keys()].map(className => {\n" +
			"\t\t\tdocs.addDoc(className, TEMPORARY_CACHE.get(className));\n" +
			"\t\t});\n" +
			"\t\tTEMPORARY_CACHE.clear();\n" +
			"\t}\n" +
			"}\n" +
			"\n" +
			"export const DocsCollector = new TemporaryDocsCollector();\n"
	writeFile(targetDir + File.separator + "DocsCollector.ts", content)
}

fun buildDocsIndexFiles(targetInfo: JarGeneratingTargetInfo) {
	// import all class files
	val imports = File(targetInfo.docRootDir)
		.listFiles { file -> file.isDirectory }
		?.apply { this.forEach { generatePackageIndexFile(it.absolutePath) } }
		?.sortedBy { it.name.lowercase() }
		?.joinToString("\n") { file -> "import './${file.name}';" }
		?: ""

	appendToIndexFile(
		targetInfo.docRootDir,
		"${if (imports.isEmpty()) imports else (imports + "\n\n")}export {DocsCollector} from './DocsCollector';\n"
	)
}
