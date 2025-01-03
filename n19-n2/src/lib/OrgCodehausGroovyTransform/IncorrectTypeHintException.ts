import {Throwable} from '../JavaExceptions';
import {MethodNode} from '../OrgCodehausGroovyAst';
import {SyntaxException} from '../OrgCodehausGroovySyntax';

export class IncorrectTypeHintException extends SyntaxException {
	constructor(mn: MethodNode, eOrMsg: Throwable | string, line: number, column: number) {
		super({
			message: 'Incorrect type hint in @ClosureParams in class ' + mn.declaringClass.name
				+ ' method ' + mn.typeDescriptor + ' : '
				+ (typeof eOrMsg === 'string' ? eOrMsg : eOrMsg.message),
			cause: typeof eOrMsg !== 'string' ? eOrMsg : (void 0),
			startLine: line,
			startColumn: column
		});
	}
}
