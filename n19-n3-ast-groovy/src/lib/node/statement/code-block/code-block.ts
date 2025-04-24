import {AstNode} from '@rainbow-n19/n3-ast';
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
