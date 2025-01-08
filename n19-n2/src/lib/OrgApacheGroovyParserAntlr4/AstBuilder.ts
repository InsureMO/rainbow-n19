import {UnsupportedOperationException} from '../JavaExceptions';
import {ModuleNode} from '../OrgCodehausGroovyAst';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {GroovyParserVisitor} from './GroovyParserVisitor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class AstBuilder extends GroovyParserVisitor<any> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(sourceUnit: SourceUnit, groovydocEnabled: boolean, runtimeGroovydocEnabled: boolean) {
		super();
	}

	buildAST(): ModuleNode {
		throw new UnsupportedOperationException('Not implemented yet.');
	}
}
