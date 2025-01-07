import {UnsupportedOperationException} from '../JavaExceptions';
import {AnnotationNode, ASTNode, ClassNode} from '../OrgCodehausGroovyAst';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {ASTTransformation} from './ASTTransformation';
import {ErrorCollecting} from './ErrorCollecting';

export abstract class AbstractASTTransformation implements ASTTransformation, ErrorCollecting {
	// TODO IMPLEMENTS ME!
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected init(nodes: Array<ASTNode>, sourceUnit: SourceUnit): void {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	addError(msg: string, expr: ASTNode): void {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visit(nodes: Array<ASTNode>, source: SourceUnit): void {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	checkPropertyList(cNode: ClassNode, propertyNameList: Array<string>, listName: string,
	                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	                  anno: AnnotationNode, typeName: string, includeFields: boolean,
	                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	                  includeSuperProperties?: boolean, allProperties?: boolean, includeSuperFields?: boolean, includeStatic?: boolean): boolean {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	get annotationName(): string {
		throw new UnsupportedOperationException('Not implemented yet.');
	}
}
