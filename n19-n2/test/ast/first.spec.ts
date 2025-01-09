import {ParserRuleContext} from 'antlr4';
import {AstBuilder, ParseTreeListenerAdapter} from '../../src/lib/OrgApacheGroovyParserAntlr4';

describe('Simple groovy syntax test', () => {
	const parseListener = new class extends ParseTreeListenerAdapter {
		enterEveryRule(ctx: ParserRuleContext) {
			super.enterEveryRule(ctx);
		}
	}();
	const opts = {parseListener};
	test('def x = 1', async () => {
		const ast = AstBuilder.ast('def x = 1', opts);
		console.log(ast);
	});
});
