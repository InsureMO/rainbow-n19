import {Groovy, Parsed} from '@rainbow-n19/n2';

const AstBuilder = Groovy.AstBuilder;
const IntactParseListener = Parsed.IntactParseListener;
const ParsedNodeVisitor = Parsed.ParsedNodeVisitor;
type ParsedAstDebuggerOptions = Parsed.ParsedAstDebuggerOptions;
type DecoratedNode = Parsed.DecoratedNode;
type PositionedNode = Parsed.PositionedNode;

export class GroovyLanguageServer {
	private readonly _debuggerOptions: ParsedAstDebuggerOptions;

	constructor(debuggerOptions?: ParsedAstDebuggerOptions) {
		this._debuggerOptions = debuggerOptions;
	}

	get debuggerOptions() {
		return this._debuggerOptions;
	}

	parse(source: string): [Array<DecoratedNode>, Array<PositionedNode>] {
		console.time(`parse source[length=${(source ?? '').length}].`);
		const parseListener = new IntactParseListener(this.debuggerOptions);
		try {
			AstBuilder.ast(source, {parseListener});
			const visitor = new ParsedNodeVisitor(parseListener.compilationUnits);
			console.log('Atomic nodes:\n' + visitor.atomicNodes.map(node => node.toString()).join('\n'));
			// console.log('Positioned nodes:\n' + visitor.positionedNodes.map(node => node.toString()).join('\n'));
			if (parseListener.debugger.missedLogics.length !== 0) {
				console.error(parseListener.debugger.missedLogics);
			}
			return [visitor.atomicNodes, visitor.positionedNodes];
		} catch (error) {
			console.error(parseListener.debugger.ruleProcessingLogs.join('\n'));
			console.error(error);
			return [[], []];
		} finally {
			console.timeEnd(`parse source[length=${(source ?? '').length}].`);
		}
	}
}