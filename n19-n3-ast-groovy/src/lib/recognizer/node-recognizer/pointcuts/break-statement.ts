import {$NAF, GroovyAstNode} from '../../../node';
import {SharedNodePointcuts} from './shared';

export class BreakStatement {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO break node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, BreakStatement.onChildAppended);
		$NAF.OnNodeClosed.set(node, BreakStatement.onNodeClosed);
	};
}
