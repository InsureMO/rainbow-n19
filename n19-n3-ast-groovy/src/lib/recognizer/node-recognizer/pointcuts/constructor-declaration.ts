import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class ConstructorDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.ConstructorBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		ConstructorDeclaration.onLParenAppended,
		ConstructorDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, ConstructorDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.ConstructorBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
