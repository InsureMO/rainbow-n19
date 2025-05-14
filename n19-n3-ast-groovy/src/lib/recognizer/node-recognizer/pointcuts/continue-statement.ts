import {GroovyAstNode} from '../../../node';
import {$Neaf} from '../../neaf-wrapper';

export class ContinueStatement {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
