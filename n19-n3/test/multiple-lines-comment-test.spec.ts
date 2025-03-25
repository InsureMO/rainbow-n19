import {AstBuilder} from '../src';

describe('Multiple lines comment test', () => {
	test('Multiple lines comment #1', async () => {
		const text = '/* todo abc';
		const ast = AstBuilder.ast(text);
		console.log(ast);
	});
});
