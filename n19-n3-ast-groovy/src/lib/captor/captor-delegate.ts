import {AstUtils} from '../ast-utils';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptor, AstNodeCaptorCharChecker, AstNodeCaptorCharFuncCheck, AstNodeCaptorCharsChecker} from './captor';
import {Char} from './types';
import {isArrayCheck, isCharCheck, isFuncCheck, isMultiChecks} from './util';

export class CaptorDelegate {
	private readonly _tokenizer: AstTokenizer;

	private readonly _byCharMap: Record<Char, AstNodeCaptor | CaptorDelegate> = {};
	private readonly _byFunc: Array<[AstNodeCaptorCharFuncCheck, AstNodeCaptor | CaptorDelegate]> = [];
	private _fallback?: AstNodeCaptor;

	constructor(tokenizer: AstTokenizer) {
		this._tokenizer = tokenizer;
	}

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
							const delegate = new CaptorDelegate(this._tokenizer);
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
						const delegate = new CaptorDelegate(this._tokenizer);
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
							const delegate = new CaptorDelegate(this._tokenizer);
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
						const delegate = new CaptorDelegate(this._tokenizer);
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

	find(char: Char, offset: number, text: string): AstNodeCaptor {
		const captorOrDelegates: Array<AstNodeCaptor | CaptorDelegate> = [];

		// find by char
		const foundByChar = this._byCharMap[char];
		if (foundByChar != null) {
			captorOrDelegates.push(foundByChar);
		}

		// find by checker
		this._byFunc.filter(([func]) => {
			return func(char, this._tokenizer);
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
			const nextChar = this._tokenizer.charAt(offsetOfNextChar);
			const captorsOfNextChar = delegates.map(delegate => {
				return delegate.find(nextChar, offsetOfNextChar, text + nextChar);
			}).filter(captor => captor != null);
			if (captorsOfNextChar.length > 1) {
				// multiple captors found
				const captorNames = captorsOfNextChar.map(captor => captor.constructor.name).join(', ');
				throw new Error(`Multiple captors[${captorNames}] found for text[${text}].`);
			} else if (captorsOfNextChar.length === 1) {
				return captorsOfNextChar[0];
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

	protected doPrint(buf: Array<string>, indent: number = 0): void {
		const lineIndent = new Array(indent).fill('\t').join('');
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
			forks.forEach(([key, captorOrDelegate]) => {
				if (captorOrDelegate instanceof CaptorDelegate) {
					buf.push(`${lineIndent}${AstUtils.escapeForPrint(key)} =>`);
					captorOrDelegate.doPrint(buf, indent + 1);
				} else {
					buf.push(`${lineIndent}${AstUtils.escapeForPrint(key)} => ${captorOrDelegate.constructor.name}`);
				}
			});
		}
	}

	print(): void {
		const buf: Array<string> = [];
		this.doPrint(buf);
		console.debug(buf.join('\n'));
	}
}
