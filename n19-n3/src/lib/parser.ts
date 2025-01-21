import {Input, Parser, PartialParse, Tree} from '@lezer/common';
import {Parsed} from '@rainbow-n19/n2';
import {GroovyFacetParsedCache} from './facet';
import {GroovyLanguageServer, GroovyLanguageServerOptions} from './language-server';
import {NodeSet} from './node-set';
import {TokenToNodeType} from './token-to-node-type';

type Fragments = Parameters<Parser['createParse']>[1];
type Ranges = Parameters<Parser['createParse']>[2];
type DecoratedNode = Parsed.DecoratedNode;

const DEFAULT_NODE_GROUP_SIZE = 4;

export interface GroovyParserOptions extends GroovyLanguageServerOptions {
	parsedCache: GroovyFacetParsedCache;
}

export class GroovyParser extends Parser {
	private readonly _parsedCache: GroovyFacetParsedCache;
	private readonly _languageServer: GroovyLanguageServer;

	constructor(options: GroovyParserOptions) {
		super();
		const {parsedCache, ...rest} = options;
		this._parsedCache = parsedCache;
		this._languageServer = new GroovyLanguageServer(rest);
	}

	protected get parsedCache(): GroovyFacetParsedCache {
		return this._parsedCache;
	}

	get languageServer(): GroovyLanguageServer {
		return this._languageServer;
	}

	createParse(input: Input, fragments: Fragments, ranges: Ranges): PartialParse {
		return this.startParse(input, fragments, ranges);
	}

	private createBufferFromTokens(nodes: Array<DecoratedNode>): Array<number> {
		const buffer: Array<number> = [];

		nodes.forEach((node) => {
			const nodeTypeId = node.role;
			const startOffset = node.startOffset;
			const endOffset = node.endOffset + 1;

			buffer.push(nodeTypeId, startOffset, endOffset, DEFAULT_NODE_GROUP_SIZE);
		});

		const topNodeId = TokenToNodeType.compilationUnit.id;
		const startOffset = nodes[0].startOffset;
		const endOffset = nodes[nodes.length - 1].endOffset;
		const topNodeSize = nodes.length * DEFAULT_NODE_GROUP_SIZE + DEFAULT_NODE_GROUP_SIZE;

		buffer.push(topNodeId, startOffset, endOffset, topNodeSize);

		// console.log(buffer);
		return buffer;
	}

	private buildTree(document: string) {
		const [atomics, positions] = this.languageServer.parse(document);
		// cache, copy to facet data
		this._parsedCache.atomicNodes = atomics;
		this._parsedCache.positionedNodes = positions;

		if (atomics.length < 1) {
			return Tree.build({
				buffer: [
					TokenToNodeType.compilationUnit.id,
					0,
					document.length,
					DEFAULT_NODE_GROUP_SIZE
				],
				nodeSet: NodeSet,
				topID: TokenToNodeType.compilationUnit.id
			});
		} else {
			return Tree.build({
				buffer: this.createBufferFromTokens(atomics),
				nodeSet: NodeSet,
				topID: TokenToNodeType.compilationUnit.id
			});
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	startParse(input: string | Input, _fragments: Fragments, _ranges: Ranges): PartialParse {
		const document = typeof input === 'string' ? input : input.read(0, input.length);

		const tree = this.buildTree(document);

		return {
			stoppedAt: input.length,
			parsedPos: input.length,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			stopAt: (_) => {
			},
			advance: () => {
				return tree;
			}
		};
	}
}