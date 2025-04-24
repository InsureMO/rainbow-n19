import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {CatchDeclarationNode, CatchNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwCatchCaptor extends AbstractKeywordCaptor<CatchDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Catch, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<CatchDeclarationNode> {
		return CatchDeclarationNode;
	}

	protected createChildAstNodes(_node: CatchDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(CatchNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}