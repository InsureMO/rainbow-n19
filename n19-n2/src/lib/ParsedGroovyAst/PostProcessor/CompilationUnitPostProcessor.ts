import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class CompilationUnitPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}
}
