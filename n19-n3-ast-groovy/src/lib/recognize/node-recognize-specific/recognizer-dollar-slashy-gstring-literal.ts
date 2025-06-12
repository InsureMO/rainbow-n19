import {NodeRehydrateFunc} from '../node-recognize';
import {RetokenizeAstRecognition, RetokenizedNodes} from './recognizer-common';
import {NSLRecognizeUtils} from './recognizer-not-any-string-literal';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
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
	 * retokenize tokens with a $ as headed char.
	 */
	static retokenizeWithDollarHeadedDSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithDollarHeadedDSGL not supported yet'; // TODO Not supported yet
	};

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
	static splitDollarEscapeDSGL: NodeRehydrateFunc = DSGLRecognizeUtils.splitBackslashHeadedDSGL(DSGLRecognizeUtils.retokenizeWithDollarHeadedDSGL);
}
