import {TokenId} from '../../../tokens';
import {AstRecognition, NodeRecognizer} from '../../types';

export abstract class AbstractRecognizer implements NodeRecognizer {
	abstract acceptTokenId(): TokenId;

	abstract recognize(recognition: AstRecognition): number;
}
