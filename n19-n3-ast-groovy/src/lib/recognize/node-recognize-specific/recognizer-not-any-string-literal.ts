import {Optional} from '@rainbow-n19/n3-ast';
import {Char} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {
	RecognizeCommonUtils,
	Retokenize,
	RetokenizeAstRecognition,
	RetokenizedNodes,
	RetokenizeNodeWalker
} from './recognizer-common';
import {DSGLRecognizeUtils} from './recognizer-dollar-slashy-gstring-literal';
import {SGLRecognizeUtils} from './recognizer-slashy-gstring-literal';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class NSLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * retokenize tokens with an integral text as headed char(s).
	 */
	static retokenizeWithIntegralTextHeadedNSL = (integralText: string, recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithIntegralTextHeadedNSL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an identifiable text as headed char(s).
	 *
	 * seek following nodes, when
	 * 1. token type is identifier, keyword, boolean literal, primitive types, append to given identifier text, and seek more,
	 * 2. token id is in, instanceof, append to given identifier text, and seek more,
	 * 3. token id is numeric base part,
	 * 3.1. first char of numeric is a dot, end and use in-air identifier text to create an identifier node,
	 * 3.2. has dot,
	 * 3.2.1. append part before dot to given identifier text, and use it to create an identifier node,
	 * 3.2.2. and use part starts with dot to create a new numeric base node,
	 * 3.3. no dot and has exponent sign,
	 * 3.3.1. append part before exponent sign to given identifier text, and use it to create an identifier node,
	 * 3.3.2. and use the exponent sign to create a new operator node,
	 * 3.3.3. when has suffix,
	 * 3.3.3.1. and use part after the exponent sign and before suffix, to create a new numeric base part node,
	 * 3.3.3.2. and set identifier text to suffix, and seek more,
	 * 3.3.4. when no suffix, call retokenize with integral headed NSL, and return the combined result.
	 * 3.4. no dot and no exponent sign, append to given identifier text, and seek more,
	 * 4. end and use in-air identifier text to create an identifier node,
	 *
	 * @ok 20250611
	 */
	static retokenizeWithIdentifiableTextHeadedNSL = (identifiableText: string, recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		const Walker = new class extends RetokenizeNodeWalker {
			protected finalizeNodeOnInAirText(): this {
				return this.Identifier();
			}

			Operator(operator: Char): this {
				return this.createNode(operator === '+' ? TokenId.Add : TokenId.Subtract, TokenType.Operator, operator);
			}
		}(identifiableText, recognition);

		while (Walker.hasAvailableNode) {
			if ([TokenType.Identifier, TokenType.PrimitiveType, TokenType.Keyword, TokenType.BooleanLiteral].includes(Walker.currentNode.tokenType)
				|| [TokenId.IN, TokenId.INSTANCEOF].includes(Walker.currentNode.tokenId)) {
				// combine with given identifier text, continue
				Walker.consumeNodeAndText();
			} else if (TokenId.NumericBasePart === Walker.currentNode.tokenId) {
				const nodeText = Walker.currentNode.text;
				const dotIndex = nodeText.indexOf('.');
				if (dotIndex === 0) {
					// dot is first char, cannot combine with given identifier text
					Walker.Identifier();
					break;
				}

				if (dotIndex !== -1) {
					// dot is not first char, and according to the capture logic, dot will not be the last char
					Walker.Identifier(nodeText.slice(0, dotIndex));
					Walker.NumericBasePart(nodeText.slice(dotIndex));
					break;
				} else {
					let exponentSignIndex = nodeText.indexOf('+');
					if (exponentSignIndex === -1) {
						exponentSignIndex = nodeText.indexOf('-');
					}
					if (exponentSignIndex === -1) {
						// no dot, no exponent sign, combine with given identifier text
						// accumulate text, and move to next node
						Walker.consumeNodeAndText();
					} else {
						Walker.Identifier(nodeText.slice(0, exponentSignIndex));
						Walker.Operator(nodeText.slice(exponentSignIndex, exponentSignIndex + 1));
						// check has number suffix or not
						const lastChar = nodeText[nodeText.length - 1];
						const lastCharCodePoint = lastChar.codePointAt(0);
						// 0 -> 48, 9 -> 57
						if (lastCharCodePoint < 48 || lastCharCodePoint > 57) {
							// it is suffix char
							Walker.NumericBasePart(nodeText.slice(exponentSignIndex + 1, nodeText.length - 1));
							// reset identifier text and position, and move to next node
							Walker.setInAirText(lastChar);
							Walker.consumeNode();
						} else {
							// no suffix
							Walker.consumeNode().andUse(recognition => {
								return NSLRecognizeUtils.retokenizeWithIntegralTextHeadedNSL(nodeText.slice(exponentSignIndex + 1), recognition);
							});
							break;
						}
					}
				}
			} else {
				// cannot combine with given identifier text
				Walker.Identifier();
				break;
			}
		}
		return Walker.finalize();
	};

	/**
	 * split \.... to \ and .....
	 *
	 * @ok 20250611
	 */
	static splitBackslashHeadedNSL = (retokenize: Retokenize): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
			// replace node with \
			node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, '\\');
			// retokenize from next node
			const [newNodes, consumedNodeCount] = retokenize({
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
				compilationUnit, astRecognizer,
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			});
			// replace the original nodes
			nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
			return nodeIndex;
		};
	};

	/**
	 * split \b to \ and b, b needs check the following node.
	 *
	 * @ok 20250611
	 */
	static splitBackspaceEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL('b', recognition);
	});

	/**
	 * split \f to \ and f, f needs check the following node.
	 *
	 * @ok 20250611
	 */
	static splitFormFeedEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL('f', recognition);
	});

	/**
	 * split \n to \ and n, n needs check the following node.
	 *
	 * @ok 20250611
	 */
	static splitNewlineEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL('n', recognition);
	});

	/**
	 * split \r to \ and r, r needs check the following node.
	 *
	 * @ok 20250611
	 */
	static splitCarriageReturnEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL('r', recognition);
	});

	/**
	 * split \t to \ and t, t needs check the following node.
	 *
	 * @ok 20250611
	 */
	static splitTabulationEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL('t', recognition);
	});

	private static buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize = (headText: string) => {
		const defs = headText[0] === '\''
			? {c1: '\'', c2: '\'\'', c3: '\'\'\'', sl: TokenId.StringQuotationMark, ml: TokenId.StringQuotationMarkML}
			: {c1: '"', c2: '""', c3: '"""', sl: TokenId.GStringQuotationMark, ml: TokenId.GStringQuotationMarkML};

		return (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
			const Walker = new class extends RetokenizeNodeWalker {
				protected finalizeNodeOnInAirText(): this {
					switch (this.inAirText) {
						case defs.c1:
							return this.SLMark();
						case defs.c2:
							return this.SLMark().SLMark();
						default:
							throw new Error(`In-air text[${this.inAirText}] is not supported.`);
					}
				}

				SLMark(): this {
					return this.createNode(defs.sl, TokenType.Mark, defs.c1);
				}

				MLMark() {
					return this.createNode(defs.ml, TokenType.Mark, defs.c3);
				}
			}(headText, recognition);

			// to find the node which can be combined with the beginning quotation mark
			while (Walker.hasAvailableNode) {
				const currentNodeTokenId = Walker.currentNode.tokenId;
				if (currentNodeTokenId === defs.sl) {
					if (Walker.inAirText === defs.c2) {
						Walker.MLMark();
					} else {
						// in-air text is '
						Walker.appendToInAirText(defs.c1);
					}
					Walker.consumeNode();
				} else if (currentNodeTokenId === defs.ml) {
					Walker.MLMark();
					// in-air text not change
					Walker.consumeNode();
				} else {
					break;
				}
			}

			return Walker.finalize();
		};
	};

	/**
	 * retokenize tokens with an ' as headed char.
	 *
	 * @ok 20250612
	 */
	static retokenizeWithSingleQuoteHeadedNSL = NSLRecognizeUtils.buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('\'');

	/**
	 * retokenize tokens with an '' as headed chars.
	 *
	 * @ok 20250612
	 */
	static retokenizeWith2SingleQuotesHeadedNSL = NSLRecognizeUtils.buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('\'\'');

	/**
	 * split \' to \ and ', ' needs check the following node.
	 *
	 * @ok 20250612
	 */
	static splitSingleQuoteEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL(NSLRecognizeUtils.retokenizeWithSingleQuoteHeadedNSL);

	/**
	 * retokenize tokens with an " as headed char.
	 *
	 * @ok 20250612
	 */
	static retokenizeWithDoubleQuoteHeadedNSL = NSLRecognizeUtils.buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('"');

	/**
	 * retokenize tokens with an "" as headed chars.
	 *
	 * @ok 20250612
	 */
	static retokenizeWith2DoubleQuotesHeadedNSL = NSLRecognizeUtils.buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('""');

	/**
	 * split \" to \ and ", " needs check the following node.
	 *
	 * @ok 20250612
	 */
	static splitDoubleQuoteEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL(NSLRecognizeUtils.retokenizeWithDoubleQuoteHeadedNSL);

	/**
	 * retokenize tokens with a $ as headed char.
	 *
	 * token starts with $ must be one of following,
	 * - identifier,
	 * - dsgl start mark,
	 * - dsgl dollar escape,
	 * - dsgl slash escape (same as dsgl start mark),
	 * - gstring interpolation start mark,
	 * - gstring interpolation start lbrace mark.
	 *
	 * in NSL scenario, only identifier and dsgl start mark are possible.
	 * for identifier, $ also can be start char of identifier, so it is just a special case of retokenize with identifiable text.
	 * which means, just to figure out that the next node is started with / or not,
	 * - if it is, create a dsgl start mark, and handle the rest text of next node,
	 * - if not, call retokenize with identifiable text headed NSL and return.
	 *
	 * @ok 20250612
	 */
	static retokenizeWithDollarHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		const Walker = new class extends RetokenizeNodeWalker {
			protected finalizeNodeOnInAirText(): this {
				return this;
			}

			DSGLStartMark(): this {
				return this.createNode(TokenId.DollarSlashyGStringQuotationStartMark, TokenType.Mark, '$/');
			}
		}('$', recognition);

		switch (Walker.currentNode?.tokenId) {
			// -> //, and an optional part
			case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
			case TokenId.Divide: // -> $/
				return Walker.DSGLStartMark().consumeNode().finalize();
			case TokenId.DollarSlashyGStringQuotationEndMark: // -> $/ + $
				return Walker.DSGLStartMark().consumeNode().andUse(recognition => {
					return DSGLRecognizeUtils.retokenizeWithDollarHeadedDSGL(recognition);
				}).finalize();
			case TokenId.DivideAssign: // -> $/ + =
				return Walker.DSGLStartMark().consumeNode().chars('=').finalize();
			case TokenId.SingleLineCommentStartMark: // -> $/ + /
				return Walker.DSGLStartMark().consumeNode().chars('/').finalize();
			case TokenId.MultipleLinesCommentStartMark: // -> $/ + *
				return Walker.DSGLStartMark().consumeNode().chars('*').finalize();
			default:
				return NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL('$', recognition);
		}
	};

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 *
	 * @ok 20250612
	 */
	static splitDollarEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL(NSLRecognizeUtils.retokenizeWithDollarHeadedNSL);

	/**
	 * split \... to \ and ..., ... needs check the following node. ... is numbers from 0 to 7 with a length of 0 to 3 digits.
	 *
	 * @ok 20250612
	 */
	static splitOctalEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node} = recognition;
		return NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
			return NSLRecognizeUtils.retokenizeWithIntegralTextHeadedNSL(node.text.slice(1), recognition);
		})(recognition);
	};

	/**
	 * split \u.... to \ and u...., u.... needs check the following node. u.... is u and numbers from 0-9a-fA-F with a length of 4 digits.
	 *
	 * @ok 20250612
	 */
	static splitUnicodeEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node} = recognition;
		return NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
			return NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL(node.text.slice(1), recognition);
		})(recognition);
	};

	/**
	 * split /$ to / and $, needs to check the / is start of slashy gstring literal or just a divide, and $ needs to seek more following nodes
	 *
	 * @ok 20250612
	 */
	static splitDollarSlashyGStringQuotationEndMarkNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		const [nearestUnignorableNode, nearestUnignorableNodeIndex] = RecognizeCommonUtils.getNearestPreviousUnignorableNode(recognition);

		// no like other operators, when no unignorable node before divide operator in the same line,
		// means the divide operator is slashy gstring start mark
		// e.g. the following statements are assign 1 to x and a slashy gstring literal which not ended
		// def x = 1
		//     / 2
		// e.g. the following statement is assign 2 to x
		// def x = 1
		//     * 2
		// basically, the divide operator will be treated as slashy gstring start mark when
		// 1. unignorable node is not in same line,
		// 2. unignorable node is a dot, such as this./x/ is to visit the x of this,
		// 3. unignorable node is any operator, such as this * /x/ is this multiple a slashy gstring literal
		if (nearestUnignorableNodeIndex !== -1
			&& nearestUnignorableNode.startLine === node.startLine
			&& nearestUnignorableNode.tokenId !== TokenId.Dot
			&& nearestUnignorableNode.tokenType !== TokenType.Operator) {
			// has node in same line, before me
			// the previous unignorable node is not dot or any operator
			// split to divide and more
			node.replaceTokenNatureAndText(TokenId.Divide, TokenType.Operator, '/');
			const [newNodes, consumedNodeCount] = NSLRecognizeUtils.retokenizeWithDollarHeadedNSL({
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
				compilationUnit, astRecognizer,
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			});
			nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
			return nodeIndex;
		} else {
			// start of slashy gstring literal
			node.replaceTokenNatureAndText(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
			const [newNodes, consumedNodeCount] = SGLRecognizeUtils.retokenizeWithDollarHeadedSGL({
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
				compilationUnit, astRecognizer,
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			});
			nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
			return nodeIndex;
		}
	};

	/**
	 * split \/ to \ and /, / after \ and not in any string literal, always treated as slashy gstring quotation mark
	 *
	 * @ok 20250611
	 */
	static splitSlashyGStringSlashEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace node with \
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, '\\');
		// treated the 2nd / as slashy gstring quotation mark
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark, text: '/',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * seek more following nodes to combine this $$, or it is an identifier
	 *
	 * @ok 20250612
	 */
	static rehydrateDollarSlashyGStringDollarEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
		const [newNodes, consumedNodeCount] = NSLRecognizeUtils.retokenizeWithIdentifiableTextHeadedNSL('$$', {
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 2, startLine: node.startLine, startColumn: node.startColumn + 2
		});
		if (consumedNodeCount === 0) {
			node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
		} else {
			nodes.splice(nodeIndex, 1 + consumedNodeCount, ...newNodes);
		}
		return nodeIndex;
	};

	/**
	 * split to $ and {,
	 */
	static splitGStringInterpolationLBraceStartMarkNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace node with \
		node.replaceTokenNatureAndText(TokenId.Identifier, TokenType.Identifier, '$');
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.LBrace, tokenType: TokenType.Separator,
			text: '{',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * retokenize tokens with a * as headed char.
	 */
	static retokenizeWithMultipleHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		const Walker = new class extends RetokenizeNodeWalker {
			protected finalizeNodeOnInAirText(): this {
				return this;
			}

			SpreadDot(): this {
				return this.createNode(TokenId.SpreadDot, TokenType.Operator, '*.');
			}

			Power(): this {
				return this.createNode(TokenId.Power, TokenType.Operator, '**');
			}

			MultipleAssign(): this {
				return this.createNode(TokenId.MultipleAssign, TokenType.Operator, '*=');
			}

			Multiple(): this {
				return this.createNode(TokenId.Multiple, TokenType.Operator, '*');
			}

			SlashyGStringQuotationMark(): this {
				return this.createNode(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
			}
		}('*', recognition);

		// to find the node which can be combined with the beginning quotation mark
		switch (Walker.currentNode?.tokenId) {
			case TokenId.Dot: // -> *.
				return Walker.SpreadDot().consumeNode().finalize();
			case TokenId.SpreadDot: // -> ** + .
				return Walker.Power().consumeNode().andUse(NSLRecognizeUtils.retokenizeWithDotHeadedNSL).finalize();
			case TokenId.Power: // -> ** + *
				return Walker.Power().consumeNode().andUse(NSLRecognizeUtils.retokenizeWithMultipleHeadedNSL).finalize();
			case TokenId.PowerAssign: // -> ** + *=
				return Walker.Power().consumeNode().MultipleAssign().finalize();
			case TokenId.Multiple: // -> **
				return Walker.Power().consumeNode().finalize();
			case TokenId.MultipleAssign: // -> ** + =
				return Walker.Power().consumeNode().andUse(NSLRecognizeUtils.retokenizeWithAssignHeadedNSL).finalize();
			case TokenId.MultipleLinesCommentEndMark: // -> ** + /
				return Walker.Power().consumeNode().SlashyGStringQuotationMark().finalize();
			case TokenId.Divide: // -> * + /, / should be treated as slashy gstring quotation mark
				return Walker.Multiple().finalize();
			case TokenId.Assign: // -> *=
				return Walker.MultipleAssign().consumeNode().finalize();
			case TokenId.NumericBasePart: {// if starts with ., then -> *. + ....
				const text = Walker.currentNode.text;
				if (text.startsWith('.')) {
					// a decimal literal, move the . to
					return Walker.SpreadDot().consumeNode().NumericBasePart(text.slice(1)).finalize();
				} else {
					return Walker.Multiple().finalize();
				}
			}
			default:
				return Walker.Multiple().finalize();
		}
	};

	/**
	 * retokenize tokens with a . as headed char.
	 */
	static retokenizeWithDotHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithDotHeadedNSL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a = as headed char.
	 */
	static retokenizeWithAssignHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithAssignHeadedNSL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a == as headed chars.
	 */
	static retokenizeWithEqualHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithEqualHeadedNSL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a ~ as headed char.
	 */
	static retokenizeWithBitnotHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithBitnotHeadedNSL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a =~ as headed chars.
	 */
	static retokenizeWithRegexFindHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithRegexFindHeadedNSL not supported yet'; // TODO Not supported yet
	};
}
