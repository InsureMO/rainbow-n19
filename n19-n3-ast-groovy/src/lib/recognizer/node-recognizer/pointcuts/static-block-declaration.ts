import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class StaticBlockDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.StaticBlockBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		StaticBlockDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			// never happens, this node always be created as csscmf first, and change to this nature
			// therefore, the static keyword is already appended as child
			TokenId.STATIC,
			TokenId.LBrace, TokenId.StaticBlockBody
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, StaticBlockDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.StaticBlockBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
