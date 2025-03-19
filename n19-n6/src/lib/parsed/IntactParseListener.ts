import {Optional} from '@rainbow-n19/n2';
import {ErrorNode, ParserRuleContext, TerminalNode} from 'antlr4';
import {
	AdditiveExprAltContext,
	AndExprAltContext,
	AssignmentExprAltContext,
	CompilationUnitContext,
	ConditionalExprAltContext,
	EqualityExprAltContext,
	ExclusiveOrExprAltContext,
	ExpressionContext,
	GroovyParserListener,
	GroovyParserRuleContext,
	InclusiveOrExprAltContext,
	LogicalAndExprAltContext,
	LogicalOrExprAltContext,
	MultiplicativeExprAltContext,
	PowerExprAltContext,
	RegexExprAltContext,
	RelationalExprAltContext,
	ShiftExprAltContext
} from '../parser';
import {ParsedAstDebugger, ParsedAstDebuggerOptions} from './ParsedAstDebugger';
import {ParsedNode} from './ParsedNode';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';

export class IntactParseListener extends GroovyParserListener {
	private readonly _debugger: ParsedAstDebugger;
	// root
	private _compilationUnits: Array<ParsedNode> = [];
	// visiting
	private _currentNode: ParsedNode;
	// 0 is the nearest
	private readonly _stackedNodes: Array<ParsedNode> = [];
	private readonly _nodeIndexes: Array<number> = [0];

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

	protected enterRuleContext(ctx: GroovyParserRuleContext, indexLabel: Array<number>): void {
		let node: ParsedNode;
		if (this.shouldIgnore(ctx)) {
			this.debugger.ignoreRule(ctx, indexLabel);
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
			if (ctx instanceof ExpressionContext) {
				// special logic for expression.
				// in parser, the left/con part will be parsed first, and put as child
				// and if parser find the next statement sentence can be treated as following types
				// the parsed part will be set as left/con part of following,
				// and cut the parent/child relationship with original parent, rebuild as child of following.
				// so the
				if (ctx instanceof PowerExprAltContext
					|| ctx instanceof MultiplicativeExprAltContext
					|| ctx instanceof AdditiveExprAltContext
					|| ctx instanceof ShiftExprAltContext
					|| ctx instanceof RelationalExprAltContext
					|| ctx instanceof EqualityExprAltContext
					|| ctx instanceof RegexExprAltContext
					|| ctx instanceof AndExprAltContext
					|| ctx instanceof ExclusiveOrExprAltContext
					|| ctx instanceof InclusiveOrExprAltContext
					|| ctx instanceof LogicalAndExprAltContext
					|| ctx instanceof LogicalOrExprAltContext
					|| ctx instanceof RelationalExprAltContext
					|| ctx instanceof AssignmentExprAltContext
					|| ctx instanceof ConditionalExprAltContext) {
					const lastChild = currentNode.removeLastChild();
					node.appendChild(lastChild);
				}
			}
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
		// some context will be recreated with its extended context
		// e.g. LiteralContext on enter rule, but StringLiteralAltContext on exit rule.
		// in these cases, replace with the context which given on exit phase.
		if (exited.groovyParserRuleContext !== ctx) {
			exited.replaceGroovyParserRuleContext(ctx);
		}
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
		return PostNodeProcessorRegistry.getProcessor(ctx.ruleIndex).ignoreToParsed(ctx);
	}

	enterEveryRule(ctx: ParserRuleContext): void {
		this._nodeIndexes[this._nodeIndexes.length - 1] = this._nodeIndexes[this._nodeIndexes.length - 1] + 1;
		this.debugger.enterRule(ctx, this._nodeIndexes);
		if (ctx instanceof GroovyParserRuleContext) {
			this.enterRuleContext(ctx, this._nodeIndexes);
		} else {
			this.debugger.ignoreUnsupportedRule(ctx, this._nodeIndexes);
		}
		this._nodeIndexes.push(0);
	}

	exitEveryRule(ctx: ParserRuleContext): void {
		this._nodeIndexes.length = this._nodeIndexes.length - 1;
		this.debugger.exitRule(ctx, this._nodeIndexes);
		if (ctx instanceof GroovyParserRuleContext) {
			this.exitRuleContext(ctx);
		}
	}
}
