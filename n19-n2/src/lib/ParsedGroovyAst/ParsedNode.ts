import {GroovyParser, GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedAstDebugger} from './ParsedAstDebugger';
import {ParsedNodeUtils} from './ParsedNodeUtils';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';
import {RuleIndex} from './Types';

export class ParsedNode {
	private _ctx: GroovyParserRuleContext;
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

	replaceGroovyParserRuleContext(ctx: GroovyParserRuleContext): void {
		this._ctx = ctx;
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

	removeLastChild(): Optional<ParsedNode> {
		const length = this._children.length;
		if (length === 0) {
			return (void 0);
		} else {
			const last = this._children[length - 1];
			this._children.length = length - 1;
			return last;
		}
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
		// get from last child,
		// or get from ctx stop token when there is no child
		// or get from ctx start token
		if (lastChild != null) {
			this._endLine = lastChild?._endLine;
			this._endColumn = lastChild?._endColumn;
		} else if (ctx.stop != null) {
			this._endLine = ctx.stop.line;
			this._endColumn = ctx.stop.column + (ctx.stop.text ?? '').length - 1;
		} else {
			this._endLine = this._startLine;
			this._endColumn = this._startColumn + (ctx.start.text ?? '').length - 1;
		}
		this.doCopyText(ctx);
	}

	protected doCopyText(ctx: GroovyParserRuleContext): void {
		const processor = PostNodeProcessorRegistry.getProcessor(ctx.ruleIndex);
		if (processor.needCopyTextOnToParsed(ctx)) {
			processor.copyTextOnToParsed(this, ctx);
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
			['endColumn', this.endColumn]
		].map(([name, value]) => `${name}=${value ?? ''}`).join(', ');
		let s = `${indentString}Parsed Node[${props}]`;
		if (this.childCount !== 0) {
			s += '\n' + this.children.map(child => child.toString(indent + 1)).join('\n');
		}
		return s;
	}
}
