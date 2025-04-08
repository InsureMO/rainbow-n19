import {Ast} from './ast';
import {AstVisitor} from './ast-visitor';
import {AstBuildOptions} from './types';

export class AstBuilder {
	static ast(document: string, options?: AstBuildOptions): Ast {
		return AstVisitor.visit(document, options);
	}

	static printDefs(): void {
		return new AstVisitor(new Ast('')).printDefs();
	}
}
