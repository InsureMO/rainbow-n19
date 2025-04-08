import {Ast, AstBuilder, AstBuildOptions} from '../ast';

export interface GroovyLanguageServerOptions {
	buildOptions?: AstBuildOptions;
}

type PracticalGroovyLanguageServerOptions = GroovyLanguageServerOptions;

export class GroovyLanguageServer {
	private readonly _options: PracticalGroovyLanguageServerOptions;

	constructor(options?: GroovyLanguageServerOptions) {
		this._options = {...(options ?? {})};
	}

	parse(source: string): Ast {
		return AstBuilder.ast(source, this._options.buildOptions);
	}
}
