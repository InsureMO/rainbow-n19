import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

class TryDeclarationUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
}

class TryTryDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.TryTryBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		TryDeclarationUtils.onLParenAppended,
		TryTryDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			TokenId.LParen, TokenId.ParenBlock,
			TokenId.LBrace, TokenId.TryTryBody
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, TryTryDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.TryTryBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}

class TryCatchDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.TryCatchBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		TryDeclarationUtils.onLParenAppended,
		TryCatchDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			TokenId.LParen, TokenId.ParenBlock,
			TokenId.LBrace, TokenId.TryCatchBody
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, TryCatchDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.TryCatchBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}

class TryFinallyDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.TryFinallyBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		TryFinallyDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			TokenId.LBrace, TokenId.TryFinallyBody
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, TryFinallyDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.TryFinallyBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}

export class TryDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Utils = TryDeclarationUtils;
	static readonly Try = TryTryDeclaration;
	static readonly Catch = TryCatchDeclaration;
	static readonly Finally = TryFinallyDeclaration;

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			TokenId.TryTryDeclaration, TokenId.TryCatchDeclaration, TokenId.TryFinallyDeclaration
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
