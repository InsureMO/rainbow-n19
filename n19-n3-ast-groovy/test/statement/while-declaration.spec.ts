import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('While declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('While declaration #1', async () => {
		const text = 'while';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.WhileDeclaration, 0, 5, 1, 'while', [
					[TokenId.WHILE, 0, 5, 1, 'while']
				]]
			]
		]);
	});
	test('While declaration #2', async () => {
		const text = 'while {}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.WhileDeclaration, 0, 8, 1, 'while {}', [
					[TokenId.WHILE, 0, 5, 1, 'while'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.WhileBody, 6, 8, 1, '{}', [
						[TokenId.LBrace, 6, 7, 1, '{'],
						[TokenId.RBrace, 7, 8, 1, '}']
					]]
				]]
			]
		]);
	});
	test('While declaration #3', async () => {
		const text = 'while {}\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.WhileDeclaration, 0, 8, 1, 'while {}', [
					[TokenId.WHILE, 0, 5, 1, 'while'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.WhileBody, 6, 8, 1, '{}', [
						[TokenId.LBrace, 6, 7, 1, '{'],
						[TokenId.RBrace, 7, 8, 1, '}']
					]]
				]],
				[TokenId.NewLine, 8, 9, 1, '\n']
			]
		]);
	});
	test('While declaration #4', async () => {
		const text = 'while (true) {\n}\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 17, 0, text, [
				[TokenId.WhileDeclaration, 0, 16, 1, 'while (true) {\n}', [
					[TokenId.WHILE, 0, 5, 1, 'while'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.ParenBlock, 6, 12, 1, '(true)', [
						[TokenId.LParen, 6, 7, 1, '('],
						[TokenId.BooleanTrue, 7, 11, 1, 'true'],
						[TokenId.RParen, 11, 12, 1, ')']
					]],
					[TokenId.Whitespaces, 12, 13, 1, ' '],
					[TokenId.WhileBody, 13, 16, 1, '{\n}', [
						[TokenId.LBrace, 13, 14, 1, '{'],
						[TokenId.NewLine, 14, 15, 1, '\n'],
						[TokenId.RBrace, 15, 16, 2, '}']
					]]
				]],
				[TokenId.NewLine, 16, 17, 2, '\n']
			]
		]);
	});
});
