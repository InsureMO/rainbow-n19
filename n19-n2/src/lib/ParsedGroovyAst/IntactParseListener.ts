import {ErrorNode, ParserRuleContext, TerminalNode} from 'antlr4';
import {IllegalArgumentException} from '../JavaExceptions';
import {
	CompilationUnitContext,
	GroovyParser,
	GroovyParserListener,
	GroovyParserRuleContext
} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedNode} from './Node';
import {ParsedAstDebugger, ParsedAstDebuggerOptions} from './ParsedAstDebugger';

export class IntactParseListener extends GroovyParserListener {
	private readonly _debugger: ParsedAstDebugger;
	// root
	private _compilationUnit: ParsedNode;
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
	get compilationUnit(): Optional<ParsedNode> {
		return this._compilationUnit;
	}

	protected get current(): Optional<ParsedNode> {
		return this._currentNode;
	}

	protected get stacked(): Array<ParsedNode> {
		return this._stackedNodes;
	}

	protected enterRuleContext(node: ParsedNode) {
		const currentNode = this._currentNode;
		if (currentNode != null) {
			currentNode.appendChild(node);
		}
		this._currentNode = node;
		this._stackedNodes.unshift(node);
	}

	protected exitRuleContext<N extends ParsedNode>(ctx: ParserRuleContext): N {
		const exited = this._stackedNodes.shift();
		exited.copyKeyData(ctx);
		this._currentNode = this._stackedNodes[0];
		return exited as N;
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
		if (ctx instanceof CompilationUnitContext) {
			this._compilationUnit = new ParsedNode(GroovyParser.RULE_compilationUnit, this._debugger);
			this.enterRuleContext(this._compilationUnit);
		} else if (ctx instanceof GroovyParserRuleContext) {
			if (this.shouldIgnore(ctx)) {
				this.debugger.ignoreRule(ctx);
			} else {
				this.enterRuleContext(new ParsedNode(ctx.ruleIndex, this._debugger));
			}
		} else {
			throw new IllegalArgumentException(`Parser rule context[${ctx.constructor.name}] not supported yet.`);
		}
	}

	exitEveryRule(ctx: ParserRuleContext): void {
		this.debugger.exitRule(ctx);
		// error raised in #enterEveryRule, which means context here is GroovyParserRuleContext
		if (!this.shouldIgnore(ctx as GroovyParserRuleContext)) {
			this.exitRuleContext(ctx);
		}
	}
}
