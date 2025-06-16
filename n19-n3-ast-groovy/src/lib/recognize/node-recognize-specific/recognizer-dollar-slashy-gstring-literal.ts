import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {
	IdentifierRecognizeUtils,
	RetypedSplitIdentifierPart,
	SplitIdentifierPartIgnored
} from './recognizer-identifier';
import {NSLRecognizeUtils} from './recognizer-not-any-string-literal';
import {retokenizeWithDollarHeadedDSGL, UseUpInAirTextRetokenizeNodeWalker} from './retokenize';

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
	 * split by $
	 *
	 * for split text, there are 5 possibilities:
	 * 1. $ followed by another $, escape,
	 * 2. $ followed by identifier, gstring interpolation start,
	 * 3. $ followed by non-identifier, chars,
	 * 4. identifier
	 * 5. chars since the first char of text cannot be first char of identifier,
	 *
	 * and for last part is $, seek more.
	 *
	 * @ok 20250616
	 */
	static rehydrateIdentifierDSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// will not consume any node but given one
		const Walker = new UseUpInAirTextRetokenizeNodeWalker('', {
			node, nodeIndex, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});

		const parts = IdentifierRecognizeUtils.splitWith$(node.text, (part, index, parts) => {
			if (part[1] === TokenId.GStringInterpolationStartMark) {
				const next = parts[index - 1];
				if (next.type === TokenId.Identifier) {
					// do nothing, it is a start mark
					return part;
				} else if (next.type === TokenId.GStringInterpolationStartMark) {
					(next as RetypedSplitIdentifierPart).type = SplitIdentifierPartIgnored;
					return {text: '$$', type: TokenId.DollarSlashyGStringDollarEscape};
				} else {
					// next is chars or start mark, rehydrate to chars
					return {text: part[0], type: TokenId.Chars};
				}
			} else {
				return part;
			}
		});

		for (const part of parts) {
			Walker.setInAirText(part[0]);
			if (part[1] === TokenId.GStringInterpolationStartMark) {
				Walker.GStringInterpolationStartMark();
			} else if (part[1] === TokenId.DollarSlashyGStringDollarEscape) {
				Walker.DollarSlashyGStringDollarEscape();
			} else if (part[1] === TokenId.Identifier) {
				// can be identifier
				Walker.Identifier();
			} else if (part[1] === TokenId.Chars) {
				// cannot be identifier, then rehydrate to chars
				Walker.chars(part[0]);
			} else {
				Walker.andUse(retokenizeWithDollarHeadedDSGL);
				Walker.clearInAirText();
				break;
			}
		}

		const [newNodes, consumedNodeCount] = Walker.finalize();
		// replace node
		node.replaceTokenNatureAndText(newNodes[0].tokenId, newNodes[0].tokenType, newNodes[0].text);
		// replace the original nodes
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...(newNodes.slice(1)));
		return nodeIndex;
	};
}
