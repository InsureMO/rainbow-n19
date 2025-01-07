import {ASTNode} from '../OrgCodehausGroovyAst';

export interface ErrorCollecting {
	addError(msg: string, expr: ASTNode): void;
}
