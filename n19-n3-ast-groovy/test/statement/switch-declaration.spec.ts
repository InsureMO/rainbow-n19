import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Switch declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Switch declaration #1', async () => {
		const text = 'switch';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.SwitchDeclaration, 0, 6, 1, 'switch', [
					[TokenId.SWITCH, 0, 6, 1, 'switch']
				]]
			]
		]);
	});
	test('Switch declaration #2', async () => {
		const text = 'switch (true) {\n}\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 18, 0, text, [
				[TokenId.SwitchDeclaration, 0, 17, 1, 'switch (true) {\n}', [
					[TokenId.SWITCH, 0, 6, 1, 'switch'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.ParenBlock, 7, 13, 1, '(true)', [
						[TokenId.LParen, 7, 8, 1, '('],
						[TokenId.BooleanTrue, 8, 12, 1, 'true'],
						[TokenId.RParen, 12, 13, 1, ')']
					]],
					[TokenId.Whitespaces, 13, 14, 1, ' '],
					[TokenId.SwitchBody, 14, 17, 1, '{\n}', [
						[TokenId.LBrace, 14, 15, 1, '{'],
						[TokenId.NewLine, 15, 16, 1, '\n'],
						[TokenId.RBrace, 16, 17, 2, '}']
					]]
				]],
				[TokenId.NewLine, 17, 18, 2, '\n']
			]
		]);
	});
	test('Switch declaration #3', async () => {
		const text = 'switch (true) {\n\tcase 1: yield 1\n\tdefault: yield 10\n}\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 54, 0, text, [
				[TokenId.SwitchDeclaration, 0, 53, 1, 'switch (true) {\n\tcase 1: yield 1\n\tdefault: yield 10\n}', [
					[TokenId.SWITCH, 0, 6, 1, 'switch'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.ParenBlock, 7, 13, 1, '(true)', [
						[TokenId.LParen, 7, 8, 1, '('],
						[TokenId.BooleanTrue, 8, 12, 1, 'true'],
						[TokenId.RParen, 12, 13, 1, ')']
					]],
					[TokenId.Whitespaces, 13, 14, 1, ' '],
					[TokenId.SwitchBody, 14, 53, 1, '{\n\tcase 1: yield 1\n\tdefault: yield 10\n}', [
						[TokenId.LBrace, 14, 15, 1, '{'],
						[TokenId.NewLine, 15, 16, 1, '\n'],
						[TokenId.Tabs, 16, 17, 2, '\t'],
						[TokenId.SwitchCaseDeclaration, 17, 32, 2, 'case 1: yield 1', [
							[TokenId.CASE, 17, 21, 2, 'case'],
							[TokenId.Whitespaces, 21, 22, 2, ' '],
							[TokenId.NumericBasePart, 22, 23, 2, '1'],
							[TokenId.Colon, 23, 24, 2, ':'],
							[TokenId.Whitespaces, 24, 25, 2, ' '],
							[TokenId.YIELD, 25, 30, 2, 'yield'],
							[TokenId.Whitespaces, 30, 31, 2, ' '],
							[TokenId.NumericBasePart, 31, 32, 2, '1']
						]],
						[TokenId.NewLine, 32, 33, 2, '\n'],
						[TokenId.Tabs, 33, 34, 3, '\t'],
						[TokenId.SwitchDefaultDeclaration, 34, 51, 3, 'default: yield 10', [
							[TokenId.DEFAULT, 34, 41, 3, 'default'],
							[TokenId.Colon, 41, 42, 3, ':'],
							[TokenId.Whitespaces, 42, 43, 3, ' '],
							[TokenId.YIELD, 43, 48, 3, 'yield'],
							[TokenId.Whitespaces, 48, 49, 3, ' '],
							[TokenId.NumericBasePart, 49, 51, 3, '10']
						]],
						[TokenId.NewLine, 51, 52, 3, '\n'],
						[TokenId.RBrace, 52, 53, 4, '}']
					]]
				]],
				[TokenId.NewLine, 53, 54, 4, '\n']
			]
		]);
	});
});
