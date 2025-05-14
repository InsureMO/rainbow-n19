import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class SynchronizedBlockDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SynchronizedBlockBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SynchronizedBlockDeclaration.onLParenAppended,
		SynchronizedBlockDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			// never happens, this node always be created as csscmf first, and change to this nature
			// therefore, the synchronized keyword is already appended as child
			TokenId.SYNCHRONIZED,
			// the left parenthesis is same as synchronized keyword, already appended as child
			TokenId.LParen, TokenId.ParenBlock,
			TokenId.LBrace, TokenId.SynchronizedBlockBody
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, SynchronizedBlockDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.SynchronizedBlockBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
