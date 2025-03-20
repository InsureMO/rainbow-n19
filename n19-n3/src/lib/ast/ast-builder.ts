import {GroovyAst} from './ast';
import {GroovyAstBuildOptions} from './types';

export class GroovyAstBuilder {
	static ast(document: string, options?: GroovyAstBuildOptions): GroovyAst {
		return new GroovyAst(document, options);
	}
}
