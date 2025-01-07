import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {NlsContext} from './NlsContext';
import {VariableDeclaratorIdContext} from './VariableDeclaratorIdContext';
import {VariableInitializerContext} from './VariableInitializerContext';

export interface IVariableDeclaratorContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class VariableDeclaratorContext extends GroovyParserRuleContext implements IVariableDeclaratorContext {
	variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(VariableDeclaratorIdContext, 0);
	}

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(VariableInitializerContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableDeclarator;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}