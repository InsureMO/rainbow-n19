import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClosureOrLambdaExpressionContext} from './ClosureOrLambdaExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IPathElementContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class PathElementContext extends GroovyParserRuleContext implements IPathElementContext {
	t: number;

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	DOT(): TerminalNode {
		return this.getToken(GroovyParser.DOT, 0);
	}

	NEW(): TerminalNode {
		return this.getToken(GroovyParser.NEW, 0);
	}

	creator(): CreatorContext {
		return this.getRuleContext(CreatorContext, 0);
	}

	namePart(): NamePartContext {
		return this.getRuleContext(NamePartContext, 0);
	}

	closureOrLambdaExpression(): ClosureOrLambdaExpressionContext {
		return this.getRuleContext(ClosureOrLambdaExpressionContext, 0);
	}

	METHOD_POINTER(): TerminalNode {
		return this.getToken(GroovyParser.METHOD_POINTER, 0);
	}

	METHOD_REFERENCE(): TerminalNode {
		return this.getToken(GroovyParser.METHOD_REFERENCE, 0);
	}

	SPREAD_DOT(): TerminalNode {
		return this.getToken(GroovyParser.SPREAD_DOT, 0);
	}

	SAFE_DOT(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_DOT, 0);
	}

	SAFE_CHAIN_DOT(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_CHAIN_DOT, 0);
	}

	AT(): TerminalNode {
		return this.getToken(GroovyParser.AT, 0);
	}

	nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(NonWildcardTypeArgumentsContext, 0);
	}

	arguments(): ArgumentsContext {
		return this.getRuleContext(ArgumentsContext, 0);
	}

	indexPropertyArgs(): IndexPropertyArgsContext {
		return this.getRuleContext(IndexPropertyArgsContext, 0);
	}

	namedPropertyArgs(): NamedPropertyArgsContext {
		return this.getRuleContext(NamedPropertyArgsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_pathElement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitPathElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}