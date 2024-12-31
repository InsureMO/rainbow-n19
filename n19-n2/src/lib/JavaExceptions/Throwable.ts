import {Optional} from '../TsAddon';

export type ThrowableConstructorArgsOpt1 = string;
export type ThrowableConstructorArgsOpt2 = { message?: string; cause?: Throwable };
export type ThrowableConstructorArgs = ThrowableConstructorArgsOpt1 | ThrowableConstructorArgsOpt2;

export class Throwable extends Error {
	private readonly _cause?: Optional<Throwable>;

	constructor(args?: ThrowableConstructorArgs) {
		super(args != null ? (typeof args === 'string' ? args : args?.message) : (void 0));
		this._cause = args != null ? (typeof args === 'string' ? (void 0) : args?.cause) : (void 0);
	}

	get message(): string {
		return super.message ?? 'No message';
	}

	get cause(): Optional<Throwable> {
		return this._cause;
	}
}