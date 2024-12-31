import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {Statement} from './Statement';

export class BreakStatement extends Statement {
	private readonly _label: string = (void 0);

	constructor(label?: string) {
		super();
		this._label = label ?? (void 0);
	}

	get label(): Optional<string> {
		return this._label;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitBreakStatement(this);
	}
}
