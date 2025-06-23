import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildAppendedFunc, OneOfOnChildAppendedFunc} from '../node-attribute';
import {NodePointcuts} from './pointcut-defs';
import {
	EndWithAnyOfTokenIdsAppended,
	EndWithChecked,
	PointcutBasisDef,
	PointcutBasisDefType,
	ReviseTokenTo,
	ReviseTokenToWhen,
	SplitTokenWhen
} from './types';

export class OnChildAppendedPointcutBuilder {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static buildReviseTokenTo = (defs: ReviseTokenTo): OneOfOnChildAppendedFunc => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			const reviseTo = defs[1][lastChildNode.tokenId];
			if (reviseTo != null) {
				if (Array.isArray(reviseTo)) {
					lastChildNode.replaceTokenNature(reviseTo[0], reviseTo[1]);
				} else {
					lastChildNode.replaceTokenNature(reviseTo, lastChildNode.tokenType);
				}
				NodePointcuts.initialize(lastChildNode);
				return true;
			}
			return false;
		};
	};
	static buildReviseTokenToWhen = (defs: ReviseTokenToWhen): OneOfOnChildAppendedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (defs[1](lastChildNode, astRecognizer)) {
				if (Array.isArray(defs[2])) {
					lastChildNode.replaceTokenNature(defs[2][0], defs[2][1]);
				} else {
					lastChildNode.replaceTokenNature(defs[2], lastChildNode.tokenType);
				}
				NodePointcuts.initialize(lastChildNode);
				return true;
			}
			return false;
		};
	};
	static buildSplitTokenWhen = (defs: SplitTokenWhen): OneOfOnChildAppendedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (defs[1](lastChildNode, astRecognizer)) {
				defs[2](lastChildNode, astRecognizer);
				return true;
			}
			return false;
		};
	};
	static buildEndWithAnyOfTokenIdsAppended = (defs: EndWithAnyOfTokenIdsAppended): OneOfOnChildAppendedFunc => {
		const [, ...tokenIds] = defs;
		return (_lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			// the revise function SplitTokenWhen might make the passed in lastChildNode is not the actual last child node,
			// so need to retrieve the last child node again
			const children = astRecognizer.getCurrentParent().children;
			const lastChildNode = children[children.length - 1];
			if (tokenIds.includes(lastChildNode.tokenId)) {
				astRecognizer.closeCurrentParent();
				return true;
			}
			return false;
		};
	};
	static buildEndWithChecked = (defs: EndWithChecked): OneOfOnChildAppendedFunc => {
		return (_lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			// the revise function SplitTokenWhen might make the passed in lastChildNode is not the actual last child node,
			// so need to retrieve the last child node again
			const children = astRecognizer.getCurrentParent().children;
			const lastChildNode = children[children.length - 1];
			if (defs[1](lastChildNode, astRecognizer)) {
				astRecognizer.closeCurrentParent();
				return true;
			}
			return false;
		};
	};
}

export const buildOnChildAppendedPointcut = (tokenId: TokenId, items?: PointcutBasisDef): Optional<OnChildAppendedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const reviseFuncs: Array<OneOfOnChildAppendedFunc> = [];
	const endWithFuncs: Array<OneOfOnChildAppendedFunc> = [];
	let onChildAppended: Optional<OnChildAppendedFunc> = (void 0);
	for (const item of items) {
		switch (item[0]) {
			case PointcutBasisDefType.ReviseTokenTo: {
				reviseFuncs.push(OnChildAppendedPointcutBuilder.buildReviseTokenTo(item));
				break;
			}
			case PointcutBasisDefType.ReviseTokenToWhen: {
				reviseFuncs.push(OnChildAppendedPointcutBuilder.buildReviseTokenToWhen(item));
				break;
			}
			case PointcutBasisDefType.SplitTokenWhen: {
				reviseFuncs.push(OnChildAppendedPointcutBuilder.buildSplitTokenWhen(item));
				break;
			}
			case PointcutBasisDefType.EndWithAnyOfTokenIdsAppended: {
				endWithFuncs.push(OnChildAppendedPointcutBuilder.buildEndWithAnyOfTokenIdsAppended(item));
				break;
			}
			case PointcutBasisDefType.EndWithChecked: {
				endWithFuncs.push(OnChildAppendedPointcutBuilder.buildEndWithChecked(item));
				break;
			}
			case PointcutBasisDefType.OnChildAppended: {
				if (onChildAppended != null) {
					throw new Error(`Multiple OnChildAppended on token[name=${TokenId[tokenId]}, tokenId=${tokenId}] is not supported.`);
				} else {
					onChildAppended = item[1];
				}
				break;
			}
			default: {
				// do nothing
				break;
			}
		}
	}

	if (reviseFuncs.length === 0 && endWithFuncs.length === 0 && onChildAppended == null) {
		return (void 0);
	}

	return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		// revise token
		let revised = false;
		for (const func of reviseFuncs) {
			if (func(lastChildNode, astRecognizer)) {
				revised = true;
				break;
			}
		}

		let ended = false;
		for (const func of endWithFuncs) {
			if (func(lastChildNode, astRecognizer)) {
				ended = true;
				break;
			}
		}

		if (!revised && !ended) {
			onChildAppended?.(lastChildNode, astRecognizer);
		}
	};
};
