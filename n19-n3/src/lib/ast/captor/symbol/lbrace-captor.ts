import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractTypeDeclarationNode, ClassBodyNode, LBraceNode} from '../../node';
import {AbstractSingleCharCaptor, PreviousNodesWalkerAndVisitor} from '../abstract';
import {PredictedClassOrMethodOrFieldDeclarationNodeWalker, StaticBlockNodeWalker} from '../statement';
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
	protected readonly _predictedClassDeclarationNodeWalker = new PredictedClassOrMethodOrFieldDeclarationNodeWalker(this);
	protected readonly _staticBlockNodeWalker = new StaticBlockNodeWalker(this);

	constructor(astVisitor: AstVisitor) {
		super(AstChars.LBrace, astVisitor);
	}

	protected getPredictedClassDeclarationNodeWalker(): PredictedClassOrMethodOrFieldDeclarationNodeWalker {
		return this._predictedClassDeclarationNodeWalker;
	}

	protected getStaticBlockNodeWalker(): StaticBlockNodeWalker {
		return this._staticBlockNodeWalker;
	}

	protected getNodeWalkers(): Array<PreviousNodesWalkerAndVisitor> {
		return [
			this.getPredictedClassDeclarationNodeWalker(),
			this.getStaticBlockNodeWalker()
		];
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBraceNode> {
		return LBraceNode;
	}

	/**
	 * check it this lbrace is start of following:
	 * 1. {@link ClassDeclarationNode} and {@link ClassBodyNode}, check the previous nodes contains modifiers of class,
	 *    not include modifiers of method or field. such as
	 * 2. {@link StaticBlockBodyNode}, check the previous is {@link StaticNode} or not,
	 * 3. {@link ClassBodyNode}, check the parent is {@link AbstractTypeDeclarationNode} or not,
	 *    if parent it is, append an additional {@link ClassBodyNode},
	 * 99. if not anyone of above, should be {@link LBraceNode}.
	 */
	visit(char: Char, offset: number): boolean {
		const visited: boolean = this.getNodeWalkers().some(walker => walker.visit(char, offset));

		// not accepted by any node walker
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
