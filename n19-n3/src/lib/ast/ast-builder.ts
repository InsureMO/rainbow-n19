import {Ast} from './ast';
import {AstVisitor} from './ast-visitor';
import {AstBuildOptions, AstVisitOptions} from './types';

export class AstBuilder {
	private static TIME_SPENT_LOG_ENABLED = false;

	static enableTimeSpentLog() {
		AstBuilder.TIME_SPENT_LOG_ENABLED = true;
	}

	static disableTimeSpentLog() {
		AstBuilder.TIME_SPENT_LOG_ENABLED = false;
	}

	private static logTimeSpent(source: string, options?: AstVisitOptions): Ast {
		const label: string = `Parse source[length=${(source ?? '').length}]`;
		console.time(label);
		try {
			return AstVisitor.visit(source, options);
		} finally {
			console.timeEnd(label);
		}
	}

	static ast(document: string, options?: AstBuildOptions): Ast {
		const {timeSpentLogEnabled, ...restOptions} = options ?? {};
		return (timeSpentLogEnabled ?? AstBuilder.TIME_SPENT_LOG_ENABLED)
			? this.logTimeSpent(document, restOptions)
			: AstVisitor.visit(document, restOptions);
	}

	static printDefs(): void {
		return new AstVisitor(new Ast('')).printDefs();
	}
}
