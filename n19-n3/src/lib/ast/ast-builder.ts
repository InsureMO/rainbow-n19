import {Ast} from './ast';
import {AstBuildOptions} from './types';
import {AstVisitor} from './ast-visitor';

export class AstBuilder {
	static ast(document: string, options?: AstBuildOptions): Ast {
		return AstVisitor.visit(document, options);
	}
}
