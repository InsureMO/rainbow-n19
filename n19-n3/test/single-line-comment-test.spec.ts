import {AstBuilder} from '../src';

describe('Single line comment test', () => {
	test('Single line comment #1', async () => {
		const text = '// todo abc';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString());
	});
	test('Single line comment #2', async () => {
		const text = '// abc\t\tdef xyz';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString());
	});
	test('Single line comment #2', async () => {
		const text = `// abc\t\tdef xyz
	// 2nd line`;
		const ast = AstBuilder.ast(text);
		console.log(ast.toString());
	});
});
