import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeContext} from './TypeContext';

export class ReturnTypeContext extends GroovyParserRuleContext {
	ct: number;

	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number, ct?: number) {
		super(parent, invokingState);
		this.ct = ct;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_returnType;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}