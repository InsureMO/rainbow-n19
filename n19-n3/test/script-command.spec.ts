import {AstBuilder} from '../src';
import {
	CharsNode,
	CompilationUnitNode,
	NewLineNode,
	ScriptCommandNode,
	ScriptCommandStartMarkNode
} from '../src/lib/ast/node';
import {checkAst} from './utils/ast-checker';

describe('Script command test', () => {
	test('Script command #1', async () => {
		const text = '#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		checkAst(ast.compilationUnit, [
			CompilationUnitNode, 0, 10, text, [
				[ScriptCommandNode, 0, 9, '#!/bin/sh', [
					[ScriptCommandStartMarkNode, 0, 2, '#!'],
					[CharsNode, 2, 9, '/bin/sh']
				]],
				[NewLineNode, 9, 10, '\n']
			]
		]);
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
