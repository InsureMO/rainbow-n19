import {AstUtils} from '../ast-utils';
import {TokenId, TokenType} from '../tokens';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptor, AstNodeCaptorCharChecker, AstNodeCaptorCharFuncCheck, AstNodeCaptorCharsChecker} from './captor';
import {Character} from './character';
import {IdentifierCaptor} from './identifier-captor';
import {Char} from './types';
import {isArrayCheck, isCharCheck, isFuncCheck, isMultiChecks} from './util';

export class CaptorDelegate {
	private readonly _byCharMap: Record<Char, AstNodeCaptor | CaptorDelegate> = {};
	private readonly _byFunc: Array<[AstNodeCaptorCharFuncCheck, AstNodeCaptor | CaptorDelegate]> = [];
	private _fallback?: AstNodeCaptor;

	protected standardizeCheckers(captor: AstNodeCaptor): Array<AstNodeCaptorCharsChecker> {
		const checkers = captor.checkers();
		const type = typeof checkers;
		if (isCharCheck(checkers, type)) {
			return [[checkers]];
		} else if (isFuncCheck(checkers, type)) {
			return [[checkers]];
		} else if (isArrayCheck(checkers)) {
			// When dealing with scenarios where multiple checkers definitions are involved,
			// the type definition actually overrides the single multi-steps checker definition.
			// Therefore, manual identification is required here.
			if (isMultiChecks(checkers)) {
				return checkers.map((checker: AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker) => Array.isArray(checker) ? checker : [checker]);
			} else {
				return [checkers as AstNodeCaptorCharsChecker];
			}
		} else {
			throw new Error(`Unsupported capture checker type of captor[${captor.constructor.name}].`);
		}
	}

	registerFallback(captor: AstNodeCaptor): void {
		if (this._fallback != null) {
			throw new Error(`Conflict in capture check between two captors [${this._fallback.constructor.name}] and [${captor.constructor.name}].`);
		}
		this._fallback = captor;
	}

	protected registerCaptorByCharsChecker(captor: AstNodeCaptor,
	                                       checker: AstNodeCaptorCharsChecker,
	                                       index: number = 0): void {
		const usingCheckers = checker.slice(index);
		const [first, ...rest] = usingCheckers;
		const type = typeof first;
		switch (true) {
			case isCharCheck(first, type): {
				// find captors which share same char
				const exists = this._byCharMap[first];
				if (exists != null) {
					if (exists instanceof CaptorDelegate) {
						// the char has already been registered by at least one other captor,
						// and the capture check for one of the existing Captors that contains at least two or more chars.
						if (rest.length === 0) {
							// register me as the fallback of exists delegate
							exists.registerFallback(captor);
						} else {
							// register me to existing delegate
							exists.registerCaptorByCharsChecker(captor, checker, index + 1);
						}
					} else {
						// this char already registered by another captor
						if (rest.length === 0) {
							// the capture check of another captor is exactly same as given one
							// leading conflict, throw error
							throw new Error(`Conflict in capture check between two captors [${exists.constructor.name}] and [${captor.constructor.name}].`);
						} else {
							// create a delegate and register me to it
							// using the exists as fallback
							const delegate = new CaptorDelegate();
							delegate.registerCaptorByCharsChecker(captor, checker, index + 1);
							delegate.registerFallback(exists);
							this._byCharMap[first] = delegate;
						}
					}
				} else {
					// not exists
					if (rest.length === 0) {
						// my check ends by this char, register captor directly
						this._byCharMap[first] = captor;
					} else {
						// my check has more chars, create a delegate and register me to it
						const delegate = new CaptorDelegate();
						delegate.registerCaptorByCharsChecker(captor, checker, index + 1);
						this._byCharMap[first] = delegate;
					}
				}
				break;
			}
			case isFuncCheck(first, type): {
				// compare function
				const exists = this._byFunc.find(([f]) => f === first);
				if (exists != null) {
					const [, existsCaptorOrDelegate] = exists;
					if (existsCaptorOrDelegate instanceof CaptorDelegate) {
						// the function has already been registered by at least one other captor,
						// and the capture check for one of the existing Captors that contains at least two or more chars.
						if (rest.length === 0) {
							// register me as the fallback of exists delegate
							existsCaptorOrDelegate.registerFallback(captor);
						} else {
							// register me to existing delegate
							existsCaptorOrDelegate.registerCaptorByCharsChecker(captor, checker, index + 1);
						}
					} else {
						// this char already registered by another captor
						if (rest.length === 0) {
							// the capture check of another captor is exactly same as given one
							// leading conflict, throw error
							throw new Error(`Conflict in capture check between two captors [${existsCaptorOrDelegate.constructor.name}] and [${captor.constructor.name}].`);
						} else {
							// create a delegate and register me to it
							// using the exists as fallback
							const delegate = new CaptorDelegate();
							delegate.registerCaptorByCharsChecker(captor, checker, index + 1);
							delegate.registerFallback(existsCaptorOrDelegate);
							this._byFunc.push([first, delegate]);
						}
					}
				} else {
					if (rest.length === 0) {
						// my check ends by this function, register captor directly
						this._byFunc.push([first, captor]);
					} else {
						// my check has more, create a delegate and register me to it
						const delegate = new CaptorDelegate();
						delegate.registerCaptorByCharsChecker(captor, checker, index + 1);
						this._byFunc.push([first, delegate]);
					}
				}
				break;
			}
			default:
				throw new Error(`Unsupported checkers type of captor[${captor.constructor.name}].`);
		}
	}

	register(captor: AstNodeCaptor): void {
		this.standardizeCheckers(captor)
			.forEach(checker => this.registerCaptorByCharsChecker(captor, checker));
	}

	find(char: Char, offset: number, text: string, tokenizer: AstTokenizer): AstNodeCaptor {
		const captorOrDelegates: Array<AstNodeCaptor | CaptorDelegate> = [];

		// find by char
		const foundByChar = this._byCharMap[char];
		if (foundByChar != null) {
			captorOrDelegates.push(foundByChar);
		}

		// find by checker
		this._byFunc.filter(([func]) => {
			return func(char, tokenizer);
		}).forEach(([, captorOrDelegate]) => {
			captorOrDelegates.push(captorOrDelegate);
		});

		const {captors, delegates} = captorOrDelegates.reduce((group, captorOrDelegate) => {
			if (captorOrDelegate instanceof CaptorDelegate) {
				group.delegates.push(captorOrDelegate);
			} else {
				group.captors.push(captorOrDelegate);
			}
			return group;
		}, {captors: [], delegates: []} as { captors: Array<AstNodeCaptor>, delegates: Array<CaptorDelegate> });

		if (delegates.length !== 0) {
			const offsetOfNextChar = offset + 1;
			const nextChar = tokenizer.charAt(offsetOfNextChar);
			const captorsOfNextChar = delegates.map(delegate => {
				return delegate.find(nextChar, offsetOfNextChar, text + nextChar, tokenizer);
			}).filter(captor => captor != null);
			// of next char doesn't stand for the captor can accept next char
			// it just stands for the captor can accept current char
			// because it might be just the fallback captor
			captors.push(...captorsOfNextChar);
		}

		if (captors.length > 1) {
			// Overall, this would be an incorrect definition.
			// However, there are still some special scenarios, so a check needs to be carried out first.
			// Basically, for a delegate and a captor at the same level, if they both meet the conditions,
			// the delegate always has a higher priority than the captor.
			// Since the matching is based on single characters,
			// the delegate will always match at least one more character than the captor (refer to the registration logic).
			//
			// The tricky part is that the matching of some captors is incomplete.
			// Apart from the matching of the starting characters, there is also some logic in the #visit method.
			// Typical examples are Identifier, Whitespaces, Tabs, and NumberBasePart.
			// Fortunately, except for Identifier, the first characters of other captors can be distinguished from those of other captors.
			// Therefore, here we only deal with the situation where the matched captors include IdentifierCaptor.
			const identifierCaptorIndex = captors.findIndex(captor => captor.constructor.name === IdentifierCaptor.name);
			if (identifierCaptorIndex !== -1) {
				// identifier captor is at level one, so the given char is the first char
				if (char === '$') {
					// there are 2 possibilities:
					// 1. LtDollarSlashyGStringDollarEscapeCaptor (the next char is still $)
					// 2. LtGStringInterpolationStartMarkCaptor (if the next char is not $)
					let winner: AstNodeCaptor;
					const nextChar = tokenizer.charAt(offset + 1);
					if (nextChar === '$') {
						// Identifier or LtDollarSlashyGStringDollarEscapeCaptor
						// compare the next char of next char
						const nextCharOfNext = tokenizer.charAt(offset + 2);
						if (nextCharOfNext == null) {
							// no more char, is $$
							// LtDollarSlashyGStringDollarEscapeCaptor wins
							winner = captors.find(captor => captor.constructor.name === 'LtDollarSlashyGStringDollarEscapeCaptor');
						} else {
							if (Character.isJavaIdentifierPartAndNotIdentifierIgnorable(nextCharOfNext.codePointAt(0))) {
								// $$a, $$b, $$1, $$2, etc., identifier wins
								winner = captors[identifierCaptorIndex];
							} else {
								// LtDollarSlashyGStringDollarEscapeCaptor wins
								winner = captors.find(captor => captor.constructor.name === 'LtDollarSlashyGStringDollarEscapeCaptor');
							}
						}
					} else if (nextChar === '/') {
						// LtDollarSlashyGStringQuotationStartMarkCaptor wins
						winner = captors.find(captor => captor.constructor.name === 'LtDollarSlashyGStringQuotationStartMarkCaptor');
					} else if (nextChar == null) {
						// no more char, $, LtGStringInterpolationStartMarkCaptor wins
						winner = captors.find(captor => captor.constructor.name === 'LtGStringInterpolationStartMarkCaptor');
					} else {
						// Identifier or LtGStringInterpolationStartMarkCaptor
						if (Character.isJavaIdentifierPartAndNotIdentifierIgnorable(nextChar.codePointAt(0))) {
							// $a, $b, $1, $2, etc., identifier wins
							winner = captors[identifierCaptorIndex];
						} else {
							// LtGStringInterpolationStartMarkCaptor wins
							winner = captors.find(captor => captor.constructor.name === 'LtGStringInterpolationStartMarkCaptor');
						}
					}
					if (captors.length > 2) {
						// assume never happen, but we should know this
						const captorNames = captors.map(captor => captor.constructor.name).join(', ');
						throw new Error(`Multiple captors[${captorNames}] found for text[${text}].`);
					}
					captors.length = 0;
					captors.push(winner);
				} else {
					// first char is not $, keyword always has higher priority
					// remove the identifier captor
					captors.splice(identifierCaptorIndex, 1);
				}
			}
		}

		if (captors.length > 1) {
			const captorNames = captors.map(captor => captor.constructor.name).join(', ');
			throw new Error(`Multiple captors[${captorNames}] found for text[${text}].`);
		} else if (captors.length === 1) {
			return captors[0];
		}

		return this._fallback;
	}

	protected doPrint(buf: Array<string>, indent: Array<string> = []): void {
		const forks: Array<[string, AstNodeCaptor | CaptorDelegate]> = [];
		Object.keys(this._byCharMap).forEach(char => forks.push([char, this._byCharMap[char]]));
		this._byFunc.forEach(([func, captorOrDelegate]) => forks.push([func.describe(), captorOrDelegate]));
		if (this._fallback != null) {
			forks.push(['#fallback', this._fallback]);
		}
		forks.sort(([k1], [k2]) => {
			if (k1 === '#fallback') {
				return 1;
			} else if (k2 === '#fallback') {
				return -1;
			} else if (k1.length !== 1 && k2.length === 1) {
				return 1;
			} else if (k1.length === 1 && k2.length !== 1) {
				return -1;
			} else {
				return k1.localeCompare(k2, (void 0), {sensitivity: 'base'});
			}
		});
		if (forks.length === 1) {
			const key = forks[0][0];
			const captorOrDelegate = forks[0][1];
			if (captorOrDelegate instanceof CaptorDelegate) {
				buf[buf.length - 1] = buf[buf.length - 1].slice(0, -3) + `·${AstUtils.escapeForPrint(key)} =>`;
				captorOrDelegate.doPrint(buf, indent);
			} else {
				buf[buf.length - 1] = buf[buf.length - 1].slice(0, -3) + `·${AstUtils.escapeForPrint(key)} => ${captorOrDelegate.constructor.name}`;
			}
		} else {
			forks.forEach(([key, captorOrDelegate], index, array) => {
				const lineIndent = [...indent, buf.length === 0 ? '┌ ' : (index === array.length - 1 ? '└ ' : '├ ')];
				if (captorOrDelegate instanceof CaptorDelegate) {
					buf.push(`${lineIndent.join('')}${AstUtils.escapeForPrint(key)} =>`);
					captorOrDelegate.doPrint(buf, lineIndent.map(ch => ch === '└ ' ? '  ' : ((ch === '├ ' || ch === '┌ ') ? '│ ' : ch)));
				} else {
					buf.push(`${lineIndent.join('')}${AstUtils.escapeForPrint(key)} => ${captorOrDelegate.constructor.name}`);
				}
			});
		}
	}

	protected doPrintAsMarkdown(): Array<AstNodeCaptor> {
		return [
			...Object.keys(this._byCharMap).map(char => this._byCharMap[char]),
			...this._byFunc.map(([, captorOrDelegate]) => captorOrDelegate),
			this._fallback
		]
			.filter(x => x != null)
			.map(captorOrDelegate => {
				if (captorOrDelegate instanceof CaptorDelegate) {
					return captorOrDelegate.doPrintAsMarkdown();
				} else {
					return captorOrDelegate;
				}
			}).flat();
	}

	print(markdown: boolean = false): void {
		const buf: Array<string> = [];
		if (markdown) {
			buf.push(
				'| Token | Id | Type | Captor | Capture Rule |',
				'|-------|----|------|--------|--------------|',
				...this.doPrintAsMarkdown()
					.map(captor => {
						return {...captor.describe(), captorName: captor.constructor.name};
					})
					.sort(({tokenId: tokenId1}, {tokenId: tokenId2}) => {
						return tokenId1 - tokenId2;
					})
					.map(({text, tokenId, tokenType, captorName, rule}) => {
						return `| ${AstUtils.escapeForPrint(text).replace(/\|/g, '\\|')} | ${tokenId}, ${TokenId[tokenId]} | ${tokenType}, ${TokenType[tokenType]} | ${captorName} | ${AstUtils.escapeForPrint(rule)} |`;
					})
			);
		} else {
			this.doPrint(buf);
		}
		console.debug(buf.join('\n'));
	}
}
