import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';

export class GStringInterpolationPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static startsWithLBrace(_mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean {
		return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringInterpolationLBraceStartMark;
	}

	static notStartsWithLBrace(_mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean {
		return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringInterpolationStartMark;
	}

	/**
	 * chop-off the last dot node, only when start mark doesn't contain lbrace
	 */
	static finalize(node: GroovyAstNode, astRecognizer: AstRecognizer): void {
		const children = node.children;

		if (children[0].tokenId === TokenId.GStringInterpolationLBraceStartMark) {
			// starts with lbrace start mark, do nothing
			return;
		}

		const lastNode = children[children.length - 1];
		if (lastNode.tokenId === TokenId.Dot) {
			astRecognizer.chopOffFromOldParentAndMoveToCurrentParent([lastNode]);
		}
	}
}
