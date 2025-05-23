import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {
	ChildAcceptableCheckFunc,
	NodeAttributeOperator,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc,
	TakeSpecificTokenToAnother
} from '../node';

export class PointcutBuilder {
	private readonly _funcs: Array<(node: GroovyAstNode) => void> = [];

	ChildAcceptableCheck(func: ChildAcceptableCheckFunc): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.ChildAcceptableCheck.set(node, func);
		});
		return this;
	}

	OnChildAppended(func: OnChildAppendedFunc): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.OnChildAppended.set(node, func);
		});
		return this;
	}

	OnChildClosed(func: OnChildClosedFunc): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.OnChildClosed.set(node, func);
		});
		return this;
	}

	OnNodeClosed(func: OnNodeClosedFunc): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.OnNodeClosed.set(node, func);
		});
		return this;
	}

	DisableAcceptAll5BaseNodesAsChild(): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.Accept5BaseNodesAsChild.set(node, false);
		});
		return this;
	}

	AcceptTokenIdsAsChild(tokenId: TokenId, ...tokenIds: Array<TokenId>): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.AcceptTokenIdsAsChild.set(node, [tokenId, ...tokenIds]);
		});
		return this;
	}

	AcceptTokenTypesAsChild(tokenType: TokenType, ...tokenTypes: Array<TokenType>): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.AcceptTokenTypesAsChild.set(node, [tokenType, ...tokenTypes]);
		});
		return this;
	}

	RejectTokenIdsAsChild(tokenId: TokenId, ...tokenIds: Array<TokenId>): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.RejectTokenIdsAsChild.set(node, [tokenId, ...tokenIds]);
		});
		return this;
	}

	TakeLBraceAs(tokenIdOrTakeFunc: TakeSpecificTokenToAnother): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.TakeLBraceAs.set(node, tokenIdOrTakeFunc);
		});
		return this;
	}

	EndWithToken(tokenId: TokenId): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.EndWithToken.set(node, tokenId);
		});
		return this;
	}

	EndWithSemicolon(): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.EndWithSemicolon.set(node);
		});
		return this;
	}

	CloseOnChildWithTokenClosed(tokenId: TokenId): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.CloseOnChildWithTokenClosed.set(node, tokenId);
		});
		return this;
	}

	HoldTrailingDetachableOnNodeClosed(): this {
		this._funcs.push((node: GroovyAstNode) => {
			NodeAttributeOperator.ElevateTrailingDetachableOnNodeClosed.set(node, false);
		});
		return this;
	}

	get build(): ((node: GroovyAstNode) => void) {
		return (node: GroovyAstNode) => {
			this._funcs.forEach(func => func(node));
		};
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PointcutBuilderFacade<T> = { [K in Exclude<keyof T, 'build'>]: T[K] extends (...args: any[]) => any ? (...args: Parameters<T[K]>) => PointcutBuilder : never };
export const NodePointcutBuilderFacade: PointcutBuilderFacade<PointcutBuilder> = {
	ChildAcceptableCheck: (func: ChildAcceptableCheckFunc): PointcutBuilder => new PointcutBuilder().ChildAcceptableCheck(func),
	OnChildAppended: (func: OnChildAppendedFunc): PointcutBuilder => new PointcutBuilder().OnChildAppended(func),
	OnChildClosed: (func: OnChildClosedFunc): PointcutBuilder => new PointcutBuilder().OnChildClosed(func),
	OnNodeClosed: (func: OnNodeClosedFunc): PointcutBuilder => new PointcutBuilder().OnNodeClosed(func),
	DisableAcceptAll5BaseNodesAsChild: (): PointcutBuilder => new PointcutBuilder().DisableAcceptAll5BaseNodesAsChild(),
	AcceptTokenIdsAsChild: (tokenId: TokenId, ...tokenIds: Array<TokenId>): PointcutBuilder => new PointcutBuilder().AcceptTokenIdsAsChild(tokenId, ...tokenIds),
	AcceptTokenTypesAsChild: (tokenType: TokenType, ...tokenTypes: Array<TokenType>): PointcutBuilder => new PointcutBuilder().AcceptTokenTypesAsChild(tokenType, ...tokenTypes),
	RejectTokenIdsAsChild: (tokenId: TokenId, ...tokenIds: Array<TokenId>): PointcutBuilder => new PointcutBuilder().RejectTokenIdsAsChild(tokenId, ...tokenIds),
	TakeLBraceAs: (tokenIdOrTakeFunc: TakeSpecificTokenToAnother): PointcutBuilder => new PointcutBuilder().TakeLBraceAs(tokenIdOrTakeFunc),
	EndWithToken: (tokenId: TokenId): PointcutBuilder => new PointcutBuilder().EndWithToken(tokenId),
	EndWithSemicolon: (): PointcutBuilder => new PointcutBuilder().EndWithSemicolon(),
	CloseOnChildWithTokenClosed: (tokenId: TokenId): PointcutBuilder => new PointcutBuilder().CloseOnChildWithTokenClosed(tokenId),
	HoldTrailingDetachableOnNodeClosed: (): PointcutBuilder => new PointcutBuilder().HoldTrailingDetachableOnNodeClosed()
};
