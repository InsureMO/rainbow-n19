import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: SL Comment Start Mark', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// sl comment start mark: //
	test('SL/GL, SLCommentStartMark -> Chars', async () => {
		const text = `'//'"//"`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.StringLiteral, 0, 4, 1, `'//'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 3, 1, '//'],
					[TokenId.StringQuotationMark, 3, 4, 1, `'`]
				]],
				[TokenId.GStringLiteral, 4, 8, 1, '"//"', [
					[TokenId.GStringQuotationMark, 4, 5, 1, '"'],
					[TokenId.Chars, 5, 7, 1, '//'],
					[TokenId.GStringQuotationMark, 7, 8, 1, '"']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark -> SlashyGStringQuotationMark + Divide', async () => {
		const text = '/abc //';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.Divide, 6, 7, 1, '/']
			]
		]);
	});

	test('SGL, SLCommentStartMark + Divide -> SlashyGStringQuotationMark + SLCommentStartMark', async () => {
		const text = '/abc ///';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.SingleLineComment, 6, 8, 1, '//', [
					[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + DollarSlashyGStringQuotationEndMark -> SlashyGStringQuotationMark + SLCommentStartMark + Chars', async () => {
		const text = '/abc ///$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.SingleLineComment, 6, 9, 1, '//$', [
					[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
					[TokenId.Chars, 8, 9, 1, '$']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + DivideAssign -> SlashyGStringQuotationMark + SLCommentStartMark + Chars', async () => {
		const text = '/abc ///=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.SingleLineComment, 6, 9, 1, '//=', [
					[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
					[TokenId.Chars, 8, 9, 1, '=']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + SLCommentStartMark -> SlashyGStringQuotationMark + SLCommentStartMark + Chars', async () => {
		const text = '/abc ////';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.SingleLineComment, 6, 9, 1, '///', [
					[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
					[TokenId.Chars, 8, 9, 1, '/']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + MultipleLinesCommentStartMark -> SlashyGStringQuotationMark + SLCommentStartMark + Chars', async () => {
		const text = '/abc ///*';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.SingleLineComment, 6, 9, 1, '//*', [
					[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
					[TokenId.Chars, 8, 9, 1, '*']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + SpreadDot -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars', async () => {
		const text = '/abc //*.';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.MultipleLinesComment, 6, 9, 1, '/*.', [
					[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
					[TokenId.Chars, 8, 9, 1, '.']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + Power -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars', async () => {
		const text = '/abc //**';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.MultipleLinesComment, 6, 9, 1, '/**', [
					[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
					[TokenId.Chars, 8, 9, 1, '*']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + PowerAssign -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars', async () => {
		const text = '/abc //**=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.MultipleLinesComment, 6, 10, 1, '/**=', [
					[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
					[TokenId.Chars, 8, 10, 1, '*=']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + Multiple -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark', async () => {
		const text = '/abc //*';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.MultipleLinesComment, 6, 8, 1, '/*', [
					[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + MultipleAssign -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars', async () => {
		const text = '/abc //*=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.MultipleLinesComment, 6, 9, 1, '/*=', [
					[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
					[TokenId.Chars, 8, 9, 1, '=']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + MultipleLinesCommentEndMark -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars', async () => {
		const text = '/abc //*/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.MultipleLinesComment, 6, 9, 1, '/*/', [
					[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
					[TokenId.Chars, 8, 9, 1, '/']
				]]
			]
		]);
	});

	test('SGL, SLCommentStartMark + Assign -> SlashyGStringQuotationMark + DivideAssign', async () => {
		const text = '/abc //=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.DivideAssign, 6, 8, 1, '/=']
			]
		]);
	});

	test('SGL, SLCommentStartMark + Equal -> SlashyGStringQuotationMark + DivideAssign + Assign', async () => {
		const text = '/abc //==';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.DivideAssign, 6, 8, 1, '/='],
				[TokenId.Assign, 8, 9, 1, '=']
			]
		]);
	});

	test('SGL, SLCommentStartMark + Identical -> SlashyGStringQuotationMark + DivideAssign + Equal', async () => {
		const text = '/abc //===';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.DivideAssign, 6, 8, 1, '/='],
				[TokenId.Equal, 8, 10, 1, '==']
			]
		]);
	});

	test('SGL, SLCommentStartMark + RegexFind -> SlashyGStringQuotationMark + DivideAssign + Bitnot', async () => {
		const text = '/abc //=~';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.DivideAssign, 6, 8, 1, '/='],
				[TokenId.Bitnot, 8, 9, 1, '~']
			]
		]);
	});

	test('SGL, SLCommentStartMark + RegexMatch -> SlashyGStringQuotationMark + DivideAssign + RegexFind', async () => {
		const text = '/abc //==~';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.DivideAssign, 6, 8, 1, '/='],
				[TokenId.RegexFind, 8, 10, 1, '=~']
			]
		]);
	});

	test('DSGL, SLCommentStartMark + DollarSlashyGStringQuotationStartMark -> Chars + DollarSlashyGStringQuotationEndMark + Divide', async () => {
		const text = '$/abc //$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc //$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, '/'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, '/$']
				]],
				[TokenId.Divide, 9, 10, 1, '/']
			]
		]);
	});

	test('DSGL, SLCommentStartMark + DollarSlashyGStringDollarEscape -> Chars + DollarSlashyGStringQuotationEndMark + Identifier', async () => {
		const text = '$/abc //$$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc //$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, '/'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, '/$']
				]],
				[TokenId.Identifier, 9, 10, 1, '$']
			]
		]);
	});

	test('DSGL, SLCommentStartMark + GStringInterpolationLBraceStartMark -> Chars + DollarSlashyGStringQuotationEndMark + LBrace', async () => {
		const text = '$/abc //\${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc //$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, '/'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, '/$']
				]],
				[TokenId.CodeBlock, 9, 10, 1, '{', [
					[TokenId.LBrace, 9, 10, 1, '{']
				]]
			]
		]);
	});
});
