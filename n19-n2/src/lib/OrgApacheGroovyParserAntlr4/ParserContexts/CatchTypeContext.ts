import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {QualifiedClassNameContext} from './QualifiedClassNameContext';

export interface ICatchTypeContext {
	qualifiedClassName(): Array<QualifiedClassNameContext>;
	qualifiedClassName(i: number): QualifiedClassNameContext;
	BITOR(): Array<TerminalNode>;
	BITOR(i: number): TerminalNode;
}

export class CatchTypeContext extends GroovyParserRuleContext implements ICatchTypeContext {
	qualifiedClassName(): Array<QualifiedClassNameContext>;
	qualifiedClassName(i: number): QualifiedClassNameContext;
	qualifiedClassName(i?: number): Array<QualifiedClassNameContext> | QualifiedClassNameContext {
		if (i == null) {
			return this.getRuleContexts(QualifiedClassNameContext);
		} else {
			return this.getRuleContext<QualifiedClassNameContext>(QualifiedClassNameContext, i);
		}
	}

	BITOR(): Array<TerminalNode>;
	BITOR(i: number): TerminalNode;
	BITOR(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.BITOR);
		} else {
			return this.getToken(GroovyParser.BITOR, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_catchType;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}