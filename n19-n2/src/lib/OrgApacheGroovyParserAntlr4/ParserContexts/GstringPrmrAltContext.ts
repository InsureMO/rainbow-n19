import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GstringContext} from './GstringContext';
import {PrimaryContext} from './PrimaryContext';

export class GstringPrmrAltContext extends PrimaryContext {
	gstring(): GstringContext {
		return this.getRuleContext(GstringContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitGstringPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}