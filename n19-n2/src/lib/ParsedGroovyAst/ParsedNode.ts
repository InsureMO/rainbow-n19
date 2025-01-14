import {GroovyParser, GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedAstDebugger} from './ParsedAstDebugger';
import {ParsedNodeSpecification} from './ParsedNodeSpecification';
import {ParsedNodeUtils} from './ParsedNodeUtils';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';
import {EmptyNodeSpecification} from './Specifications';
import {RuleIndex} from './Types';

export class ParsedNode {
	private readonly _ctx: GroovyParserRuleContext;
	// debugger
	private readonly _debugger: ParsedAstDebugger;
	// noinspection TypeScriptFieldCanBeMadeReadonly
	private _root: ParsedNode;
	/** nothing when it has no parent */
	private _parent?: Optional<ParsedNode>;
	/** nothing when it has no previous sibling */
	private _previousSibling?: Optional<ParsedNode>;
	/** nothing when it has no next sibling */
	private _nextSibling?: Optional<ParsedNode>;
	// common properties
	private readonly _type: RuleIndex;
	private _startLine: number;
	private _startColumn: number;
	private _endLine: number;
	private _endColumn: number;
	private _text: Optional<string>;
	// specific properties
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _specification: Optional<ParsedNodeSpecification<any, any>>;
	private readonly _children: Array<ParsedNode> = [];

	constructor(ctx: GroovyParserRuleContext, _debugger: ParsedAstDebugger) {
		this._ctx = ctx;
		this._type = ctx.ruleIndex;
		this._debugger = _debugger;
		if (this._type === GroovyParser.RULE_compilationUnit) {
			this._root = this;
		}
	}

	get groovyParserRuleContext(): GroovyParserRuleContext {
		return this._ctx;
	}

	get debugger(): ParsedAstDebugger {
		return this._debugger;
	}

	get type(): RuleIndex {
		return this._type;
	}

	get startLine(): number {
		return this._startLine;
	}

	get startColumn(): number {
		return this._startColumn;
	}

	get endLine(): number {
		return this._endLine;
	}

	get endColumn(): number {
		return this._endColumn;
	}

	get text(): Optional<string> {
		return this._text;
	}

	setText(text: string): void {
		this._text = text;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get specification(): ParsedNodeSpecification<any, any> {
		return this._specification ?? EmptyNodeSpecification.INSTANCE;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setSpecification(specification: ParsedNodeSpecification<any, any>): void {
		this._specification = specification;
	}

	get root(): ParsedNode {
		return this._root;
	}

	get parent(): Optional<ParsedNode> {
		return this._parent;
	}

	get previousSibling(): Optional<ParsedNode> {
		return this._previousSibling;
	}

	get nextSibling(): Optional<ParsedNode> {
		return this._nextSibling;
	}

	get children(): Array<ParsedNode> {
		return this._children;
	}

	get childCount(): number {
		return this._children.length;
	}

	childAt(index: number): Optional<ParsedNode> {
		return this._children[index];
	}

	get firstChild(): Optional<ParsedNode> {
		return this._children[0];
	}

	get lastChild(): Optional<ParsedNode> {
		return this._children.length === 0 ? (void 0) : this._children[this._children.length - 1];
	}

	appendChild(child: ParsedNode): this {
		const originalLastChild = this.lastChild;
		this._children.push(child);
		child._root = this.root;
		child._parent = this;
		if (originalLastChild != null) {
			child._previousSibling = originalLastChild;
			originalLastChild._nextSibling = child;
		}
		return this;
	}

	copyKeyData(ctx: GroovyParserRuleContext): void {
		this._startLine = ctx.start.line;
		this._startColumn = ctx.start.column;
		const lastChild = this.lastChild;
		// TODO not sure, seems its the only way to get end position when it has no child
		// get from last child,
		// or get from ctx stop token when there is not child
		// or use the same position of ctx start token
		this._endLine = lastChild?._endLine ?? ctx.stop?.line ?? ctx.start.line;
		// TODO not sure, seems stop is the end column, according to tracing, :)
		this._endColumn = lastChild?._endColumn ?? ctx.stop?.stop ?? ctx.start.stop;
		this.doCopyText(ctx);
		this.doReadSpecificProperties(ctx);
	}

	protected doCopyText(ctx: GroovyParserRuleContext): void {
		const processor = PostNodeProcessorRegistry.getProcessor(ctx.ruleIndex);
		if (processor.needCopyTextOnToParsed(ctx)) {
			processor.copyTextOnToParsed(this, ctx);
		}
	}

	protected doReadSpecificProperties(ctx: GroovyParserRuleContext): void {
		const processor = PostNodeProcessorRegistry.getProcessor(ctx.ruleIndex);
		if (processor.needReadSpecificationOnToParsed(ctx)) {
			processor.readSpecificationOnToParsed(this, ctx);
		}
	}

	toString(indent: number = 0): string {
		const indentString = new Array<string>(indent).fill('').map(() => '\t').join('');
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
		let s = `${indentString}Parsed Node[${props}]`;
		if (this.childCount !== 0) {
			s += '\n' + this.children.map(child => child.toString(indent + 1)).join('\n');
		}
		return s;
	}
}
