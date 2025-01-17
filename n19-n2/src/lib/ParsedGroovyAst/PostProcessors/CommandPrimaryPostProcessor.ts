import {CommandPrimaryContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of command argument.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class CommandPrimaryPostProcessor extends PostNodeProcessorAdapter<CommandPrimaryContext> {
}