import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {ModifiersContext} from './ModifiersContext';
import {TypeContext} from './TypeContext';
import {TypeNamePairsContext} from './TypeNamePairsContext';
import {VariableDeclaratorsContext} from './VariableDeclaratorsContext';
import {VariableInitializerContext} from './VariableInitializerContext';

export interface IVariableDeclarationContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class VariableDeclarationContext extends GroovyParserRuleContext implements IVariableDeclarationContext {
	t: number;

	modifiers(): ModifiersContext {
		return this.getRuleContext(ModifiersContext, 0);
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

	variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(VariableDeclaratorsContext, 0);
	}

	typeNamePairs(): TypeNamePairsContext {
		return this.getRuleContext(TypeNamePairsContext, 0);
	}

	ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(VariableInitializerContext, 0);
	}

	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number, t?: number) {
		super(parent, invokingState);
		this.t = t;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}