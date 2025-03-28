import {AstBuilder} from '../src';

describe('Package declaration test', () => {
	test('Package declaration #1', async () => {
		const text = 'package\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Package declaration #1', async () => {
		const text = 'package$';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Package declaration #1', async () => {
		const text = 'package.';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
});
