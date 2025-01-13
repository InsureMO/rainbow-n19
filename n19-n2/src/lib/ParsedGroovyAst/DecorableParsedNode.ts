import {GroovyParser, PackageDeclarationContext} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedNode} from './ParsedNode';
import {ParsedNodeSpecification} from './ParsedNodeSpecification';
import {ParsedNodeUtils} from './ParsedNodeUtils';

/**
 * instance created only in {@link ParsedNodeVisitor},
 * which means the given {@link ParsedNode} already finish the lifecycle of {@link GroovyParserRuleContext}, all information are read-in.
 */
export class DecorableParsedNode {
	private static readonly NODE_DECORATORS: Map<number, (node: DecorableParsedNode) => void> = new Map();
	static {
		DecorableParsedNode.NODE_DECORATORS.set(GroovyParser.RULE_packageDeclaration, DecorableParsedNode.decoratePackageDeclaration);
	}

	/**
	 * since package declaration doesn't have a child context to describe the keyword package,
	 * here we use the package declaration node to simulate it
	 * so read the position from package terminal node
	 */
	private static decoratePackageDeclaration(node: DecorableParsedNode): void {
		const ctx = node._node.groovyParserRuleContext as PackageDeclarationContext;
		const token = ctx.PACKAGE().symbol;
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

	constructor(node: ParsedNode) {
		this._node = node;
		this.decorate();
	}

	protected decorate() {
		DecorableParsedNode.NODE_DECORATORS.get(this._node.type)?.(this);
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

	get specification(): ParsedNodeSpecification {
		return this._node.specification;
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