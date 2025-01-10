import {AstBuilder} from '../../src/lib/OrgApacheGroovyParserAntlr4';
import {IntactParseListener, ParsedAstDebuggerOptions} from '../../src/lib/ParsedGroovyAst';

describe('Simple groovy syntax test', () => {
	const debuggerOptions: ParsedAstDebuggerOptions = {
		missedLogicCheckEnabled: true,
		ruleProcessingLogsEnabled: true
	};
	// warm
	beforeAll(async () => {
		AstBuilder.ast('def x = 1');
	});

	test('def x = 1', async () => {
		console.time('Parse def x = 1');
		const parseListener = new IntactParseListener(debuggerOptions);
		const opts = {parseListener};
		AstBuilder.ast('def x = 1', opts);
		console.timeEnd('Parse def x = 1');
		console.log(parseListener.compilationUnit.toString());
		console.error(parseListener.debugger.missedLogics);
	});
});
