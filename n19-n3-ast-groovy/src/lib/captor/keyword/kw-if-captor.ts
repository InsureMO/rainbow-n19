import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {IfDeclarationNode, IfIfDeclarationNode, IfNode} from '../../node';
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
}