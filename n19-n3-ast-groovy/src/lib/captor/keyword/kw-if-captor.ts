import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {IfDeclarationNode, IfElseIfDeclarationNode, IfIfDeclarationNode, IfNode} from '../../node';
import {TokenId} from '../../tokens';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * could be
 * 1. start of if block
 * 2. or start of else-if block
 */
export class KwIfCaptor extends AbstractKeywordCaptor<IfDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.If, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<IfDeclarationNode> {
		return IfDeclarationNode;
	}

	protected createChildAstNodes(_node: IfDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(IfIfDeclarationNode, {startOffset: offset});
		this.createAndAppendToAst(IfNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}

	visit(char: Char, offset: number): boolean {
		const latestOpenContainerNode = this.latestOpenContainerNode();
		const latestOpenContainerNodeTokenId = latestOpenContainerNode.tokenId;
		if (latestOpenContainerNodeTokenId === TokenId.IfElseDeclaration) {
			// if-else declaration, at least 2 child nodes under this container node
			const children = latestOpenContainerNode.children;
			const changeToElseIf = children.every(child => {
				[
					TokenId.ELSE,
					// comment nodes
					TokenId.MultipleLinesComment, TokenId.SingleLineComment,
					// new line, whitespaces and tabs
					TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs
				].includes(child.tokenId);
			});
			if (changeToElseIf) {
				this.detachFromAst(latestOpenContainerNode);
				this.createAndAppendToAst(IfElseIfDeclarationNode, {startOffset: children[0].startOffset});
				this.appendToAst(...children);
				this.createAndAppendToAst(IfNode, {text: this.keyword, startOffset: offset});
				this.moveCursorTo(offset + this.charsLength);
				return true;
			}
		}
		return super.visit(char, offset);
	}
}