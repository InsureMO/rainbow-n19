import {JREClassLoader, NonJREClassLoader} from '../Java';

export type GroovyVersion = string;

/**
 * Groovy jars
 */
export class GroovyClassLoader extends NonJREClassLoader {
	private readonly _version: GroovyVersion;

	constructor(parent: JREClassLoader, version: GroovyVersion) {
		super(parent);
		this._version = version;
	}

	version(): GroovyVersion {
		return this._version;
	}
}
