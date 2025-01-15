import {SepContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class SepPostProcessor extends PostNodeProcessorAdapter<SepContext> {
	needCopyTextOnToParsed(_ctx: SepContext): boolean {
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return [node.decorated];
	}
}
