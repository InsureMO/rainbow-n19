import {AstBuilder} from '../src';

describe('Package declaration test', () => {
	test('Package declaration #1', async () => {
		const text = 'package\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Package declaration #2', async () => {
		const text = 'package$';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Package declaration #3', async () => {
		const text = 'package.';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Package declaration #4', async () => {
		const text = 'package abc.1df';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Package declaration #5', async () => {
		const text = 'package/* a */ abc/*b*/. /*c*/1df/*d*/\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
});
