import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationsOptContext} from './AnnotationsOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {QualifiedClassNameContext} from './QualifiedClassNameContext';

export class AnnotatedQualifiedClassNameContext extends GroovyParserRuleContext {
	annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(AnnotationsOptContext, 0);
	}

	qualifiedClassName(): QualifiedClassNameContext {
		return this.getRuleContext(QualifiedClassNameContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_annotatedQualifiedClassName;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitAnnotatedQualifiedClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}