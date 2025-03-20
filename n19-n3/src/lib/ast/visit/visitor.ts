import {Optional} from '@rainbow-n19/n2';
import {GroovyAst} from '../ast';
import {GroovyAstNode} from '../ast-node';
import {GroovyAstBuildOptions, GroovyAstBuildVisitor} from '../types';
import {Char} from './types';

export class GroovyAstVisitor {
	private readonly _ast: GroovyAst;
	private readonly _buildVisitor: Optional<GroovyAstBuildVisitor>;
	private readonly _chars: Array<Char>;

	constructor(ast: GroovyAst, options?: GroovyAstBuildOptions) {
		this._ast = ast;
		this._buildVisitor = options.visitor;
		this._chars = ast.document.split('');
	}

	get ast(): GroovyAst {
		return this._ast;
	}

	protected enterNode(node: GroovyAstNode): void {
		this._buildVisitor?.enterNode(node);
	}

	protected exitNode(node: GroovyAstNode): void {
		this._buildVisitor?.exitNode(node);
	}

	protected get chars(): Array<Char> {
		return this._chars;
	}

	visit(): void {

	}
}
