import {Java} from '@rainbow-n19/n2';

const TEMPORARY_CACHE = new Map<Java.ClassName, Java.ClassDocContents>();

class TemporaryDocsCollector {
	collect(className: Java.ClassName, contents?: Java.ClassDocContents): void {
		if (contents == null) {
			// console.debug(`No document provided for class[${className}].`);
		} else {
			TEMPORARY_CACHE.set(className, contents);
		}
	}

	consume(docs: Java.IClassDocs): void {
		[...TEMPORARY_CACHE.keys()].map(className => {
			docs.addDoc(className, TEMPORARY_CACHE.get(className));
		});
		TEMPORARY_CACHE.clear();
	}
}

export const DocsCollector = new TemporaryDocsCollector();
