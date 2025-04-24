import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {WhileDeclarationNode, WhileNode} from '../../node';
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
		if (latestOpenContainerNode.tokenId === TokenId.DoWhileDeclaration) {
			super.createAndAppendToAst(WhileNode, {text: this.keyword, startOffset: offset});
			this.moveCursorTo(offset + this.charsLength);
			return true;
		} else {
			return super.visit(char, offset);
		}
	}
}