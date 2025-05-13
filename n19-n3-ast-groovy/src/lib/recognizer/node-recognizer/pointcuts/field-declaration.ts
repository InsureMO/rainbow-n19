import {$NAF, GroovyAstNode} from '../../../node';
import {SharedNodePointcuts} from './shared';

export class FieldDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}
	static readonly onChildAppended = SharedNodePointcuts.closeCurrentParentOnSemicolonAppended;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO field node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, FieldDeclaration.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.clear(node);
	};
}
