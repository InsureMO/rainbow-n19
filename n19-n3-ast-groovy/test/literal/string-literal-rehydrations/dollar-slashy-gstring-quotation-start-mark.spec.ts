import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: Dollar Slashy GString Quotation Start Mark', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('SL, DollarSlashyGStringQuotationStartMark -> Chars', async () => {
		const text = `'$/`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `'$/`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 3, 1, '$/']
				]]
			]
		]);
	});

	test('GL, DollarSlashyGStringQuotationStartMark -> GStringInterpolation + Chars', async () => {
		const text = '"$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '"$/', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.GStringInterpolation, 1, 2, 1, '$', [
						[TokenId.GStringInterpolationStartMark, 1, 2, 1, '$']
					]],
					[TokenId.Chars, 2, 3, 1, '/']
				]]
			]
		]);
	});

	test('SGL, DollarSlashyGStringQuotationStartMark -> Chars + SlashyGStringQuotationMark', async () => {
		const text = '/$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 3, 1, '/$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 2, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 2, 3, 1, '/']
				]]
			]
		]);
	});

	test('DSGL, DollarSlashyGStringQuotationStartMark -> Chars + SlashyGStringQuotationMark', async () => {
		const text = '$/$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 4, 1, '$/$/', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.DollarSlashyGStringSlashEscape, 2, 4, 1, '$/'],
				]]
			]
		]);
	});
});
