import {ResourceListContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of resources.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ResourceListPostProcessor extends PostNodeProcessorAdapter<ResourceListContext> {
}