import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Dollar Slashy GString Quotation End Mark', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, DollarSlashyGStringQuotationEndMark -> SlashyGStringQuotationMark + Chars', async () => {
		const text = '/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 2, 1, '/$', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 2, 1, '$']
				]]
			]
		]);
	});

	test('NSL, DollarSlashyGStringQuotationEndMark -> Divide + Identifier', async () => {
		const text = 'a/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.Identifier, 0, 1, 1, 'a'],
				[TokenId.Divide, 1, 2, 1, '/'],
				[TokenId.Identifier, 2, 3, 1, '$'],
			]
		]);
	});

	test('SL, DollarSlashyGStringQuotationEndMark -> Chars', async () => {
		const text = `'/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `'/$`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 3, 1, '/$']
				]]
			]
		]);
	});

	test('GL, DollarSlashyGStringQuotationEndMark -> Chars + GStringInterpolation', async () => {
		const text = '"/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '"/$', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Chars, 1, 2, 1, '/'],
					[TokenId.GStringInterpolation, 2, 3, 1, '$', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$']
					]]
				]]
			]
		]);
	});

	test('GL, DollarSlashyGStringQuotationEndMark + Keyword -> Chars + GStringInterpolation', async () => {
		const text = '"/$private';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.GStringLiteral, 0, 10, 1, '"/$private', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Chars, 1, 2, 1, '/'],
					[TokenId.GStringInterpolation, 2, 10, 1, '$private', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$'],
						[TokenId.Identifier, 3, 10, 1, 'private']
					]]
				]]
			]
		]);
	});

	test('GL, DollarSlashyGStringQuotationEndMark + Identifier -> Chars + GStringInterpolation + GStringInterpolation', async () => {
		const text = '"/$$private';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.GStringLiteral, 0, 11, 1, '"/$$private', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Chars, 1, 2, 1, '/'],
					[TokenId.GStringInterpolation, 2, 3, 1, '$', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$']
					]],
					[TokenId.GStringInterpolation, 3, 11, 1, '$private', [
						[TokenId.GStringInterpolationStartMark, 3, 4, 1, '$'],
						[TokenId.Identifier, 4, 11, 1, 'private']
					]]
				]]
			]
		]);
	});

	test('GL, DollarSlashyGStringQuotationEndMark + LBrace -> Chars + GStringInterpolation', async () => {
		const text = '"/\${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.GStringLiteral, 0, 4, 1, '"/\${', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.Chars, 1, 2, 1, '/'],
					[TokenId.GStringInterpolation, 2, 4, 1, '\${', [
						[TokenId.GStringInterpolationLBraceStartMark, 2, 4, 1, '\${']
					]]
				]]
			]
		]);
	});

	test('SGL, DollarSlashyGStringQuotationEndMark -> Chars + SlashyGStringQuotationMark + Identifier', async () => {
		const text = '/a/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 3, 1, '/a/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 2, 1, 'a'],
					[TokenId.SlashyGStringQuotationMark, 2, 3, 1, '/']
				]],
				[TokenId.Identifier, 3, 4, 1, '$']
			]
		]);
	});
});
