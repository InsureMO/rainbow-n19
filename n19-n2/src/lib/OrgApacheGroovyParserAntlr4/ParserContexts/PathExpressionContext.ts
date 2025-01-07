import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {PathElementContext} from './PathElementContext';
import {PrimaryContext} from './PrimaryContext';

export interface IPathExpressionContext {
	pathElement(): Array<PathElementContext>;
	pathElement(i: number): PathElementContext;
}

export class PathExpressionContext extends GroovyParserRuleContext implements IPathExpressionContext {
	t: number;
	_pathElement: PathElementContext;

	primary(): PrimaryContext {
		return this.getRuleContext(PrimaryContext, 0);
	}

	STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	pathElement(): Array<PathElementContext>;
	pathElement(i: number): PathElementContext;
	pathElement(i?: number): Array<PathElementContext> | PathElementContext {
		if (i == null) {
			return this.getRuleContexts(PathElementContext);
		} else {
			return this.getRuleContext<PathElementContext>(PathElementContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_pathExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitPathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}