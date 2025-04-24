import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ForDeclarationNode, ForNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwForCaptor extends AbstractKeywordCaptor<ForDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.For, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ForDeclarationNode> {
		return ForDeclarationNode;
	}

	protected createChildAstNodes(_node: ForDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(ForNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}