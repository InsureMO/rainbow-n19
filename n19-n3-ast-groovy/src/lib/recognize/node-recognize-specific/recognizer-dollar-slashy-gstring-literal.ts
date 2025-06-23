import {TokenId} from '../../tokens';
import {AstRecognition} from '../node-recognize';
import {NSLRecognizeUtils} from './recognizer-not-any-string-literal';
import {retokenizeWithDivideHeadedDSGL, retokenizeWithDollarHeadedDSGL} from './retokenize';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
 * AGL: When Parent is Any GString Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class DSGLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split \.... to \ and .....
	 *
	 * @done 20250612
	 */
	static readonly splitBackslashHeadedDSGL = NSLRecognizeUtils.splitBackslashHeadedNSL;

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 *
	 * @done 20250612
	 */
	static readonly splitDollarEscapeDSGL = DSGLRecognizeUtils.splitBackslashHeadedDSGL(retokenizeWithDollarHeadedDSGL);

	/**
	 * split \/ to \ and /, / needs check the following node.
	 *
	 * @done 20250617
	 */
	static readonly splitSlashyGStringSlashEscapeDSGL = DSGLRecognizeUtils.splitBackslashHeadedDSGL(retokenizeWithDivideHeadedDSGL);

	/**
	 * returns true when
	 * 1. parent is dollar slashy gstring literal,
	 * 2. previous is slashy escape,
	 * 3. or previous is dollar escape and no gstring interpolation before me
	 */
	static shouldIgnoreInterpolationStartMarkDSGL(recognition: AstRecognition): boolean {
		const {astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenId !== TokenId.DollarSlashyGStringLiteral) {
			return false;
		}

		const children = currentParent.children;
		const previousSibling = children[children.length - 1];
		if (previousSibling.tokenId === TokenId.DollarSlashyGStringSlashEscape) {
			return true;
		}

		if (previousSibling.tokenId !== TokenId.DollarSlashyGStringDollarEscape) {
			return false;
		}

		// noinspection RedundantIfStatementJS
		if (children.some(child => child.tokenId === TokenId.GStringInterpolation)) {
			return false;
		} else {
			return true;
		}
	}
}
