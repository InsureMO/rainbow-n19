import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Divide Assign', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// divide assign: /=
	test('NSL, When is first node, DivideAssign -> SlashyGStringQuotationMark + Chars', async () => {
		const text = '/=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 2, 1, '/=', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 2, 1, '=']
				]]
			]
		]);
	});

	test('NSL, When after operator, DivideAssign -> SlashyGStringQuotationMark + Chars', async () => {
		const text = '- /=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.Subtract, 0, 1, 1, '-'],
				[TokenId.Whitespaces, 1, 2, 1, ' '],
				[TokenId.SlashyGStringLiteral, 2, 4, 1, '/=', [
					[TokenId.SlashyGStringQuotationMark, 2, 3, 1, '/'],
					[TokenId.Chars, 3, 4, 1, '=']
				]]
			]
		]);
	});

	test('NSL, When after dot, DivideAssign -> SlashyGStringQuotationMark', async () => {
		const text = '. /=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.Dot, 0, 1, 1, '.'],
				[TokenId.Whitespaces, 1, 2, 1, ' '],
				[TokenId.SlashyGStringLiteral, 2, 4, 1, '/=', [
					[TokenId.SlashyGStringQuotationMark, 2, 3, 1, '/'],
					[TokenId.Chars, 3, 4, 1, '=']
				]]
			]
		]);
	});

	test('NSL, When nothing before me at same line, DivideAssign -> SlashyGStringQuotationMark + Chars', async () => {
		const text = '1\n/=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 4, 0, text, [
				[TokenId.IntegralLiteral, 0, 1, 1, '1', [
					[TokenId.NumericBasePart, 0, 1, 1, '1']
				]],
				[TokenId.NewLine, 1, 2, 1, '\n'],
				[TokenId.SlashyGStringLiteral, 2, 4, 2, '/=', [
					[TokenId.SlashyGStringQuotationMark, 2, 3, 2, '/'],
					[TokenId.Chars, 3, 4, 2, '=']
				]]
			]
		]);
	});

	test('SGL, DivideAssign -> SlashyGStringQuotationMark + Assign', async () => {
		const text = '/abc /=';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.Assign, 6, 7, 1, '=']
			]
		]);
	});

	test('SGL, DivideAssign + Bitnot -> SlashyGStringQuotationMark + RegexFind', async () => {
		const text = '/abc /=~';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.RegexFind, 6, 8, 1, '=~']
			]
		]);
	});

	test('SGL, DivideAssign + RegexFind -> SlashyGStringQuotationMark + RegexMatch', async () => {
		const text = '/abc /==~';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.RegexMatch, 6, 9, 1, '==~']
			]
		]);
	});

	test('SGL, DivideAssign + RegexMatch -> SlashyGStringQuotationMark + Identical + Bitnot', async () => {
		const text = '/abc /===~';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.Identical, 6, 9, 1, '==='],
				[TokenId.Bitnot, 9, 10, 1, '~']
			]
		]);
	});

	test('SGL, DivideAssign + Assign -> SlashyGStringQuotationMark + Equal', async () => {
		const text = '/abc /==';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.Equal, 6, 8, 1, '==']
			]
		]);
	});

	test('SGL, DivideAssign + Equal -> SlashyGStringQuotationMark + Identical', async () => {
		const text = '/abc /===';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.Identical, 6, 9, 1, '===']
			]
		]);
	});

	test('SGL, DivideAssign + Identical -> SlashyGStringQuotationMark + Identical + Assign', async () => {
		const text = '/abc /====';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 6, 1, '/abc /', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.SlashyGStringQuotationMark, 5, 6, 1, '/']
				]],
				[TokenId.Identical, 6, 9, 1, '==='],
				[TokenId.Assign, 9, 10, 1, '=']
			]
		]);
	});

	test('SL/GL/DSGL, DivideAssign -> Chars', async () => {
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
});
