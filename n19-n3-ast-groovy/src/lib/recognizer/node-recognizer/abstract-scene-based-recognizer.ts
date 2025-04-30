import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition} from '../types';
import {AbstractRecognizer} from './abstract-recognizer';

export type SceneBasedRecognizeFunc = (recognition: AstRecognition) => Optional<number>;

export abstract class AbstractSceneBasedRecognizer extends AbstractRecognizer {
	protected abstract getSceneBasedRecognizers(): Array<SceneBasedRecognizeFunc>;

	protected abstract doRecognize(recognition: AstRecognition): number;

	recognize(recognition: AstRecognition): number {
		let nextNodeIndex: Optional<number>;
		const recognizers = this.getSceneBasedRecognizers();
		for (let index = 0, count = recognizers.length; index < count; index++) {
			nextNodeIndex = recognizers[index](recognition);
			if (nextNodeIndex != null) {
				return nextNodeIndex;
			}
		}
		return this.doRecognize(recognition);
	}
}