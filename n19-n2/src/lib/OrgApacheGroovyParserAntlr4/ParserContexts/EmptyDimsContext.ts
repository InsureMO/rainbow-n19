import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationsOptContext} from './AnnotationsOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IEmptyDimsContext {
	annotationsOpt(): Array<AnnotationsOptContext>;
	annotationsOpt(i: number): AnnotationsOptContext;
	LBRACK(): Array<TerminalNode>;
	LBRACK(i: number): TerminalNode;
	RBRACK(): Array<TerminalNode>;
	RBRACK(i: number): TerminalNode;
}

export class EmptyDimsContext extends GroovyParserRuleContext implements IEmptyDimsContext {
	annotationsOpt(): Array<AnnotationsOptContext>;
	annotationsOpt(i: number): AnnotationsOptContext;
	annotationsOpt(i?: number): Array<AnnotationsOptContext> | AnnotationsOptContext {
		if (i == null) {
			return this.getRuleContexts(AnnotationsOptContext);
		} else {
			return this.getRuleContext<AnnotationsOptContext>(AnnotationsOptContext, i);
		}
	}

	LBRACK(): Array<TerminalNode>;
	LBRACK(i: number): TerminalNode;
	LBRACK(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.LBRACK);
		} else {
			return this.getToken(GroovyParser.LBRACK, i);
		}
	}

	RBRACK(): Array<TerminalNode>;
	RBRACK(i: number): TerminalNode;
	RBRACK(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.RBRACK);
		} else {
			return this.getToken(GroovyParser.RBRACK, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_emptyDims;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEmptyDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}