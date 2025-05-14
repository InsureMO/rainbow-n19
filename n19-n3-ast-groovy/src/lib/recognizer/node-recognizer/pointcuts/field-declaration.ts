import {GroovyAstNode} from '../../../node';
import {$Neaf} from '../../neaf-wrapper';
import {SharedNodePointcuts} from './shared';

export class FieldDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onChildAppended = SharedNodePointcuts.closeCurrentParentOnSemicolonAppended;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO field node pointcuts
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.OnChildAppended.set(node, FieldDeclaration.onChildAppended);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
