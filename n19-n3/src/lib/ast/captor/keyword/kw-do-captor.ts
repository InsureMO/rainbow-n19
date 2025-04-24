import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DoNode, DoWhileDeclarationNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwDoCaptor extends AbstractKeywordCaptor<DoWhileDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Do, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DoWhileDeclarationNode> {
		return DoWhileDeclarationNode;
	}

	protected createChildAstNodes(_node: DoWhileDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(DoNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}