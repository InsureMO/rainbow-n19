import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {ChildAcceptableCheckFunc, OneOfChildAcceptableCheckFunc} from '../node-attribute';
import {
	AcceptableTokenIds,
	AcceptableTokenTypes,
	AcceptedWhen,
	EndWithAnyOfTokenIdsAppended,
	PointcutBasisDef,
	PointcutBasisDefType,
	ReviseTokenTo,
	UnacceptableTokenIds,
	UnacceptedWhen
} from './types';

export class ChildAcceptableCheckPointcutBuilder {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static buildAcceptableTokenIds(defs: AcceptableTokenIds): OneOfChildAcceptableCheckFunc {
		const [, ...tokenIds] = defs;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return tokenIds.includes(mightBeChildNode.tokenId);
		};
	}

	static buildAcceptableTokenTypes(defs: AcceptableTokenTypes): OneOfChildAcceptableCheckFunc {
		const [, ...tokenTypes] = defs;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return tokenTypes.includes(mightBeChildNode.tokenType);
		};
	}

	static buildAcceptedWhen(defs: AcceptedWhen): OneOfChildAcceptableCheckFunc {
		const [, func, ...tokenIds] = defs;
		return (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (func(mightBeChildNode, astRecognizer)) {
				return tokenIds.includes(mightBeChildNode.tokenId);
			}
			return false;
		};
	}

	static buildUnacceptableTokenIds(defs: UnacceptableTokenIds): OneOfChildAcceptableCheckFunc {
		const [, ...tokenIds] = defs;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return tokenIds.includes(mightBeChildNode.tokenId);
		};
	}

	static buildUnacceptedWhen(defs: UnacceptedWhen): OneOfChildAcceptableCheckFunc {
		const [, func, ...tokenIds] = defs;
		return (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (func(mightBeChildNode, astRecognizer)) {
				return tokenIds.includes(mightBeChildNode.tokenId);
			}
			return false;
		};
	}

	static buildReviseTokenTo(defs: ReviseTokenTo): OneOfChildAcceptableCheckFunc {
		const [, map] = defs;
		const tokenIds: Array<TokenId> = [
			...Object.keys(map).map(tokenIdInStr => Number(tokenIdInStr)),
			...Object.values(map).map(tokenIdOrIdType => {
				if (Array.isArray(tokenIdOrIdType)) {
					return tokenIdOrIdType[0];
				} else {
					return tokenIdOrIdType;
				}
			})
		];
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return tokenIds.includes(mightBeChildNode.tokenId);
		};
	}

	static buildEndWithAnyOfTokenIdsAppended(defs: EndWithAnyOfTokenIdsAppended): OneOfChildAcceptableCheckFunc {
		const [, ...tokenIds] = defs;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return tokenIds.includes(mightBeChildNode.tokenId);
		};
	}
}

export const buildChildAcceptableCheckPointcut = (tokenId: TokenId, items?: PointcutBasisDef): Optional<ChildAcceptableCheckFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	let disableBase5AsChild = false;
	const acceptedByChildAppendedFuncs: Array<OneOfChildAcceptableCheckFunc> = [];
	const rejectFuncs: Array<OneOfChildAcceptableCheckFunc> = [];
	const acceptFuncs: Array<OneOfChildAcceptableCheckFunc> = [];
	let childAcceptableCheck: Optional<ChildAcceptableCheckFunc> = (void 0);
	for (const item of items) {
		switch (item[0]) {
			case PointcutBasisDefType.DisableBase5AsChild: {
				disableBase5AsChild = true;
				break;
			}
			case PointcutBasisDefType.AcceptableTokenIds: {
				acceptFuncs.push(ChildAcceptableCheckPointcutBuilder.buildAcceptableTokenIds(item));
				break;
			}
			case PointcutBasisDefType.AcceptableTokenTypes: {
				acceptFuncs.push(ChildAcceptableCheckPointcutBuilder.buildAcceptableTokenTypes(item));
				break;
			}
			case PointcutBasisDefType.AcceptedWhen: {
				acceptFuncs.push(ChildAcceptableCheckPointcutBuilder.buildAcceptedWhen(item));
				break;
			}
			case PointcutBasisDefType.UnacceptableTokenIds: {
				rejectFuncs.push(ChildAcceptableCheckPointcutBuilder.buildUnacceptableTokenIds(item));
				break;
			}
			case PointcutBasisDefType.UnacceptedWhen: {
				rejectFuncs.push(ChildAcceptableCheckPointcutBuilder.buildUnacceptedWhen(item));
				break;
			}
			case PointcutBasisDefType.ReviseTokenTo: {
				acceptedByChildAppendedFuncs.push(ChildAcceptableCheckPointcutBuilder.buildReviseTokenTo(item));
				break;
			}
			case PointcutBasisDefType.EndWithAnyOfTokenIdsAppended: {
				acceptedByChildAppendedFuncs.push(ChildAcceptableCheckPointcutBuilder.buildEndWithAnyOfTokenIdsAppended(item));
				break;
			}
			case PointcutBasisDefType.ChildAcceptableCheck: {
				if (childAcceptableCheck != null) {
					throw new Error(`Multiple ChildAcceptableCheck on token[name=${TokenId[tokenId]}, tokenId=${tokenId}] is not supported.`);
				} else {
					childAcceptableCheck = item[1];
				}
				break;
			}
			default: {
				// do nothing
				break;
			}
		}
	}

	return (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		// base 5 token ids
		if (!disableBase5AsChild
			&& [TokenId.Whitespaces, TokenId.Tabs, TokenId.Newline, TokenId.SingleLineComment, TokenId.MultipleLinesComment].includes(mightBeChildNode.tokenId)) {
			// base 5 token ids enabled, and given child is one of it, accepted
			return true;
		}
		// accepted by child appended
		for (const func of acceptedByChildAppendedFuncs) {
			if (func(mightBeChildNode, astRecognizer)) {
				return true;
			}
		}
		// reject
		for (const func of rejectFuncs) {
			if (func(mightBeChildNode, astRecognizer)) {
				return false;
			}
		}
		let hasExplicitAcceptRule = false;
		for (const func of acceptFuncs) {
			hasExplicitAcceptRule = true;
			if (func(mightBeChildNode, astRecognizer)) {
				return true;
			}
		}

		// pointcut function
		if (childAcceptableCheck != null) {
			return childAcceptableCheck(mightBeChildNode, astRecognizer);
		}
		// no explicit "acceptXXX" function specified, and not accepted by any other rule, or rejected by any other rule
		// means accepted
		return !hasExplicitAcceptRule;
	};
};
