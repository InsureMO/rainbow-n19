import {AstBuilder} from '../../src/lib/OrgApacheGroovyParserAntlr4';
import {IntactParseListener} from '../../src/lib/ParsedGroovyAst';

describe('Simple groovy syntax test', () => {
	// warm
	beforeAll(async () => {
		AstBuilder.ast('def x = 1');
	});

	test('def x = 1', async () => {
		console.time('Parse def x = 1');
		const parseListener = new IntactParseListener();
		const opts = {parseListener};
		const ast = AstBuilder.ast('def x = 1', opts);
		console.timeEnd('Parse def x = 1');
		console.log(parseListener.compilationUnit);
	});
});
