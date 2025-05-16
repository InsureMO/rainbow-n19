import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractDeclarationCreateRecognizer, RehydrateFunc} from '../abstract';
import {NodePointcuts} from '../pointcuts';
import {RecognizeRehydration, RecognizeUtils} from '../shared';

/**
 * at could be start of annotation (except {@link AstKeywords.AtThreadsafe} and {@link AstKeywords.AtInterface}),
 * or field direct visit flag (must after a dot),
 * such as "x.@y" means do not use the "x.getY", get value from field "y" of "x" directly.
 */
export class SpAtRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.At;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.AnnotationDeclaration, TokenType.AnnotationDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.AnnotationDeclaration.extra(node);
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		// check it is after a dot or not
		const [, dotNodeIndex] = RecognizeUtils.isAfterDotDirectly(recognition);
		if (dotNodeIndex === -1) {
			// start an annotation
			return super.doRecognize(recognition);
		} else {
			// to visit field directly
			const elementNode = new GroovyAstNode({
				tokenId: TokenId.AtFieldPathElement, tokenType: TokenType.PathElement,
				text: '', startOffset: node.startOffset,
				startLine: node.startLine, startColumn: node.startColumn
			});
			NodePointcuts.AtFieldPathElement.extra(node);
			elementNode.asParentOf(node);
			astRecognizer.appendAsCurrentParent(elementNode);
			return nodeIndex + 1;
		}
	}
}
