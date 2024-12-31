import {ClassCastException, IllegalArgumentException} from '../JavaExceptions';
import {ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class ArrayExpression extends Expression {
	private readonly _initExpressions: Array<Expression> = [];
	private readonly _sizeExpressions: Array<Expression> = [];
	private readonly _elementType: ClassNode;

	private static makeArray(base: ClassNode, sizeExpressions?: Array<Expression>): ClassNode {
		let ret = base.makeArray();
		if (sizeExpressions == null || sizeExpressions.length === 0) {
			return ret;
		}
		const size = sizeExpressions.length;
		for (let i = 1; i < size; i++) {
			ret = ret.makeArray();
		}
		return ret;
	}

	constructor(elementType: ClassNode, initExpressions: Array<Expression>, sizeExpressions?: Array<Expression>) {
		super();
		super.setType(ArrayExpression.makeArray(elementType, sizeExpressions));
		this._elementType = elementType;
		if (initExpressions == null) {
			if (sizeExpressions == null || sizeExpressions.length === 0) {
				throw new IllegalArgumentException('Either an initializer or defined size must be given');
			} else {
				this._sizeExpressions.push(...sizeExpressions);
			}
		} else {
			this._initExpressions.push(...initExpressions);
		}
		if (this.expressions.length !== 0 && (sizeExpressions ?? []).length !== 0) {
			throw new IllegalArgumentException('Both an initializer (' + this.formatInitExpressions() + ') and a defined size (' + this.formatSizeExpressions() + ') cannot be given');
		}
		for (const item of this.expressions) {
			if (item != null && !(item instanceof Expression)) {
				throw new ClassCastException('Item: ' + item + ' is not an Expression');
			}
		}
		if (!this.hasInitializer()) {
			for (const item of this.sizeExpressions) {
				if (!(item instanceof Expression)) {
					throw new ClassCastException('Item: ' + item + ' is not an Expression');
				}
			}
		}
	}

	/**
	 * Add another element to the initializer expressions
	 */
	addExpression(initExpression: Expression): void {
		this._initExpressions.push(initExpression);
	}

	/**
	 * Get the initializer expressions
	 */
	get expressions(): Array<Expression> {
		return this._initExpressions;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitArrayExpression(this);
	}

	get isDynamic(): boolean {
		return false;
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const exprList = this.transformExpressions(this.expressions, transformer);
		let sizes: Array<Expression> = null;
		if (!this.hasInitializer()) {
			sizes = this.transformExpressions(this.sizeExpressions, transformer);
		}
		const ret = new ArrayExpression(this.elementType, exprList, sizes);
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	/**
	 * Get a particular initializer expression
	 */
	getExpression(i: number): Optional<Expression> {
		return this.expressions[i];
	}

	get elementType(): ClassNode {
		return this._elementType;
	}

	get text(): string {
		return '[' + this.formatInitExpressions() + ']';
	}

	private formatInitExpressions(): string {
		return '{' + this.expressions.map(expr => expr.text).join(', ') + '}';
	}

	private formatSizeExpressions(): string {
		return this.sizeExpressions.map(expr => '[' + expr.text + ']').join('');
	}

	/**
	 * @return true if the array expression is defined by an explicit initializer
	 */
	hasInitializer(): boolean {
		return this.sizeExpressions.length === 0;
	}

	/**
	 * @return a list with elements corresponding to the array's dimensions
	 */
	get sizeExpressions(): Optional<Array<Expression>> {
		return this._sizeExpressions;
	}

	toString(): string {
		if (this.hasInitializer()) {
			return super.toString() + '[elementType: ' + this.elementType + ', init: {' + this.formatInitExpressions() + '}]';
		}
		return super.toString() + '[elementType: ' + this.elementType + ', size: ' + this.formatSizeExpressions() + ']';
	}
}
