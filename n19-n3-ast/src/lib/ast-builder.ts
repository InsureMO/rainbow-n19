import {Ast} from './ast';

export interface AstBuildOptions {
	timeSpentLogEnabled?: boolean;
}

export interface AstBuilder {
	ast(document: string, options?: AstBuildOptions): Ast;
}
