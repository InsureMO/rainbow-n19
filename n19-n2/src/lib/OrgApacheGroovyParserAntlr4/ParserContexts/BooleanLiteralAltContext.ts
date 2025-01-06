import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LiteralContext} from './LiteralContext';

export class BooleanLiteralAltContext extends LiteralContext {
	BooleanLiteral(): TerminalNode {
		return this.getToken(GroovyParser.BooleanLiteral, 0);
	}

	constructor(ctx: LiteralContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBooleanLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}