import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition} from '../../types';
import {RecognizeRehydration} from '../shared';
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
	 * default returns in-string recognizer
	 */
	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [RecognizeRehydration.rehydrateToCharsWhenInString];
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