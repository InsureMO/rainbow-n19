import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {ModifierContext} from './ModifierContext';

export interface IModifiersContext {
	modifier(): Array<ModifierContext>;
	modifier(i: number): ModifierContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class ModifiersContext extends GroovyParserRuleContext implements IModifiersContext {
	modifier(): Array<ModifierContext>;
	modifier(i: number): ModifierContext;
	modifier(i?: number): Array<ModifierContext> | ModifierContext {
		if (i == null) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext<ModifierContext>(ModifierContext, i);
		}
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

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_modifiers;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}