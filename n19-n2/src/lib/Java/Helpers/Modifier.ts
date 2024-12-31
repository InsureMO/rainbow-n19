import {ModifiersValue, ModifierValue} from '../TypeAlias';

export class Modifier {
	static readonly PUBLIC: ModifierValue = 0x00000001;
	static readonly PRIVATE: ModifierValue = 0x00000002;
	static readonly PROTECTED: ModifierValue = 0x00000004;
	static readonly STATIC: ModifierValue = 0x00000008;
	static readonly FINAL: ModifierValue = 0x00000010;
	static readonly SYNCHRONIZED: ModifierValue = 0x00000020;
	static readonly VOLATILE: ModifierValue = 0x00000040;
	static readonly TRANSIENT: ModifierValue = 0x00000080;
	static readonly NATIVE: ModifierValue = 0x00000100;
	static readonly INTERFACE: ModifierValue = 0x00000200;
	static readonly ABSTRACT: ModifierValue = 0x00000400;
	static readonly STRICT: ModifierValue = 0x00000800;
	static readonly BRIDGE: ModifierValue = 0x00000040;
	static readonly VARARGS: ModifierValue = 0x00000080;
	static readonly SYNTHETIC: ModifierValue = 0x00001000;
	static readonly ANNOTATION: ModifierValue = 0x00002000;
	static readonly ENUM: ModifierValue = 0x00004000;
	static readonly MANDATED: ModifierValue = 0x00008000;
	private static readonly CLASS_MODIFIERS: ModifiersValue = Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE | Modifier.ABSTRACT | Modifier.STATIC | Modifier.FINAL | Modifier.STRICT;
	private static readonly INTERFACE_MODIFIERS: ModifiersValue = Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE | Modifier.ABSTRACT | Modifier.STATIC | Modifier.STRICT;
	private static readonly CONSTRUCTOR_MODIFIERS: ModifiersValue = Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE;
	private static readonly METHOD_MODIFIERS: ModifiersValue = Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE | Modifier.ABSTRACT | Modifier.STATIC | Modifier.FINAL | Modifier.SYNCHRONIZED | Modifier.NATIVE | Modifier.STRICT;
	private static readonly FIELD_MODIFIERS: ModifiersValue = Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE | Modifier.STATIC | Modifier.FINAL | Modifier.TRANSIENT | Modifier.VOLATILE;
	private static readonly PARAMETER_MODIFIERS: ModifiersValue = Modifier.FINAL;
	static readonly ACCESS_MODIFIERS: ModifiersValue = Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE;

	static isPublic(mod: ModifiersValue): boolean {
		return (mod & Modifier.PUBLIC) !== 0;
	}

	static isPrivate(mod: ModifiersValue): boolean {
		return (mod & Modifier.PRIVATE) !== 0;
	}

	static isProtected(mod: ModifiersValue): boolean {
		return (mod & Modifier.PROTECTED) !== 0;
	}

	static isFriendly(mod: ModifiersValue): boolean {
		return (mod & (Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE)) == 0;
	}

	static isStatic(mod: ModifiersValue): boolean {
		return (mod & Modifier.STATIC) !== 0;
	}

	static isFinal(mod: ModifiersValue): boolean {
		return (mod & Modifier.FINAL) !== 0;
	}

	static isSynchronized(mod: ModifiersValue): boolean {
		return (mod & Modifier.SYNCHRONIZED) !== 0;
	}

	static isVolatile(mod: ModifiersValue): boolean {
		return (mod & Modifier.VOLATILE) !== 0;
	}

	static isTransient(mod: ModifiersValue): boolean {
		return (mod & Modifier.TRANSIENT) !== 0;
	}

	static isNative(mod: ModifiersValue): boolean {
		return (mod & Modifier.NATIVE) !== 0;
	}

	static isInterface(mod: ModifiersValue): boolean {
		return (mod & Modifier.INTERFACE) !== 0;
	}

	static isAbstract(mod: ModifiersValue): boolean {
		return (mod & Modifier.ABSTRACT) !== 0;
	}

	static isStrict(mod: ModifiersValue): boolean {
		return (mod & Modifier.STRICT) !== 0;
	}

	static toString(mod: ModifiersValue): string {
		const sj: Array<string> = [];

		if ((mod & Modifier.PUBLIC) !== 0) sj.push('public');
		if ((mod & Modifier.PROTECTED) !== 0) sj.push('protected');
		if ((mod & Modifier.PRIVATE) !== 0) sj.push('private');

		/* Canonical order */
		if ((mod & Modifier.ABSTRACT) !== 0) sj.push('abstract');
		if ((mod & Modifier.STATIC) !== 0) sj.push('static');
		if ((mod & Modifier.FINAL) !== 0) sj.push('final');
		if ((mod & Modifier.TRANSIENT) !== 0) sj.push('transient');
		if ((mod & Modifier.VOLATILE) !== 0) sj.push('volatile');
		if ((mod & Modifier.SYNCHRONIZED) !== 0) sj.push('synchronized');
		if ((mod & Modifier.NATIVE) !== 0) sj.push('native');
		if ((mod & Modifier.STRICT) !== 0) sj.push('strictfp');
		if ((mod & Modifier.INTERFACE) !== 0) sj.push('interface');

		return sj.join(' ');
	}

	static isSynthetic(mod: ModifiersValue): boolean {
		return (mod & Modifier.SYNTHETIC) !== 0;
	}

	static isMandated(mod: ModifiersValue): boolean {
		return (mod & Modifier.MANDATED) !== 0;
	}

	static classModifiers(): ModifiersValue {
		return Modifier.CLASS_MODIFIERS;
	}

	static interfaceModifiers(): ModifiersValue {
		return Modifier.INTERFACE_MODIFIERS;
	}

	static constructorModifiers(): ModifiersValue {
		return Modifier.CONSTRUCTOR_MODIFIERS;
	}

	static methodModifiers(): ModifiersValue {
		return Modifier.METHOD_MODIFIERS;
	}

	static fieldModifiers(): ModifiersValue {
		return Modifier.FIELD_MODIFIERS;
	}

	static parameterModifiers(): ModifiersValue {
		return Modifier.PARAMETER_MODIFIERS;
	}
}
