import {Java, Optional} from '@rainbow-n19/n2';
import {CodeEditorClassDocs} from '../types';
import {HelpStateMode} from './types';

type ClassName = Java.ClassName;
type IClass = Java.IClass;
type ClassDoc = Java.ClassDoc;
type DocDescription = Java.DocDescription;

export class ClassDocDetails {
	private readonly _class: Optional<IClass>;
	private readonly _doc: Optional<ClassDoc>;

	constructor(className: Optional<ClassName>,
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

	get class(): Optional<IClass> {
		return this._class;
	}

	/**
	 * java.lang.Object is not included
	 */
	get superclasses(): Array<IClass> {
		const superclasses: Array<IClass> = [];
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

	get interfaces(): Array<IClass> {
		const interfaces: Array<IClass> = [];
		let interfaceClasses = this._class?.interfaces;
		while (interfaceClasses != null && interfaceClasses.length !== 0) {
			const pushed: Array<IClass> = [];
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

	get doc(): Optional<ClassDoc> {
		return this._doc;
	}

	get classDocAvailable(): boolean {
		return this._doc?.description != null && this._doc.description.length > 0;
	}

	get classDoc(): Optional<DocDescription> {
		return this._doc?.description;
	}

	get fieldsDocAvailable(): boolean {
		return this._doc?.fields != null && this._doc.fields.length > 0;
	}

	get constructorsDocAvailable(): boolean {
		return this._doc?.constructors != null && this._doc.constructors.length > 0;
	}

	get methodsDocAvailable(): boolean {
		return this._doc?.methods != null && this._doc.methods.length > 0;
	}
}