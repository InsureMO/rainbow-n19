import {Writer} from './Writer';

export class PrintWriter implements Writer {
	private readonly _writer: Writer;

	constructor(writer: Writer) {
		this._writer = writer;
	}

	private newLine(): void {
		this.print('\n');
	}

	print(text: string | number | boolean): void {
		if (text == null) {
			return;
		}
		this.write(`${text}`);
	}

	println(text?: string | number | boolean): void {
		if (text == null || (typeof text === 'string' && text.length === 0)) {
			this.newLine();
		} else {
			this.print(text);
			this.println();
		}
	}

	write(text: string): void {
		this._writer.write(text);
	}
}
