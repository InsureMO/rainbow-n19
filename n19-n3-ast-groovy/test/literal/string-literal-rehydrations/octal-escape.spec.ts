import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Octal Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, OctalEscape -> Undetermined Chars + IntegralLiteral', async () => {
		const text = '\\127';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.IntegralLiteral, 1, 4, 1, '127', [
					[TokenId.NumericBasePart, 1, 4, 1, '127']
				]]
			]
		]);
	});

	test('NSL, OctalEscape + NumericBasePart -> Undetermined Chars + IntegralLiteral', async () => {
		const text = '\\1271234';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.IntegralLiteral, 1, 8, 1, '1271234', [
					[TokenId.NumericBasePart, 1, 8, 1, '1271234']
				]]
			]
		]);
	});

	test('NSL, OctalEscape + NumericBasePart -> Undetermined Chars + DecimalLiteral', async () => {
		const text = '\\1271.23';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DecimalLiteral, 1, 8, 1, '1271.23', [
					[TokenId.NumericBasePart, 1, 5, 1, '1271'],
					[TokenId.Dot, 5, 6, 1, '.'],
					[TokenId.NumericBasePart, 6, 8, 1, '23']
				]]
			]
		]);
	});

	test('NSL, OctalEscape + NumericBasePart -> Undetermined Chars + IntegralLiteral + Identifier', async () => {
		const text = '\\1270x1fee';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.IntegralLiteral, 1, 5, 1, '1270', [
					[TokenId.NumericBasePart, 1, 5, 1, '1270']
				]],
				[TokenId.Identifier, 5, 10, 1, 'x1fee']
			]
		]);
	});

	test('SL/GL, OctalEscape -> Rebuild it', async () => {
		const text = `'\\127'"\\127"`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 12, 0, text, [
				[TokenId.StringLiteral, 0, 6, 1, `'\\127'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.StringOctalEscape, 1, 5, 1, '\\127', [
						[TokenId.StringOctalEscapeMark, 1, 2, 1, '\\'],
						[TokenId.StringOctalEscapeContent, 2, 5, 1, '127']
					]],
					[TokenId.StringQuotationMark, 5, 6, 1, `'`]
				]],
				[TokenId.GStringLiteral, 6, 12, 1, '"\\127"', [
					[TokenId.GStringQuotationMark, 6, 7, 1, '"'],
					[TokenId.StringOctalEscape, 7, 11, 1, '\\127', [
						[TokenId.StringOctalEscapeMark, 7, 8, 1, '\\'],
						[TokenId.StringOctalEscapeContent, 8, 11, 1, '127']
					]],
					[TokenId.GStringQuotationMark, 11, 12, 1, '"']
				]]
			]
		]);
	});

	test('SGL/DSL, OctalEscape -> Chars', async () => {
		const text = '/\\127/$/\\127/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 14, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/\\127/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 5, 1, '\\127'],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.DollarSlashyGStringLiteral, 6, 14, 1, '$/\\127/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 6, 8, 1, '$/'],
					[TokenId.Chars, 8, 12, 1, '\\127'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 12, 14, 1, '/$']
				]]
			]
		]);
	});
});
