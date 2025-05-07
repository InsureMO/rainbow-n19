import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractRecognizer} from './abstract-recognizer';

/**
 * 1. return undefined when no rehydration applied,
 * 2. return current node index if only rehydration applied and no node appended to ast,
 * 3. return corresponding node index, typically somewhere after given node index,
 *    when original nodes have been consumed, rehydrated and appended to ast.
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
			return nodeIndex;
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