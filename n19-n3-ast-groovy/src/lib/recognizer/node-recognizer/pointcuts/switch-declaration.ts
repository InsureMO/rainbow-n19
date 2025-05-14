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

	static readonly caseOrDefaultDeclarationChildAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnUnacceptTokenIds(
		TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration, TokenId.RBrace
	);
}

class SwitchCaseDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SwitchDeclarationUtils.caseOrDefaultDeclarationChildAcceptableCheck;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchCaseBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchCaseDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SwitchCaseBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO switch case and default node pointcuts
		$Neaf.ChildAcceptableCheck.set(node, SwitchCaseDeclaration.childAcceptableCheck);
		$Neaf.OnChildAppended.set(node, SwitchCaseDeclaration.onChildAppended);
		$Neaf.OnChildClosed.set(node, SwitchCaseDeclaration.onChildClosed);
		$Neaf.OnNodeClosed.set(node, SwitchCaseDeclaration.onNodeClosed);
	};
}

class SwitchDefaultDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SwitchDeclarationUtils.caseOrDefaultDeclarationChildAcceptableCheck;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchDefaultBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchDefaultDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SwitchDefaultBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO switch case and default node pointcuts
		$Neaf.ChildAcceptableCheck.set(node, SwitchDefaultDeclaration.childAcceptableCheck);
		$Neaf.OnChildAppended.set(node, SwitchDefaultDeclaration.onChildAppended);
		$Neaf.OnChildClosed.set(node, SwitchDefaultDeclaration.onChildClosed);
		$Neaf.OnNodeClosed.set(node, SwitchDefaultDeclaration.onNodeClosed);
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

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.SWITCH,
		TokenId.LParen, TokenId.LBrace,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.SwitchBody, TokenId.ParenBlock,
		TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration
	);
	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchDeclaration.onLParenAppended,
		SwitchDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SwitchBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO switch node pointcuts
		$Neaf.ChildAcceptableCheck.set(node, SwitchDeclaration.childAcceptableCheck);
		$Neaf.OnChildAppended.set(node, SwitchDeclaration.onChildAppended);
		$Neaf.OnChildClosed.set(node, SwitchDeclaration.onChildClosed);
		$Neaf.OnNodeClosed.set(node, SwitchDeclaration.onNodeClosed);
	};
}
