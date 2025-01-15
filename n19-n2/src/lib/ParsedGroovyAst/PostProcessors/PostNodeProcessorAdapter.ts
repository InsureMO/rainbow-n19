import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {ParsedNode} from '../ParsedNode';
import {PostNodeProcessor} from '../PostNodeProcessor';

/**
 * fulfill interface with default behaviours.
 */
export class PostNodeProcessorAdapter<C extends GroovyParserRuleContext> implements PostNodeProcessor<C> {
	/** default include (not ignore) */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ignoreToParsed(_ctx: C): boolean {
		return false;
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: C): boolean {
		return false;
	}

	/** default copy text from context to node */
	copyTextOnToParsed(node: ParsedNode, ctx: C): void {
		node.setText(ctx.getText());
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCountIntoHierarchy(_node: HierarchicalNode): boolean | [Array<DecoratedNode>, true] {
		return false;
	}

	/** default returns empty array */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectOnEntering(_node: HierarchicalNode): Array<DecoratedNode> {
		return [];
	}

	/** default returns empty array */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectOnExiting(_node: HierarchicalNode): Array<DecoratedNode> {
		return [];
	}

	/** default returns empty array */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectAfterExisted(_node: HierarchicalNode): Array<DecoratedNode> {
		return undefined;
	}
}
