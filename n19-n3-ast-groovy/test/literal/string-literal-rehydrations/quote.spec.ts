import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Single and Triple Quotes', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// ', '''
	test('Single/Triple Quotes -> Chars, GL/SGL/DSGL', async () => {
		const text = `"''''"\n/''''/$/''''/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 21, 0, text, [
				[TokenId.GStringLiteral, 0, 6, 1, `"''''"`, [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Chars, 1, 4, 1, `'''`],
					[TokenId.Chars, 4, 5, 1, `'`],
					[TokenId.GStringQuotationMark, 5, 6, 1, '"']
				]],
				[TokenId.NewLine, 6, 7, 1, '\n'],
				[TokenId.SlashyGStringLiteral, 7, 13, 2, `/''''/`, [
					[TokenId.SlashyGStringQuotationMark, 7, 8, 2, '/'],
					[TokenId.Chars, 8, 11, 2, `'''`],
					[TokenId.Chars, 11, 12, 2, `'`],
					[TokenId.SlashyGStringQuotationMark, 12, 13, 2, '/']
				]],
				[TokenId.DollarSlashyGStringLiteral, 13, 21, 2, `$/''''/$`, [
					[TokenId.DollarSlashyGStringQuotationStartMark, 13, 15, 2, '$/'],
					[TokenId.Chars, 15, 18, 2, `'''`],
					[TokenId.Chars, 18, 19, 2, `'`],
					[TokenId.DollarSlashyGStringQuotationEndMark, 19, 21, 2, '/$']
				]]
			]
		]);
	});

	test('SL, When starts with single quote, Triple Quotes -> Single Quote + String Literal', async () => {
		const text = `'abc'''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.StringLiteral, 0, 5, 1, `'abc'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.StringQuotationMark, 4, 5, 1, `'`]
				]],
				[TokenId.StringLiteral, 5, 7, 1, `''`, [
					[TokenId.StringQuotationMark, 5, 6, 1, `'`],
					[TokenId.StringQuotationMark, 6, 7, 1, `'`]
				]]
			]
		]);
	});

	test('SL, When starts with single quote, Triple Quotes + Single Quote -> Single Quote + String Literal Starts with triple quotes', async () => {
		const text = `'abc''''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.StringLiteral, 0, 5, 1, `'abc'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.StringQuotationMark, 4, 5, 1, `'`]
				]],
				[TokenId.StringLiteral, 5, 8, 1, `'''`, [
					[TokenId.StringQuotationMarkML, 5, 8, 1, `'''`]
				]]
			]
		]);
	});

	test('SL, When starts with triple quotes, Single Quote -> Chars', async () => {
		const text = `'''abc'`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.StringLiteral, 0, 7, 1, `'''abc'`, [
					[TokenId.StringQuotationMarkML, 0, 3, 1, `'''`],
					[TokenId.Chars, 3, 6, 1, 'abc'],
					[TokenId.Chars, 6, 7, 1, `'`]
				]]
			]
		]);
	});
});
