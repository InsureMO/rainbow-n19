import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('String test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('String literal #1', async () => {
		const text = `'`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 1, 0, text, [
				[TokenId.StringLiteral, 0, 1, 1, `'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`]
				]]
			]
		]);
	});
	test('String literal #2', async () => {
		const text = `''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.StringLiteral, 0, 2, 1, `''`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.StringQuotationMark, 1, 2, 1, `'`]
				]]
			]
		]);
	});
	test('String literal #3', async () => {
		const text = `'\n'`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.StringLiteral, 0, 1, 1, `'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`]
				]],
				[TokenId.NewLine, 1, 2, 1, '\n'],
				[TokenId.StringLiteral, 2, 3, 2, `'`, [
					[TokenId.StringQuotationMark, 2, 3, 2, `'`]
				]]
			]
		]);
	});
	test('String literal #4', async () => {
		const text = `' '''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 5, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `' '`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.StringQuotationMark, 2, 3, 1, `'`]
				]],
				[TokenId.StringLiteral, 3, 5, 1, `''`, [
					[TokenId.StringQuotationMark, 3, 4, 1, `'`],
					[TokenId.StringQuotationMark, 4, 5, 1, `'`]
				]]
			]
		]);
	});
	test('String literal #5', async () => {
		const text = `' ''''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `' '`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.StringQuotationMark, 2, 3, 1, `'`]
				]],
				[TokenId.StringLiteral, 3, 6, 1, `'''`, [
					[TokenId.StringQuotationMarkML, 3, 6, 1, `'''`]
				]]
			]
		]);
	});
	test('String literal #6', async () => {
		const text = `' ''''''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `' '`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.StringQuotationMark, 2, 3, 1, `'`]
				]],
				[TokenId.StringLiteral, 3, 8, 1, `'''''`, [
					[TokenId.StringQuotationMarkML, 3, 6, 1, `'''`],
					[TokenId.Chars, 6, 7, 1, `'`],
					[TokenId.Chars, 7, 8, 1, `'`]
				]]
			]
		]);
	});
	test('String literal #7', async () => {
		const text = `' '''''''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 9, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `' '`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.StringQuotationMark, 2, 3, 1, `'`]
				]],
				[TokenId.StringLiteral, 3, 9, 1, `''''''`, [
					[TokenId.StringQuotationMarkML, 3, 6, 1, `'''`],
					[TokenId.StringQuotationMarkML, 6, 9, 1, `'''`]
				]]
			]
		]);
	});
	test('String literal #8', async () => {
		const text = `' '''''''''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `' '`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Whitespaces, 1, 2, 1, ' '],
					[TokenId.StringQuotationMark, 2, 3, 1, `'`]
				]],
				[TokenId.StringLiteral, 3, 9, 1, `''''''`, [
					[TokenId.StringQuotationMarkML, 3, 6, 1, `'''`],
					[TokenId.StringQuotationMarkML, 6, 9, 1, `'''`]
				]],
				[TokenId.StringLiteral, 9, 11, 1, `''`, [
					[TokenId.StringQuotationMark, 9, 10, 1, `'`],
					[TokenId.StringQuotationMark, 10, 11, 1, `'`]
				]]
			]
		]);
	});
	test('String literal #9', async () => {
		const text = `'''\n'''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.StringLiteral, 0, 7, 1, text, [
					[TokenId.StringQuotationMarkML, 0, 3, 1, `'''`],
					[TokenId.NewLine, 3, 4, 1, '\n'],
					[TokenId.StringQuotationMarkML, 4, 7, 2, `'''`]
				]]
			]
		]);
	});
	test('String literal #10', async () => {
		const text = `'''\\b\\f\\n\\r\\t'''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 16, 0, text, [
				[TokenId.StringLiteral, 0, 16, 1, text, [
					[TokenId.StringQuotationMarkML, 0, 3, 1, `'''`],
					[TokenId.StringBackspaceEscape, 3, 5, 1, '\\b'],
					[TokenId.StringFormFeedEscape, 5, 7, 1, '\\f'],
					[TokenId.StringNewLineEscape, 7, 9, 1, '\\n'],
					[TokenId.StringCarriageReturnEscape, 9, 11, 1, '\\r'],
					[TokenId.StringTabulationEscape, 11, 13, 1, '\\t'],
					[TokenId.StringQuotationMarkML, 13, 16, 1, `'''`]
				]]
			]
		]);
	});
	test('String literal #11', async () => {
		const text = `'\\127'\\127012\\1270.12e2g\\1270b010abc`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 36, 0, text, [
				[TokenId.StringLiteral, 0, 6, 1, `'\\127'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.StringOctalEscape, 1, 5, 1, '\\127', [
						[TokenId.StringOctalEscapeMark, 1, 2, 1, '\\'],
						[TokenId.StringOctalEscapeContent, 2, 5, 1, '127']
					]],
					[TokenId.StringQuotationMark, 5, 6, 1, `'`]
				]],
				[TokenId.UndeterminedChars, 6, 7, 1, '\\'],
				[TokenId.IntegralLiteral, 7, 13, 1, '127012', [
					[TokenId.NumericBasePart, 7, 13, 1, '127012']
				]],
				[TokenId.UndeterminedChars, 13, 14, 1, '\\'],
				[TokenId.DecimalLiteral, 14, 24, 1, '1270.12e2g', [
					[TokenId.NumericBasePart, 14, 18, 1, '1270'],
					[TokenId.Dot, 18, 19, 1, '.'],
					[TokenId.NumericBasePart, 19, 21, 1, '12'],
					[TokenId.DecimalExponentMark, 21, 22, 1, 'e'],
					[TokenId.NumericBasePart, 22, 23, 1, '2'],
					[TokenId.NumericSuffixPart, 23, 24, 1, 'g']
				]],
				[TokenId.UndeterminedChars, 24, 25, 1, '\\'],
				[TokenId.IntegralLiteral, 25, 29, 1, '1270', [
					[TokenId.NumericBasePart, 25, 29, 1, '1270']
				]],
				[TokenId.Identifier, 29, 36, 1, 'b010abc']
			]
		]);
	});
	test('String literal #12', async () => {
		const text = `'\\'\\""'\\''\\""\\''''`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 18, 0, text, [
				[TokenId.StringLiteral, 0, 7, 1, `'\\'\\""'`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.StringSingleQuoteEscape, 1, 3, 1, `\\'`],
					[TokenId.StringDoubleQuoteEscape, 3, 5, 1, '\\"'],
					[TokenId.Chars, 5, 6, 1, '"'],
					[TokenId.StringQuotationMark, 6, 7, 1, `'`]
				]],
				[TokenId.UndeterminedChars, 7, 8, 1, '\\'],
				[TokenId.StringLiteral, 8, 10, 1, `''`, [
					[TokenId.StringQuotationMark, 8, 9, 1, `'`],
					[TokenId.StringQuotationMark, 9, 10, 1, `'`]
				]],
				[TokenId.UndeterminedChars, 10, 11, 1, '\\'],
				[TokenId.GStringLiteral, 11, 13, 1, '""', [
					[TokenId.GStringQuotationMark, 11, 12, 1, '"'],
					[TokenId.GStringQuotationMark, 12, 13, 1, '"']
				]],
				[TokenId.UndeterminedChars, 13, 14, 1, '\\'],
				[TokenId.StringLiteral, 14, 18, 1, `''''`, [
					[TokenId.StringQuotationMarkML, 14, 17, 1, `'''`],
					[TokenId.Chars, 17, 18, 1, `'`]
				]]
			]
		]);
	});
});
