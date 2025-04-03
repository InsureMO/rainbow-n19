import {
	AstNodeCaptor,
	AstNodeCaptorCharCheck,
	AstNodeCaptorCharChecker,
	AstNodeCaptorCharFuncCheck,
	AstNodeCaptorCharsChecker,
	AstNodeCaptorCharsCheckers,
	AstVisitor
} from '../visit';
import {Char} from './types';

export class CaptorDelegate {
	private readonly _byCharMap: Record<Char, AstNodeCaptor | CaptorDelegate> = {};
	private readonly _byFunc: Array<[AstNodeCaptorCharFuncCheck, AstNodeCaptor | CaptorDelegate]> = [];
	private _fallback?: AstNodeCaptor;

	protected isCharCheck(_checker: ReturnType<AstNodeCaptor['checkers']>, type: string): _checker is AstNodeCaptorCharCheck {
		return type === 'string';
	}

	protected isFuncCheck(_checker: ReturnType<AstNodeCaptor['checkers']>, type: string): _checker is AstNodeCaptorCharFuncCheck {
		return type === 'function';
	}

	protected isArrayCheck(checker: ReturnType<AstNodeCaptor['checkers']>): checker is AstNodeCaptorCharsChecker | AstNodeCaptorCharsCheckers {
		return Array.isArray(checker);
	}

	protected isMultiChecks(checkers: AstNodeCaptorCharsChecker | AstNodeCaptorCharsCheckers): checkers is AstNodeCaptorCharsCheckers {
		return checkers.some(checker => Array.isArray(checker));
	}

	protected standardizeCheckers(captor: AstNodeCaptor): Array<AstNodeCaptorCharsChecker> {
		const checkers = captor.checkers();
		const type = typeof checkers;
		if (this.isCharCheck(checkers, type)) {
			return [[checkers]];
		} else if (this.isFuncCheck(checkers, type)) {
			return [[checkers]];
		} else if (this.isArrayCheck(checkers)) {
			// an error in TypeScript type inference in the IDE here, and the type needs to be manually specified.
			if (this.isMultiChecks(checkers)) {
				return checkers.map((checker: AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker) => Array.isArray(checker) ? checker : [checker]);
			} else {
				return [checkers as AstNodeCaptorCharsChecker];
			}
		} else {
			throw new Error(`Unsupported capture checker type of captor[${captor.constructor.name}].`);
		}
	}

	protected registerFallback(captor: AstNodeCaptor): void {
		if (this._fallback != null) {
			throw new Error(`Conflict in capture check between two captors, ${this._fallback.constructor.name} and ${captor.constructor.name}.`);
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
			case this.isCharCheck(first, type): {
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
							throw new Error(`Conflict in capture check between two captors, ${exists.constructor.name} and ${captor.constructor.name}.`);
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
			case this.isFuncCheck(checker, type): {
				// cannot compare function in definition phase, simply add
				if (rest.length === 0) {
					// my check ends by this char, register captor directly
					this._byFunc.push([checker, captor]);
				} else {
					// my check has more chars, create a delegate and register me to it
					const delegate = new CaptorDelegate();
					delegate.registerCaptorByCharsChecker(captor, checker, index + 1);
					this._byFunc.push([checker, delegate]);
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

	find(char: Char, offset: number): AstNodeCaptor {
		// TODO
		throw new Error();
	}
}

export class CaptorSelector {
	protected readonly _delegate: CaptorDelegate = new CaptorDelegate();

	constructor(astVisitor: AstVisitor) {
		// TODO initialize captors
		// this._captors = {'': new UndeterminedCharsCaptor(astVisitor)};
		[].map(captor => this._delegate.register(captor));
	}

	select(char: Char, offset: number): AstNodeCaptor {
		return this._delegate.find(char, offset);
	}
}
