import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {SwitchDeclarationNode, SwitchNode} from '../../node';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwSwitchCaptor extends AbstractKeywordCaptor<SwitchDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Switch, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SwitchDeclarationNode> {
		return SwitchDeclarationNode;
	}

	protected createChildAstNodes(_node: SwitchDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(SwitchNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}
}