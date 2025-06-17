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
		test('SLCommentStartMark + DollarSlashyGStringQuotationEndMark -> Chars + DollarSlashyGStringQuotationEndMark + Divide, DSGL', async () => {
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
	}
});