import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: Dollar Slashy GString Dollar Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, DollarSlashyGStringDollarEscape -> Identifier', async () => {
		const text = '$$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.Identifier, 0, 2, 1, '$$']
			]
		]);
	});

	test('NSL, DollarSlashyGStringDollarEscape + Identifier -> Identifier', async () => {
		const text = '$$abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.Identifier, 0, 5, 1, '$$abc']
			]
		]);
	});

	test('SL, DollarSlashyGStringDollarEscape -> Chars', async () => {
		const text = `'$$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `'$$`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 3, 1, '$$']
				]]
			]
		]);
	});

	test('GL, DollarSlashyGStringDollarEscape -> GStringInterpolation + GStringInterpolation', async () => {
		const text = '"$$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.GStringLiteral, 0, 3, 1, '"$$', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.GStringInterpolation, 1, 2, 1, '$', [
						[TokenId.GStringInterpolationStartMark, 1, 2, 1, '$']
					]],
					[TokenId.GStringInterpolation, 2, 3, 1, '$', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$']
					]]
				]]
			]
		]);
	});

	test('GL, DollarSlashyGStringDollarEscape + Keyword -> GStringInterpolation + GStringInterpolation', async () => {
		const text = '"$$private';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.GStringLiteral, 0, 10, 1, '"$$private', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.GStringInterpolation, 1, 2, 1, '$', [
						[TokenId.GStringInterpolationStartMark, 1, 2, 1, '$']
					]],
					[TokenId.GStringInterpolation, 2, 10, 1, '$private', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$'],
						[TokenId.Identifier, 3, 10, 1, 'private']
					]]
				]]
			]
		]);
	});

	test('SGL, DollarSlashyGStringDollarEscape -> Chars + Chars', async () => {
		const text = '/$$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 3, 1, '/$$', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 2, 1, '$'],
					[TokenId.Chars, 2, 3, 1, '$']
				]]
			]
		]);
	});

	test('SGL, DollarSlashyGStringDollarEscape + Keyword -> Chars + GStringInterpolation', async () => {
		const text = '/$$private';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 10, 1, '/$$private', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 2, 1, '$'],
					[TokenId.GStringInterpolation, 2, 10, 1, '$private', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$'],
						[TokenId.Identifier, 3, 10, 1, 'private']
					]]
				]]
			]
		]);
	});

	test('SGL, DollarSlashyGStringDollarEscape + LBrace -> Chars + GStringInterpolation', async () => {
		const text = '/$\${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/$\${', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 2, 1, '$'],
					[TokenId.GStringInterpolation, 2, 4, 1, '\${', [
						[TokenId.GStringInterpolationLBraceStartMark, 2, 4, 1, '\${']
					]]
				]]
			]
		]);
	});
});