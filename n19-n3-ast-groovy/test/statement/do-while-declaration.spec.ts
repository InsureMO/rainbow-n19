import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Do-While declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Do-While declaration #1', async () => {
		const text = 'do';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.DoWhileDeclaration, 0, 2, 1, 'do', [
					[TokenId.DO, 0, 2, 1, 'do']
				]]
			]
		]);
	});
	test('Do-While declaration #2', async () => {
		const text = 'do {}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.DoWhileDeclaration, 0, 5, 1, 'do {}', [
					[TokenId.DO, 0, 2, 1, 'do'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.DoWhileBody, 3, 5, 1, '{}', [
						[TokenId.LBrace, 3, 4, 1, '{'],
						[TokenId.RBrace, 4, 5, 1, '}']
					]]
				]]
			]
		]);
	});
	test('Do-While declaration #3', async () => {
		const text = 'do {}\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DoWhileDeclaration, 0, 6, 1, 'do {}\n', [
					[TokenId.DO, 0, 2, 1, 'do'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.DoWhileBody, 3, 5, 1, '{}', [
						[TokenId.LBrace, 3, 4, 1, '{'],
						[TokenId.RBrace, 4, 5, 1, '}']
					]],
					[TokenId.NewLine, 5, 6, 1, '\n']
				]]
			]
		]);
	});
	test('Do-While declaration #4', async () => {
		const text = 'do while';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.DoWhileDeclaration, 0, 8, 1, 'do while', [
					[TokenId.DO, 0, 2, 1, 'do'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.WHILE, 3, 8, 1, 'while']
				]]
			]
		]);
	});
	test('Do-While declaration #5', async () => {
		const text = 'do {\n} while (true)\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 20, 0, text, [
				[TokenId.DoWhileDeclaration, 0, 19, 1, 'do {\n} while (true)', [
					[TokenId.DO, 0, 2, 1, 'do'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.DoWhileBody, 3, 6, 1, '{\n}', [
						[TokenId.LBrace, 3, 4, 1, '{'],
						[TokenId.NewLine, 4, 5, 1, '\n'],
						[TokenId.RBrace, 5, 6, 2, '}']
					]],
					[TokenId.Whitespaces, 6, 7, 2, ' '],
					[TokenId.WHILE, 7, 12, 2, 'while'],
					[TokenId.Whitespaces, 12, 13, 2, ' '],
					[TokenId.ParenBlock, 13, 19, 2, '(true)', [
						[TokenId.LParen, 13, 14, 2, '('],
						[TokenId.BooleanLiteral, 14, 18, 2, 'true'],
						[TokenId.RParen, 18, 19, 2, ')'],
					]]
				]],
				[TokenId.NewLine, 19, 20, 2, '\n']
			]
		]);
	});
});
