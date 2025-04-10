import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractEndByRBraceAstNode} from '../../abstract';

/**
 * TODO define code block node
 */
export class CodeBlockNode extends AbstractEndByRBraceAstNode {
	get tokenId(): TokenId {
		return TokenId.CodeBlock;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return false;
	}
}
