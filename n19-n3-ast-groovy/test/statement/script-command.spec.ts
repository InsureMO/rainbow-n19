import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Script command test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Script command #1', async () => {
		const text = '#!/bin/sh\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.ScriptCommand, 0, 9, 1, '#!/bin/sh', [
					[TokenId.ScriptCommandStartMark, 0, 2, 1, '#!'],
					[TokenId.Chars, 2, 3, 1, '/'],
					[TokenId.Chars, 3, 6, 1, 'bin'],
					[TokenId.Chars, 6, 7, 1, '/'],
					[TokenId.Chars, 7, 9, 1, 'sh']
				]],
				[TokenId.NewLine, 9, 10, 1, '\n']
			]
		]);
	});
	test('Script command #2, line starts with a tab', async () => {
		const text = '\t#!/bin/sh\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.Tabs, 0, 1, 1, '\t'],
				[TokenId.ScriptCommand, 1, 10, 1, '#!/bin/sh', [
					[TokenId.ScriptCommandStartMark, 1, 3, 1, '#!'],
					[TokenId.Chars, 3, 4, 1, '/'],
					[TokenId.Chars, 4, 7, 1, 'bin'],
					[TokenId.Chars, 7, 8, 1, '/'],
					[TokenId.Chars, 8, 10, 1, 'sh']
				]],
				[TokenId.NewLine, 10, 11, 1, '\n']
			]
		]);
	});
	test('Script command #3, not first line', async () => {
		const text = '\n#!/bin/sh\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.NewLine, 0, 1, 1, '\n'],
				[TokenId.ScriptCommand, 1, 10, 2, '#!/bin/sh', [
					[TokenId.ScriptCommandStartMark, 1, 3, 2, '#!'],
					[TokenId.Chars, 3, 4, 2, '/'],
					[TokenId.Chars, 4, 7, 2, 'bin'],
					[TokenId.Chars, 7, 8, 2, '/'],
					[TokenId.Chars, 8, 10, 2, 'sh']
				]],
				[TokenId.NewLine, 10, 11, 2, '\n']
			]
		]);
	});
});
