import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IResourceListContext {
	resource(): Array<ResourceContext>;
	resource(i: number): ResourceContext;
	sep(): Array<SepContext>;
	sep(i: number): SepContext;
}

export class ResourceListContext extends GroovyParserRuleContext implements IResourceListContext {
	resource(): Array<ResourceContext>;
	resource(i: number): ResourceContext;
	resource(i?: number): Array<ResourceContext> | ResourceContext {
		if (i == null) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext<ResourceContext>(ResourceContext, i);
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

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_resourceList;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}