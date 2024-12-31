import {ModifiersValue} from '../Java';
import {ConstructorCallExpression} from '../OrgCodehausGroovyAstExpr';
import {ExpressionStatement, Statement} from '../OrgCodehausGroovyAstStmt';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {MethodNode} from './MethodNode';
import {Parameter} from './Parameter';

export class ConstructorNode extends MethodNode {
	constructor(modifiers: ModifiersValue, code: Statement, parameters?: Array<Parameter>, exceptions?: Array<ClassNode>) {
		super('<init>', modifiers, ClassHelper.VOID_TYPE, parameters ?? Parameter.EMPTY_ARRAY, exceptions ?? ClassNode.EMPTY_ARRAY, code);
	}

	firstStatementIsSpecialConstructorCall(): boolean {
		const code = this.firstStatement;
		if (!(code instanceof ExpressionStatement)) {
			return false;
		}

		const expression = code.expression;
		if (!(expression instanceof ConstructorCallExpression)) {
			return false;
		}
		return expression.isSpecialCall;
	}
}
