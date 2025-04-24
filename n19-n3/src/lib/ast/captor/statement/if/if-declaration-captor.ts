import {AstNodeConstructor} from '../../../ast-node';
import {AstVisitor} from '../../../ast-visitor';
import {IfDeclarationNode, IfIfDeclarationNode, IfNode} from '../../../node';
import {AbstractKeywordCaptor} from '../../keyword';
import {Char} from '../../types';
import {AstKeywords} from '../../util';

export class IfDeclarationCaptor extends AbstractKeywordCaptor<IfDeclarationNode> {
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