import {ASTNode} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';

export class Statement extends ASTNode {
	private readonly _statementLabels: Array<string> = [];

	get statementLabels(): Optional<Array<string>> {
		return this._statementLabels;
	}

	addStatementLabel(label: string): void {
		this._statementLabels.push(label);
	}

	copyStatementLabels(that: Statement): void {
		(that.statementLabels ?? []).forEach(label => this.addStatementLabel(label));
	}

	get isEmpty(): boolean {
		return false;
	}

	toString(): string {
		return this.constructor.name;
	}
}
