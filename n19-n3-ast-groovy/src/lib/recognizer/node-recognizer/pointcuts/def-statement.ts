import {$NAF, GroovyAstNode} from '../../../node';
import {SharedNodePointcuts} from './shared';

export class DefStatement {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO def node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, DefStatement.onChildAppended);
		$NAF.OnNodeClosed.set(node, DefStatement.onNodeClosed);
	};
}
