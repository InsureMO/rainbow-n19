import {ArgumentListContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. command expression,<br>
 * 2. command argument.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ArgumentListPostProcessor extends PostNodeProcessorAdapter<ArgumentListContext> {
}