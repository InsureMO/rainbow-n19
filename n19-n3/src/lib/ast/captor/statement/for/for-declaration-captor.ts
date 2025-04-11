import {AstNodeConstructor} from '../../../ast-node';
import {AstVisitor} from '../../../ast-visitor';
import {ForDeclarationNode, ForNode} from '../../../node';
import {AbstractKeywordCaptor} from '../../keyword';
import {Char} from '../../types';
import {AstKeywords} from '../../util';

export class ForDeclarationCaptor extends AbstractKeywordCaptor<ForDeclarationNode> {
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