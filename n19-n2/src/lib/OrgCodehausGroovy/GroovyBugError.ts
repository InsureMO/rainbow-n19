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
		if (bugText == null || this.bugText.trim().length === 0) {
			this._bugText = (void 0);
		} else {
			this._bugText = bugText;
		}
	}
}