import {ParserRuleContext} from 'antlr4';
import {GroovyParser, GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedAstDebugger} from './ParsedAstDebugger';
import {ParsedNodeSpecification} from './ParsedNodeSpecification';
import {ParsedNodeUtils} from './ParsedNodeUtils';
import {ParsedNodeSpecificationReader} from './specifications';

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
	private readonly _type: number;
	private _startLine: number;
	private _startColumn: number;
	private _endLine: number;
	private _endColumn: number;
	private _text: Optional<string>;
	// specific properties
	private _specification: ParsedNodeSpecification;
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

	get type(): number {
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

	get specification(): ParsedNodeSpecification {
		return this._specification;
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

	copyKeyData(ctx: ParserRuleContext): void {
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

	protected doCopyText(ctx: ParserRuleContext): void {
		switch (this._type) {
			case GroovyParser.RULE_compilationUnit:
			case GroovyParser.RULE_scriptStatements:
			case GroovyParser.RULE_modifiers:
			case GroovyParser.RULE_packageDeclaration:
			case GroovyParser.RULE_importDeclaration:
				// ignore text to improve performance
				break;
			case GroovyParser.RULE_nls:
				// irrelevant node, but add debugger to monitor to enable monitor
				this._debugger.addMissedLogics(() => {
					const text = ctx.getText();
					if (text != null && text.length !== 0) {
						return `Text[${text}] is miss caught by node for rule[${this._type}]`;
					} else {
						return (void 0);
					}
				});
				break;
			default:
				this._text = ctx.getText();
		}
	}

	protected doReadSpecificProperties(ctx: ParserRuleContext): void {
		this._specification = ParsedNodeSpecificationReader.read(this.type, ctx, this._debugger);
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
		let s = `${indentString}Rule[${props}]`;
		if (this.childCount !== 0) {
			s += '\n' + this.children.map(child => child.toString(indent + 1)).join('\n');
		}
		return s;
	}
}
