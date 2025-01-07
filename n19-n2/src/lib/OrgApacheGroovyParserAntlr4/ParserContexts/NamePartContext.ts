import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {DynamicMemberNameContext} from './DynamicMemberNameContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IdentifierContext} from './IdentifierContext';
import {KeywordsContext} from './KeywordsContext';
import {StringLiteralContext} from './StringLiteralContext';

export class NamePartContext extends GroovyParserRuleContext {
	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	stringLiteral(): StringLiteralContext {
		return this.getRuleContext(StringLiteralContext, 0);
	}

	dynamicMemberName(): DynamicMemberNameContext {
		return this.getRuleContext(DynamicMemberNameContext, 0);
	}

	keywords(): KeywordsContext {
		return this.getRuleContext(KeywordsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_namePart;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitNamePart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}