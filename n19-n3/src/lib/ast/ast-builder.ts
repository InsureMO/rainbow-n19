import {GroovyAst} from './ast';

export interface GroovyAstBuildListener {
	// TODO
}

export interface GroovyAstBuildOptions {
	listener?: GroovyAstBuildListener;
}

export class GroovyAstBuilder {
	static ast(document: string, options?: GroovyAstBuildOptions): GroovyAst {
		// TODO
		return new GroovyAst();
	}
}
