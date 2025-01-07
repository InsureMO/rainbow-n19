import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {NlsContext} from './NlsContext';
import {TypeListContext} from './TypeListContext';

export interface INonWildcardTypeArgumentsContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class NonWildcardTypeArgumentsContext extends GroovyParserRuleContext implements INonWildcardTypeArgumentsContext {
	LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	typeList(): TypeListContext {
		return this.getRuleContext(TypeListContext, 0);
	}

	GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_nonWildcardTypeArguments;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}