import {Token} from 'antlr4';
import {GroovyParser, ImportDeclarationContext, PackageDeclarationContext} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedNode} from './ParsedNode';
import {ParsedNodeSpecification} from './ParsedNodeSpecification';
import {ParsedNodeUtils} from './ParsedNodeUtils';
import {ImportDeclarationNodePurpose, ImportDeclarationNodeSpecification} from './specifications';

/**
 * instance created only in {@link ParsedNodeVisitor},
 * which means the given {@link ParsedNode} already finish the lifecycle of {@link GroovyParserRuleContext}, all information are read-in.
 */
export class DecorableParsedNode {
	private static readonly NODE_DECORATORS: Map<number, (node: DecorableParsedNode) => void> = new Map();
	static {
		DecorableParsedNode.NODE_DECORATORS.set(GroovyParser.RULE_packageDeclaration, DecorableParsedNode.decoratePackageDeclaration);
		DecorableParsedNode.NODE_DECORATORS.set(GroovyParser.RULE_importDeclaration, DecorableParsedNode.decorateImportDeclaration);
	}

	public static copyPositionAndTextFromToken(node: DecorableParsedNode, token: Token): void {
		node._startLine = token.line;
		node._startColumn = token.column;
		node._endLine = token.line;
		node._endColumn = token.stop;
		node._text = token.text;
	}

	/**
	 * since package declaration doesn't have a child context to describe the keyword package,
	 * here we use the package declaration node to simulate it
	 * so read the position from package terminal node
	 */
	private static decoratePackageDeclaration(node: DecorableParsedNode): void {
		const ctx = node._node.groovyParserRuleContext as PackageDeclarationContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.PACKAGE().symbol);
	}

	private static decorateImportDeclaration(node: DecorableParsedNode): void {
		const ctx = node._node.groovyParserRuleContext as ImportDeclarationContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.IMPORT().symbol);
	}

	public static decorateImportDeclarationForStaticKeyword(node: DecorableParsedNode): Optional<DecorableParsedNode> {
		const ctx = node.underlay.groovyParserRuleContext as ImportDeclarationContext;
		let staticNode: Optional<DecorableParsedNode> = (void 0);
		const staticTerminalNode = ctx.STATIC();
		if (staticTerminalNode != null) {
			// create a static node, share the same underlay node
			staticNode = new DecorableParsedNode(node.underlay, true);
			const spec = staticNode.specification as ImportDeclarationNodeSpecification;
			spec.setPurpose(ImportDeclarationNodePurpose.STATIC);
			DecorableParsedNode.copyPositionAndTextFromToken(staticNode, staticTerminalNode.symbol);
		}

		return staticNode;
	}

	private readonly _node: ParsedNode;
	private _startLine: Optional<number> = (void 0);
	private _startColumn: Optional<number> = (void 0);
	private _endLine: Optional<number> = (void 0);
	private _endColumn: Optional<number> = (void 0);
	private _text: Optional<string> = (void 0);
	private _specification: Optional<ParsedNodeSpecification> = (void 0);

	constructor(node: ParsedNode, cloneSpecification?: boolean) {
		this._node = node;
		if (cloneSpecification === true) {
			this._specification = this._node.specification.clone();
		}
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