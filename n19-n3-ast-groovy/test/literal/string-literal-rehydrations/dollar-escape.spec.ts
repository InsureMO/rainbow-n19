import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Dollar Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, Dollar Escape -> Undetermined Chars + Identifier', async () => {
		const text = `\\$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 2, 1, '$']
			]
		]);
	});

	test('NSL, Dollar Escape + Divide -> Undetermined Chars + DollarSlashyGStringQuotationStartMark', async () => {
		const text = `\\$/`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DollarSlashyGStringLiteral, 1, 3, 1, '$/', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 1, 3, 1, '$/']
				]]
			]
		]);
	});

	test('NSL, Dollar Escape + DollarSlashyGStringQuotationEndMark -> Undetermined Chars + DollarSlashyGStringQuotationStartMark + Chars', async () => {
		const text = `\\$/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DollarSlashyGStringLiteral, 1, 4, 1, '$/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 1, 3, 1, '$/'],
					[TokenId.Chars, 3, 4, 1, '$']
				]]
			]
		]);
	});

	test('NSL, Dollar Escape + DollarSlashyGStringQuotationEndMark + Keyword -> Undetermined Chars + DollarSlashyGStringQuotationStartMark + GStringInterpolation', async () => {
		const text = `\\$/$private`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DollarSlashyGStringLiteral, 1, 11, 1, '$/$private', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 1, 3, 1, '$/'],
					[TokenId.GStringInterpolation, 3, 11, 1, '$private', [
						[TokenId.GStringInterpolationStartMark, 3, 4, 1, '$'],
						[TokenId.Identifier, 4, 11, 1, 'private']
					]]
				]]
			]
		]);
	});

	test('NSL, Dollar Escape + DollarSlashyGStringQuotationEndMark + Keyword -> Undetermined Chars + DollarSlashyGStringQuotationStartMark + DollarSlashyGStringDollarEscape + Chars', async () => {
		const text = `\\$/$$private`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 12, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DollarSlashyGStringLiteral, 1, 12, 1, '$/$$private', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 1, 3, 1, '$/'],
					[TokenId.DollarSlashyGStringDollarEscape, 3, 5, 1, '$$'],
					[TokenId.Chars, 5, 12, 1, 'private']
				]]
			]
		]);
	});

	test('NSL, Dollar Escape + DivideAssign -> Undetermined Chars + DollarSlashyGStringQuotationStartMark + Chars', async () => {
		const text = `\\$/=`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DollarSlashyGStringLiteral, 1, 4, 1, '$/=', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 1, 3, 1, '$/'],
					[TokenId.Chars, 3, 4, 1, '=']
				]]
			]
		]);
	});

	test('NSL, Dollar Escape + SLCommentStartMark -> Undetermined Chars + DollarSlashyGStringQuotationStartMark + Chars', async () => {
		const text = `\\$//`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DollarSlashyGStringLiteral, 1, 4, 1, '$//', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 1, 3, 1, '$/'],
					[TokenId.Chars, 3, 4, 1, '/']
				]]
			]
		]);
	});

	test('NSL, Dollar Escape + MLCommentStartMark -> Undetermined Chars + DollarSlashyGStringQuotationStartMark + Chars', async () => {
		const text = `\\$/*`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.DollarSlashyGStringLiteral, 1, 4, 1, '$/*', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 1, 3, 1, '$/'],
					[TokenId.Chars, 3, 4, 1, '*']
				]]
			]
		]);
	});

	test('NSL, Dollar Escape + Identifier -> Undetermined Chars + Identifier', async () => {
		const text = `\\$ab`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 4, 1, '$ab']
			]
		]);
	});
});
