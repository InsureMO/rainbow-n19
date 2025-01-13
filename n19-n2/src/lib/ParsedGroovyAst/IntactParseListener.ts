import {ErrorNode, ParserRuleContext, TerminalNode} from 'antlr4';
import {
	CompilationUnitContext,
	GroovyParser,
	GroovyParserListener,
	GroovyParserRuleContext
} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedAstDebugger, ParsedAstDebuggerOptions} from './ParsedAstDebugger';
import {ParsedNode} from './ParsedNode';

export class IntactParseListener extends GroovyParserListener {
	private readonly _debugger: ParsedAstDebugger;
	// root
	private _compilationUnits: Array<ParsedNode> = [];
	// visiting
	private _currentNode: ParsedNode;
	// 0 is the nearest
	private readonly _stackedNodes: Array<ParsedNode> = [];

	constructor(options?: ParsedAstDebuggerOptions) {
		super();
		this._debugger = new ParsedAstDebugger(options);
	}

	get debugger(): ParsedAstDebugger {
		return this._debugger;
	}

	/**
	 * get compilation unit after ast parsed, otherwise returns null
	 */
	get compilationUnits(): Array<ParsedNode> {
		return this._compilationUnits;
	}

	protected get current(): Optional<ParsedNode> {
		return this._currentNode;
	}

	protected get stacked(): Array<ParsedNode> {
		return this._stackedNodes;
	}

	protected enterRuleContext(ctx: GroovyParserRuleContext): void {
		let node: ParsedNode;
		if (this.shouldIgnore(ctx)) {
			this.debugger.ignoreRule(ctx);
			return;
		}

		if (ctx instanceof CompilationUnitContext) {
			node = new ParsedNode(ctx, this._debugger);
			this._compilationUnits.push(node);
		} else if (ctx instanceof GroovyParserRuleContext) {
			node = new ParsedNode(ctx, this._debugger);
		}
		const currentNode = this._currentNode;
		if (currentNode != null) {
			currentNode.appendChild(node);
		}
		this._currentNode = node;
		this._stackedNodes.unshift(node);
	}

	protected exitRuleContext(ctx: GroovyParserRuleContext): Optional<ParsedNode> {
		if (this.shouldIgnore(ctx)) {
			return (void 0);
		}
		const exited = this._stackedNodes.shift();
		exited.copyKeyData(ctx);
		this._currentNode = this._stackedNodes[0];
		return exited;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visitTerminal(_node: TerminalNode): void {
		// console.log('terminal node');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visitErrorNode(_node: ErrorNode): void {
		// console.log('error node');
	}

	protected shouldIgnore(ctx: GroovyParserRuleContext): boolean {
		switch (ctx.ruleIndex) {
			case GroovyParser.RULE_nls:
				return true;
		}

		return false;
	}

	enterEveryRule(ctx: ParserRuleContext): void {
		this.debugger.enterRule(ctx);
		if (ctx instanceof GroovyParserRuleContext) {
			this.enterRuleContext(ctx);
		} else {
			this.debugger.ignoreUnsupportedRule(ctx);
		}
	}

	exitEveryRule(ctx: ParserRuleContext): void {
		this.debugger.exitRule(ctx);
		if (ctx instanceof GroovyParserRuleContext) {
			this.exitRuleContext(ctx);
		}
	}
}
