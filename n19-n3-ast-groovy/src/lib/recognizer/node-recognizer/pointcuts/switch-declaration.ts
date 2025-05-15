import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

class SwitchDeclarationUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly UnacceptedTokenIds = [
		TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
		// any legitimate right brace will be received by the block initiated by the left brace.
		// therefore, an independent right brace must mark the end of the switch body.
		TokenId.RBrace
	];
}

class SwitchCaseDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.RejectTokenIdsAsChild.set(node, SwitchDeclarationUtils.UnacceptedTokenIds);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}

class SwitchDefaultDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.RejectTokenIdsAsChild.set(node, SwitchDeclarationUtils.UnacceptedTokenIds);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}

export class SwitchDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Utils = SwitchDeclarationUtils;
	static readonly Case = SwitchCaseDeclaration;
	static readonly Default = SwitchDefaultDeclaration;

	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchDeclaration.onLParenAppended,
		SwitchDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			TokenId.SWITCH,
			TokenId.LParen, TokenId.ParenBlock,
			TokenId.LBrace, TokenId.SwitchBody,
			// sub declarations are allowed, which leads incorrect syntax
			TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, SwitchDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.SwitchBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
