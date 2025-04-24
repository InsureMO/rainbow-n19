import {GroovyAst, GroovyAstBuilder, GroovyAstBuildOptions} from '@rainbow-n19/n3-ast-groovy';

export interface GroovyLanguageServerOptions {
	buildOptions?: GroovyAstBuildOptions;
}

type PracticalGroovyLanguageServerOptions = GroovyLanguageServerOptions;

export class GroovyLanguageServer {
	private readonly _options: PracticalGroovyLanguageServerOptions;

	constructor(options?: GroovyLanguageServerOptions) {
		this._options = {...(options ?? {})};
	}

	parse(source: string): GroovyAst {
		return GroovyAstBuilder.ast(source, this._options.buildOptions);
	}
}
