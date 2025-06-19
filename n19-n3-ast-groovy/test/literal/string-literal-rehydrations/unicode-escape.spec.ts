import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: Unicode Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, UnicodeEscape -> Undetermined Chars + Identifier', async () => {
		const text = '\\u0123';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 6, 1, 'u0123']
			]
		]);
	});

	test('NSL, UnicodeEscape + NumericBasePart -> Undetermined Chars + Identifier', async () => {
		const text = '\\u0123567';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 9, 1, 'u0123567']
			]
		]);
	});

	test('NSL, UnicodeEscape + NumericBasePart -> Undetermined Chars + Identifier + DecimalLiteral', async () => {
		const text = '\\u0123.567';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 6, 1, 'u0123'],
				[TokenId.DecimalLiteral, 6, 10, 1, '.567', [
					[TokenId.Dot, 6, 7, 1, '.'],
					[TokenId.NumericBasePart, 7, 10, 1, '567']
				]]
			]
		]);
	});

	test('ASL, UnicodeEscape -> Rebuild it', async () => {
		const text = `'\\u0123'"\\u4567"\n/\\u89ab/$/\\ucdef/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 35, 0, text, [
				[TokenId.StringLiteral, 0, 8, 1, `'\\u0123'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.StringUnicodeEscape, 1, 7, 1, '\\u0123', [
						[TokenId.StringUnicodeEscapeMark, 1, 3, 1, '\\u'],
						[TokenId.StringUnicodeEscapeContent, 3, 7, 1, '0123']
					]],
					[TokenId.StringQuotationMark, 7, 8, 1, `'`]
				]],
				[TokenId.GStringLiteral, 8, 16, 1, '"\\u4567"', [
					[TokenId.GStringQuotationMark, 8, 9, 1, '"'],
					[TokenId.StringUnicodeEscape, 9, 15, 1, '\\u4567', [
						[TokenId.StringUnicodeEscapeMark, 9, 11, 1, '\\u'],
						[TokenId.StringUnicodeEscapeContent, 11, 15, 1, '4567']
					]],
					[TokenId.GStringQuotationMark, 15, 16, 1, '"']
				]],
				[TokenId.Newline, 16, 17, 1, '\n'],
				[TokenId.SlashyGStringLiteral, 17, 25, 2, '/\\u89ab/', [
					[TokenId.SlashyGStringQuotationMark, 17, 18, 2, '/'],
					[TokenId.StringUnicodeEscape, 18, 24, 2, '\\u89ab', [
						[TokenId.StringUnicodeEscapeMark, 18, 20, 2, '\\u'],
						[TokenId.StringUnicodeEscapeContent, 20, 24, 2, '89ab']
					]],
					[TokenId.SlashyGStringQuotationMark, 24, 25, 2, '/']
				]],
				[TokenId.DollarSlashyGStringLiteral, 25, 35, 2, '$/\\ucdef/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 25, 27, 2, '$/'],
					[TokenId.StringUnicodeEscape, 27, 33, 2, '\\ucdef', [
						[TokenId.StringUnicodeEscapeMark, 27, 29, 2, '\\u'],
						[TokenId.StringUnicodeEscapeContent, 29, 33, 2, 'cdef']
					]],
					[TokenId.DollarSlashyGStringQuotationEndMark, 33, 35, 2, '/$']
				]]
			]
		]);
	});
});
