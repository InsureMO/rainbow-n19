import {AstNode} from './ast-node';
import {CompilationUnitNode} from './node/compilation-unit-node';

export class Ast {
	private readonly _compilationUnit: CompilationUnitNode;

	constructor(document?: string) {
		document = document ?? '';
		this._compilationUnit = new CompilationUnitNode({text: document, startOffset: 0});
	}

	get compilationUnit(): CompilationUnitNode {
		return this._compilationUnit;
	}

	get document(): string {
		return this._compilationUnit.text;
	}

	get documentLength(): number {
		return this._compilationUnit.text.length;
	}

	get nodes(): Array<AstNode> {
		return this._compilationUnit.nextNodes;
	}
}
