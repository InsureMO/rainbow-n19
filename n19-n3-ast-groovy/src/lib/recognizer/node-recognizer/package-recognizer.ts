import {TokenId} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractInStringRecognizer} from './abstract-in-string-recognizer';

export class KwPackageRecognizer extends AbstractInStringRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PACKAGE;
	}

	protected doRecognize(recognition: AstRecognition): number {
		// TODO
		return 0;
	}
}
