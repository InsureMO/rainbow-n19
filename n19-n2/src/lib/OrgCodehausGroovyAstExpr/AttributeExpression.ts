import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {PropertyExpression} from './PropertyExpression';

export class AttributeExpression extends PropertyExpression {
	constructor(objectExpression: Expression, property: Expression, safe?: boolean) {
		super(objectExpression, property, safe);
	}

	get text(): string {
		let sb: string = this.objectExpression.text;
		if (this.isSpreadSafe) {
			sb = sb + '*';
		}
		if (this.isSafe) {
			sb = sb + '?';
		}
		sb = sb + '.@';

		return sb = sb + this.property.text;
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new AttributeExpression(transformer.transform(this.objectExpression), transformer.transform(this.property), this.isSafe);
		ret.setImplicitThis(this.isImplicitThis);
		ret.setSpreadSafe(this.isSpreadSafe);
		ret.setStatic(this.isStatic);
		ret.setType(this.type);
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitAttributeExpression(this);
	}
}
