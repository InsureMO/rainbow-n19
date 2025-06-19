import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: Slash Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, SlashEscape -> Undetermined Chars + SlashyGStringQuotationMark', async () => {
		const text = '\\/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.SlashyGStringLiteral, 1, 2, 1, '/', [
					[TokenId.SlashyGStringQuotationMark, 1, 2, 1, '/']
				]]
			]
		]);
	});

	test('SL/GL, SlashEscape -> Undetermined Chars + Chars', async () => {
		const text = `'\\/'"\\/"`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.StringLiteral, 0, 4, 1, `'\\/'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '/'],
					[TokenId.StringQuotationMark, 3, 4, 1, `'`]
				]],
				[TokenId.GStringLiteral, 4, 8, 1, '"\\/"', [
					[TokenId.GStringQuotationMark, 4, 5, 1, '"'],
					[TokenId.UndeterminedChars, 5, 6, 1, '\\'],
					[TokenId.Chars, 6, 7, 1, '/'],
					[TokenId.GStringQuotationMark, 7, 8, 1, '"']
				]]
			]
		]);
	});

	test('DSGL, SlashEscape -> Undetermined Chars + Chars', async () => {
		const text = '$/\\/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 4, 1, '$/\\/', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.Chars, 3, 4, 1, '/']
				]]
			]
		]);
	});

	test('DSGL, SlashEscape + DollarSlashyGStringQuotationStartMark -> Undetermined Chars + DollarSlashyGStringQuotationEndMark + Divide', async () => {
		const text = '$/\\/$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 5, 1, '$/\\/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 3, 5, 1, '/$']
				]],
				[TokenId.Divide, 5, 6, 1, '/']
			]
		]);
	});
});