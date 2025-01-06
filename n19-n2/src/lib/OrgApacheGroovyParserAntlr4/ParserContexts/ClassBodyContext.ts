import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassBodyDeclarationContext} from './ClassBodyDeclarationContext';
import {EnumConstantsContext} from './EnumConstantsContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IClassBodyContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	classBodyDeclaration(): Array<ClassBodyDeclarationContext>;
	classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	sep(): Array<SepContext>;
	sep(i: number): SepContext;
}

export class ClassBodyContext extends GroovyParserRuleContext implements IClassBodyContext {
	t: number;

	LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
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

	RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	enumConstants(): EnumConstantsContext {
		return this.getRuleContext(EnumConstantsContext, 0);
	}

	classBodyDeclaration(): Array<ClassBodyDeclarationContext>;
	classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	classBodyDeclaration(i?: number): Array<ClassBodyDeclarationContext> | ClassBodyDeclarationContext {
		if (i == null) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext<ClassBodyDeclarationContext>(ClassBodyDeclarationContext, i);
		}
	}

	sep(): Array<SepContext>;
	sep(i: number): SepContext;
	sep(i?: number): Array<SepContext> | SepContext {
		if (i == null) {
			return this.getRuleContexts(SepContext);
		} else {
			return this.getRuleContext<SepContext>(SepContext, i);
		}
	}

	COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number, t?: number) {
		super(parent, invokingState);
		this.t = t;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_classBody;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}