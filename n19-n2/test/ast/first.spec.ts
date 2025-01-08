import {AstBuilder} from '../../src/lib/OrgApacheGroovyParserAntlr4';

describe('Simple groovy syntax test', () => {
	test('def x = 1', async () => {
		const ast = AstBuilder.ast('def x = 1');
		console.log(ast);
	});
});
