import {IAnnotatedElement} from '../Java';
import {UnsupportedOperationException} from '../JavaExceptions';
import {GroovydocHolder} from './GroovydocHolder';
import {GroovydocTag} from './GroovydocTag';

export class AnnotatedElementBasedGroovydocHolder implements GroovydocHolder<IAnnotatedElement> {
	constructor(private readonly _groovydoc: IGroovydoc,
	            private readonly _annotatedElement: IAnnotatedElement) {
	}

	get groovydoc(): IGroovydoc {
		return this._groovydoc;
	}

	get instance(): IAnnotatedElement {
		return this._annotatedElement;
	}
}

export interface IGroovydoc {
	readonly isPresent: boolean;
	readonly content: string;
	readonly holder: GroovydocHolder;
	readonly tagList: Array<GroovydocTag>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
	toString(): string;
}

class GroovydocHolderNothing implements GroovydocHolder<IGroovydoc> {
	constructor(private readonly _instanceAndDoc: EmptyGroovydoc) {
	}

	get groovydoc(): IGroovydoc {
		return this._instanceAndDoc;
	}

	get instance(): EmptyGroovydoc {
		return this._instanceAndDoc;
	}
}

class EmptyGroovydoc implements IGroovydoc {
	static readonly SINGLETON = new EmptyGroovydoc();
	private readonly _holder: GroovydocHolder;

	private constructor() {
		this._holder = new GroovydocHolderNothing(this);
	}

	get isPresent(): boolean {
		return false;
	}

	get content(): string {
		return '';
	}

	get holder(): GroovydocHolder {
		return this._holder;
	}

	get tagList(): Array<GroovydocTag> {
		return [];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		return this === o;
	}

	toString(): string {
		return this.content;
	}
}

export class Groovydoc implements IGroovydoc {
	static readonly EMPTY_GROOVYDOC: IGroovydoc = EmptyGroovydoc.SINGLETON;
	private readonly _content: string;
	private readonly _holder: GroovydocHolder;

	constructor(content: string, groovydocHolderOrAnnotatedElement?: GroovydocHolder | IAnnotatedElement) {
		this._content = content;
		if (groovydocHolderOrAnnotatedElement != null) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if ((groovydocHolderOrAnnotatedElement as any).groovydoc != null) {
				this._holder = groovydocHolderOrAnnotatedElement as GroovydocHolder;
			} else {
				this._holder = new AnnotatedElementBasedGroovydocHolder(this, groovydocHolderOrAnnotatedElement as IAnnotatedElement);
			}
		}
	}

	get isPresent(): boolean {
		return true;
	}

	get content(): string {
		return this._content;
	}

	get tagList(): Array<GroovydocTag> {
		throw new UnsupportedOperationException('[TODO]parsing tags will be a new features of the next releases');
	}

	get holder(): GroovydocHolder {
		return this._holder;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof Groovydoc)) {
			return false;
		}
		return this.content === o.content && this.holder === o.holder;
	}

	toString(): string {
		return this.content;
	}
}
