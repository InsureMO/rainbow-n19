import {AstBuilder} from '../src';

describe('Ast test #1', () => {
	test('Script command #1', async () => {
		const text = '#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		console.log(ast);
	});
	test('Script command #2', async () => {
		const text = '\t#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		console.log(ast);
	});
	test('Single line comment', async () => {
		const text = '// todo abc';
		const ast = AstBuilder.ast(text);
		console.log(ast);
	});
});
