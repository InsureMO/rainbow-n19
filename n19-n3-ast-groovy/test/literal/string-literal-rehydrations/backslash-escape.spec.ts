import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Backslash Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, Backslash Escape -> Undetermined Chars', async () => {
		const text = '\\\\';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.UndeterminedChars, 0, 2, 1, '\\\\']
			]
		]);
	});

	test('SGL, Backslash Escape -> Undetermined Chars', async () => {
		const text = '/\\\\a/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 5, 1, '/\\\\a/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.Chars, 3, 4, 1, 'a'],
					[TokenId.SlashyGStringQuotationMark, 4, 5, 1, '/']
				]]
			]
		]);
	});

	test('SGL, Backslash Escape + Divide -> Undetermined Chars + Slash Escape', async () => {
		const text = '/\\\\//';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 5, 1, '/\\\\//', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.SlashyGStringSlashEscape, 2, 4, 1, '\\/'],
					[TokenId.SlashyGStringQuotationMark, 4, 5, 1, '/']
				]]
			]
		]);
	});

	test('SGL, Backslash Escape + DollarSlashyGStringQuotationEndMark + Divide -> Undetermined Chars + Slash Escape + Chars + SlashyGStringQuotationMark', async () => {
		const text = '/\\\\/$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/\\\\/$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.SlashyGStringSlashEscape, 2, 4, 1, '\\/'],
					[TokenId.Chars, 4, 5, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]]
			]
		]);
	});
	test('SGL, Backslash Escape + DollarSlashyGStringQuotationEndMark + DivideAssign -> Undetermined Chars + Slash Escape + Chars + SlashyGStringQuotationMark + Assign', async () => {
		const text = '/\\\\/$/=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/\\\\/$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.SlashyGStringSlashEscape, 2, 4, 1, '\\/'],
					[TokenId.Chars, 4, 5, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.Assign, 6, 7, 1, '=']
			]
		]);
	});

	test('SGL, Backslash Escape + DivideAssign -> Undetermined Chars + Slash Escape + Chars', async () => {
		const text = '/\\\\/=/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/\\\\/=/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.SlashyGStringSlashEscape, 2, 4, 1, '\\/'],
					[TokenId.Chars, 4, 5, 1, '='],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]]
			]
		]);
	});

	test('SGL, Backslash Escape + SLCommentStartMark -> Undetermined Chars + Slash Escape + SlashyGStringQuotationMark', async () => {
		const text = '/\\\\///';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 5, 1, '/\\\\//', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.SlashyGStringSlashEscape, 2, 4, 1, '\\/'],
					[TokenId.SlashyGStringQuotationMark, 4, 5, 1, '/']
				]],
				[TokenId.Divide, 5, 6, 1, '/']
			]
		]);
	});

	test('SGL, Backslash Escape + MLCommentStartMark -> Undetermined Chars + Slash Escape + Chars', async () => {
		const text = '/\\\\/*/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/\\\\/*/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.SlashyGStringSlashEscape, 2, 4, 1, '\\/'],
					[TokenId.Chars, 4, 5, 1, '*'],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]]
			]
		]);
	});

	test('DSGL, Backslash Escape -> Undetermined Chars', async () => {
		const text = '$/\\\\/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\\\/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 4, 1, '\\\\'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 4, 6, 1, '/$']
				]]
			]
		]);
	});
});
