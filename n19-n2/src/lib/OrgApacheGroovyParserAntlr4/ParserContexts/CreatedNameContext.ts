import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationsOptContext} from './AnnotationsOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {PrimitiveTypeContext} from './PrimitiveTypeContext';
import {QualifiedClassNameContext} from './QualifiedClassNameContext';
import {TypeArgumentsOrDiamondContext} from './TypeArgumentsOrDiamondContext';

export class CreatedNameContext extends GroovyParserRuleContext {
	annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(AnnotationsOptContext, 0);
	}

	primitiveType(): PrimitiveTypeContext {
		return this.getRuleContext(PrimitiveTypeContext, 0);
	}

	qualifiedClassName(): QualifiedClassNameContext {
		return this.getRuleContext(QualifiedClassNameContext, 0);
	}

	typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		return this.getRuleContext(TypeArgumentsOrDiamondContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_createdName;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}