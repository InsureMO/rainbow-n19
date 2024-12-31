import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {MapEntryExpression} from './MapEntryExpression';
import {MapExpression} from './MapExpression';

export class NamedArgumentListExpression extends MapExpression {
	constructor(mapEntryExpressions: Array<MapEntryExpression>) {
		super(mapEntryExpressions);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new NamedArgumentListExpression(this.transformExpressions(this.mapEntryExpressions, transformer, expr => expr instanceof MapEntryExpression, MapEntryExpression.name));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}
}
