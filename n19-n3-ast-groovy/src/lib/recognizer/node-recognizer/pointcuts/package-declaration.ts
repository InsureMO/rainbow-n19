import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {SharedNodePointcuts} from './shared';

export class PackageDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.PACKAGE,
		TokenId.Whitespaces, TokenId.Tabs, TokenId.Dot,
		TokenId.Identifier,
		TokenId.MultipleLinesComment
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, PackageDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
