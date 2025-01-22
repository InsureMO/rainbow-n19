import {Groovy, Parsed} from '@rainbow-n19/n2';

const AstBuilder = Groovy.AstBuilder;
const IntactParseListener = Parsed.IntactParseListener;
type IntactParseListener = Parsed.IntactParseListener;
const ParsedNodeVisitor = Parsed.ParsedNodeVisitor;
type ParsedNodeVisitor = Parsed.ParsedNodeVisitor;
type ParsedAstDebuggerOptions = Parsed.ParsedAstDebuggerOptions;
type DecoratedNode = Parsed.DecoratedNode;
type PositionedNode = Parsed.PositionedNode;

export interface GroovyLanguageServerOptions extends ParsedAstDebuggerOptions {
	timeSpentLogEnabled?: boolean;
	atomicNodesLogEnabled?: boolean;
	positionedNodesLogEnabled?: boolean;
}

export class GroovyLanguageServer {
	private readonly _debuggerOptions: GroovyLanguageServerOptions;

	constructor(debuggerOptions?: GroovyLanguageServerOptions) {
		this._debuggerOptions = debuggerOptions ?? {
			timeSpentLogEnabled: true,
			atomicNodesLogEnabled: false,
			positionedNodesLogEnabled: false,
			missedLogicCheckEnabled: false,
			ruleProcessingLogsEnabled: false
		};
	}

	get debuggerOptions() {
		return this._debuggerOptions;
	}

	protected logAtomicNodes(atomicNodes: Array<DecoratedNode>): void {
		if (this.debuggerOptions.atomicNodesLogEnabled !== true) {
			return;
		}
		console.groupCollapsed('Atomic nodes:');
		console.log('Atomic nodes:\n' + atomicNodes.map(node => node.toString()).join('\n'));
		console.groupEnd();
	}

	protected logPositionedNodes(positionedNodes: Array<PositionedNode>): void {
		if (this.debuggerOptions.positionedNodesLogEnabled !== true) {
			return;
		}
		console.groupCollapsed('Positioned nodes:');
		console.log('Positioned nodes:\n' + positionedNodes.map(node => node.toString()).join('\n'));
		console.groupEnd();
	}

	protected logMissedLogics(missedLogics: Array<string>): void {
		if (this.debuggerOptions.missedLogicCheckEnabled !== true) {
			return;
		}
		if (missedLogics != null && missedLogics.length !== 0) {
			console.groupCollapsed('Missed logics:')
			console.error(missedLogics);
			console.groupEnd();
		}
	}

	protected logProcessingLogs(listener: IntactParseListener, error?: Error): void {
		if (this.debuggerOptions.ruleProcessingLogsEnabled !== true) {
			return;
		}
		console.groupCollapsed('Rule processing logs:');
		console.error(listener.debugger.ruleProcessingLogs.join('\n'));
		if (error !== null) {
			console.error(error);
		}
		console.groupEnd();
	}

	protected logParsedResult(listener: IntactParseListener, visitor: ParsedNodeVisitor) {
		this.logAtomicNodes(visitor.atomicNodes);
		this.logPositionedNodes(visitor.positionedNodes);
		this.logMissedLogics(listener.debugger.missedLogics);
		this.logProcessingLogs(listener);
	}

	protected logTimeSpent<T>(source: string, func: () => T): T {
		const log = this.debuggerOptions.timeSpentLogEnabled === true;
		let label: string = (void 0);
		if (log) {
			label = `Parse source[length=${(source ?? '').length}].`;
			console.time(label);
		}
		try {
			return func();
		} finally {
			if (log) {
				console.timeEnd(label);
			}
		}
	}

	parse(source: string): [Array<DecoratedNode>, Array<PositionedNode>] {
		return this.logTimeSpent(source, () => {
			const parseListener = new IntactParseListener(this.debuggerOptions);
			try {
				AstBuilder.ast(source, {parseListener});
				const visitor = new ParsedNodeVisitor(parseListener.compilationUnits);
				this.logParsedResult(parseListener, visitor);
				return [visitor.atomicNodes, visitor.positionedNodes];
			} catch (error) {
				this.logProcessingLogs(parseListener, error);
				return [[], []];
			}
		});
	}
}
