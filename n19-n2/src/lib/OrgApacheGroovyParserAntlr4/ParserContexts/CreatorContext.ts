import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnonymousInnerClassDeclarationContext} from './AnonymousInnerClassDeclarationContext';
import {ArgumentsContext} from './ArgumentsContext';
import {CreatedNameContext} from './CreatedNameContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import { DimContext } from './DimContext';
import {NlsContext} from './NlsContext';
import { ArrayInitializerContext } from './ArrayInitializerContext';

export interface ICreatorContext {
	dim(): Array<DimContext>;
	dim(i: number): DimContext;
}

export class CreatorContext extends GroovyParserRuleContext implements ICreatorContext {
	t: number;

	createdName(): CreatedNameContext {
		return this.getRuleContext(CreatedNameContext, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	arguments(): ArgumentsContext {
		return this.getRuleContext(ArgumentsContext, 0);
	}

	anonymousInnerClassDeclaration(): AnonymousInnerClassDeclarationContext {
		return this.getRuleContext(AnonymousInnerClassDeclarationContext, 0);
	}

	dim(): Array<DimContext>;
	dim(i: number): DimContext;
	dim(i?: number): Array<DimContext> | DimContext {
		if (i == null) {
			return this.getRuleContexts(DimContext);
		} else {
			return this.getRuleContext<DimContext>(DimContext, i);
		}
	}

	arrayInitializer(): ArrayInitializerContext {
		return this.getRuleContext(ArrayInitializerContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number, t?: number) {
		super(parent, invokingState);
		this.t = t;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_creator;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}