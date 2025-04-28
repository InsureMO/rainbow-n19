import {AbstractAst} from '@rainbow-n19/n3-ast';
import {CompilationUnitNode} from './node';

export class GroovyAst extends AbstractAst {
	constructor(document?: string) {
		super(document);
	}

	get compilationUnit(): CompilationUnitNode {
		return super.compilationUnit as CompilationUnitNode;
	}

	protected createProgramNode(document: string): CompilationUnitNode {
		return new CompilationUnitNode({text: document ?? '', startOffset: 0});
	}
}
