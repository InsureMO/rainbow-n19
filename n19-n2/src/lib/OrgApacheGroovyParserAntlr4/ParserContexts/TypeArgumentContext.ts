import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeContext} from './TypeContext';

export class TypeArgumentContext extends GroovyParserRuleContext {
	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(AnnotationsOptContext, 0);
	}

	QUESTION(): TerminalNode {
		return this.getToken(GroovyParser.QUESTION, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	EXTENDS(): TerminalNode {
		return this.getToken(GroovyParser.EXTENDS, 0);
	}

	SUPER(): TerminalNode {
		return this.getToken(GroovyParser.SUPER, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_typeArgument;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}