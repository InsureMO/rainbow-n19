import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {
	CatchBodyNode,
	ClassBodyNode,
	ClassDeclarationNode,
	ClosureNode,
	CodeBlockNode,
	ConstructorBodyNode,
	DoWhileBodyNode,
	FinallyBodyNode,
	ForBodyNode,
	IfElseBodyNode,
	IfElseIfBodyNode,
	IfIfBodyNode,
	LambdaBodyNode,
	LBraceNode,
	MethodBodyNode,
	StaticBlockBodyNode,
	StaticBlockDeclarationNode,
	SwitchBodyNode,
	SwitchCaseBodyNode,
	SwitchDefaultBodyNode,
	TryBodyNode,
	WhileBodyNode
} from '../../node';
import {TokenId} from '../../tokens';
import {AbstractPreviousNodesWalker, AbstractSingleCharCaptor} from '../abstract';
import {Char} from '../types';
import {AstChars} from '../util';

export class LBraceNodeWalker extends AbstractPreviousNodesWalker {
	private _grabbedTokenIds: Array<TokenId> = [
		...this._defaultGrabbedTokenIds,
		// type, constructor, method, field
		TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
		// type, method
		TokenId.ABSTRACT,
		// type, method, field
		TokenId.STATIC, TokenId.FINAL,
		// type, constructor, method, field
		TokenId.STRICTFP,
		// method in interface
		TokenId.DEFAULT,
		// type, constructor, method, field
		TokenId.AnnotationDeclaration, TokenId.GenericTypeDeclaration
	];

	protected getGrabbedTokenIds(): Array<TokenId> {
		return this._grabbedTokenIds;
	}
}

/**
 * "{"
 *
 * When encountering {@link LBraceNode}, there are multiple scenarios,
 * and it is necessary to determine how to capture it based on the previous nodes.
 *
 * Consider the following scenarios:
 * - {@link ClassBodyNode},
 * - {@link StaticBlockBodyNode},
 * - {@link ConstructorBodyNode}, {@link MethodBodyNode},
 * - {@link ClosureNode},
 * - {@link LambdaBodyNode},
 * - {@link IfIfBodyNode}, {@link IfElseIfBodyNode} and {@link IfElseBodyNode},
 * - {@link WhileBodyNode}, {@link DoWhileBodyNode},
 * - {@link ForBodyNode},
 * - {@link SwitchBodyNode}
 * - {@link TryBodyNode}, {@link CatchBodyNode}, {@link FinallyBodyNode},
 * - {@link CodeBlock},
 * - {@link ArrayInitializer}
 */
export class LBraceCaptor extends AbstractSingleCharCaptor<LBraceNode> {
	// no need to grab any previous node, all previous node belongs to parent node
	protected readonly singleNodeHits = {
		// type declaration, should start a class body
		[TokenId.ClassDeclaration]: ClassBodyNode,
		[TokenId.InterfaceDeclaration]: ClassBodyNode,
		[TokenId.AtInterfaceClassDeclaration]: ClassBodyNode,
		[TokenId.EnumClassDeclaration]: ClassBodyNode,
		[TokenId.RecordClassDeclaration]: ClassBodyNode,
		[TokenId.TraitClassDeclaration]: ClassBodyNode,
		// start a constructor body
		[TokenId.ConstructorDeclaration]: ConstructorBodyNode,
		// start a method body
		[TokenId.MethodDeclaration]: MethodBodyNode,
		// field, start a closure
		[TokenId.FieldDeclaration]: ClosureNode,
		// start a lambda body
		[TokenId.LambdaDeclaration]: LambdaBodyNode,
		// if else
		[TokenId.IfIfDeclaration]: IfIfBodyNode,
		[TokenId.IfElseIfDeclaration]: IfElseIfBodyNode,
		[TokenId.IfElseDeclaration]: IfElseBodyNode,
		// while loop
		[TokenId.WhileDeclaration]: WhileBodyNode,
		// do-while loop
		[TokenId.DoWhileDeclaration]: DoWhileBodyNode,
		// for loop
		[TokenId.ForDeclaration]: ForBodyNode,
		// switch
		[TokenId.SwitchDeclaration]: SwitchBodyNode,
		[TokenId.SwitchCaseDeclaration]: SwitchCaseBodyNode,
		[TokenId.SwitchDefaultDeclaration]: SwitchDefaultBodyNode,
		// try catch
		[TokenId.TryDeclaration]: TryBodyNode,
		[TokenId.CatchDeclaration]: CatchBodyNode,
		[TokenId.FinallyDeclaration]: FinallyBodyNode
		// TODO left brace after array creator, which is an array initializer
	};
	private readonly _nodeWalker = new LBraceNodeWalker(this);

	constructor(astVisitor: AstVisitor) {
		super(AstChars.LBrace, astVisitor);
	}

	protected get nodeWalker(): LBraceNodeWalker {
		return this._nodeWalker;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBraceNode> {
		return LBraceNode;
	}

	visit(char: Char, offset: number): boolean {
		const latestOpenContainerNode = this.latestOpenContainerNode();
		const tokenIdOfLatestOpenContainerNode = latestOpenContainerNode.tokenId;

		const performed = this.tryToPerformCreateAndAppendSingleNode(tokenIdOfLatestOpenContainerNode, offset);
		// TODO visit when it is IfDeclaration
		if (!performed) {
			// compilation unit, class body or something else
			this.visitWhenAllExpectedSituationsFallThrough(offset);
		}

		return super.visit(char, offset);
	}

	protected tryToPerformCreateAndAppendSingleNode(tokenId: TokenId, offset: number): boolean {
		const BodyNodeType = this.singleNodeHits[tokenId];
		if (BodyNodeType != null) {
			this.createAndAppendToAst(BodyNodeType, {startOffset: offset});
			return true;
		} else {
			return false;
		}
	}

	protected visitWhenAllExpectedSituationsFallThrough(offset: number): void {
		// check the previous nodes
		const nodeWalker = this.nodeWalker;
		const previousNodes = nodeWalker.grabNodes();
		// if the nearest keyword is "static"
		// it will be recognized as a static block. and nodes before static node will not be collected into static block.
		// otherwise, it will be recognized as a class declaration, all nodes will be collected.
		let isStaticBlock = false;
		let staticKeywordIndex = -1;
		let closestUnignorableNodeIndex = -1;
		let isClass = false;
		for (let index = previousNodes.length - 1; index >= 0; --index) {
			const node = previousNodes[index];
			const tokenId = node.tokenId;
			if (tokenId === TokenId.STATIC) {
				// static keyword detected, is static block
				isStaticBlock = true;
				staticKeywordIndex = Math.max(staticKeywordIndex, index);
			} else if (tokenId === TokenId.AnnotationDeclaration || tokenId === TokenId.GenericTypeDeclaration) {
				// ignore
			} else if (!nodeWalker.isDefaultGrabbedTokenId(tokenId)) {
				// keyword detected, is class
				isClass = true;
				closestUnignorableNodeIndex = Math.max(closestUnignorableNodeIndex, index);
			}
		}
		if (closestUnignorableNodeIndex > staticKeywordIndex) {
			// any keyword after static, it is a class
			isStaticBlock = false;
		}
		if (isClass) {
			this.detachFromAst(...(previousNodes.slice().reverse()));
			this.createAndAppendToAst(ClassDeclarationNode, {startOffset: previousNodes[0].startOffset});
			this.appendToAst(...previousNodes);
			this.createAndAppendToAst(ClassBodyNode, {startOffset: offset});
		} else if (isStaticBlock) {
			const nodes = previousNodes.slice(staticKeywordIndex);
			this.detachFromAst(...(nodes.slice().reverse()));
			this.createAndAppendToAst(StaticBlockDeclarationNode, {startOffset: nodes[0].startOffset});
			this.appendToAst(...nodes);
			this.createAndAppendToAst(StaticBlockBodyNode, {startOffset: offset});
		} else {
			// simple code block
			this.createAndAppendToAst(CodeBlockNode, {startOffset: offset});
		}
	}
}
