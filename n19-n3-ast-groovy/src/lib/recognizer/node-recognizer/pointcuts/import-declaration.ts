import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {SharedNodePointcuts} from './shared';

export class ImportDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.IMPORT,
		TokenId.Whitespaces, TokenId.Tabs, TokenId.Dot,
		TokenId.STATIC, TokenId.Identifier, TokenId.AS,
		// alias of TokenId.Multiple, only in import declaration
		TokenId.ImportAllMark,
		TokenId.MultipleLinesComment
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, ImportDeclaration.childAcceptableCheck);
		$Neaf.CouldEndsWithSemicolon.set(node, true);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
