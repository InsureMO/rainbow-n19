import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {CaseNode, SwitchCaseDeclarationNode, SwitchDefaultDeclarationNode} from '../../node';
import {TokenId} from '../../tokens';
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

	visit(char: Char, offset: number): boolean {
		const latestOpenContainerNode = this.latestOpenContainerNode();
		const latestOpenContainerNodeTokenId = latestOpenContainerNode.tokenId;
		if (TokenId.SwitchCaseDeclaration === latestOpenContainerNodeTokenId) {
			// previous switch case not closed, close it
			(latestOpenContainerNode as SwitchCaseDeclarationNode).close();
		} else if (TokenId.SwitchDefaultDeclaration === latestOpenContainerNodeTokenId) {
			// incorrect case, case appears after default
			// previous switch default not closed, close it
			(latestOpenContainerNode as SwitchDefaultDeclarationNode).close();
		}
		return super.visit(char, offset);
	}
}