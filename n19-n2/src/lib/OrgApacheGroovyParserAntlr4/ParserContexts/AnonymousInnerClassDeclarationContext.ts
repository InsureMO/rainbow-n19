import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassBodyContext} from './ClassBodyContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class AnonymousInnerClassDeclarationContext extends GroovyParserRuleContext {
	t: number;

	classBody(): ClassBodyContext {
		return this.getRuleContext(ClassBodyContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number, t?: number) {
		super(parent, invokingState);
		this.t = t;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_anonymousInnerClassDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitAnonymousInnerClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}