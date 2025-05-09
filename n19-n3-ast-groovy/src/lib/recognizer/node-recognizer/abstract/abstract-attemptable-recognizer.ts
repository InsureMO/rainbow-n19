import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition} from '../../types';
import {AbstractRecognizer} from './abstract-recognizer';

export abstract class AbstractAttemptableRecognizer extends AbstractRecognizer {
	/**
	 * return node index if recognized, otherwise returns undefined
	 */
	protected abstract attemptToRecognize(recognition: AstRecognition): Optional<number>

	/**
	 * Perform the recognition after the attempted recognition fails.
	 */
	protected abstract doRecognize(recognition: AstRecognition): number;

	recognize(recognition: AstRecognition): number {
		const nodeIndex = this.attemptToRecognize(recognition);
		if (nodeIndex != null) {
			return nodeIndex;
		}
		return this.doRecognize(recognition);
	}
}
