import {GroovyAstNode} from '../../../node';
import {$Neaf} from '../../neaf-wrapper';
import {SharedNodePointcuts} from './shared';

export class ContinueStatement {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO continue node pointcuts
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.OnChildAppended.set(node, ContinueStatement.onChildAppended);
		$Neaf.OnNodeClosed.set(node, ContinueStatement.onNodeClosed);
	};
}
