import {AbstractClassLoader, JREClassLoader} from '../Java';

export type GroovyVersion = string;

export class GroovyClassLoader extends AbstractClassLoader {
	private readonly _version: GroovyVersion;

	constructor(parent: JREClassLoader, version: GroovyVersion) {
		super(parent);
		this._version = version;
	}

	version(): GroovyVersion {
		return this._version;
	}
}
