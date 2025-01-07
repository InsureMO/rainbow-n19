import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {MethodBodyContext} from './MethodBodyContext';
import {MethodNameContext} from './MethodNameContext';
import {NlsContext} from './NlsContext';

export class CompactConstructorDeclarationContext extends GroovyParserRuleContext {
	methodName(): MethodNameContext {
		return this.getRuleContext(MethodNameContext, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	methodBody(): MethodBodyContext {
		return this.getRuleContext(MethodBodyContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_compactConstructorDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCompactConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}