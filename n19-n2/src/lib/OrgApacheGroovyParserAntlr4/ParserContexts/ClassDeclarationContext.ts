import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeListContext} from './TypeListContext';
import {TypeParametersContext} from './TypeParametersContext';
import { ClassBodyContext } from './ClassBodyContext';

export interface IClassDeclarationContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	typeList(): Array<TypeListContext>;
	typeList(i: number): TypeListContext;
}

export class ClassDeclarationContext extends GroovyParserRuleContext implements IClassDeclarationContext {
	t: number;
	scs: TypeListContext;
	is: TypeListContext;
	ps: TypeListContext;

	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
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

	classBody(): ClassBodyContext {
		return this.getRuleContext(ClassBodyContext, 0);
	}

	CLASS(): TerminalNode {
		return this.getToken(GroovyParser.CLASS, 0);
	}

	INTERFACE(): TerminalNode {
		return this.getToken(GroovyParser.INTERFACE, 0);
	}

	ENUM(): TerminalNode {
		return this.getToken(GroovyParser.ENUM, 0);
	}

	AT(): TerminalNode {
		return this.getToken(GroovyParser.AT, 0);
	}

	TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	RECORD(): TerminalNode {
		return this.getToken(GroovyParser.RECORD, 0);
	}

	typeParameters(): TypeParametersContext {
		return this.getRuleContext(TypeParametersContext, 0);
	}

	formalParameters(): FormalParametersContext {
		return this.getRuleContext(FormalParametersContext, 0);
	}

	EXTENDS(): TerminalNode {
		return this.getToken(GroovyParser.EXTENDS, 0);
	}

	IMPLEMENTS(): TerminalNode {
		return this.getToken(GroovyParser.IMPLEMENTS, 0);
	}

	PERMITS(): TerminalNode {
		return this.getToken(GroovyParser.PERMITS, 0);
	}

	typeList(): Array<TypeListContext>;
	typeList(i: number): TypeListContext;
	typeList(i?: number): Array<TypeListContext> | TypeListContext {
		if (i == null) {
			return this.getRuleContexts(TypeListContext);
		} else {
			return this.getRuleContext<TypeListContext>(TypeListContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_classDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}