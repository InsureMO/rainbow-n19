import {GroovyAstNode} from './ast-node';
import {GroovyAstBuildOptions} from './types';
import {GroovyAstVisitor} from './visit';

export class GroovyAst {
	private readonly _document: string;
	private readonly _nodes: Array<GroovyAstNode> = [];

	constructor(document?: string, options?: GroovyAstBuildOptions) {
		this._document = document ?? '';
		new GroovyAstVisitor(this, options).visit();
	}

	get document(): string {
		return this._document;
	}

	get documentLength(): number {
		return this.document.length;
	}

	get nodes(): Array<GroovyAstNode> {
		return this._nodes;
	}

	get nodeCount(): number {
		return this._nodes.length;
	}
}
