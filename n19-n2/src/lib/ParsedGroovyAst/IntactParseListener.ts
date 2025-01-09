import {ErrorNode, ParserRuleContext, TerminalNode} from 'antlr4';
import {CompilationUnitContext, GroovyParserListener} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedCompilationUnit} from './CompilationUnit';
import {ParsedNode} from './Node';

export class IntactParseListener extends GroovyParserListener {
	// root
	private _compilationUnit: ParsedCompilationUnit;
	// visiting
	private _currentNode: ParsedNode;
	private readonly _stackedNodes: Array<ParsedNode> = [];

	/**
	 * get compilation unit after ast parsed, otherwise returns null
	 */
	get compilationUnit(): Optional<ParsedCompilationUnit> {
		return this._compilationUnit;
	}

	protected get current(): Optional<ParsedNode> {
		return this._currentNode;
	}

	protected get stacked(): Array<ParsedNode> {
		return this._stackedNodes;
	}

	enterCompilationUnit = (ctx: CompilationUnitContext): void => {
		this._compilationUnit = new ParsedCompilationUnit();
		this._currentNode = this._compilationUnit;
		this._stackedNodes.unshift(this._currentNode);
	};
	exitCompilationUnit = (ctx: CompilationUnitContext): void => {
		// clear stack
		this._stackedNodes.length = 0;
		// remove current node
		this._currentNode = null;
	};

	visitTerminal(node: TerminalNode): void {
		// console.log('terminal node');
	}

	visitErrorNode(node: ErrorNode): void {
		// console.log('error node');
	}

	enterEveryRule(ctx: ParserRuleContext): void {
		// console.log('enter rule: ' + ctx.constructor.name);
	}

	exitEveryRule(ctx: ParserRuleContext): void {
		// console.log('exit rule: ' + ctx.constructor.name);
	}
}
