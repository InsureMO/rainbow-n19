import {TokenException, TokenExceptionConstructorArgs} from './TokenException';

export type ParseExceptionConstructorArgs = TokenExceptionConstructorArgs;

export class ParserException extends TokenException {
	constructor(args: ParseExceptionConstructorArgs) {
		super(args);
	}
}
