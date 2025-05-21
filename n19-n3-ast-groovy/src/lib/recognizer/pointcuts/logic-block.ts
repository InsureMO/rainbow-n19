import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {NodeAsParentDeclaration} from '../util';
import {$Neaf} from './neaf';

class LogicBlockWithinBrace {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.EndWithToken(TokenId.RBrace);
	};
	/**
	 * based on {@link $Neaf.TakeLBraceAs}, will not check the node
	 */
	static readonly createOnTakeLBraceAs = (recognition: AstRecognition): Optional<NodeAsParentDeclaration> => {
		const {astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const tokenIdOrTakeFunc = $Neaf.TakeLBraceAs.get(currentParent);
		if (tokenIdOrTakeFunc == null) {
			return (void 0);
		}

		const tokenId = (typeof tokenIdOrTakeFunc === 'function')
			? tokenIdOrTakeFunc(astRecognizer)
			: tokenIdOrTakeFunc;
		if (tokenId == null) {
			return (void 0);
		}

		return [tokenId, TokenType.LogicBlock];
	};
}

class LogicBlockWithinParen {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.EndWithToken(TokenId.RParen);
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