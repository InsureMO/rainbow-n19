import {ASTNode} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {Expression} from './Expression';

export interface MethodCall {
	readonly receiver: ASTNode;
	readonly methodAsString: Optional<string>;
	readonly arguments: Expression;
	readonly text: string;
}
