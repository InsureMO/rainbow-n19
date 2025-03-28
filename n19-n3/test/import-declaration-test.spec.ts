import {AstBuilder} from '../src';

describe('Import declaration test', () => {
	test('Import declaration #1', async () => {
		const text = 'import\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Import declaration #2', async () => {
		const text = 'import$';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Import declaration #3', async () => {
		const text = 'import.';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Import declaration #4', async () => {
		const text = 'import abc.1df';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Import declaration #5', async () => {
		const text = 'import/* a */ abc/*b*/. /*c*/1df/*d*/\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Import declaration #6', async () => {
		const text = 'import/* a */ abc/*b\n*/.; /*c*/1df/*d*/\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Import declaration #7', async () => {
		const text = 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ as $1\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Import declaration #8', async () => {
		const text = 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ . *\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
});
