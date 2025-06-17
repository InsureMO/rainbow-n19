import {NodeRehydrateFunc} from '../node-recognize';
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
	 * @ok 20250612
	 */
	static splitBackslashHeadedDSGL = NSLRecognizeUtils.splitBackslashHeadedNSL;

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 *
	 * @ok 20250612
	 */
	static splitDollarEscapeDSGL: NodeRehydrateFunc = DSGLRecognizeUtils.splitBackslashHeadedDSGL(retokenizeWithDollarHeadedDSGL);

	/**
	 * split \/ to \ and /, / needs check the following node.
	 *
	 * @ok 20250617
	 */
	static splitSlashyGStringSlashEscapeDSGL: NodeRehydrateFunc = DSGLRecognizeUtils.splitBackslashHeadedDSGL(retokenizeWithDivideHeadedDSGL);
}
