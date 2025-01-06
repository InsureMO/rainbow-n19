import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ITypeNamePairsContext {
	typeNamePair(): Array<TypeNamePairContext>;
	typeNamePair(i: number): TypeNamePairContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class TypeNamePairsContext extends GroovyParserRuleContext implements ITypeNamePairsContext {
	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	typeNamePair(): Array<TypeNamePairContext>;
	typeNamePair(i: number): TypeNamePairContext;
	typeNamePair(i?: number): Array<TypeNamePairContext> | TypeNamePairContext {
		if (i == null) {
			return this.getRuleContexts(TypeNamePairContext);
		} else {
			return this.getRuleContext<TypeNamePairContext>(TypeNamePairContext, i);
		}
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext.class, 0);
	}

	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	COMMA(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_typeNamePairs;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeNamePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}