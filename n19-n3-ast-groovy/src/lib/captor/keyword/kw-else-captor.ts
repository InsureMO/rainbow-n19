import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ElseNode, IfElseDeclarationNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * treated as if-else declaration anyway
 */
export class KwElseCaptor extends AbstractKeywordCaptor<IfElseDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Else, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<IfElseDeclarationNode> {
		return IfElseDeclarationNode;
	}

	protected createChildAstNodes(_node: IfElseDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(ElseNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}
