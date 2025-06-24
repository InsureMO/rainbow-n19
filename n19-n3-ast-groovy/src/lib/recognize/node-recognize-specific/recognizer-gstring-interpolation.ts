import {TokenId} from '../../tokens';
import {AstRecognition} from '../node-recognize';

export class GStringInterpolationRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static startsWithLBrace(recognition: AstRecognition): boolean {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.GStringInterpolation
			&& currentParent.children[0]?.tokenId === TokenId.GStringInterpolationLBraceStartMark;
	}
}
