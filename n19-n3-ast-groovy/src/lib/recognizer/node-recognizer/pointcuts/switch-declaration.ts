import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

class SwitchCaseDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchCaseBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchCaseDeclaration.onLBraceAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SwitchCaseBody);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO switch case and default node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, SwitchCaseDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SwitchCaseDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}

class SwitchDefaultDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchDefaultBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchDefaultDeclaration.onLBraceAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SwitchDefaultBody);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO switch case and default node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, SwitchDefaultDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SwitchDefaultDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}

export class SwitchDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Case = SwitchCaseDeclaration;
	static readonly Default = SwitchDefaultDeclaration;

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SwitchBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SwitchDeclaration.onLBraceAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SwitchBody);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO switch node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, SwitchDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SwitchDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}
