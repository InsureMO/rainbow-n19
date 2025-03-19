import {GroovyAst} from './ast';

export interface GroovyAstHolder {
	get ast(): GroovyAst;
	replace(ast: GroovyAst): void;
}

export class DefaultGroovyAstHolder implements GroovyAstHolder {
	private _ast: GroovyAst = new GroovyAst();

	get ast(): GroovyAst {
		return this._ast;
	}

	replace(ast: GroovyAst): void {
		if (ast == null) {
			throw new Error('Given groovy ast cannot be null.');
		}
		this._ast = ast;
	}
}
