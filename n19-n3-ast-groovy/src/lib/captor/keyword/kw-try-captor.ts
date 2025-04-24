import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {TryCatchDeclarationNode, TryDeclarationNode, TryNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwTryCaptor extends AbstractKeywordCaptor<TryCatchDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Try, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<TryCatchDeclarationNode> {
		return TryCatchDeclarationNode;
	}

	protected createChildAstNodes(_node: TryCatchDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(TryDeclarationNode, {startOffset: offset});
		this.createAndAppendToAst(TryNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}