import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {PrimaryContext} from './PrimaryContext';

export class MapPrmrAltContext extends PrimaryContext {
	map(): MapContext {
		return this.getRuleContext(MapContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMapPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
