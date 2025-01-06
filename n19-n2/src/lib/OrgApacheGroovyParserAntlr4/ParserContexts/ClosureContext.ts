import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {FormalParameterListContext} from './FormalParameterListContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IClosureContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class ClosureContext extends GroovyParserRuleContext implements IClosureContext {
	LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	blockStatementsOpt(): BlockStatementsOptContext {
		return getRuleContext(BlockStatementsOptContext, 0);
	}

	RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
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

	ARROW(): TerminalNode {
		return this.getToken(GroovyParser.ARROW, 0);
	}

	sep(): SepContext {
		return this.getRuleContext(SepContext, 0);
	}

	formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(FormalParameterListContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_closure;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClosure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}