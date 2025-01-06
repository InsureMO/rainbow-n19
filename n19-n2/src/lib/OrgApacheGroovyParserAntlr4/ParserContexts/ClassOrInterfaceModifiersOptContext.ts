import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassOrInterfaceModifiersContext} from './ClassOrInterfaceModifiersContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IClassOrInterfaceModifiersOptContext {
	NL(): Array<TerminalNode>;
	NL(i: number): TerminalNode;
}

export class ClassOrInterfaceModifiersOptContext extends GroovyParserRuleContext implements IClassOrInterfaceModifiersOptContext {
	classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext {
		return this.getRuleContext(ClassOrInterfaceModifiersContext, 0);
	}

	NL(): Array<TerminalNode>;
	NL(i: number): TerminalNode;
	NL(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.NL);
		} else {
			return this.getToken(GroovyParser.NL, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_classOrInterfaceModifiersOpt;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassOrInterfaceModifiersOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}