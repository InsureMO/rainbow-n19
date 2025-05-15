import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
import {AstRecognition} from '../../types';
import {AbstractDeclarationCreateRecognizer, RehydrateFunc} from '../abstract';
import {NodePointcuts} from '../pointcuts';

/**
 * recognize left brace when
 * 1. parent is not csscmf declaration,
 * 2. parent has {@link $Neaf.TakeLBraceAs}, follow its definition,
 * 3. create as {@link TokenId.CodeBlock}
 */
export class SpLBraceRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.LBrace;
	}

	/**
	 * node is rehydrated, and append to parent as leaf
	 */
	static rehydrateAccordingToTakeLBraceAs: RehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const tokenIdOrTakeFunc = $Neaf.TakeLBraceAs.get(currentParent);
		if (tokenIdOrTakeFunc == null) {
			return (void 0);
		}

		const tokenId = (typeof tokenIdOrTakeFunc === 'function')
			? tokenIdOrTakeFunc(astRecognizer)
			: tokenIdOrTakeFunc;
		if (tokenId == null) {
			return (void 0);
		}

		const blockNode = new GroovyAstNode({
			tokenId, tokenType: TokenType.LogicBlock,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.LogicBlock.Brace.extra(blockNode);
		blockNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(blockNode);
		return nodeIndex + 1;
	};

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			...super.getRehydrateFunctions(),
			SpLBraceRecognizer.rehydrateAccordingToTakeLBraceAs
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.CodeBlock, TokenType.LogicBlock];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode) {
		NodePointcuts.LogicBlock.Brace.extra(node);
	}
}