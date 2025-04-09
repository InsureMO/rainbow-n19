import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractTypeDeclarationNode, ClassBodyNode, LBraceNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {StaticBlockNodeWalker} from '../statement/static-block';
import {Char} from '../types';
import {AstChars} from '../util';

/**
 * "{"
 *
 * Lbrace could lead following nodes:
 * 1. {@link StaticBlockDeclarationNode},
 * 2. {@link ClassBodyNode}
 */
export class LBraceCaptor extends AbstractSingleCharCaptor<LBraceNode> {
	protected readonly _staticBlockNodeWalker = new StaticBlockNodeWalker(this);

	constructor(astVisitor: AstVisitor) {
		super(AstChars.LBrace, astVisitor);
	}

	protected getStaticBlockNodeWalker(): StaticBlockNodeWalker {
		return this._staticBlockNodeWalker;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBraceNode> {
		return LBraceNode;
	}

	/**
	 * check it this lbrace is start of following:
	 * 1. {@link StaticBlockBodyNode}, check the previous is {@link StaticNode} or not,
	 * 2. {@link ClassBodyNode}, check the parent is {@link AbstractTypeDeclarationNode} or not,
	 *    if parent it is, append an additional {@link ClassBodyNode},
	 * 99. if not anyone of above, should be {@link LBraceNode}.
	 */
	visit(char: Char, offset: number): boolean {
		let visited: boolean = this.getStaticBlockNodeWalker().visit(char, offset);

		if (!visited) {
			const latestOpenNode = this.latestOpenContainerNode();
			if (latestOpenNode instanceof AbstractTypeDeclarationNode) {
				this.createAndAppendToAst(ClassBodyNode, {startOffset: offset});
				return super.visit(char, offset);
			}
		}

		if (visited) {
			return true;
		} else {
			// as single char
			return super.visit(char, offset);
		}
	}
}
