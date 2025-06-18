import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Single Double-Quote and Triple Double-Quotes', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('GL, When with single double-quote started, Triple Double-Quotes -> Single Double-Quote + String Literal', async () => {
		const text = `"abc"""`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.GStringLiteral, 0, 5, 1, '"abc"', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.GStringQuotationMark, 4, 5, 1, '"']
				]],
				[TokenId.GStringLiteral, 5, 7, 1, `""`, [
					[TokenId.GStringQuotationMark, 5, 6, 1, '"'],
					[TokenId.GStringQuotationMark, 6, 7, 1, '"']
				]]
			]
		]);
	});

	test('GL, When with single double-quote started, Triple Double-Quotes + Single Double-Quote -> Single Double-Quote + String Literal with triple double-quotes started', async () => {
		const text = `"abc""""`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.GStringLiteral, 0, 5, 1, `"abc"`, [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.GStringQuotationMark, 4, 5, 1, '"']
				]],
				[TokenId.GStringLiteral, 5, 8, 1, '"""', [
					[TokenId.GStringQuotationMarkML, 5, 8, 1, '"""']
				]]
			]
		]);
	});

	test('GL, When with triple double-quotes started, Single Double-Quote -> Chars', async () => {
		const text = `"""abc"`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.GStringLiteral, 0, 7, 1, `"""abc"`, [
					[TokenId.GStringQuotationMarkML, 0, 3, 1, '"""'],
					[TokenId.Chars, 3, 6, 1, 'abc'],
					[TokenId.Chars, 6, 7, 1, '"']
				]]
			]
		]);
	});

	test('SL/SGL/DSGL, Single Double-Quote/Triple Double-Quotes -> Chars', async () => {
		const text = `'""""'\n/""""/$/""""/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 21, 0, text, [
				[TokenId.StringLiteral, 0, 6, 1, `'""""'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 4, 1, '"""'],
					[TokenId.Chars, 4, 5, 1, '"'],
					[TokenId.StringQuotationMark, 5, 6, 1, `'`]
				]],
				[TokenId.NewLine, 6, 7, 1, '\n'],
				[TokenId.SlashyGStringLiteral, 7, 13, 2, `/""""/`, [
					[TokenId.SlashyGStringQuotationMark, 7, 8, 2, '/'],
					[TokenId.Chars, 8, 11, 2, '"""'],
					[TokenId.Chars, 11, 12, 2, '"'],
					[TokenId.SlashyGStringQuotationMark, 12, 13, 2, '/']
				]],
				[TokenId.DollarSlashyGStringLiteral, 13, 21, 2, `$/""""/$`, [
					[TokenId.DollarSlashyGStringQuotationStartMark, 13, 15, 2, '$/'],
					[TokenId.Chars, 15, 18, 2, '"""'],
					[TokenId.Chars, 18, 19, 2, '"'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 19, 21, 2, '/$']
				]]
			]
		]);
	});
});
