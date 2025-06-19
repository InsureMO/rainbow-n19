import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: Double-Quote Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, Double-Quote Escape + Double-Quote -> Undetermined Chars + GString Literal with single double-quote started', async () => {
		const text = '\\""';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.GStringLiteral, 1, 3, 1, '""', [
					[TokenId.GStringQuotationMark, 1, 2, 1, '"'],
					[TokenId.GStringQuotationMark, 2, 3, 1, '"']
				]]
			]
		]);
	});

	test('NSL, Double-Quote Escape + Triple Double-Quotes -> Undetermined Chars + GString Literal with triple double-quotes started', async () => {
		const text = '\\""""';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.GStringLiteral, 1, 5, 1, '""""', [
					[TokenId.GStringQuotationMarkML, 1, 4, 1, '"""'],
					[TokenId.Chars, 4, 5, 1, '"']
				]]
			]
		]);
	});

	test('SGL/DSGL, Double-Quote Escape -> Chars', async () => {
		const text = '/\\"/$/\\"/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/\\"/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 3, 1, '\\"'],
					[TokenId.SlashyGStringQuotationMark, 3, 4, 1, '/']
				]],
				[TokenId.DollarSlashyGStringLiteral, 4, 10, 1, '$/\\"/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 4, 6, 1, '$/'],
					[TokenId.Chars, 6, 8, 1, '\\"'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 8, 10, 1, '/$']
				]]
			]
		]);
	});
});
