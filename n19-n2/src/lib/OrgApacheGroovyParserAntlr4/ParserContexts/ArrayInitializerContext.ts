import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {VariableInitializersContext} from './VariableInitializersContext';

export interface IArrayInitializerContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class ArrayInitializerContext extends GroovyParserRuleContext implements IArrayInitializerContext {
	LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
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

	RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	variableInitializers(): VariableInitializersContext {
		return this.getRuleContext(VariableInitializersContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_arrayInitializer;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}