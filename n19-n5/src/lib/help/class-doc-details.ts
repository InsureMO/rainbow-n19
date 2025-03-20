import {Java, Optional} from '@rainbow-n19/n2';
import {EditorHelp} from '../types';
import {HelpStateMode} from './types';

export class ClassDocDetails {
	private readonly _class: Optional<Java.IClass>;
	private readonly _doc: Optional<Java.ClassDoc>;

	constructor(className: Optional<Java.ClassName>,
	            help: EditorHelp,
	            mode: HelpStateMode) {
		if (mode !== HelpStateMode.CLASS || className == null) {
			this._class = (void 0);
			this._doc = (void 0);
		} else {
			this._class = help.classLoader().findClass(className);
			this._doc = help.docs().findDoc(className);
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

	findEnumValueDoc(field: Java.EnumValue): Optional<Java.ClassEnumValueDoc> {
		return this._doc?.enumValues?.find(f => f.key === field.name);
	}

	private transformClassNameForExecutableKey(clazz: Java.IClass): string {
		if (clazz.isPrimitive) {
			return clazz.simpleName;
		} else if (clazz.isArray) {
			return this.transformClassNameForExecutableKey(clazz.componentType) + '[]';
		} else {
			return clazz.name.replace('$', '.');
		}
	}

	private transformParameterToExecutableKey(parameter: Java.IParameter): string {
		if (parameter.isVarArgs) {
			return this.transformClassNameForExecutableKey(parameter.type.componentType) + '...';
		} else {
			return this.transformClassNameForExecutableKey(parameter.type);
		}
	}

	findConstructorDoc(constructor: Java.IConstructor): Optional<Java.ClassConstructorDoc> {
		const parameters = constructor.parameters.map(p => this.transformParameterToExecutableKey(p)).join(',');
		const key = `<init>(${parameters})`;
		return this._doc?.constructors?.find(f => f.key === key);
	}

	findMethodDoc(method: Java.IMethod): Optional<Java.ClassMethodDoc> {
		const parameters = method.parameters.map(p => this.transformParameterToExecutableKey(p)).join(',');
		const key = `${method.name}(${parameters})`;
		return this._doc?.methods?.find(f => f.key === key);
	}
}