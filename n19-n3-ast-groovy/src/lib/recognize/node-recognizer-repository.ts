import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../tokens';
import {NodeRecognizer, NodeRecognizers} from './node-recognize';
import {NodeRecognizerRepositoryOptions} from './types';

export class NodeRecognizerRepository {
	private readonly _recognizers: Map<TokenId, NodeRecognizer>;

	constructor(options?: NodeRecognizerRepositoryOptions) {
		this._recognizers = this.initRecognizers(options.externalRecognizers);
	}

	protected initRecognizers(externalRecognizers?: Array<NodeRecognizer>): Map<TokenId, NodeRecognizer> {
		return [
			...Object.values(NodeRecognizers),
			...(externalRecognizers ?? [])
		].reduce((map, recognizer) => {
			map.set(recognizer.acceptTokenId(), recognizer);
			return map;
		}, new Map<TokenId, NodeRecognizer>());
	}

	find(node: AstNode): NodeRecognizer | undefined {
		return this._recognizers.get(node.tokenId);
	}

	printDefs(): void {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
		const recognizerMap: Map<Function, NodeRecognizer> = new Map();
		// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
		const map: Map<Function, Array<Function>> = new Map();
		for (const recognizer of this._recognizers.values()) {
			// get class of recognizer
			const proto = Object.getPrototypeOf(recognizer);
			// cache the relationship of recognizer and its class
			recognizerMap.set(proto.constructor, recognizer);
			// find ancestor classes of recognizer, or initialize it if not exists
			let ancestors = map.get(proto.constructor);
			if (ancestors == null) {
				ancestors = [];
				map.set(proto.constructor, ancestors);
			}
			// get super class of recognizer
			let superProto = Object.getPrototypeOf(proto);
			while (superProto != null && superProto.constructor !== Object) {
				// push into ancestors from index 0
				ancestors.unshift(superProto.constructor);
				// loop find super class
				superProto = Object.getPrototypeOf(superProto);
			}
		}

		const hierarchyMap = new Map();
		for (const [proto, ancestors] of map.entries()) {
			let parentMap = hierarchyMap;
			for (const ancestor of ancestors) {
				let derivationMap = parentMap.get(ancestor);
				if (derivationMap == null) {
					derivationMap = new Map();
				}
				parentMap.set(ancestor, derivationMap);
				parentMap = derivationMap;
			}
			parentMap.set(proto, new Map());
		}

		const buf: Array<string> = [];
		buf.push('┌ NodeRecognizer');

		// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-explicit-any
		const print = (proto: Function, derivation: Map<any, any>, level: Array<'└' | '├' | ' ' | '│'>): void => {
			const recognizer = recognizerMap.get(proto);
			if (recognizer != null) {
				const tokenId = recognizerMap.get(proto).acceptTokenId();
				const tokenName = TokenId[tokenId];
				buf.push(`${level.join(' ')} ${proto.name} [tokenId=${tokenId}, tokenName=${tokenName}]`);
			} else {
				buf.push(`${level.join(' ')} ${proto.name}`);
			}
			if (derivation != null && derivation.size !== 0) {
				printMap(derivation, level.map(ch => ch === '└' ? ' ' : (ch === '├' ? '│' : ch)));
			}
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const printMap = (map: Map<any, any>, level: Array<'└' | '├' | ' ' | '│'>) => {
			Array.from(map.entries()).sort(([proto1], [proto2]) => {
				return (proto1.name as string).localeCompare(proto2.name, (void 0), {
					sensitivity: 'base', caseFirst: 'false'
				});
			}).forEach(([proto, derivation], index, array) => {
				print(proto, derivation, [...level, index === array.length - 1 ? '└' : '├']);
			});
		};
		printMap(hierarchyMap, []);

		console.debug(buf.join('\n'));
	}
}
