import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('GString test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('GString literal #1', async () => {
		const text = '"';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 1, 0, text, [
				[TokenId.GStringLiteral, 0, 1, 1, '"', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"']
				]]
			]
		]);
	});
	test('GString literal #2', async () => {
		const text = '""';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.GStringLiteral, 0, 2, 1, '""', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.GStringQuotationMark, 1, 2, 1, '"']
				]]
			]
		]);
	});
	test('GString literal #3', async () => {
		const text = '"\n"';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.GStringLiteral, 0, 1, 1, '"', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"']
				]],
				[TokenId.NewLine, 1, 2, 1, '\n'],
				[TokenId.GStringLiteral, 2, 3, 2, '"', [
					[TokenId.GStringQuotationMark, 2, 3, 2, '"']
				]]
			]
		]);
	});
	test('GString literal #4', async () => {
		const text = '" """';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '" "', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.GStringQuotationMark, 2, 3, 1, '"']
				]],
				[TokenId.GStringLiteral, 3, 5, 1, '""', [
					[TokenId.GStringQuotationMark, 3, 4, 1, '"'],
					[TokenId.GStringQuotationMark, 4, 5, 1, '"']
				]]
			]
		]);
	});
	test('GString literal #5', async () => {
		const text = '" """"';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '" "', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.GStringQuotationMark, 2, 3, 1, '"']
				]],
				[TokenId.GStringLiteral, 3, 6, 1, '"""', [
					[TokenId.GStringQuotationMarkML, 3, 6, 1, '"""']
				]]
			]
		]);
	});
	test('GString literal #6', async () => {
		const text = '" """"""';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '" "', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.GStringQuotationMark, 2, 3, 1, '"']
				]],
				[TokenId.GStringLiteral, 3, 8, 1, '"""""', [
					[TokenId.GStringQuotationMarkML, 3, 6, 1, '"""'],
					[TokenId.Chars, 6, 7, 1, '"'],
					[TokenId.Chars, 7, 8, 1, '"']
				]]
			]
		]);
	});
	test('GString literal #7', async () => {
		const text = '" """""""';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '" "', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.GStringQuotationMark, 2, 3, 1, '"']
				]],
				[TokenId.GStringLiteral, 3, 9, 1, '""""""', [
					[TokenId.GStringQuotationMarkML, 3, 6, 1, '"""'],
					[TokenId.GStringQuotationMarkML, 6, 9, 1, '"""']
				]]
			]
		]);
	});
	test('GString literal #8', async () => {
		const text = '" """""""""';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '" "', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.GStringQuotationMark, 2, 3, 1, '"']
				]],
				[TokenId.GStringLiteral, 3, 9, 1, '""""""', [
					[TokenId.GStringQuotationMarkML, 3, 6, 1, '"""'],
					[TokenId.GStringQuotationMarkML, 6, 9, 1, '"""']
				]],
				[TokenId.GStringLiteral, 9, 11, 1, '""', [
					[TokenId.GStringQuotationMark, 9, 10, 1, '"'],
					[TokenId.GStringQuotationMark, 10, 11, 1, '"']
				]]
			]
		]);
	});
});
