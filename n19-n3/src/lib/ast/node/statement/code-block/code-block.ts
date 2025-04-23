import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';

export class CodeBlockNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.CodeBlock;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
