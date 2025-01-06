import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotatedQualifiedClassNameContext} from './AnnotatedQualifiedClassNameContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IQualifiedClassNameListContext {
	annotatedQualifiedClassName(): Array<AnnotatedQualifiedClassNameContext>;
	annotatedQualifiedClassName(i: number): AnnotatedQualifiedClassNameContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class QualifiedClassNameListContext extends GroovyParserRuleContext implements IQualifiedClassNameListContext {
	annotatedQualifiedClassName(): Array<AnnotatedQualifiedClassNameContext>;
	annotatedQualifiedClassName(i: number): AnnotatedQualifiedClassNameContext;
	annotatedQualifiedClassName(i?: number): Array<AnnotatedQualifiedClassNameContext> | AnnotatedQualifiedClassNameContext {
		if (i == null) {
			return this.getRuleContexts(AnnotatedQualifiedClassNameContext);
		} else {
			return this.getRuleContext<AnnotatedQualifiedClassNameContext>(AnnotatedQualifiedClassNameContext, i);
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

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_qualifiedClassNameList;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitQualifiedClassNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}