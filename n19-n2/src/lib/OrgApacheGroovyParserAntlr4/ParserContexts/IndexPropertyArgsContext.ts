import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionListContext} from './ExpressionListContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class IndexPropertyArgsContext extends GroovyParserRuleContext {
	RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	SAFE_INDEX(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_INDEX, 0);
	}

	LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	expressionList(): ExpressionListContext {
		return this.getRuleContext(ExpressionListContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_indexPropertyArgs;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) return visitor.visitIndexPropertyArgs(this);
		else return visitor.visitChildren(this);
	}
}