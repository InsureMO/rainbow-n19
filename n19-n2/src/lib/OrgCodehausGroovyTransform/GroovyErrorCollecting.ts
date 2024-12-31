import {ASTNode} from '../OrgCodehausGroovyAst';

export interface GroovyErrorCollecting {
	addError(msg: string, expr: ASTNode): void;
}
