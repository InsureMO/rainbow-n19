import {Java, Optional} from '@rainbow-n19/n2';
import {CodeEditorClassDocs} from '../types';
import {HelpStateMode} from './types';

export class ClassDocDetails {
	private readonly _class: Optional<Java.IClass>;
	private readonly _doc: Optional<Java.ClassDoc>;

	constructor(className: Optional<Java.ClassName>,
	            classDocs: CodeEditorClassDocs,
	            mode: HelpStateMode) {
		if (mode !== HelpStateMode.CLASS || className == null) {
			this._class = (void 0);
			this._doc = (void 0);
		} else {
			this._class = classDocs.classLoader().findClass(className);
			this._doc = classDocs.docs().findDoc(className);
		}
	}

	get class(): Optional<Java.IClass> {
		return this._class;
	}

	/**
	 * java.lang.Object is not included
	 */
	get superclasses(): Array<Java.IClass> {
		const superclasses: Array<Java.IClass> = [];
		let superclass = this._class?.superclass;
		while (superclass != null) {
			if (superclass.name === 'java.lang.Object') {
				break;
			}
			superclasses.push(superclass);
			superclass = superclass.superclass;
		}
		return superclasses;
	}

	get interfaces(): Array<Java.IClass> {
		const interfaces: Array<Java.IClass> = [];
		let interfaceClasses = this._class?.interfaces;
		while (interfaceClasses != null && interfaceClasses.length !== 0) {
			const pushed: Array<Java.IClass> = [];
			interfaceClasses.map(interfaceClass => {
				if (!interfaces.includes(interfaceClass)) {
					interfaces.push(interfaceClass);
					pushed.push(interfaceClass);
				}
			});
			interfaceClasses = [...new Set(pushed.map(cls => cls.interfaces).flat())];
		}
		return interfaces;
	}

	get doc(): Optional<Java.ClassDoc> {
		return this._doc;
	}

	get classDocAvailable(): boolean {
		return this._doc?.description != null && this._doc.description.length > 0;
	}

	get classDoc(): Optional<Java.DocDescription> {
		return this._doc?.description;
	}

	findFieldDoc(field: Java.IField): Optional<Java.ClassFieldDoc> {
		return this._doc?.fields?.find(f => f.key === field.name);
	}
}