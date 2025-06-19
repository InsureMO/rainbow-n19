import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: Quote Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, Quote Escape + Quote -> Undetermined Chars + String Literal with single quote started', async () => {
		const text = `\\''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.StringLiteral, 1, 3, 1, `''`, [
					[TokenId.StringQuotationMark, 1, 2, 1, `'`],
					[TokenId.StringQuotationMark, 2, 3, 1, `'`]
				]]
			]
		]);
	});

	test('NSL, Quote Escape + Triple Quotes -> Undetermined Chars + String Literal with triple quotes started', async () => {
		const text = `\\''''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.StringLiteral, 1, 5, 1, `''''`, [
					[TokenId.StringQuotationMarkML, 1, 4, 1, `'''`],
					[TokenId.Chars, 4, 5, 1, `'`]
				]]
			]
		]);
	});

	test('SGL/DSGL, Quote Escape -> Chars', async () => {
		const text = `/\\'/$/\\'/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, `/\\'/`, [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 3, 1, `\\'`],
					[TokenId.SlashyGStringQuotationMark, 3, 4, 1, '/']
				]],
				[TokenId.DollarSlashyGStringLiteral, 4, 10, 1, `$/\\'/$`, [
					[TokenId.DollarSlashyGStringQuotationStartMark, 4, 6, 1, '$/'],
					[TokenId.Chars, 6, 8, 1, `\\'`],
					[TokenId.DollarSlashyGStringQuotationEndMark, 8, 10, 1, '/$']
				]]
			]
		]);
	});
});
