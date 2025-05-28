import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {buildNodePointcut} from './build-node-pointcut';
import {PointcutBasis} from './pointcut-basis';

export type NodePointcutInitialize = (node: GroovyAstNode) => void;

export type NodePointcutHelper = {
	readonly initialize: NodePointcutInitialize;
}

export class NodePointcutsHelper {
	private _initialized = false;
	private readonly _helpers: Map<TokenId, NodePointcutHelper> = new Map();

	initialize(node: GroovyAstNode, initialize?: NodePointcutInitialize): void {
		(initialize ?? this.getHelper(node.tokenId)?.initialize)?.(node);
	}

	getHelper(tokenId: TokenId): Optional<NodePointcutHelper> {
		return this.getHelpers().get(tokenId);
	}

	private getHelpers(): Map<TokenId, NodePointcutHelper> {
		if (!this._initialized) {
			Object.keys(PointcutBasis).forEach(key => {
				const tokenId = Number(key) as TokenId;
				const pointcut = PointcutBasis[tokenId];
				if (pointcut !== 'TODO' && pointcut !== 'NotRequired') {
					this._helpers.set(tokenId, {
						initialize: buildNodePointcut(pointcut)
					});
				}
			});
			this._initialized = true;
		}
		return this._helpers;
	}
}

export const NodePointcuts = new NodePointcutsHelper();
