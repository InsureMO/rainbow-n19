import {AbstractClassLoader} from './AbstractClassLoader';

export type JREVersion = string;

/**
 * root class loader, for JRE
 */
export class JREClassLoader extends AbstractClassLoader {
	private readonly _version: JREVersion;

	constructor(version: string) {
		super();
		this._version = version;
	}

	version(): JREVersion {
		return this._version;
	}
}
