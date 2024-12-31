import {AnnotatedNode} from './AnnotatedNode';
import {GroovyCodeVisitor} from './GroovyCodeVisitor';

export class PackageNode extends AnnotatedNode {
	private readonly _name: string;

	constructor(name: string) {
		super();
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	/**
	 * @return the text display of this package definition
	 */
	get text(): string {
		return 'package ' + this.name;
	}

	visit(_visitor: GroovyCodeVisitor): void {
	}
}
