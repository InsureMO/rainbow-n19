import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassOrInterfaceModifierContext} from './ClassOrInterfaceModifierContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {NlsContext} from './NlsContext';

export interface IClassOrInterfaceModifiersContext {
	classOrInterfaceModifier(): Array<ClassOrInterfaceModifierContext>;
	classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class ClassOrInterfaceModifiersContext extends GroovyParserRuleContext implements IClassOrInterfaceModifiersContext {
	classOrInterfaceModifier(): Array<ClassOrInterfaceModifierContext>;
	classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	classOrInterfaceModifier(i?: number): Array<ClassOrInterfaceModifierContext> | ClassOrInterfaceModifierContext {
		if (i == null) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext<ClassOrInterfaceModifierContext>(ClassOrInterfaceModifierContext, i);
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
		return GroovyParser.RULE_classOrInterfaceModifiers;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassOrInterfaceModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}