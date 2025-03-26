import {AstBuilder} from '../src';

describe('Multiple lines comment test', () => {
	test('Multiple lines comment #1', async () => {
		const text = '/* todo abc\n * def\r\n * xyz\r */';
		const ast = AstBuilder.ast(text);
		console.log(ast);
	});
	test('Multiple lines comment not closed', async () => {
		const text = '/* todo abc';
		const ast = AstBuilder.ast(text);
		console.log(ast);
	});
});
