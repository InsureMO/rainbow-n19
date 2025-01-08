import {Reader, StringReader} from '../JavaIO';
import {Optional} from '../TsAddon';
import {CompilerConfiguration} from './CompilerConfiguration';
import {Janitor} from './Janitor';
import {ReaderSource} from './ReaderSource';

export class StringReaderSource implements ReaderSource {
	private readonly _string: string;
	private readonly _configuration: CompilerConfiguration;
	private _lines: Array<string> = null;

	constructor(str: string, configuration?: CompilerConfiguration) {
		this._string = str;
		this._configuration = configuration ?? CompilerConfiguration.DEFAULT;
	}

	get reader(): Reader /* throws IOException */ {
		return new StringReader(this._string);
	}

	canReopenSource(): boolean {
		return true;
	}

	getLine(lineNumber: number, _janitor: Janitor): Optional<string> {
		if (this._lines == null) {
			this._lines = this._string.split('\n');
		}
		if (lineNumber < this._lines.length) {
			return this._lines[lineNumber];
		} else {
			return null;
		}
	}

	cleanup(): void {
		// do nothing
	}

}