import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../tokens';
import {AllNodeRecognizers} from './node-recognizer';
import {NodeRecognizer, NodeRecognizersOptions} from './types';

export class NodeRecognizerRepo {
	private readonly _recognizers: Map<TokenId, NodeRecognizer>;

	constructor(options?: NodeRecognizersOptions) {
		this._recognizers = this.initRecognizers(options.externalRecognizers);
	}

	protected initRecognizers(externalRecognizers?: Array<NodeRecognizer>): Map<TokenId, NodeRecognizer> {
		return [
			...AllNodeRecognizers,
			...(externalRecognizers ?? [])
		].reduce((map, recognizer) => {
			map.set(recognizer.acceptTokenId(), recognizer);
			return map;
		}, new Map<TokenId, NodeRecognizer>());
	}

	find(node: AstNode): NodeRecognizer | undefined {
		return this._recognizers.get(node.tokenId);
	}
}
