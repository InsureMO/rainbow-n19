import {Optional} from '@rainbow-n19/n3-ast';
import {Character} from '../../captor';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {
	retokenizeWithDollarHeadedDSGL,
	retokenizeWithDollarHeadedGL,
	retokenizeWithDollarHeadedSGL,
	UseUpInAirTextRetokenizeNodeWalker
} from './retokenize';

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
	 * works when parent is gstring literal, slashy gstring literal and dollar gstring literal.
	 *
	 * @ok 20250617
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

		const First$ = -1;
		const Last$ = -2;
		const Ignored$ = -3;
		type SplitPart = {
			text: string;
			type: TokenId.GStringInterpolationStartMark | TokenId.DollarSlashyGStringDollarEscape | TokenId.Identifier | TokenId.Chars | -1 | -2 | -3;
		}

		const Walker = new UseUpInAirTextRetokenizeNodeWalker('', {
			node, nodeIndex, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		text.split(/(\$)/)
			.filter(p => p.length !== 0)
			.map<SplitPart>((text, index, parts) => {
				if (text === '$') {
					if (index === 0) {
						return {text, type: First$};
					} else if (index === parts.length - 1) {
						return {text, type: Last$};
					} else {
						return {text, type: TokenId.GStringInterpolationStartMark};
					}
				} else if (Character.isJavaIdentifierPartAndNotIdentifierIgnorable(text.codePointAt(0))) {
					return {text, type: TokenId.Identifier};
				} else {
					return {text, type: TokenId.Chars};
				}
			})
			.map(({text, type}, index, parts) => {
				switch (type) {
					case TokenId.Identifier: {
						if (index === 0) {
							// identifier at index 0, rehydrate to chars
							// since if previous is some gstring interpolation start mark, parent should be gstring interpolation
							return {text, type: TokenId.Chars};
						} else if (parts[index - 1].type === Ignored$) {
							// previous part is ignored, which means previous is a dollar escape in dollar slashy gstring literal
							// rehydrate to chars
							return {text, type: TokenId.Chars};
						} else if (parts[index - 1].type === TokenId.Chars) {
							// previous part is chars, which means previous is a dollar after dollar escape or slash escape
							// and parent is dollar slashy gstring literal,
							// rehydrate to chars
							return {text, type: TokenId.Chars};
						} else {
							return {text, type};
						}
					}
					// @formatter:off
					case Last$:	case Ignored$:case  TokenId.Chars:  {
						// @formatter:on
						// do nothing
						return {text, type};
					}
					// @formatter:off
					case First$: case TokenId.GStringInterpolationStartMark: {
						// @formatter:on
						switch (currentParent.tokenId) {
							case TokenId.GStringLiteral: {
								// in gstring literal, single $ always be gstring interpolation start mark
								return {text, type};
							}
							case TokenId.SlashyGStringLiteral: {
								// in slashy gstring literal, $ is start mark only when it follows an identifier
								if (parts[index + 1].type === TokenId.Identifier) {
									// keep it
									return {text, type};
								} else {
									// not follows an identifier, rehydrate to chars
									return {text, type: TokenId.Chars};
								}
							}
							case TokenId.DollarSlashyGStringLiteral: {
								// in dollar slashy gstring literal, $ is start mark only when it follows an identifier
								// and if it follows another $, it is a dollar escape
								if (parts[index + 1]?.type === TokenId.GStringInterpolationStartMark) {
									// set next part as ignored
									parts[index + 1].type = Ignored$;
									return {text: '$$', type: TokenId.DollarSlashyGStringDollarEscape};
								}
								if (type === First$) {
									const children = currentParent.children;
									if (children.length > 1 && [TokenId.DollarSlashyGStringDollarEscape, TokenId.DollarSlashyGStringSlashEscape].includes(children[children.length - 1].tokenId)) {
										// $ after $/ and $$ still is $, rehydrate to chars
										return {text, type: TokenId.Chars};
									}
								} else if (parts[index - 1].type === Ignored$) {
									// previous is $$, and $ after $$ still is $, rehydrate to chars
									return {text, type: TokenId.Chars};
								}
								if (parts[index + 1].type === TokenId.Identifier) {
									// keep it
									return {text, type};
								} else {
									// not follows an identifier, rehydrate to chars
									return {text, type: TokenId.Chars};
								}
							}
							default: {
								throw new Error(`Parent[${currentParent.toString()}] is not supported.`);
							}
						}
					}
					default: {
						throw new Error(`Part type[text=${text}, type=${type}] is not supported.`);
					}
				}
			})
			.forEach(({text, type}) => {
				Walker.setInAirText(text);
				switch (type) {
					case TokenId.Identifier: {
						Walker.Identifier();
						break;
					}
					case TokenId.GStringInterpolationStartMark: {
						Walker.GStringInterpolationStartMark();
						break;
					}
					case TokenId.DollarSlashyGStringDollarEscape: {
						Walker.DollarSlashyGStringDollarEscape();
						break;
					}
					case TokenId.Chars: {
						Walker.chars(text);
						break;
					}
					case Last$: {
						switch (currentParent.tokenId) {
							case TokenId.GStringLiteral: {
								Walker.andUse(retokenizeWithDollarHeadedGL);
								break;
							}
							case TokenId.SlashyGStringLiteral: {
								Walker.andUse(retokenizeWithDollarHeadedSGL);
								break;
							}
							case TokenId.DollarSlashyGStringLiteral: {
								Walker.andUse(retokenizeWithDollarHeadedDSGL);
								break;
							}
							default: {
								throw new Error(`Parent[${currentParent.toString()}] is not supported.`);
							}
						}
						break;
					}
					case Ignored$: {
						// do nothing
						break;
					}
					default: {
						throw new Error(`Part type[text=${text}, type=${type}] is not supported.`);
					}
				}
			});

		const [newNodes, consumedNodeCount] = Walker.consumeNode().finalize();
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
	};
}
