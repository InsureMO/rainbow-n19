import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {FinallyDeclarationNode, FinallyNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwFinallyCaptor extends AbstractKeywordCaptor<FinallyDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Finally, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<FinallyDeclarationNode> {
		return FinallyDeclarationNode;
	}

	protected createChildAstNodes(_node: FinallyDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(FinallyNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}