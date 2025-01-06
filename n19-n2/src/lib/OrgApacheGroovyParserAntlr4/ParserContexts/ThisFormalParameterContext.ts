import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeContext} from './TypeContext';

export class ThisFormalParameterContext extends GroovyParserRuleContext {
	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	THIS(): TerminalNode {
		return this.getToken(GroovyParser.THIS, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_thisFormalParameter;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitThisFormalParameter(this);
		} else return visitor.visitChildren(this);
	}
}