import {AbstractAst, ProgramNode} from '@rainbow-n19/n3-ast';
import {CompilationUnitNode} from './node';

export class GroovyAst extends AbstractAst {
	constructor(document?: string) {
		super(document);
	}

	protected createProgramNode(document: string): ProgramNode {
		return new CompilationUnitNode({text: document ?? '', startOffset: 0});
	}
}
