import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ElementValueContext} from './ElementValueContext';
import {FormalParametersContext} from './FormalParametersContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {MethodBodyContext} from './MethodBodyContext';
import {MethodNameContext} from './MethodNameContext';
import {ModifiersOptContext} from './ModifiersOptContext';
import {QualifiedClassNameListContext} from './QualifiedClassNameListContext';
import {ReturnTypeContext} from './ReturnTypeContext';
import {TypeParametersContext} from './TypeParametersContext';
import { NlsContext } from './NlsContext';

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
		return this.getRuleContext(MethodBodyContext, 0);
	}

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
