import {ValueOperator} from '@rainbow-n19/n1';
import {AssertionError, AssertionErrorConstructorArgs} from '../JavaExceptions';
import {Optional} from '../TsAddon';

export type GroovyBugErrorConstructorArgs = AssertionErrorConstructorArgs;

export class GroovyBugError extends AssertionError {
	private _bugText: Optional<string>;

	constructor(args: GroovyBugErrorConstructorArgs) {
		super(args);
	}
	
	get message(): string {
		return `BUG! ${super.message}`;
	}

	get bugText(): string {
		return this._bugText ?? this.message;
	}

	setBugText(bugText?: string): void {
		if (ValueOperator.of(bugText).isBlank().ok()) {
			this._bugText = (void 0);
		} else {
			this._bugText = bugText;
		}
	}
}