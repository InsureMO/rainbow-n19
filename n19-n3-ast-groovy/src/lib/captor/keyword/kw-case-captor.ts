import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {CaseNode, SwitchCaseDeclarationNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwCaseCaptor extends AbstractKeywordCaptor<SwitchCaseDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Case, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SwitchCaseDeclarationNode> {
		return SwitchCaseDeclarationNode;
	}

	protected createChildAstNodes(_node: SwitchCaseDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(CaseNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}