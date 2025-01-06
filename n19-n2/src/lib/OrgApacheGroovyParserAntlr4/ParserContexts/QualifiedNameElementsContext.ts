import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {QualifiedNameElementContext} from './QualifiedNameElementContext';

export interface IQualifiedNameElementsContext {
	qualifiedNameElement(): Array<QualifiedNameElementContext>;
	qualifiedNameElement(i: number): QualifiedNameElementContext;
	DOT(): Array<TerminalNode>;
	DOT(i: number): TerminalNode;
}

export class QualifiedNameElementsContext extends GroovyParserRuleContext implements IQualifiedNameElementsContext {
	qualifiedNameElement(): Array<QualifiedNameElementContext>;
	qualifiedNameElement(i: number): QualifiedNameElementContext;
	qualifiedNameElement(i?: number): Array<QualifiedNameElementContext> | QualifiedNameElementContext {
		if (i == null) {
			return this.getRuleContexts(QualifiedNameElementContext);
		} else {
			return this.getRuleContext<QualifiedNameElementContext>(QualifiedNameElementContext, i);
		}
	}

	DOT(): Array<TerminalNode>;
	DOT(i: number): TerminalNode;
	DOT(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.DOT);
		} else {
			return this.getToken(GroovyParser.DOT, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_qualifiedNameElements;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitQualifiedNameElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}