import {RuntimeException, RuntimeExceptionConstructorArgs, ThrowableConstructorArgsOpt1} from '../JavaExceptions';
import {ASTNode, ModuleNode} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';

export type GroovyRuntimeExceptionConstructorArgsBase = Exclude<RuntimeExceptionConstructorArgs, ThrowableConstructorArgsOpt1>;
export type GroovyRuntimeExceptionConstructorArgsOpt1 = { node?: ASTNode }
export type GroovyRuntimeExceptionConstructorArgs =
	& GroovyRuntimeExceptionConstructorArgsBase
	& GroovyRuntimeExceptionConstructorArgsOpt1;

export class GroovyRuntimeException extends RuntimeException {
	private _module: ModuleNode;
	private _node: ASTNode;

	constructor(args: GroovyRuntimeExceptionConstructorArgs) {
		super(args);
		if ((args as GroovyRuntimeExceptionConstructorArgsOpt1).node != null) {
			this._node = (args as GroovyRuntimeExceptionConstructorArgsOpt1).node;
		}
	}

	setModule(module: ModuleNode): void {
		this._module = module;
	}

	get module(): ModuleNode {
		return this._module;
	}

	get message(): Optional<string> {
		const messageWithoutLocationText = this.messageWithoutLocationText;
		const locationText = this.locationText;
		if (messageWithoutLocationText == null && locationText.length === 0) {
			return (void 0); // not "null"
		}
		return messageWithoutLocationText + locationText;
	}

	get node(): ASTNode {
		return this._node;
	}

	get messageWithoutLocationText(): string {
		return super.message;
	}

	protected get locationText(): string {
		let answer = '. ';
		if (this.node != null) {
			answer += 'At [' + this.node.lineNumber + ':' + this.node.columnNumber + '] ';
		}
		if (this.module != null) {
			answer += this.module.description;
		}
		if (answer === '. ') {
			return '';
		}
		return answer;
	}
}
