import {SyntaxException, SyntaxExceptionConstructorArgsBase} from './SyntaxException';
import {Token} from './Token';

export type TokenExceptionConstructorArgsBase = SyntaxExceptionConstructorArgsBase;
export type TokenExceptionConstructorArgsOpt1 = { token: Token };
export type TokenExceptionConstructorArgsOpt2 = { startLine: number, startColumn: number }
export type TokenExceptionConstructorArgsOpt3 = {
	startLine: number, startColumn: number, endLine: number, endColumn: number
}

export type TokenExceptionConstructorArgs =
	| TokenExceptionConstructorArgsBase
	& (TokenExceptionConstructorArgsOpt1 | TokenExceptionConstructorArgsOpt2 | TokenExceptionConstructorArgsOpt3);

export class TokenException extends SyntaxException {
	constructor(args: TokenExceptionConstructorArgs) {
		super({
			message: args.message, cause: args.cause ?? (void 0),
			startLine: (args as TokenExceptionConstructorArgsOpt1).token != null ? TokenException.getLine((args as TokenExceptionConstructorArgsOpt1).token) : (args as TokenExceptionConstructorArgsOpt2).startLine,
			startColumn: (args as TokenExceptionConstructorArgsOpt1).token != null ? TokenException.getColumn((args as TokenExceptionConstructorArgsOpt1).token) : (args as TokenExceptionConstructorArgsOpt2).startColumn,
			endLine: (args as TokenExceptionConstructorArgsOpt3).endLine,
			endColumn: (args as TokenExceptionConstructorArgsOpt3).endColumn
		});
	}

	private static getColumn(token: Token): number {
		return (token != null) ? token.startColumn : -1;
	}

	private static getLine(token: Token): number {
		return (token != null) ? token.startLine : -1;
	}
}