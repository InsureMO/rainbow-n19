import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassNameContext} from './ClassNameContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {QualifiedNameElementsContext} from './QualifiedNameElementsContext';

export interface IQualifiedStandardClassNameContext {
	className(): Array<ClassNameContext>;
	className(i: number): ClassNameContext;
	DOT(): Array<TerminalNode>;
	DOT(i: number): TerminalNode;
}

export class QualifiedStandardClassNameContext extends GroovyParserRuleContext implements IQualifiedStandardClassNameContext {
	qualifiedNameElements(): QualifiedNameElementsContext {
		return this.getRuleContext(QualifiedNameElementsContext, 0);
	}

	className(): Array<ClassNameContext>;
	className(i: number): ClassNameContext;
	className(i?: number): Array<ClassNameContext> | ClassNameContext {
		if (i == null) {
			return this.getRuleContexts(ClassNameContext);
		} else {
			return this.getRuleContext<ClassNameContext>(ClassNameContext, i);
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
		return GroovyParser.RULE_qualifiedStandardClassName;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitQualifiedStandardClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}