import {Ast} from './ast';

export interface AstHolder {
	get ast(): Ast;
	replace(ast: Ast): void;
}

export class DefaultAstHolder implements AstHolder {
	private _ast: Ast = new Ast();

	get ast(): Ast {
		return this._ast;
	}

	replace(ast: Ast): void {
		if (ast == null) {
			throw new Error('Given groovy ast cannot be null.');
		}
		this._ast = ast;
	}
}
