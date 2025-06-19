import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Dollar Escape', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, Dollar Escape -> Undetermined Chars + Identifier', async () => {
		const text = '\\$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 2, 1, '$']
			]
		]);
	});

	test('NSL, Dollar Escape + Divide -> Undetermined Chars + DollarSlashyGStringQuotationStartMark', async () => {
		const text = '\\$/';
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
		const text = '\\$/$';
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
		const text = '\\$/$private';
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
		const text = '\\$/$$private';
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
		const text = '\\$/=';
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
		const text = '\\$//';
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
		const text = '\\$/*';
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
		const text = '\\$ab';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 4, 1, '$ab']
			]
		]);
	});

	test('SGL, Dollar Escape + DollarSlashyGStringQuotationStartMark -> Undetermined Chars + Chars + SlashyGStringQuotationMark', async () => {
		const text = '/\\$$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 5, 1, '/\\$$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.Chars, 3, 4, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 4, 5, 1, '/']
				]]
			]
		]);
	});

	test('SGL, Dollar Escape + DollarSlashyGStringDollarEscape -> Undetermined Chars + Chars + Chars + Chars', async () => {
		const text = '/\\$$$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 5, 1, '/\\$$$', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.Chars, 3, 4, 1, '$'],
					[TokenId.Chars, 4, 5, 1, '$']
				]]
			]
		]);
	});

	test('SGL, Dollar Escape + GStringInterpolationLBraceStartMark -> Undetermined Chars + Chars + GStringInterpolationLBraceStartMark', async () => {
		const text = '/\\$${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 5, 1, '/\\$${', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.GStringInterpolation, 3, 5, 1, '${', [
						[TokenId.GStringInterpolationLBraceStartMark, 3, 5, 1, '${']
					]]
				]]
			]
		]);
	});

	test('SGL, Dollar Escape + LBrace -> Undetermined Chars + GStringInterpolationLBraceStartMark', async () => {
		const text = '/\\${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/\\${', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.GStringInterpolation, 2, 4, 1, '${', [
						[TokenId.GStringInterpolationLBraceStartMark, 2, 4, 1, '${']
					]]
				]]
			]
		]);
	});

	test('SGL, Dollar Escape + Identifier -> Undetermined Chars + GStringInterpolation', async () => {
		const text = '/\\$abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/\\$abc', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.GStringInterpolation, 2, 6, 1, '$abc', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$'],
						[TokenId.Identifier, 3, 6, 1, 'abc']
					]]
				]]
			]
		]);
	});

	test('SGL, Dollar Escape + Identifier -> Undetermined Chars + Chars + GStringInterpolation', async () => {
		const text = '/\\$$abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 7, 1, '/\\$$abc', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.GStringInterpolation, 3, 7, 1, '$abc', [
						[TokenId.GStringInterpolationStartMark, 3, 4, 1, '$'],
						[TokenId.Identifier, 4, 7, 1, 'abc']
					]]
				]]
			]
		]);
	});

	test('SGL, Dollar Escape + DollarSlashyGStringQuotationEndMark -> Undetermined Chars + Chars + SlashyGStringQuotationMark + Identifier', async () => {
		const text = '/\\$/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/\\$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 3, 4, 1, '/']
				]],
				[TokenId.Identifier, 4, 5, 1, '$']
			]
		]);
	});

	test('SGL, Dollar Escape + Divide -> Undetermined Chars + Chars + SlashyGStringQuotationMark', async () => {
		const text = '/\\$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/\\$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 3, 4, 1, '/']
				]]
			]
		]);
	});

	test('SGL, Dollar Escape + DivideAssign -> Undetermined Chars + Chars + SlashyGStringQuotationMark + Assign', async () => {
		const text = '/\\$/=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/\\$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 3, 4, 1, '/']
				]],
				[TokenId.Assign, 4, 5, 1, '=']
			]
		]);
	});

	test('SGL, Dollar Escape + SLCommentStartMark -> Undetermined Chars + Chars + SlashyGStringQuotationMark + Divide', async () => {
		const text = '/\\$//';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/\\$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 3, 4, 1, '/']
				]],
				[TokenId.Divide, 4, 5, 1, '/']
			]
		]);
	});

	test('SGL, Dollar Escape + MLCommentStartMark -> Undetermined Chars + Chars + SlashyGStringQuotationMark + Multiple', async () => {
		const text = '/\\$/*';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 4, 1, '/\\$/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.Chars, 2, 3, 1, '$'],
					[TokenId.SlashyGStringQuotationMark, 3, 4, 1, '/']
				]],
				[TokenId.Multiple, 4, 5, 1, '*']
			]
		]);
	});

	test('SGL, Dollar Escape + Keyword -> Undetermined Chars + GStringInterpolation', async () => {
		const text = '/\\$private';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 10, 1, '/\\$private', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.UndeterminedChars, 1, 2, 1, '\\'],
					[TokenId.GStringInterpolation, 2, 10, 1, '$private', [
						[TokenId.GStringInterpolationStartMark, 2, 3, 1, '$'],
						[TokenId.Identifier, 3, 10, 1, 'private']
					]]
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + DollarSlashyGStringQuotationStartMark -> Undetermined Chars + DollarSlashyGStringDollarEscape + Chars', async () => {
		const text = '$/\\$$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\$$/', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringDollarEscape, 3, 5, 1, '$$'],
					[TokenId.Chars, 5, 6, 1, '/']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + DollarSlashyGStringDollarEscape -> Undetermined Chars + DollarSlashyGStringDollarEscape + Chars', async () => {
		const text = '$/\\$$$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\$$$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringDollarEscape, 3, 5, 1, '$$'],
					[TokenId.Chars, 5, 6, 1, '$']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + DollarSlashyGStringDollarEscape + Keyword -> Undetermined Chars + DollarSlashyGStringDollarEscape + Chars + Chars', async () => {
		const text = '$/\\$$$private';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 13, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 13, 1, '$/\\$$$private', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringDollarEscape, 3, 5, 1, '$$'],
					[TokenId.Chars, 5, 6, 1, '$'],
					[TokenId.Chars, 6, 13, 1, 'private']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + GStringInterpolationLBraceStartMark -> Undetermined Chars + DollarSlashyGStringDollarEscape + Chars', async () => {
		const text = '$/\\$${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\$${', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringDollarEscape, 3, 5, 1, '$$'],
					[TokenId.Chars, 5, 6, 1, '{']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + Divide -> Undetermined Chars + DollarSlashyGStringSlashEscape', async () => {
		const text = '$/\\$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 5, 1, '$/\\$/', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringSlashEscape, 3, 5, 1, '$/']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + DivideAssign -> Undetermined Chars + DollarSlashyGStringSlashEscape + Chars', async () => {
		const text = '$/\\$/=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\$/=', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringSlashEscape, 3, 5, 1, '$/'],
					[TokenId.Chars, 5, 6, 1, '=']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + SLCommentStartMark -> Undetermined Chars + DollarSlashyGStringSlashEscape + Chars', async () => {
		const text = '$/\\$//';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\$//', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringSlashEscape, 3, 5, 1, '$/'],
					[TokenId.Chars, 5, 6, 1, '/']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + MLCommentStartMark -> Undetermined Chars + DollarSlashyGStringSlashEscape + Chars', async () => {
		const text = '$/\\$/*';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\$/*', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringSlashEscape, 3, 5, 1, '$/'],
					[TokenId.Chars, 5, 6, 1, '*']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + DollarSlashyGStringQuotationEndMark -> Undetermined Chars + DollarSlashyGStringSlashEscape + Chars', async () => {
		const text = '$/\\$/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 6, 1, '$/\\$/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.DollarSlashyGStringSlashEscape, 3, 5, 1, '$/'],
					[TokenId.Chars, 5, 6, 1, '$']
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + LBrace -> Undetermined Chars + DollarSlashyGStringSlashEscape + GStringInterpolation', async () => {
		const text = '$/\\${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 5, 1, '$/\\${', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.GStringInterpolation, 3, 5, 1, '${', [
						[TokenId.GStringInterpolationLBraceStartMark, 3, 5, 1, '${']
					]]
				]]
			]
		]);
	});

	test('DSGL, Dollar Escape + Keyword -> Undetermined Chars + GStringInterpolation', async () => {
		const text = '$/\\$private';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 11, 1, '$/\\$private', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
					[TokenId.GStringInterpolation, 3, 11, 1, '$private', [
						[TokenId.GStringInterpolationStartMark, 3, 4, 1, '$'],
						[TokenId.Identifier, 4, 11, 1, 'private']
					]]
				]]
			]
		]);
	});
});
