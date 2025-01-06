import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LiteralContext} from './LiteralContext';

export class StringLiteralAltContext extends LiteralContext {
	stringLiteral(): StringLiteralContext {
		return this.getRuleContext(StringLiteralContext, 0);
	}

	constructor(ctx: LiteralContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) return visitor.visitStringLiteralAlt(this);
		else return visitor.visitChildren(this);
	}
}