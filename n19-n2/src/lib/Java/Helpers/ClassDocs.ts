import {Optional} from '../../TsAddon';
import {ClassName} from '../TypeAlias';

export type DocSegmentContent = string;
/** plain text */
export type DocSegmentText = ['t', DocSegmentContent];
/** inline code block */
export type DocSegmentInlineCodeBlock = ['i', DocSegmentContent];
/** reference, could be class/field/method/constructor */
export type DocSegmentReference = ['r', DocSegmentContent];
/** code block */
export type DocSegmentCodeBlock = ['c', DocSegmentContent | Array<DocSegmentInlineCodeBlock | DocSegmentText>];
/** external link */
export type DocSegmentExternalLink = ['a', DocSegmentContent, DocSegmentContent];
export type DocSegmentList = ['l', Array<DocSegmentBlock>]
/** block */
export type DocSegmentBlock = ['b', DocSegmentContent | Array<DocSegmentText | DocSegmentInlineCodeBlock | DocSegmentReference | DocSegmentCodeBlock | DocSegmentExternalLink | DocSegmentList | DocSegmentBlock>]
export type DocSegment =
	| DocSegmentText
	| DocSegmentInlineCodeBlock
	| DocSegmentReference
	| DocSegmentCodeBlock
	| DocSegmentExternalLink
	| DocSegmentList
	| DocSegmentBlock;
export type DocDescription = Optional<Array<DocSegment>>;

export type ClassElementDocContents = [
	Optional<DocDescription>,
]

export abstract class AbstractClassElementDoc {
	private readonly _description: DocDescription;

	protected constructor(readonly contents?: ClassElementDocContents) {
		this._description = contents?.[0];
	}

	get description(): DocDescription {
		return this._description;
	}
}

export type ClassFieldDocKey = string;
export type ClassFieldDocContents = [...ClassElementDocContents]

export class ClassFieldDoc extends AbstractClassElementDoc {
	private readonly _key: ClassFieldDocKey;

	constructor(key: ClassFieldDocKey, contents?: ClassFieldDocContents) {
		super(contents);
		this._key = key;
	}

	get key(): ClassFieldDocKey {
		return this._key;
	}
}

export type ClassExecutableParameterDocKey = string;
export type ClassExecutableParameterDocContents = DocDescription

export class ClassExecutableParameterDoc {
	private readonly _key: ClassExecutableParameterDocKey;
	private readonly _description: DocDescription;

	constructor(key: ClassExecutableParameterDocKey, contents?: ClassExecutableParameterDocContents) {
		this._key = key;
		this._description = contents;
	}

	get key(): ClassExecutableParameterDocKey {
		return this._key;
	}

	get description(): DocDescription {
		return this._description;
	}
}

export type ClassExecutableThrownDocKey = string;
export type ClassExecutableThrownDocContents = DocDescription

export class ClassExecutableThrownDoc {
	private readonly _key: ClassExecutableThrownDocKey;
	private readonly _description: DocDescription;

	constructor(key: ClassExecutableThrownDocKey, contents?: ClassExecutableThrownDocContents) {
		this._key = key;
		this._description = contents;
	}

	get key(): ClassExecutableThrownDocKey {
		return this._key;
	}

	get description(): DocDescription {
		return this._description;
	}
}

export type ClassExecutableDocKey = string;
export type ClassExecutableDocContents = [
	...ClassElementDocContents,
	// parameters
	Optional<Array<[ClassExecutableParameterDocKey, ClassExecutableParameterDocContents]>>,
	// throws
	Optional<Array<[ClassExecutableThrownDocKey, ClassExecutableThrownDocContents]>>
]

export abstract class ClassExecutableDoc extends AbstractClassElementDoc {
	private readonly _key: ClassExecutableDocKey;
	private readonly _parameters: Optional<Array<ClassExecutableParameterDoc>>;
	private readonly _throwns: Optional<Array<ClassExecutableThrownDoc>>;

	protected constructor(key: ClassExecutableDocKey, contents?: ClassExecutableDocContents) {
		super(contents as unknown as ClassElementDocContents);
		this._key = key;
		this._parameters = contents?.[1]?.map(([key, contents]) => {
			return new ClassExecutableParameterDoc(key, contents);
		});
		this._throwns = contents?.[2]?.map(([key, contents]) => {
			return new ClassExecutableThrownDoc(key, contents);
		});
	}

	get key(): ClassExecutableDocKey {
		return this._key;
	}

	get parameters(): Optional<Array<ClassExecutableParameterDoc>> {
		return this._parameters;
	}

	get throwns(): Optional<Array<ClassExecutableThrownDoc>> {
		return this._throwns;
	}
}

export type ClassConstructorDocKey = string;
export type ClassConstructorDocContents = [...ClassExecutableDocContents]

export class ClassConstructorDoc extends ClassExecutableDoc {
	constructor(key: ClassConstructorDocKey, contents?: ClassConstructorDocContents) {
		super(key, contents);
	}
}

export type ClassMethodDocKey = string;
export type ClassMethodReturnDocContents = DocDescription
export type ClassMethodDocContents = [
	...ClassExecutableDocContents,
	ClassMethodReturnDocContents
]

export class ClassMethodDoc extends ClassExecutableDoc {
	private readonly _return: DocDescription;

	constructor(key: ClassMethodDocKey, contents?: ClassMethodDocContents) {
		super(key, contents as unknown as ClassExecutableDocContents);
		this._return = contents?.[3];
	}

	get return(): DocDescription {
		return this._return;
	}
}

export type ClassDocContents = [
	// class doc
	...ClassElementDocContents,
	// fields
	Optional<Array<[ClassFieldDocKey, ClassFieldDocContents]>>,
	// constructors
	Optional<Array<[ClassConstructorDocKey, ClassConstructorDocContents]>>,
	// methods
	Optional<Array<[ClassMethodDocKey, ClassMethodDocContents]>>
]

export class ClassDoc extends AbstractClassElementDoc {
	private readonly _name: string;
	private readonly _fields: Optional<Array<ClassFieldDoc>>;
	private readonly _constructors: Optional<Array<ClassConstructorDoc>>;
	private readonly _methods: Optional<Array<ClassMethodDoc>>;

	constructor(name: ClassName, contents?: ClassDocContents) {
		super(contents as unknown as ClassElementDocContents);
		this._name = name;
		this._fields = contents?.[1]?.map(([key, contents]) => {
			return new ClassFieldDoc(key, contents);
		});
		this._constructors = contents?.[2]?.map(([key, contents]) => {
			return new ClassConstructorDoc(key, contents);
		});
		this._methods = contents?.[3]?.map(([key, contents]) => {
			return new ClassMethodDoc(key, contents);
		});
	}

	get name(): string {
		return this._name;
	}

	get fields(): Optional<Array<ClassFieldDoc>> {
		return this._fields;
	}

	get constructors(): Optional<Array<ClassConstructorDoc>> {
		return this._constructors;
	}

	get methods(): Optional<Array<ClassMethodDoc>> {
		return this._methods;
	}
}

export interface IClassDocs {
	addDoc(name: ClassName, contents?: ClassDocContents): void;
	findDoc(name: ClassName): Optional<ClassDoc>;
}

export abstract class AbstractClassDocs implements IClassDocs {
	private readonly _docs: Map<ClassName, ClassDoc> = new Map();

	protected constructor() {
	}

	addDoc(name: ClassName, contents?: ClassDocContents): void {
		this._docs.set(name, new ClassDoc(name, contents));
	}

	protected removeDoc(name: ClassName): Optional<ClassDoc> {
		const existing = this._docs.get(name);
		if (existing != null) {
			this._docs.delete(name);
		}
		return existing;
	}

	findDoc(name: ClassName): Optional<ClassDoc> {
		return this._docs.get(name);
	}
}
