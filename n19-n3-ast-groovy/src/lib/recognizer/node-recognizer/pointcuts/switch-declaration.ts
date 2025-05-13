import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

class SwitchDeclarationUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly caseOrDefaultDeclarationChildAcceptableCheck = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return ![
			TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration, TokenId.RBrace
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc;
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
		$NAF.ChildAcceptableCheck.set(node, SwitchCaseDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, SwitchCaseDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SwitchCaseDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, SwitchCaseDeclaration.onNodeClosed);
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
		$NAF.ChildAcceptableCheck.set(node, SwitchDefaultDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, SwitchDefaultDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SwitchDefaultDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, SwitchDefaultDeclaration.onNodeClosed);
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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly childAcceptableCheck = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			TokenId.SWITCH,
			TokenId.LParen, TokenId.LBrace,
			// end
			TokenId.Semicolon,
			TokenId.SingleLineComment, TokenId.MultipleLinesComment,
			TokenId.SwitchBody, TokenId.ParenBlock,
			TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc;
	static readonly onLParenAppended = LogicBlock.Paren.createOnLParenAppendedFuncForDeclaration(TokenId.ParenBlock);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchDeclaration.onLParenAppended,
		SwitchDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SwitchBody);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO switch node pointcuts
		$NAF.ChildAcceptableCheck.set(node, SwitchDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, SwitchDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SwitchDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}
