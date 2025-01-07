import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {EnumConstantContext} from './EnumConstantContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {NlsContext} from './NlsContext';

export interface IEnumConstantsContext {
	enumConstant(): Array<EnumConstantContext>;
	enumConstant(i: number): EnumConstantContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class EnumConstantsContext extends GroovyParserRuleContext implements IEnumConstantsContext {
	enumConstant(): Array<EnumConstantContext>;
	enumConstant(i: number): EnumConstantContext;
	enumConstant(i?: number): Array<EnumConstantContext> | EnumConstantContext {
		if (i == null) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext<EnumConstantContext>(EnumConstantContext, i);
		}
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
		return GroovyParser.RULE_enumConstants;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}