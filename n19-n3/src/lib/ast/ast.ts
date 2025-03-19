import {GroovyAstNode} from './ast-node';

export class GroovyAst {
	private readonly _nodes: Array<GroovyAstNode> = [];

	get nodes(): Array<GroovyAstNode> {
		return this._nodes;
	}
}
