import {ParserRuleContext} from 'antlr4';
import {GroovyParser} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {NodeUtils} from './NodeUtils';
import {ParsedAstDebugger} from './ParsedAstDebugger';

export class ParsedNode {
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
	// my properties
	private readonly _type: number;
	private _startLine: number;
	private _startColumn: number;
	private _endLine: number;
	private _endColumn: number;
	private _text: Optional<string>;
	// children
	private readonly _children: Array<ParsedNode> = [];

	/**
	 * @param type from {@link GroovyParser#RULE_compilationUnit} to {@link GroovyParser#RULE_sep}
	 * @param _debugger debugger
	 */
	constructor(type: number, _debugger: ParsedAstDebugger) {
		this._type = type;
		this._debugger = _debugger;
		if (type === GroovyParser.RULE_compilationUnit) {
			this._root = this;
		}
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

	firstChild(): Optional<ParsedNode> {
		return this._children[0];
	}

	lastChild(): Optional<ParsedNode> {
		return this._children.length === 0 ? (void 0) : this._children[this._children.length - 1];
	}

	appendChild(child: ParsedNode): this {
		const originalLastChild = this.lastChild();
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
		this._endLine = ctx.stop?.line ?? ctx.start.line;
		this._endColumn = ctx.stop?.column ?? ctx.start.column;
		this.doCopyText(ctx);
	}

	private doCopyText(ctx: ParserRuleContext): void {
		switch (this._type) {
			case GroovyParser.RULE_nls:
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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected getMoreProperties(): Array<[string, any]> {
		return [];
	}

	toString(indent: number = 0): string {
		const indentString = new Array<string>(indent).fill('').map(() => '\t').join('');
		const props = [
			['type', NodeUtils.getRuleName(this.type)],
			['text', this.text],
			['startLine', this.startLine],
			['startColumn', this.startColumn],
			['endLine', this.endLine],
			['endColumn', this.endColumn],
			...this.getMoreProperties()
		].map(([name, value]) => `${name}=${value ?? ''}`).join(', ');
		let s = `${indentString}Rule[${props}]`;
		if (this.childCount !== 0) {
			s += '\n' + this.children.map(child => child.toString(indent + 1)).join('\n');
		}
		return s;
	}
}
