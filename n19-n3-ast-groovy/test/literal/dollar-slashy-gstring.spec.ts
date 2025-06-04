import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Dollar Slashy GString test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('GString literal #1', async () => {
		const text = '$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 2, 1, text, [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/']
				]]
			]
		]);
	});
	test('GString literal #2', async () => {
		const text = '$//$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 4, 1, text, [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 2, 4, 1, '/$']
				]]
			]
		]);
	});
	test('GString literal #3', async () => {
		const text = '$/\\b\\f\\n\\r\\t\\babc\\fin\\n0x15afg\\r0.348e2f\\t126e+5g\\b0x15afgabc\\u123\\uaef8abc/$\\uaef8abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 86, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 77, 1, '$/\\b\\f\\n\\r\\t\\babc\\fin\\n0x15afg\\r0.348e2f\\t126e+5g\\b0x15afgabc\\u123\\uaef8abc/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.Chars, 3, 4, 1, 'b'],
					[TokenId.UndeterminedChars, 4, 5, 1, '\\'],
					[TokenId.Chars, 5, 6, 1, 'f'],
					[TokenId.UndeterminedChars, 6, 7, 1, '\\'],
					[TokenId.Chars, 7, 8, 1, 'n'],
					[TokenId.UndeterminedChars, 8, 9, 1, '\\'],
					[TokenId.Chars, 9, 10, 1, 'r'],
					[TokenId.UndeterminedChars, 10, 11, 1, '\\'],
					[TokenId.Chars, 11, 12, 1, 't'],
					[TokenId.UndeterminedChars, 12, 13, 1, '\\'],
					[TokenId.Chars, 13, 17, 1, 'babc'],
					[TokenId.UndeterminedChars, 17, 18, 1, '\\'],
					[TokenId.Chars, 18, 21, 1, 'fin'],
					[TokenId.UndeterminedChars, 21, 22, 1, '\\'],
					[TokenId.Chars, 22, 30, 1, 'n0x15afg'],
					[TokenId.UndeterminedChars, 30, 31, 1, '\\'],
					[TokenId.Chars, 31, 33, 1, 'r0'],
					[TokenId.Chars, 33, 40, 1, '.348e2f'],
					[TokenId.UndeterminedChars, 40, 41, 1, '\\'],
					[TokenId.Chars, 41, 46, 1, 't126e'],
					[TokenId.Chars, 46, 47, 1, '+'],
					[TokenId.Chars, 47, 49, 1, '5g'],
					[TokenId.UndeterminedChars, 49, 50, 1, '\\'],
					[TokenId.Chars, 50, 61, 1, 'b0x15afgabc'],
					[TokenId.UndeterminedChars, 61, 62, 1, '\\'],
					[TokenId.Chars, 62, 66, 1, 'u123'],
					[TokenId.StringUnicodeEscape, 66, 72, 1, '\\uaef8', [
						[TokenId.StringUnicodeEscapeMark, 66, 68, 1, '\\u'],
						[TokenId.StringUnicodeEscapeContent, 68, 72, 1, 'aef8']
					]],
					[TokenId.Chars, 72, 75, 1, 'abc'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 75, 77, 1, '/$']
				]],
				[TokenId.UndeterminedChars, 77, 78, 1, '\\'],
				[TokenId.Identifier, 78, 86, 1, 'uaef8abc']
			]
		]);
	});
});