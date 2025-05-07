import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractRecognizer} from './abstract-recognizer';

/**
 * returns next node index when rehydration applied,
 * or return undefined when do nothing inside.
 */
export type RehydrateFunc = (recognition: AstRecognition) => Optional<number>;

export abstract class AbstractRehydratableRecognizer extends AbstractRecognizer {
	/**
	 * node is rehydrated, and append to parent as leaf
	 */
	protected static rehydrateToCharsWhenInString(recognition: AstRecognition): Optional<number> {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenType = currentParent.tokenType;
		if (currentParentTokenType === TokenType.StringLiteral) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			// append to parent
			astRecognizer.appendAsLeaf(node, true);
			return nodeIndex + 1;
		} else {
			return (void 0);
		}
	}

	/**
	 * node is rehydrated, and not append to parent, waiting for identifier recognizer to decide
	 */
	protected static rehydrateToIdentifierWhenAfterDotDirectly(recognition: AstRecognition): Optional<number> {
		const {node, nodeIndex} = recognition;
		const [, dotNodeIndex] = AbstractRehydratableRecognizer.isAfterDotDirectly(recognition);
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
		return [AbstractRehydratableRecognizer.rehydrateToCharsWhenInString];
	}

	protected abstract doRecognize(recognition: AstRecognition): number;

	recognize(recognition: AstRecognition): number {
		let nextNodeIndex: Optional<number>;
		const rehydrateFuncs = this.getRehydrateFunctions();
		for (let index = 0, count = rehydrateFuncs.length; index < count; index++) {
			nextNodeIndex = rehydrateFuncs[index](recognition);
			if (nextNodeIndex != null) {
				return nextNodeIndex;
			}
		}
		return this.doRecognize(recognition);
	}
}