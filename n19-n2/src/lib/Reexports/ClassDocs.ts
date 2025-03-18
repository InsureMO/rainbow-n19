import {AbstractClassDocs, ClassDoc, ClassName, IClassDocs} from '../Java';
import {Optional} from '../TsAddon';

export class ImmutableClassDocs extends AbstractClassDocs {
	constructor() {
		super();
	}
}

export abstract class AbstractMutableClassDocs<P extends IClassDocs> extends AbstractClassDocs {
	private readonly _parent: P;

	protected constructor(parent: P) {
		super();
		this._parent = parent;
	}

	get parent(): P {
		return this._parent;
	}

	findDoc(name: ClassName): Optional<ClassDoc> {
		const found = super.findDoc(name);
		if (found != null) {
			return found;
		}
		return this.parent.findDoc(name);
	}

	removeDoc(name: ClassName): Optional<ClassDoc> {
		return super.removeDoc(name);
	}

	filterBy(text: string): Optional<Array<ClassDoc>> {
		return [
			...super.filterBy(text),
			...this.parent.filterBy(text)
		];
	}
}

export class ProjectClassDocs extends AbstractMutableClassDocs<ImmutableClassDocs> {
	public constructor(parent: ImmutableClassDocs) {
		super(parent);
	}

	get root(): ImmutableClassDocs {
		return this.parent;
	}
}

export class FloatingClassDocs extends AbstractMutableClassDocs<ProjectClassDocs> {
	public constructor(parent: ProjectClassDocs) {
		super(parent);
	}

	get root(): ImmutableClassDocs {
		return this.parent.root;
	}
}

export class EditingClassDocs extends AbstractMutableClassDocs<FloatingClassDocs> {
	public constructor(parent: FloatingClassDocs) {
		super(parent);
	}

	get root(): ImmutableClassDocs {
		return this.parent.root;
	}
}
