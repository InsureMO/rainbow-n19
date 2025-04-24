import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {DefaultNode, SwitchCaseDeclarationNode, SwitchDefaultDeclarationNode} from '../../node';
import {TokenId} from '../../tokens';
import {Char} from '../types';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * could be
 * 1. modifier of interface method,
 * 2. or default route of switch block.
 */
export class KwDefaultCaptor extends AbstractKeywordCaptor<SwitchDefaultDeclarationNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Default, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SwitchDefaultDeclarationNode> {
		return SwitchDefaultDeclarationNode;
	}

	protected createChildAstNodes(_node: SwitchDefaultDeclarationNode, _char: Char, offset: number): number {
		this.createAndAppendToAst(DefaultNode, {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
	}

	visit(char: Char, offset: number): boolean {
		const latestOpenContainerNode = this.latestOpenContainerNode();
		const latestOpenContainerNodeTokenId = latestOpenContainerNode.tokenId;
		if ([TokenId.SwitchDeclaration, TokenId.SwitchBody].includes(latestOpenContainerNodeTokenId)) {
			return super.visit(char, offset);
		} else if ([TokenId.SwitchCaseDeclaration].includes(latestOpenContainerNodeTokenId)) {
			(latestOpenContainerNode as SwitchCaseDeclarationNode).close();
			return super.visit(char, offset);
		} else {
			// keyword default node only
			this.createAndAppendToAst(DefaultNode, {text: this.keyword, startOffset: offset});
			this.moveCursorTo(offset + this.charsLength);
			return true;
		}
	}
}