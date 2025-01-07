import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeArgumentsContext} from './TypeArgumentsContext';

export class TypeArgumentsOrDiamondContext extends GroovyParserRuleContext {
	LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	typeArguments(): TypeArgumentsContext {
		return this.getRuleContext(TypeArgumentsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_typeArgumentsOrDiamond;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}