import {JREClassLoader, NonJREClassLoader} from '../Java';
import {Optional} from '../TsAddon';

export type GroovyVersion = string;

/**
 * Groovy jars
 */
export class GroovyClassLoader extends NonJREClassLoader {
	private readonly _version: GroovyVersion;

	constructor(parent: Optional<JREClassLoader>, version: GroovyVersion) {
		super(parent);
		this._version = version;
	}

	version(): GroovyVersion {
		return this._version;
	}
}
