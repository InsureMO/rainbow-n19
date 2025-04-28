import {TokenId} from '../../tokens';
import {AstRecognition, NodeRecognizer} from '../types';

export class ScriptCommandRecognizer implements NodeRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ScriptCommandStartMark;
	}

	recognize(recognition: AstRecognition): number {
		// TODO
		return 0;
	}
}
