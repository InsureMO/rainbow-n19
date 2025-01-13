import {ParserRuleContext} from 'antlr4';
import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';

export const gprc = (ctx: ParserRuleContext): GroovyParserRuleContext => ctx as GroovyParserRuleContext;
