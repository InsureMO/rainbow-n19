import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {ModifiersOptContext} from './ModifiersOptContext';
import {TypeParametersContext} from './TypeParametersContext';

export interface IMethodDeclarationContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class MethodDeclarationContext extends GroovyParserRuleContext implements IMethodDeclarationContext {
	t: number;
	ct: number;

	modifiersOpt(): ModifiersOptContext {
		return this.getRuleContext(ModifiersOptContext, 0);
	}

	methodName(): MethodNameContext {
		return this.getRuleContext(MethodNameContext, 0);
	}

	formalParameters(): FormalParametersContext {
		return this.getRuleContext(FormalParametersContext, 0);
	}

	typeParameters(): TypeParametersContext {
		return this.getRuleContext(TypeParametersContext, 0);
	}

	returnType(): ReturnTypeContext {
		return this.getRuleContext(ReturnTypeContext, 0);
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

	DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	elementValue(): ElementValueContext {
		return this.getRuleContext(ElementValueContext, 0);
	}

	THROWS(): TerminalNode {
		return this.getToken(GroovyParser.THROWS, 0);
	}

	qualifiedClassNameList(): QualifiedClassNameListContext {
		return this.getRuleContext(QualifiedClassNameListContext, 0);
	}

	methodBody(): MethodBodyContext {
		return getRuleContext(MethodBodyContext, 0);
	}

	// MethodDeclarationContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
	constructor(parent?: ParserRuleContext, invokingState?: number, t?: number, ct?: number) {
		super(parent, invokingState);
		this.t = t;
		this.ct = ct;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_methodDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
