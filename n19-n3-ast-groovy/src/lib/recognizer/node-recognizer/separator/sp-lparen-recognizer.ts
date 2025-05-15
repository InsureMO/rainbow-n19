import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractPreservableRecognizer, PreservableCheckFunc} from '../abstract';
import {RecognizePreservation} from '../shared';

export class SpLParenRecognizer extends AbstractPreservableRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.LParen;
	}

	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCsscmfDeclaration
		];
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		const blockNode = new GroovyAstNode({
			tokenId: TokenId.ParenBlock, tokenType: TokenType.LogicBlock,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		blockNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(blockNode);
		return nodeIndex + 1;
	}
}