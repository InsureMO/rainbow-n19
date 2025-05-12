import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class ConstructorDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.ConstructorBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		ConstructorDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.ConstructorBody);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO constructor node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, ConstructorDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, ConstructorDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}
