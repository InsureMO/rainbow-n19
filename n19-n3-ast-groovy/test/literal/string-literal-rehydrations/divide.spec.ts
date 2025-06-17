import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Divide', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// divide: /
	test('NSL, When is first node, Divide -> SlashyGStringQuotationMark', async () => {
		const text = `/`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 1, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 1, 1, `/`, [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`]
				]]
			]
		]);
	});

	test('NSL, When after operator, Divide -> SlashyGStringQuotationMark', async () => {
		const text = `- /`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.Subtract, 0, 1, 1, '-'],
				[TokenId.Whitespaces, 1, 2, 1, ' '],
				[TokenId.SlashyGStringLiteral, 2, 3, 1, `/`, [
					[TokenId.SlashyGStringQuotationMark, 2, 3, 1, `/`]
				]]
			]
		]);
	});

	test('NSL, When after dot, Divide -> SlashyGStringQuotationMark', async () => {
		const text = `. /`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.Dot, 0, 1, 1, '.'],
				[TokenId.Whitespaces, 1, 2, 1, ' '],
				[TokenId.SlashyGStringLiteral, 2, 3, 1, `/`, [
					[TokenId.SlashyGStringQuotationMark, 2, 3, 1, `/`]
				]]
			]
		]);
	});

	test('NSL, When nothing before me at same line, Divide -> SlashyGStringQuotationMark', async () => {
		const text = `1\n/`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.IntegralLiteral, 0, 1, 1, '1', [
					[TokenId.NumericBasePart, 0, 1, 1, '1']
				]],
				[TokenId.NewLine, 1, 2, 1, '\n'],
				[TokenId.SlashyGStringLiteral, 2, 3, 2, `/`, [
					[TokenId.SlashyGStringQuotationMark, 2, 3, 2, `/`]
				]]
			]
		]);
	});

	test('Divide -> Chars, SL/GL', async () => {
		const text = `'/'"/"`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `'/'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 2, 1, '/'],
					[TokenId.StringQuotationMark, 2, 3, 1, `'`]
				]],
				[TokenId.GStringLiteral, 3, 6, 1, '"/"', [
					[TokenId.GStringQuotationMark, 3, 4, 1, '"'],
					[TokenId.Chars, 4, 5, 1, '/'],
					[TokenId.GStringQuotationMark, 5, 6, 1, '"']
				]]
			]
		]);
	});

	test('SGL, Divide -> SlashyGStringQuotationMark', async () => {
		const text = `/abc /`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, text, [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
				]]
			]
		]);
	});

	test('DSGL, When nothing after me, Divide -> Chars', async () => {
		const text = `$/abc /`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 7, 1, text, [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, `/`]
				]]
			]
		]);
	});

	test('DSGL, When node after me not starts with dollar, Divide -> Chars', async () => {
		const text = `$/abc /abc/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 12, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 12, 1, text, [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, `/`],
					[TokenId.Chars, 7, 10, 1, 'abc'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 10, 12, 1, `/$`]
				]]
			]
		]);
	});
});
