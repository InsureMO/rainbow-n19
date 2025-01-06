import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ClassOrInterfaceTypeContext extends GroovyParserRuleContext {
	qualifiedClassName(): QualifiedClassNameContext {
		return this.getRuleContext(QualifiedClassNameContext, 0);
	}

	qualifiedStandardClassName(): QualifiedStandardClassNameContext {
		return this.getRuleContext(QualifiedStandardClassNameContext, 0);
	}

	typeArguments(): TypeArgumentsContext {
		return this.getRuleContext(TypeArgumentsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_classOrInterfaceType;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}