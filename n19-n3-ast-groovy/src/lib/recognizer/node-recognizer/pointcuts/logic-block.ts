import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {$Neaf} from '../../neaf-wrapper';
import {BlockCreationByNodeOptions, OneOfOnChildAppendedFunc, SharedNodePointcuts} from './shared';

class LogicBlockWithinBrace {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithToken.set(node, TokenId.RBrace);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
	static readonly createOnLBraceAppendedFuncForDeclaration = (tokenId: TokenId, bodyNodePointcuts?: BlockCreationByNodeOptions['blockNodePointcuts']): OneOfOnChildAppendedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (lastChildNode.tokenId !== TokenId.LBrace) {
				return false;
			}
			SharedNodePointcuts.createBlockByNode({
				node: lastChildNode,
				blockTokenId: tokenId,
				blockTokenType: TokenType.LogicBlock,
				blockNodePointcuts: bodyNodePointcuts ?? LogicBlockWithinBrace.extra,
				astRecognizer
			});
			return true;
		};
	};
}

class LogicBlockWithinParen {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithToken.set(node, TokenId.RParen);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
	static readonly createOnLParenAppendedFuncForDeclaration = (tokenId: TokenId, bodyNodePointcuts?: BlockCreationByNodeOptions['blockNodePointcuts']): OneOfOnChildAppendedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (lastChildNode.tokenId !== TokenId.LParen) {
				return false;
			}
			SharedNodePointcuts.createBlockByNode({
				node: lastChildNode,
				blockTokenId: tokenId,
				blockTokenType: TokenType.LogicBlock,
				blockNodePointcuts: bodyNodePointcuts ?? LogicBlockWithinParen.extra,
				astRecognizer
			});
			return true;
		};
	};
	static readonly createParenBlockOnLParenAppended = LogicBlockWithinParen.createOnLParenAppendedFuncForDeclaration(TokenId.ParenBlock);
}

export class LogicBlock {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Brace = LogicBlockWithinBrace;
	static readonly Paren = LogicBlockWithinParen;
}