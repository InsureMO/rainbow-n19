import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ClassBodyDeclarationContext extends GroovyParserRuleContext {
	t: number;

	block(): BlockContext {
		return this.getRuleContext(BlockContext, 0);
	}

	STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	memberDeclaration(): MemberDeclarationContext {
		return this.getRuleContext(MemberDeclarationContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number, t?: number) {
		super(parent, invokingState);
		this.t = t;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_classBodyDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}