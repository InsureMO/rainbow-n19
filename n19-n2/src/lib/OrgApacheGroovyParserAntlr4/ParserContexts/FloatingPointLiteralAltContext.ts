import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LiteralContext} from './LiteralContext';

export class FloatingPointLiteralAltContext extends LiteralContext {
	FloatingPointLiteral(): TerminalNode {
		return this.getToken(GroovyParser.FloatingPointLiteral, 0);
	}

	constructor(ctx: LiteralContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitFloatingPointLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}