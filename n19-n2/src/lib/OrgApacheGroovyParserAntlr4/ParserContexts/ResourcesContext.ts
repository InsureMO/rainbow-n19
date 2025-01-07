import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {NlsContext} from './NlsContext';
import {ResourceListContext} from './ResourceListContext';
import {RparenContext} from './RparenContext';
import {SepContext} from './SepContext';

export class ResourcesContext extends GroovyParserRuleContext {
	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	resourceList(): ResourceListContext {
		return this.getRuleContext(ResourceListContext, 0);
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext, 0);
	}

	sep(): SepContext {
		return this.getRuleContext(SepContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_resources;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}