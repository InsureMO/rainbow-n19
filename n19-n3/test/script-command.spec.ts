import {
	AstBuilder,
	CharsNode,
	CompilationUnitNode,
	NewLineNode,
	ScriptCommandNode,
	ScriptCommandStartMarkNode,
	TabsNode
} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Script command test', () => {
	test('Script command #1', async () => {
		const text = '#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 10, 0, text, [
				[ScriptCommandNode, 0, 9, 1, '#!/bin/sh', [
					[ScriptCommandStartMarkNode, 0, 2, 1, '#!'],
					[CharsNode, 2, 9, 1, '/bin/sh']
				]],
				[NewLineNode, 9, 10, 1, '\n']
			]
		]);
	});
	test('Script command #2, line starts with a tab', async () => {
		const text = '\t#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 11, 0, text, [
				[TabsNode, 0, 1, 1, '\t'],
				[ScriptCommandNode, 1, 10, 1, '#!/bin/sh', [
					[ScriptCommandStartMarkNode, 1, 3, 1, '#!'],
					[CharsNode, 3, 10, 1, '/bin/sh']
				]],
				[NewLineNode, 10, 11, 1, '\n']
			]
		]);
	});
	test('Script command #3, not first line', async () => {
		const text = '\n#!/bin/sh\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 11, 0, text, [
				[NewLineNode, 0, 1, 1, '\n'],
				[ScriptCommandNode, 1, 10, 1, '#!/bin/sh', [
					[ScriptCommandStartMarkNode, 1, 3, 1, '#!'],
					[CharsNode, 3, 10, 1, '/bin/sh']
				]],
				[NewLineNode, 10, 11, 1, '\n']
			]
		]);
	});
});
