import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationContext} from './AnnotationContext';
import {ElementValueArrayInitializerContext} from './ElementValueArrayInitializerContext';
import {ExpressionContext} from './ExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ElementValueContext extends GroovyParserRuleContext {
	elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		return this.getRuleContext(ElementValueArrayInitializerContext, 0);
	}

	annotation(): AnnotationContext {
		return this.getRuleContext(AnnotationContext, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_elementValue;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}