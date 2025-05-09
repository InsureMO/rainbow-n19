import {$NAF, GroovyAstNode} from '../../../../node';

export const FieldDeclaration = {
	extra: (node: GroovyAstNode): void => {
		// TODO field node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.clear(node);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.clear(node);
	}
} as const;
