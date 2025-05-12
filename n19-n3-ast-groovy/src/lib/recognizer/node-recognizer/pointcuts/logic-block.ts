import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {BlockCreationByNodeOptions, OneOfOnChildAppendedFunc, SharedNodePointcuts} from './shared';

class LogicBlockWithinBrace {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onChildAppended = SharedNodePointcuts.closeCurrentParentOnRBraceAppended;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO logic block node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, LogicBlockWithinBrace.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.clear(node);
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

	static readonly onChildAppended = SharedNodePointcuts.closeCurrentParentOnRParenAppended;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO logic block node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, LogicBlockWithinParen.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.clear(node);
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
}

export class LogicBlock {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Brace = LogicBlockWithinBrace;
	static readonly Paren = LogicBlockWithinParen;
}