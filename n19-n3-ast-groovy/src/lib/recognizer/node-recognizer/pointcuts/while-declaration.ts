import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class WhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLParenAppended = LogicBlock.Paren.createOnLParenAppendedFuncForDeclaration(TokenId.ParenBlock);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.WhileBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		WhileDeclaration.onLParenAppended,
		WhileDeclaration.onLBraceAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.WhileBody);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO do-while node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, WhileDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, WhileDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}