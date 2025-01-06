import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LiteralContext} from './LiteralContext';

export class NullLiteralAltContext extends LiteralContext {
	NullLiteral(): TerminalNode {
		return this.getToken(GroovyParser.NullLiteral, 0);
	}

	constructor(ctx: LiteralContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitNullLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}