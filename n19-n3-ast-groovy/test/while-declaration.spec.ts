import {CompilationUnitNode, GroovyAstBuilder, TokenId} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('While declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('While declaration #1', async () => {
		const text = 'while';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 5, 0, text, [
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
			CompilationUnitNode, 0, 8, 0, text, [
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
			CompilationUnitNode, 0, 9, 0, text, [
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
});
