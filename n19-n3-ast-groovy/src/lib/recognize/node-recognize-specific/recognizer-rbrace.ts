import {TokenId} from '../../tokens';
import {AstRecognition, DoRehydrateWhen} from '../node-recognize';

export class RBraceRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static parentIsGStringInterpolationAndStartsWithLBrace: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.GStringInterpolation
			&& currentParent.children[0]?.tokenId === TokenId.GStringInterpolationLBraceStartMark;
	};
}
