import {$NAF, GroovyAstNode} from '../../../node';
import {SharedNodePointcuts} from './shared';

export class NewExpression {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO new node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, NewExpression.onChildAppended);
		$NAF.OnNodeClosed.set(node, NewExpression.onNodeClosed);
	};
}
