import {AstBuilder} from '../../src/lib/OrgApacheGroovyParserAntlr4';
import {IntactParseListener, ParsedAstDebuggerOptions, ParsedNodeVisitor} from '../../src/lib/ParsedGroovyAst';

describe('Simple groovy syntax test', () => {
	const debuggerOptions: ParsedAstDebuggerOptions = {
		missedLogicCheckEnabled: true,
		ruleProcessingLogsEnabled: true
	};

	const parseAst = (source: string, title?: string) => {
		const label = `Parse ${title}`;
		console.time(label);
		const parseListener = new IntactParseListener(debuggerOptions);
		try {
			AstBuilder.ast(source, {parseListener});
			console.timeEnd(label);
			const visitor = new ParsedNodeVisitor(parseListener.compilationUnits);
			console.log(visitor.atomicNodes.map(node => node.toString()).join('\n'));
			parseListener.compilationUnits.forEach(compilationUnit => console.log(compilationUnit.toString()));
			console.error(parseListener.debugger.missedLogics);
		} catch (error) {
			console.error(parseListener.debugger.ruleProcessingLogs.join('\n'));
			console.error(error);
		}
	};

	// warm
	beforeAll(async () => {
		AstBuilder.ast('def x = 1');
	});

	test('package abc.def', async () => parseAst('package @X abc.de;'));
	test('def x = 1', async () => parseAst('def x = 1'));
});
