import {$NAF, GroovyAstNode} from '../../../node';
import {SharedNodePointcuts} from './shared';

export class AssertStatement {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO assert node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, AssertStatement.onChildAppended);
		$NAF.OnNodeClosed.set(node, AssertStatement.onNodeClosed);
	};
}
