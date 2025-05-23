import {AstBuilder, AstBuildOptions} from '@rainbow-n19/n3-ast';
import {GroovyAst} from './ast';
import {AstTokenizer, AstTokenizerOptions} from './captor';
import {AstRecognizer, AstRecognizerOptions} from './recognize';

export interface GroovyAstBuildOptions extends AstTokenizerOptions, AstRecognizerOptions, AstBuildOptions {
}

export class GroovyAstBuilderInstance implements AstBuilder {
	private logTimeSpent(document: string, options?: GroovyAstBuildOptions): GroovyAst {
		const label: string = `Parse source[length=${(document ?? '').length}]`;
		console.time(label);
		try {
			return this.doAst(document, options);
		} finally {
			console.timeEnd(label);
		}
	}

	protected doAst(document: string, options?: GroovyAstBuildOptions): GroovyAst {
		const ast = AstTokenizer.visit(document, options);
		// recognize nodes structure
		new AstRecognizer(options).recognize(ast);
		return ast;
	}

	ast(document: string, options?: GroovyAstBuildOptions): GroovyAst {
		const {timeSpentLogEnabled, ...restOptions} = options ?? {};
		return (timeSpentLogEnabled ?? GroovyAstBuilder.TIME_SPENT_LOG_ENABLED)
			? this.logTimeSpent(document, restOptions)
			: this.doAst(document, restOptions);
	}
}

export class GroovyAstBuilder {
	private static _TIME_SPENT_LOG_ENABLED = false;
	private static readonly _INSTANCE = new GroovyAstBuilderInstance();

	static enableTimeSpentLog() {
		GroovyAstBuilder._TIME_SPENT_LOG_ENABLED = true;
	}

	static disableTimeSpentLog() {
		GroovyAstBuilder._TIME_SPENT_LOG_ENABLED = false;
	}

	static get TIME_SPENT_LOG_ENABLED(): boolean {
		return GroovyAstBuilder._TIME_SPENT_LOG_ENABLED;
	}

	static ast(document: string, options?: GroovyAstBuildOptions): GroovyAst {
		return GroovyAstBuilder._INSTANCE.ast(document, options);
	}

	static printDefs(): void {
		new AstTokenizer(new GroovyAst('')).printDefs();
		new AstRecognizer().printDefs();
	}
}