import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {EmptyDimsOptContext} from './EmptyDimsOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class TypeContext extends GroovyParserRuleContext {
	annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(AnnotationsOptContext, 0);
	}

	emptyDimsOpt(): EmptyDimsOptContext {
		return this.getRuleContext(EmptyDimsOptContext, 0);
	}

	primitiveType(): PrimitiveTypeContext {
		return this.getRuleContext(PrimitiveTypeContext, 0);
	}

	classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(ClassOrInterfaceTypeContext, 0);
	}

	VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_type;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}