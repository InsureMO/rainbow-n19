import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: ML Comment Start Mark', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// ml comment start mark: /*
	test('SGL, MLCommentStartMark + Dot -> SlashyGStringQuotationMark + SpreadDot', async () => {
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

	test('SGL, MLCommentStartMark + NumericBasePart (starts with .) -> SlashyGStringQuotationMark + SpreadDot + NumericBasePart', async () => {
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

	test('SGL, MLCommentStartMark + NumericBasePart (not starts with .) -> SlashyGStringQuotationMark + Multiple + NumericBasePart', async () => {
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

	test('SGL, MLCommentStartMark + SpreadDot -> SlashyGStringQuotationMark + Power + Dot', async () => {
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

	test('SGL, MLCommentStartMark + Power -> SlashyGStringQuotationMark + Power + Multiple', async () => {
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

	test('SGL, MLCommentStartMark + PowerAssign -> SlashyGStringQuotationMark + Power + MultipleAssign', async () => {
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

	test('SGL, MLCommentStartMark + Multiple -> SlashyGStringQuotationMark + Power', async () => {
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

	test('SGL, MLCommentStartMark + MLCommentEndMark -> SlashyGStringQuotationMark + Power + SlashyGStringQuotationMark', async () => {
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

	test('SGL, MLCommentStartMark + MultipleAssign -> SlashyGStringQuotationMark + PowerAssign', async () => {
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

	test('SGL, MLCommentStartMark + Assign -> SlashyGStringQuotationMark + MultipleAssign', async () => {
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

	test('SGL, MLCommentStartMark + Equal -> SlashyGStringQuotationMark + MultipleAssign + Assign', async () => {
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

	test('SGL, MLCommentStartMark + Identical -> SlashyGStringQuotationMark + MultipleAssign + Equal', async () => {
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

	test('SGL, MLCommentStartMark + RegexFind -> SlashyGStringQuotationMark + MultipleAssign + Bitnot', async () => {
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

	test('SGL, MLCommentStartMark + RegexMatch -> SlashyGStringQuotationMark + MultipleAssign + RegexFind', async () => {
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
});
