import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {
	CatchBodyNode,
	ClassBodyNode,
	ClassDeclarationNode,
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
import {AbstractSingleCharCaptor} from '../abstract';
import {Char} from '../types';
import {AstChars} from '../util';
import {LBraceNodeWalker} from './lbrace-node-walker';

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
	protected readonly nodeWalker = new LBraceNodeWalker(this);

	constructor(astVisitor: AstVisitor) {
		super(AstChars.LBrace, astVisitor);
	}

	protected getNodeWalker(): LBraceNodeWalker {
		return this.nodeWalker;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBraceNode> {
		return LBraceNode;
	}

	visit(char: Char, offset: number): boolean {
		const latestOpenContainerNode = this.latestOpenContainerNode();
		const tokenIdOfLatestOpenContainerNode = latestOpenContainerNode.tokenId;

		switch (tokenIdOfLatestOpenContainerNode) {
			case TokenId.ClassDeclaration:
			case TokenId.InterfaceDeclaration:
			case TokenId.AtInterfaceClassDeclaration:
			case TokenId.EnumClassDeclaration:
			case TokenId.RecordClassDeclaration:
			case TokenId.TraitClassDeclaration:
				// type declaration, should start a class body
				// and no need to grab any previous node, all previous node belongs to type declaration node
				this.createAndAppendToAst(ClassBodyNode, {startOffset: offset});
				break;
			case TokenId.ConstructorDeclaration:
				// start a constructor body
				// and no need to grab any previous node, all previous node belongs to constructor declaration node
				this.createAndAppendToAst(ConstructorBodyNode, {startOffset: offset});
				break;
			case TokenId.MethodDeclaration:
				// start a method body
				// and no need to grab any previous node, all previous node belongs to method declaration node
				this.createAndAppendToAst(MethodBodyNode, {startOffset: offset});
				break;
			case TokenId.FieldDeclaration:
				// start a closure
				// and no need to grab any previous node, all previous node belongs to field declaration node
				break;
			case TokenId.LambdaDeclaration:
				// start a lambda body
				// and no need to grab any previous node, all previous node belongs to lambda declaration node
				this.createAndAppendToAst(LambdaBodyNode, {startOffset: offset});
				break;
			// if else
			case TokenId.IfIfDeclaration:
				// start an if-if body
				// and no need to grab any previous node, all previous node belongs to if-if declaration node
				this.createAndAppendToAst(IfIfBodyNode, {startOffset: offset});
				break;
			case TokenId.IfElseIfDeclaration:
				// start an if-elseif body
				// and no need to grab any previous node, all previous node belongs to if-elseif declaration node
				this.createAndAppendToAst(IfElseIfBodyNode, {startOffset: offset});
				break;
			case TokenId.IfElseDeclaration:
				// start an if-else body
				// and no need to grab any previous node, all previous node belongs to if-else declaration node
				this.createAndAppendToAst(IfElseBodyNode, {startOffset: offset});
				break;
			// while loop
			case TokenId.WhileDeclaration:
				// start a while body
				// and no need to grab any previous node, all previous node belongs to while declaration node
				this.createAndAppendToAst(WhileBodyNode, {startOffset: offset});
				break;
			// do-while loop
			case TokenId.DoWhileDeclaration:
				// start a do-while body
				// and no need to grab any previous node, all previous node belongs to do-while declaration node
				this.createAndAppendToAst(DoWhileBodyNode, {startOffset: offset});
				break;
			// for loop
			case TokenId.ForDeclaration:
				// start a for body
				// and no need to grab any previous node, all previous node belongs to for declaration node
				this.createAndAppendToAst(ForBodyNode, {startOffset: offset});
				break;
			// switch
			case TokenId.SwitchDeclaration:
				// start a switch body
				// and no need to grab any previous node, all previous node belongs to switch declaration node
				this.createAndAppendToAst(SwitchBodyNode, {startOffset: offset});
				break;
			case TokenId.SwitchCaseDeclaration:
				// start a switch-case body
				// and no need to grab any previous node, all previous node belongs to switch-case declaration node
				this.createAndAppendToAst(SwitchCaseBodyNode, {startOffset: offset});
				break;
			case TokenId.SwitchDefaultDeclaration:
				// start a switch-default body
				// and no need to grab any previous node, all previous node belongs to switch-default declaration node
				this.createAndAppendToAst(SwitchDefaultBodyNode, {startOffset: offset});
				break;
			// try catch
			case TokenId.TryDeclaration:
				// start a try body
				// and no need to grab any previous node, all previous node belongs to try declaration node
				this.createAndAppendToAst(TryBodyNode, {startOffset: offset});
				break;
			case TokenId.CatchDeclaration:
				// start a catch body
				// and no need to grab any previous node, all previous node belongs to catch declaration node
				this.createAndAppendToAst(CatchBodyNode, {startOffset: offset});
				break;
			case TokenId.FinallyDeclaration:
				// start a finally body
				// and no need to grab any previous node, all previous node belongs to finally declaration node
				this.createAndAppendToAst(FinallyBodyNode, {startOffset: offset});
				break;
			// case TokenId.COMPILATION_UNIT:
			// case TokenId.ClassBody:
			default:
				// check the previous nodes
				const nodeWalker = this.getNodeWalker();
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
				break;
		}

		return super.visit(char, offset);
	}
}
