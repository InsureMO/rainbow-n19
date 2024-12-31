import {Writer} from '../JavaIO';

export class StringBuilderWriter implements Writer {
	private _content: string = '';

	write(text: string): void {
		this._content += text;
	}

	toString() {
		return this._content;
	}
}
