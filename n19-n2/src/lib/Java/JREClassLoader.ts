import {AbstractClassLoader} from './AbstractClassLoader';
import {Class} from './Class';
import {BuiltInConstants, Modifier} from './Helpers';

export type JREVersion = string;

/**
 * root class loader, for JRE
 */
export class JREClassLoader extends AbstractClassLoader {
	private readonly _version: JREVersion;

	constructor(version: JREVersion) {
		super();
		this._version = version;

		// 1041, 8 primitive types, array of them and 2 dims array of them
		const modifiers = Modifier.PUBLIC & Modifier.SYNTHETIC & Modifier.BRIDGE;
		[
			...Object.keys(BuiltInConstants.ARR_OF_PRIMITIVE_TYPES),
			...(BuiltInConstants.CHAR_OF_PRIMITIVE_TYPES.split('').map(t => [`[${t}`, `[[${t}`]).flat())
		].forEach(name => this.addClass(new Class(this, {name, modifiers})));
	}

	version(): JREVersion {
		return this._version;
	}
}
