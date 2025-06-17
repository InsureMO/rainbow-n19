import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('String literal test, for all rehydrations', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// divide: /
	{
		test('Divide -> SlashyGStringQuotationMark, when is first node, NSL', async () => {
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

		test('Divide -> SlashyGStringQuotationMark, when after operator, NSL', async () => {
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

		test('Divide -> SlashyGStringQuotationMark, when after dot, NSL', async () => {
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

		test('Divide -> SlashyGStringQuotationMark, when nothing before me at same line, NSL', async () => {
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

		test('Divide -> SlashyGStringQuotationMark, SGL', async () => {
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

		test('Divide -> Chars, when nothing after me, DSGL', async () => {
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

		test('Divide -> Chars, when node after me not starts with dollar, DSGL', async () => {
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
	}

	// divide assign: /=
	{
		test('DivideAssign -> SlashyGStringQuotationMark + Chars, when is first node, NSL', async () => {
			const text = `/=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 2, 1, `/=`, [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 2, 1, '=']
					]]
				]
			]);
		});

		test('DivideAssign -> SlashyGStringQuotationMark + Chars, when after operator, NSL', async () => {
			const text = `- /=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
					[TokenId.Subtract, 0, 1, 1, '-'],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.SlashyGStringLiteral, 2, 4, 1, `/=`, [
						[TokenId.SlashyGStringQuotationMark, 2, 3, 1, `/`],
						[TokenId.Chars, 3, 4, 1, '=']
					]]
				]
			]);
		});

		test('DivideAssign -> SlashyGStringQuotationMark, when after dot, NSL', async () => {
			const text = `. /=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
					[TokenId.Dot, 0, 1, 1, '.'],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.SlashyGStringLiteral, 2, 4, 1, `/=`, [
						[TokenId.SlashyGStringQuotationMark, 2, 3, 1, `/`],
						[TokenId.Chars, 3, 4, 1, '=']
					]]
				]
			]);
		});

		test('DivideAssign -> SlashyGStringQuotationMark + Chars, when nothing before me at same line, NSL', async () => {
			const text = `1\n/=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
					[TokenId.IntegralLiteral, 0, 1, 1, '1', [
						[TokenId.NumericBasePart, 0, 1, 1, '1']
					]],
					[TokenId.NewLine, 1, 2, 1, '\n'],
					[TokenId.SlashyGStringLiteral, 2, 4, 2, `/=`, [
						[TokenId.SlashyGStringQuotationMark, 2, 3, 2, `/`],
						[TokenId.Chars, 3, 4, 2, '=']
					]]
				]
			]);
		});

		test('DivideAssign -> SlashyGStringQuotationMark + Assign, SGL', async () => {
			const text = `/abc /=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Assign, 6, 7, 1, '=']
				]
			]);
		});

		test('DivideAssign + Bitnot -> SlashyGStringQuotationMark + RegexFind, SGL', async () => {
			const text = `/abc /=~`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.RegexFind, 6, 8, 1, '=~']
				]
			]);
		});

		test('DivideAssign + RegexFind -> SlashyGStringQuotationMark + RegexMatch, SGL', async () => {
			const text = `/abc /==~`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.RegexMatch, 6, 9, 1, '==~']
				]
			]);
		});

		test('DivideAssign + RegexMatch -> SlashyGStringQuotationMark + Identical + Bitnot, SGL', async () => {
			const text = `/abc /===~`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Identical, 6, 9, 1, '==='],
					[TokenId.Bitnot, 9, 10, 1, '~']
				]
			]);
		});

		test('DivideAssign + Assign -> SlashyGStringQuotationMark + Equal, SGL', async () => {
			const text = `/abc /==`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Equal, 6, 8, 1, '==']
				]
			]);
		});

		test('DivideAssign + Equal -> SlashyGStringQuotationMark + Identical, SGL', async () => {
			const text = `/abc /===`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Identical, 6, 9, 1, '===']
				]
			]);
		});

		test('DivideAssign + Identical -> SlashyGStringQuotationMark + Identical + Assign, SGL', async () => {
			const text = `/abc /====`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Identical, 6, 9, 1, '==='],
					[TokenId.Assign, 9, 10, 1, '=']
				]
			]);
		});

		test('DivideAssign -> Chars, SL/GL/DSGL', async () => {
			const text = `'/='"/="$//=/$`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 14, 0, text, [
					[TokenId.StringLiteral, 0, 4, 1, `'/='`, [
						[TokenId.StringQuotationMark, 0, 1, 1, `'`],
						[TokenId.Chars, 1, 3, 1, '/='],
						[TokenId.StringQuotationMark, 3, 4, 1, `'`]
					]],
					[TokenId.GStringLiteral, 4, 8, 1, '"/="', [
						[TokenId.GStringQuotationMark, 4, 5, 1, '"'],
						[TokenId.Chars, 5, 7, 1, '/='],
						[TokenId.GStringQuotationMark, 7, 8, 1, '"']
					]],
					[TokenId.DollarSlashyGStringLiteral, 8, 14, 1, '$//=/$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 8, 10, 1, '$/'],
						[TokenId.Chars, 10, 12, 1, '/='],
						[TokenId.DollarSlashyGStringQuotationEndMark, 12, 14, 1, '/$']
					]]
				]
			]);
		});
	}

	// sl comment start mark: //
	{
		test('SLCommentStartMark -> Chars, SL/GL', async () => {
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

		test('SLCommentStartMark -> SlashyGStringQuotationMark + Divide, SGL', async () => {
			const text = `/abc //`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Divide, 6, 7, 1, '/']
				]
			]);
		});

		test('SLCommentStartMark + Divide -> SlashyGStringQuotationMark + SLCommentStartMark, SGL', async () => {
			const text = `/abc ///`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.SingleLineComment, 6, 8, 1, '//', [
						[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//']
					]]
				]
			]);
		});

		test('SLCommentStartMark + DollarSlashyGStringQuotationEndMark -> SlashyGStringQuotationMark + SLCommentStartMark + Chars, SGL', async () => {
			const text = `/abc ///$`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.SingleLineComment, 6, 9, 1, '//$', [
						[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
						[TokenId.Chars, 8, 9, 1, '$']
					]]
				]
			]);
		});

		test('SLCommentStartMark + DivideAssign -> SlashyGStringQuotationMark + SLCommentStartMark + Chars, SGL', async () => {
			const text = `/abc ///=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.SingleLineComment, 6, 9, 1, '//=', [
						[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
						[TokenId.Chars, 8, 9, 1, '=']
					]]
				]
			]);
		});

		test('SLCommentStartMark + SLCommentStartMark -> SlashyGStringQuotationMark + SLCommentStartMark + Chars, SGL', async () => {
			const text = `/abc ////`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.SingleLineComment, 6, 9, 1, '///', [
						[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
						[TokenId.Chars, 8, 9, 1, '/']
					]]
				]
			]);
		});

		test('SLCommentStartMark + MultipleLinesCommentStartMark -> SlashyGStringQuotationMark + SLCommentStartMark + Chars, SGL', async () => {
			const text = `/abc ///*`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.SingleLineComment, 6, 9, 1, '//*', [
						[TokenId.SingleLineCommentStartMark, 6, 8, 1, '//'],
						[TokenId.Chars, 8, 9, 1, '*']
					]]
				]
			]);
		});

		test('SLCommentStartMark + SpreadDot -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars, SGL', async () => {
			const text = `/abc //*.`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleLinesComment, 6, 9, 1, '/*.', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
						[TokenId.Chars, 8, 9, 1, '.']
					]]
				]
			]);
		});

		test('SLCommentStartMark + Power -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars, SGL', async () => {
			const text = `/abc //**`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleLinesComment, 6, 9, 1, '/**', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
						[TokenId.Chars, 8, 9, 1, '*']
					]]
				]
			]);
		});

		test('SLCommentStartMark + PowerAssign -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars, SGL', async () => {
			const text = `/abc //**=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleLinesComment, 6, 10, 1, '/**=', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
						[TokenId.Chars, 8, 10, 1, '*=']
					]]
				]
			]);
		});

		test('SLCommentStartMark + Multiple -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark, SGL', async () => {
			const text = `/abc //*`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleLinesComment, 6, 8, 1, '/*', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*']
					]]
				]
			]);
		});

		test('SLCommentStartMark + MultipleAssign -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars, SGL', async () => {
			const text = `/abc //*=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleLinesComment, 6, 9, 1, '/*=', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
						[TokenId.Chars, 8, 9, 1, '=']
					]]
				]
			]);
		});

		test('SLCommentStartMark + MultipleLinesCommentEndMark -> SlashyGStringQuotationMark + MultipleLinesCommentStartMark + Chars, SGL', async () => {
			const text = `/abc //*/`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleLinesComment, 6, 9, 1, '/*/', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
						[TokenId.Chars, 8, 9, 1, '/']
					]]
				]
			]);
		});

		test('SLCommentStartMark + Assign -> SlashyGStringQuotationMark + DivideAssign, SGL', async () => {
			const text = `/abc //=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.DivideAssign, 6, 8, 1, '/=']
				]
			]);
		});

		test('SLCommentStartMark + Equal -> SlashyGStringQuotationMark + DivideAssign + Assign, SGL', async () => {
			const text = `/abc //==`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.DivideAssign, 6, 8, 1, '/='],
					[TokenId.Assign, 8, 9, 1, '=']
				]
			]);
		});

		test('SLCommentStartMark + Identical -> SlashyGStringQuotationMark + DivideAssign + Equal, SGL', async () => {
			const text = `/abc //===`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.DivideAssign, 6, 8, 1, '/='],
					[TokenId.Equal, 8, 10, 1, '==']
				]
			]);
		});

		test('SLCommentStartMark + RegexFind -> SlashyGStringQuotationMark + DivideAssign + Bitnot, SGL', async () => {
			const text = `/abc //=~`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.DivideAssign, 6, 8, 1, '/='],
					[TokenId.Bitnot, 8, 9, 1, '~']
				]
			]);
		});

		test('SLCommentStartMark + RegexMatch -> SlashyGStringQuotationMark + DivideAssign + RegexFind, SGL', async () => {
			const text = `/abc //==~`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.DivideAssign, 6, 8, 1, '/='],
					[TokenId.RegexFind, 8, 10, 1, '=~']
				]
			]);
		});

		test('SLCommentStartMark + DollarSlashyGStringQuotationStartMark -> Chars + DollarSlashyGStringQuotationEndMark + Divide, DSGL', async () => {
			const text = `$/abc //$/`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc //$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
						[TokenId.Chars, 2, 5, 1, 'abc'],
						[TokenId.Whitespaces, 5, 6, 1, ' '],
						[TokenId.Chars, 6, 7, 1, '/'],
						[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, `/$`]
					]],
					[TokenId.Divide, 9, 10, 1, '/']
				]
			]);
		});

		test('SLCommentStartMark + DollarSlashyGStringDollarEscape -> Chars + DollarSlashyGStringQuotationEndMark + Identifier, DSGL', async () => {
			const text = `$/abc //$$`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc //$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
						[TokenId.Chars, 2, 5, 1, 'abc'],
						[TokenId.Whitespaces, 5, 6, 1, ' '],
						[TokenId.Chars, 6, 7, 1, '/'],
						[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, `/$`]
					]],
					[TokenId.Identifier, 9, 10, 1, '$']
				]
			]);
		});

		test('SLCommentStartMark + GStringInterpolationLBraceStartMark -> Chars + DollarSlashyGStringQuotationEndMark + LBrace, DSGL', async () => {
			const text = `$/abc //\${`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc //$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
						[TokenId.Chars, 2, 5, 1, 'abc'],
						[TokenId.Whitespaces, 5, 6, 1, ' '],
						[TokenId.Chars, 6, 7, 1, '/'],
						[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, `/$`]
					]],
					[TokenId.CodeBlock, 9, 10, 1, '{', [
						[TokenId.LBrace, 9, 10, 1, '{']
					]]
				]
			]);
		});
	}

	// ml comment start mark: /*
	{
		test('MLCommentStartMark + Dot -> SlashyGStringQuotationMark + SpreadDot, SGL', async () => {
			const text = `/abc /*.`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.SpreadDot, 6, 8, 1, '*.']
				]
			]);
		});

		test('MLCommentStartMark + NumericBasePart (starts with .) -> SlashyGStringQuotationMark + SpreadDot + NumericBasePart, SGL', async () => {
			const text = `/abc /*.123e+2g`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 15, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.SpreadDot, 6, 8, 1, '*.'],
					[TokenId.DecimalLiteral, 8, 15, 1, '123e+2g', [
						[TokenId.NumericBasePart, 8, 11, 1, '123'],
						[TokenId.DecimalExponentMark, 11, 12, 1, 'e'],
						[TokenId.NumericSignPart, 12, 13, 1, '+'],
						[TokenId.NumericBasePart, 13, 14, 1, '2'],
						[TokenId.NumericSuffixPart, 14, 15, 1, 'g']
					]]
				]
			]);
		});

		test('MLCommentStartMark + NumericBasePart (not starts with .) -> SlashyGStringQuotationMark + Multiple + NumericBasePart, SGL', async () => {
			const text = `/abc /*1123e+2g`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 15, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Multiple, 6, 7, 1, '*'],
					[TokenId.DecimalLiteral, 7, 15, 1, '1123e+2g', [
						[TokenId.NumericBasePart, 7, 11, 1, '1123'],
						[TokenId.DecimalExponentMark, 11, 12, 1, 'e'],
						[TokenId.NumericSignPart, 12, 13, 1, '+'],
						[TokenId.NumericBasePart, 13, 14, 1, '2'],
						[TokenId.NumericSuffixPart, 14, 15, 1, 'g']
					]]
				]
			]);
		});

		test('MLCommentStartMark + SpreadDot -> SlashyGStringQuotationMark + Power + Dot, SGL', async () => {
			const text = `/abc /**.`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Power, 6, 8, 1, '**'],
					[TokenId.Dot, 8, 9, 1, '.']
				]
			]);
		});

		test('MLCommentStartMark + Power -> SlashyGStringQuotationMark + Power + Multiple, SGL', async () => {
			const text = `/abc /***`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Power, 6, 8, 1, '**'],
					[TokenId.Multiple, 8, 9, 1, '*']
				]
			]);
		});

		test('MLCommentStartMark + PowerAssign -> SlashyGStringQuotationMark + Power + MultipleAssign, SGL', async () => {
			const text = `/abc /***=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Power, 6, 8, 1, '**'],
					[TokenId.MultipleAssign, 8, 10, 1, '*=']
				]
			]);
		});

		test('MLCommentStartMark + Multiple -> SlashyGStringQuotationMark + Power, SGL', async () => {
			const text = `/abc /**`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Power, 6, 8, 1, '**']
				]
			]);
		});

		test('MLCommentStartMark + MLCommentEndMark -> SlashyGStringQuotationMark + Power + SlashyGStringQuotationMark, SGL', async () => {
			const text = `/abc /**/`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.Power, 6, 8, 1, '**'],
					[TokenId.SlashyGStringLiteral, 8, 9, 1, '/', [
						[TokenId.SlashyGStringQuotationMark, 8, 9, 1, '/']
					]]
				]
			]);
		});

		test('MLCommentStartMark + MultipleAssign -> SlashyGStringQuotationMark + PowerAssign, SGL', async () => {
			const text = `/abc /**=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.PowerAssign, 6, 9, 1, '**=']
				]
			]);
		});

		test('MLCommentStartMark + Assign -> SlashyGStringQuotationMark + MultipleAssign, SGL', async () => {
			const text = `/abc /*=`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleAssign, 6, 8, 1, '*=']
				]
			]);
		});

		test('MLCommentStartMark + Equal -> SlashyGStringQuotationMark + MultipleAssign + Assign, SGL', async () => {
			const text = `/abc /*==`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleAssign, 6, 8, 1, '*='],
					[TokenId.Assign, 8, 9, 1, '=']
				]
			]);
		});

		test('MLCommentStartMark + Identical -> SlashyGStringQuotationMark + MultipleAssign + Equal, SGL', async () => {
			const text = `/abc /*===`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleAssign, 6, 8, 1, '*='],
					[TokenId.Equal, 8, 10, 1, '==']
				]
			]);
		});

		test('MLCommentStartMark + RegexFind -> SlashyGStringQuotationMark + MultipleAssign + Bitnot, SGL', async () => {
			const text = `/abc /*=~`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleAssign, 6, 8, 1, '*='],
					[TokenId.Bitnot, 8, 9, 1, '~']
				]
			]);
		});

		test('MLCommentStartMark + RegexMatch -> SlashyGStringQuotationMark + MultipleAssign + RegexFind, SGL', async () => {
			const text = `/abc /*==~`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, `/`],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.SlashyGStringQuotationMark, 5, 6, 1, `/`]
					]],
					[TokenId.MultipleAssign, 6, 8, 1, '*='],
					[TokenId.RegexFind, 8, 10, 1, '=~']
				]
			]);
		});

		test('MLCommentStartMark -> Chars, SL/GL/DSGL', async () => {
			const text = `'/*'"/*"$//*/$`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 14, 0, text, [
					[TokenId.StringLiteral, 0, 4, 1, `'/*'`, [
						[TokenId.StringQuotationMark, 0, 1, 1, `'`],
						[TokenId.Chars, 1, 3, 1, '/*'],
						[TokenId.StringQuotationMark, 3, 4, 1, `'`]
					]],
					[TokenId.GStringLiteral, 4, 8, 1, '"/*"', [
						[TokenId.GStringQuotationMark, 4, 5, 1, '"'],
						[TokenId.Chars, 5, 7, 1, '/*'],
						[TokenId.GStringQuotationMark, 7, 8, 1, '"']
					]],
					[TokenId.DollarSlashyGStringLiteral, 8, 14, 1, '$//*/$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 8, 10, 1, '$/'],
						[TokenId.Chars, 10, 12, 1, '/*'],
						[TokenId.DollarSlashyGStringQuotationEndMark, 12, 14, 1, '/$']
					]]
				]
			]);
		});
	}

	// ml comment end mark: */
	{
		test('MLCommentEndMark -> Chars, SL/GL', async () => {
			const text = `'*/'"*/"`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
					[TokenId.StringLiteral, 0, 4, 1, `'*/'`, [
						[TokenId.StringQuotationMark, 0, 1, 1, `'`],
						[TokenId.Chars, 1, 3, 1, '*/'],
						[TokenId.StringQuotationMark, 3, 4, 1, `'`]
					]],
					[TokenId.GStringLiteral, 4, 8, 1, '"*/"', [
						[TokenId.GStringQuotationMark, 4, 5, 1, '"'],
						[TokenId.Chars, 5, 7, 1, '*/'],
						[TokenId.GStringQuotationMark, 7, 8, 1, '"']
					]]
				]
			]);
		});

		test('MLCommentEndMark -> Chars + SlashyGStringQuotationMark, SGL', async () => {
			const text = `/abc */`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
					[TokenId.SlashyGStringLiteral, 0, 7, 1, '/abc */', [
						[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
						[TokenId.Chars, 1, 4, 1, 'abc'],
						[TokenId.Whitespaces, 4, 5, 1, ' '],
						[TokenId.Chars, 5, 6, 1, '*'],
						[TokenId.SlashyGStringQuotationMark, 6, 7, 1, '/'],
					]],
				]
			]);
		});

		test('MLCommentEndMark + DollarSlashyGStringQuotationStartMark -> Chars + DollarSlashyGStringQuotationEndMark + Divide, DSGL', async () => {
			const text = `$/abc */$/`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc */$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
						[TokenId.Chars, 2, 5, 1, 'abc'],
						[TokenId.Whitespaces, 5, 6, 1, ' '],
						[TokenId.Chars, 6, 7, 1, '*'],
						[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, `/$`]
					]],
					[TokenId.Divide, 9, 10, 1, '/']
				]
			]);
		});

		test('MLCommentEndMark + DollarSlashyGStringDollarEscape -> Chars + DollarSlashyGStringQuotationEndMark + Identifier, DSGL', async () => {
			const text = `$/abc */$$`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc */$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
						[TokenId.Chars, 2, 5, 1, 'abc'],
						[TokenId.Whitespaces, 5, 6, 1, ' '],
						[TokenId.Chars, 6, 7, 1, '*'],
						[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, `/$`]
					]],
					[TokenId.Identifier, 9, 10, 1, '$']
				]
			]);
		});

		test('MLCommentEndMark + GStringInterpolationLBraceStartMark -> Chars + DollarSlashyGStringQuotationEndMark + LBrace, DSGL', async () => {
			const text = `$/abc */\${`;
			const ast = GroovyAstBuilder.ast(text);
			AstChecker.check(ast, [
				TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
					[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc */$', [
						[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, `$/`],
						[TokenId.Chars, 2, 5, 1, 'abc'],
						[TokenId.Whitespaces, 5, 6, 1, ' '],
						[TokenId.Chars, 6, 7, 1, '*'],
						[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, `/$`]
					]],
					[TokenId.CodeBlock, 9, 10, 1, '{', [
						[TokenId.LBrace, 9, 10, 1, '{']
					]]
				]
			]);
		});
	}
});
