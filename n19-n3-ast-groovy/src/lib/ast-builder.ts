import {AstBuilder} from '@rainbow-n19/n3-ast';
import {GroovyAst} from './ast';
import {AstVisitor} from './ast-visitor';
import {AstVisitOptions, GroovyAstBuildOptions} from './types';

export class GroovyAstBuilderInstance implements AstBuilder {
	private logTimeSpent(source: string, options?: AstVisitOptions): GroovyAst {
		const label: string = `Parse source[length=${(source ?? '').length}]`;
		console.time(label);
		try {
			return AstVisitor.visit(source, options);
		} finally {
			console.timeEnd(label);
		}
	}

	ast(document: string, options?: GroovyAstBuildOptions): GroovyAst {
		const {timeSpentLogEnabled, ...restOptions} = options ?? {};
		return (timeSpentLogEnabled ?? GroovyAstBuilder.TIME_SPENT_LOG_ENABLED)
			? this.logTimeSpent(document, restOptions)
			: AstVisitor.visit(document, restOptions);
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
		return new AstVisitor(new GroovyAst('')).printDefs();
	}
}