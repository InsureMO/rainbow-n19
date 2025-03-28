import {AstBuilder} from '../src';

describe('Script command test', () => {
	test('Script command #1', async () => {
		const text = '#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString())
	});
	test('Script command #2, line starts with a tab', async () => {
		const text = '\t#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString());
	});
	test('Script command #3, not first line', async () => {
		const text = '\n#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		console.log(ast.toString());
	});
});
