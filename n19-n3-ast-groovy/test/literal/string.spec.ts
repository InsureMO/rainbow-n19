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
});
