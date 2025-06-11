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
					[TokenId.Chars, 2, 4, 1, '\\b'],
					[TokenId.Chars, 4, 6, 1, '\\f'],
					[TokenId.Chars, 6, 8, 1, '\\n'],
					[TokenId.Chars, 8, 10, 1, '\\r'],
					[TokenId.Chars, 10, 12, 1, '\\t'],
					[TokenId.Chars, 12, 14, 1, '\\b'],
					[TokenId.Chars, 14, 17, 1, 'abc'],
					[TokenId.Chars, 17, 19, 1, '\\f'],
					[TokenId.Chars, 19, 21, 1, 'in'],
					[TokenId.Chars, 21, 23, 1, '\\n'],
					[TokenId.Chars, 23, 30, 1, '0x15afg'],
					[TokenId.Chars, 30, 32, 1, '\\r'],
					[TokenId.Chars, 32, 40, 1, '0.348e2f'],
					[TokenId.Chars, 40, 42, 1, '\\t'],
					[TokenId.Chars, 42, 49, 1, '126e+5g'],
					[TokenId.Chars, 49, 51, 1, '\\b'],
					[TokenId.Chars, 51, 58, 1, '0x15afg'],
					[TokenId.Chars, 58, 61, 1, 'abc'],
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