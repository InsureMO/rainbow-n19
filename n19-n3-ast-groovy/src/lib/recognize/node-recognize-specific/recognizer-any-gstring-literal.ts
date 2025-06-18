import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {retokenizeIdentifiableTextWith$AGL} from './retokenize';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
 * AGL: When Parent is Any GString Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class AGLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split given identifier text with $,
	 * 1. for identifier part,
	 * 1.1. if it is the first part, rehydrate to chars,
	 * 1.2. if previous is a gstring interpolation start mark, keep identifier,
	 * 1.3. if previous is a chars, rehydrate to chars,
	 * 2. for chars part,
	 *
	 * works when parent is any gstring literal.
	 *
	 * @done 20250617
	 */
	static rehydrateIdentifierAGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		const text = node.text;
		// check if $ exists
		const first$Index = text.indexOf('$');
		if (first$Index === -1) {
			// no $, and since parent is gl/sgl/dsgl, not gstring interpolation,
			// simpy rehydrate to chars
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return nodeIndex;
		}

		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;
		const previousSibling = children[children.length - 1];

		const [newNodes, consumedNodeCount] = retokenizeIdentifiableTextWith$AGL(currentParent.tokenId, previousSibling.tokenId, {
			node, nodeIndex, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
