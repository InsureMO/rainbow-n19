import {ClassHelper, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {MapEntryExpression} from './MapEntryExpression';

export class MapExpression extends Expression {
	private readonly _mapEntryExpressions: Array<MapEntryExpression> = [];

	constructor(mapEntryExpressions?: Array<MapEntryExpression>) {
		super();
		this._mapEntryExpressions.push(...(mapEntryExpressions ?? []));
		//TODO COPY FROM GROOVY: get the type's of the expressions to specify the
		// map type to Map<X> if possible.
		this.setType(ClassHelper.MAP_TYPE);
	}

	addMapEntryExpression(keyOrAllExpression: MapEntryExpression | Expression, valueExpression?: Expression): void {
		if (keyOrAllExpression instanceof MapEntryExpression) {
			this._mapEntryExpressions.push(keyOrAllExpression);
		} else {
			this._mapEntryExpressions.push(new MapEntryExpression(keyOrAllExpression, valueExpression));
		}
	}

	get mapEntryExpressions(): Array<MapEntryExpression> {
		return this._mapEntryExpressions;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitMapExpression(this);
	}

	get isDynamic(): boolean {
		return false;
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new MapExpression(this.transformExpressions(this.mapEntryExpressions, transformer, expr => expr instanceof MapEntryExpression, MapEntryExpression.name));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	toString(): string {
		return super.toString() + '[' + this.mapEntryExpressions.map(expr => expr.toString()).join(',') + ']';
	}

	get text(): string {
		let body: string = '[';
		const expressions = this.mapEntryExpressions;
		const size = expressions.length;
		if (size > 0) {
			const first = expressions[0];
			body = body + first.keyExpression.text + ':' + first.valueExpression.text;
			for (let i = 1; i < size; i++) {
				const expr = expressions[i];
				body = body + ', ' + expr.keyExpression.text + ':' + expr.valueExpression.text;
				if (body.length > 120 && i < size - 1) {
					body = body + ', ... ';
					break;
				}
			}
		} else {
			body = ':';
		}
		return '[' + body + ']';
	}
}
