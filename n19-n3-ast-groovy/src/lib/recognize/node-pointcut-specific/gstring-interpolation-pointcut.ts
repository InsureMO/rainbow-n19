import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {ChildAcceptableCheckFunc, OneOfOnChildAppendedFunc, OnNodeClosedFunc} from '../node-attribute';

export class GStringInterpolationPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * for lbrace started, accept anything.
	 * for not lbrace started,
	 * 1. for first node after start mark, must be identifier,
	 * 2. for node after identifier, must be dot,
	 * 3. for node after dot, must be identifier.
	 */
	static readonly childAcceptableCheck: ChildAcceptableCheckFunc = (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;

		if (children[0].tokenId === TokenId.GStringInterpolationLBraceStartMark) {
			// starts with lbrace start mark, accept anything
			return true;
		}

		if (children.length === 1) {
			// first one, must be identifier
			return mightBeChildNode.tokenId === TokenId.Identifier;
		}
		const previousSibling = children[children.length - 1];
		if (previousSibling.tokenId === TokenId.Identifier) {
			// previous is identifier, must be dot
			return mightBeChildNode.tokenId === TokenId.Dot;
		} else {
			// previous is dot, must be identifier
			return mightBeChildNode.tokenId === TokenId.Identifier;
		}
	};

	static readonly startsWithLBraceAndRBraceAppended: OneOfOnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringInterpolationLBraceStartMark
			&& lastChildNode.tokenId === TokenId.RBrace;
	};

	/**
	 * chop-off the last dot node, only when start mark doesn't contain lbrace
	 */
	static readonly finalize: OnNodeClosedFunc = (node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const children = node.children;

		if (children[0].tokenId === TokenId.GStringInterpolationLBraceStartMark) {
			// starts with lbrace start mark, do nothing
			return;
		}

		const lastNode = children[children.length - 1];
		if (lastNode.tokenId === TokenId.Dot) {
			astRecognizer.chopOffFromOldParentAndMoveToCurrentParent([lastNode]);
		}
	};
}
