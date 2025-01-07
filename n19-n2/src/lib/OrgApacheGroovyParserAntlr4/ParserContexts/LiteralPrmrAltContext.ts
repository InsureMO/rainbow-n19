import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LiteralContext} from './LiteralContext';
import {PrimaryContext} from './PrimaryContext';

export class LiteralPrmrAltContext extends PrimaryContext {
	literal(): LiteralContext {
		return this.getRuleContext(LiteralContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitLiteralPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}