import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';

export class StaticBlockNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.StaticBlock;
	}

	protected couldBeChildOfMeOnBlockNotStarted(node: AstNode): boolean {
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			// block keyword
			TokenId.STATIC,
			// start block
			TokenId.LBrace
		].includes(node.tokenId);
	}
}
