import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {DoWhileDeclarationNode, WhileDeclarationNode, WhileNode} from '../../node';
import {TokenId} from '../../tokens';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * could be
 * 1. start of while block,
 * 2. or while part of do-while block.
 */
export class KwWhileCaptor extends AbstractKeywordCaptor<WhileDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.While, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<WhileDeclarationNode> {
		return WhileDeclarationNode;
	}

	protected createChildAstNodes(_node: WhileDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(WhileNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}

	/**
	 * check current context, if it is a do-while, simply add keyword {@link WhileNode} itself.
	 * otherwise create a {@link WhileDeclarationNode}, and add keyword.
	 */
	visit(char: Char, offset: number): boolean {
		const latestOpenContainerNode = this.latestOpenContainerNode();
		let isDoWhile = false;
		if (latestOpenContainerNode.tokenId === TokenId.DoWhileDeclaration) {
			// check while keyword in this do-while block or not
			// only while keyword not exists, this while keyword is allowed to be appended to do-while declaration
			// otherwise treated as a new while declaration, and close do-while declaration node
			const exists = latestOpenContainerNode.children.some(child => child.tokenId === TokenId.WHILE);
			if (exists) {
				(latestOpenContainerNode as DoWhileDeclarationNode).close();
				isDoWhile = false;
			} else {
				isDoWhile = true;
			}
		}
		if (isDoWhile) {
			super.createAndAppendToAst(WhileNode, {text: this.keyword, startOffset: offset});
			this.moveCursorTo(offset + this.charsLength);
			return true;
		} else {
			return super.visit(char, offset);
		}
	}
}