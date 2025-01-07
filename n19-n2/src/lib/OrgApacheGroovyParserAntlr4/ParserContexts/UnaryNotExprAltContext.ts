import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {NlsContext} from './NlsContext';

export class UnaryNotExprAltContext extends ExpressionContext {
	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	BITNOT(): TerminalNode {
		return this.getToken(GroovyParser.BITNOT, 0);
	}

	NOT(): TerminalNode {
		return this.getToken(GroovyParser.NOT, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitUnaryNotExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}