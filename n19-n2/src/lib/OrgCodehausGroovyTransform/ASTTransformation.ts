import {ASTNode} from '../OrgCodehausGroovyAst';
import {SourceUnit} from '../OrgCodehausGroovyControl';

export interface ASTTransformation {
	visit(nodes: Array<ASTNode>, source: SourceUnit): void;
}