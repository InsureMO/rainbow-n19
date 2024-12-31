import {ClassHelper, ClassNode, GroovyCodeVisitor, VariableScope} from '../OrgCodehausGroovyAst';
import {Parameter} from '../OrgCodehausGroovyAst';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {LoopingStatement} from './LoopingStatement';
import {Statement} from './Statement';

export class ForStatement extends Statement implements LoopingStatement {
	static readonly FOR_LOOP_DUMMY = new Parameter(ClassHelper.OBJECT_TYPE, 'forLoopDummyParameter');

	private _variable: Parameter;
	private _collectionExpression: Expression;
	private _loopBlock: Statement;
	private _scope: VariableScope;

	constructor(variable: Parameter, collectionExpression: Expression, loopBlock: Statement) {
		super();
		this._variable = variable;
		this._collectionExpression = collectionExpression;
		this._loopBlock = loopBlock;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitForLoop(this);
	}

	get collectionExpression(): Expression {
		return this._collectionExpression;
	}

	get loopBlock(): Statement {
		return this._loopBlock;
	}

	get variable(): Parameter {
		return this._variable;
	}

	get variableType(): ClassNode {
		return this.variable.type;
	}

	setCollectionExpression(collectionExpression: Expression): void {
		this._collectionExpression = collectionExpression;
	}

	setVariableScope(variableScope: VariableScope) {
		this._scope = variableScope;
	}

	get variableScope(): VariableScope {
		return this._scope;
	}

	setLoopBlock(loopBlock: Statement): void {
		this._loopBlock = loopBlock;
	}
}
