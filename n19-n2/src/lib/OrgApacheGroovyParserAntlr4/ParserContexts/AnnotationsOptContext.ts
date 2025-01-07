import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationContext} from './AnnotationContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {NlsContext} from './NlsContext';

export interface IAnnotationsOptContext {
	annotation(): Array<AnnotationContext>;
	annotation(i: number): AnnotationContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class AnnotationsOptContext extends GroovyParserRuleContext implements IAnnotationsOptContext {
	annotation(): Array<AnnotationContext>;
	annotation(i: number): AnnotationContext;
	annotation(i?: number): Array<AnnotationContext> | AnnotationContext {
		if (i == null) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext<AnnotationContext>(AnnotationContext, i);
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
		return GroovyParser.RULE_annotationsOpt;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitAnnotationsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}