import {Ast, AstBuilder, AstBuildOptions} from '../ast';

export interface GroovyLanguageServerOptions {
	timeSpentLogEnabled?: boolean;
	buildOptions?: AstBuildOptions;
}

type RequiredOptionKeys = 'timeSpentLogEnabled'
type PracticalGroovyLanguageServerOptions =
	Required<Pick<GroovyLanguageServerOptions, RequiredOptionKeys>>
	& Omit<GroovyLanguageServerOptions, RequiredOptionKeys>

export class GroovyLanguageServer {
	private readonly _options: PracticalGroovyLanguageServerOptions;

	constructor(options?: GroovyLanguageServerOptions) {
		this._options = {
			timeSpentLogEnabled: false,
			...(options ?? {})
		};
	}

	get isTimeSpentLogEnabled() {
		return this._options.timeSpentLogEnabled;
	}

	logTimeSpent<T>(source: string, func: () => T): T {
		const log = this.isTimeSpentLogEnabled === true;
		let label: string = (void 0);
		if (log) {
			label = `Parse source[length=${(source ?? '').length}].`;
			console.time(label);
		}
		try {
			return func();
		} finally {
			if (log) {
				console.timeEnd(label);
			}
		}
	}

	parse(source: string): Ast {
		return this.logTimeSpent(source, () => {
			return AstBuilder.ast(source, this._options.buildOptions);
		});
	}
}
