import {Input, NodeSet as LezerNodeSet, Parser, PartialParse, Tree} from '@lezer/common';
import {GroovyAstHolder, GroovyAstNode, GroovyTokenId, TokenToNodeType} from '../ast';
import {GroovyLanguageServer, GroovyLanguageServerOptions} from './server';

export interface GroovyParserOptions extends GroovyLanguageServerOptions {
	astHolder: GroovyAstHolder;
}

type Fragments = Parameters<Parser['createParse']>[1];
type Ranges = Parameters<Parser['createParse']>[2];

const NodeSet = new LezerNodeSet(Object.values(TokenToNodeType));

export class GroovyParser extends Parser {
	static readonly DEFAULT_NODE_GROUP_SIZE: number = 4;
	private readonly _astHolder: GroovyAstHolder;
	private readonly _languageServer: GroovyLanguageServer;

	constructor(options?: GroovyParserOptions) {
		super();
		const {astHolder, ...rest} = options;
		this._astHolder = astHolder;
		this._languageServer = new GroovyLanguageServer(rest);
	}

	get astHolder(): GroovyAstHolder {
		return this._astHolder;
	}

	get languageServer(): GroovyLanguageServer {
		return this._languageServer;
	}

	createParse(input: Input, fragments: Fragments, ranges: Ranges): PartialParse {
		return this.startParse(input, fragments, ranges);
	}

	private createBufferFromTokens(nodes: Array<GroovyAstNode>): Array<number> {
		const buffer: Array<number> = [];

		nodes.forEach((node) => {
			const nodeTypeId = node.tokenId;
			const startOffset = node.startOffset;
			const endOffset = node.endOffsetOfCM;

			buffer.push(nodeTypeId, startOffset, endOffset, GroovyParser.DEFAULT_NODE_GROUP_SIZE);
		});

		const topNodeId = GroovyTokenId.COMPILATION_UNIT;
		const startOffset = nodes[0].startOffset;
		const endOffset = nodes[nodes.length - 1].endOffsetOfCM;
		const topNodeSize = nodes.length * GroovyParser.DEFAULT_NODE_GROUP_SIZE + GroovyParser.DEFAULT_NODE_GROUP_SIZE;

		buffer.push(topNodeId, startOffset, endOffset, topNodeSize);

		// console.log(buffer);
		return buffer;
	}

	private buildTree(document: string): Tree {
		const ast = this.languageServer.parse(document);
		// cache, copy to facet data
		this.astHolder.replace(ast);
		const nodes = ast.nodes;

		if (nodes.length < 1) {
			return Tree.build({
				buffer: [
					GroovyTokenId.COMPILATION_UNIT,
					0,
					document.length,
					GroovyParser.DEFAULT_NODE_GROUP_SIZE
				],
				nodeSet: NodeSet,
				topID: GroovyTokenId.COMPILATION_UNIT
			});
		} else {
			return Tree.build({
				buffer: this.createBufferFromTokens(nodes),
				nodeSet: NodeSet,
				topID: GroovyTokenId.COMPILATION_UNIT
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