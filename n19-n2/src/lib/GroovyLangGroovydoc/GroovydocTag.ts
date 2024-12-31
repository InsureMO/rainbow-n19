import {IGroovydoc} from './Groovydoc';

export class GroovydocTag {
	private readonly _name: string;
	private readonly _content: string;
	private readonly _groovydoc: IGroovydoc;

	constructor(name: string, content: string, groovydoc: IGroovydoc) {
		this._name = name;
		this._content = content;
		this._groovydoc = groovydoc;
	}

	get name(): string {
		return this._name;
	}

	get content(): string {
		return this._content;
	}

	get groovydoc(): IGroovydoc {
		return this._groovydoc;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof GroovydocTag)) {
			return false;
		}
		const that = o;
		return this.name == that.name && this.content == that.content && this.groovydoc == that.groovydoc;
	}

	toString(): string {
		return this.content;
	}
}
