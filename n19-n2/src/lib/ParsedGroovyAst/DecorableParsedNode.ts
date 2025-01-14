import {Token} from 'antlr4';
import {Optional} from '../TsAddon';
import {ParsedNode} from './ParsedNode';
import {ParsedNodeSpecification} from './ParsedNodeSpecification';
import {ParsedNodeUtils} from './ParsedNodeUtils';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';

/**
 * instance created only in {@link ParsedNodeVisitor},
 * which means the given {@link ParsedNode} already finish the lifecycle of {@link GroovyParserRuleContext}, all information are read-in.
 */
export class DecorableParsedNode {
	public static copyPositionAndTextFromToken(node: DecorableParsedNode, token: Token): void {
		node._startLine = token.line;
		node._startColumn = token.column;
		node._endLine = token.line;
		node._endColumn = token.stop;
		node._text = token.text;
	}

	private readonly _node: ParsedNode;
	private _startLine: Optional<number> = (void 0);
	private _startColumn: Optional<number> = (void 0);
	private _endLine: Optional<number> = (void 0);
	private _endColumn: Optional<number> = (void 0);
	private _text: Optional<string> = (void 0);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private readonly _specification: Optional<ParsedNodeSpecification<any, any>> = (void 0);

	constructor(node: ParsedNode, cloneSpecification?: boolean) {
		this._node = node;
		if (cloneSpecification === true) {
			this._specification = this._node.specification.clone();
		}
		this.decorate();
	}

	protected decorate() {
		const processor = PostNodeProcessorRegistry.getProcessor(this.type);
		if (processor.shouldDecorate(this)) {
			processor.decorate(this);
		}
	}

	get underlay(): ParsedNode {
		return this._node;
	}

	get type(): number {
		return this._node.type;
	}

	get startLine(): number {
		return this._startLine ?? this._node.startLine;
	}

	get startColumn(): number {
		return this._startColumn ?? this._node.startColumn;
	}

	get endLine(): number {
		return this._endLine ?? this._node.endLine;
	}

	get endColumn(): number {
		return this._endColumn ?? this._node.endColumn;
	}

	get text(): string {
		return this._text ?? this._node.text ?? '';
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get specification(): ParsedNodeSpecification<any, any> {
		return this._specification ?? this._node.specification;
	}

	toString(): string {
		// noinspection DuplicatedCode
		const props = [
			['type', ParsedNodeUtils.getRuleName(this.type)],
			['text', this.text],
			['startLine', this.startLine],
			['startColumn', this.startColumn],
			['endLine', this.endLine],
			['endColumn', this.endColumn],
			...(this.specification.properties.map(([key, value]) => [`spec.${key}`, value]))
		].map(([name, value]) => `${name}=${value ?? ''}`).join(', ');
		return `Decorable Node[${props}]`;
	}
}