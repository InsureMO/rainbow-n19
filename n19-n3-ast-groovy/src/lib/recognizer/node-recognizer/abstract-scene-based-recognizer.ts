import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractRecognizer} from './abstract-recognizer';

/**
 * returns next node index when rehydration applied,
 * or return undefined when do nothing inside.
 */
export type RehydrateFunc = (recognition: AstRecognition) => Optional<number>;

export abstract class AbstractSceneBasedRecognizer extends AbstractRecognizer {
	protected abstract doRecognize(recognition: AstRecognition): number;

	protected static rehydrateToCharsWhenInString(recognition: AstRecognition): Optional<number> {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenType = currentParent.tokenType;
		if (currentParentTokenType === TokenType.StringLiteral) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return nodeIndex + 1;
		} else {
			return (void 0);
		}
	}

	protected static rehydrateToIdentifierWhenAfterDotDirectly(recognition: AstRecognition): Optional<number> {
		const {node, nodeIndex} = recognition;
		const [, dotNodeIndex] = AbstractSceneBasedRecognizer.isAfterDotDirectly(recognition);
		if (dotNodeIndex === -1) {
			return (void 0);
		} else {
			// kind of property name, it is an identifier
			node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
			// do nothing, will handle by identifier recognizer
			return nodeIndex;
		}
	}

	/**
	 * default returns in-string recognizer
	 */
	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [AbstractSceneBasedRecognizer.rehydrateToCharsWhenInString];
	}

	recognize(recognition: AstRecognition): number {
		let nextNodeIndex: Optional<number>;
		const recognizers = this.getRehydrateFunctions();
		for (let index = 0, count = recognizers.length; index < count; index++) {
			nextNodeIndex = recognizers[index](recognition);
			if (nextNodeIndex != null) {
				return nextNodeIndex;
			}
		}
		return this.doRecognize(recognition);
	}
}