import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: ML Comment End Mark', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	// ml comment end mark: */
	test('SL/GL, MLCommentEndMark -> Chars', async () => {
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

	test('SGL, MLCommentEndMark -> Chars + SlashyGStringQuotationMark', async () => {
		const text = '/abc */';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 7, 1, '/abc */', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 4, 1, 'abc'],
					[TokenId.Whitespaces, 4, 5, 1, ' '],
					[TokenId.Chars, 5, 6, 1, '*'],
					[TokenId.SlashyGStringQuotationMark, 6, 7, 1, '/']
				]]
			]
		]);
	});

	test('DSGL, MLCommentEndMark + DollarSlashyGStringQuotationStartMark -> Chars + DollarSlashyGStringQuotationEndMark + Divide', async () => {
		const text = '$/abc */$/';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc */$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, '*'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, '/$']
				]],
				[TokenId.Divide, 9, 10, 1, '/']
			]
		]);
	});

	test('DSGL, MLCommentEndMark + DollarSlashyGStringDollarEscape -> Chars + DollarSlashyGStringQuotationEndMark + Identifier', async () => {
		const text = '$/abc */$$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc */$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, '*'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, '/$']
				]],
				[TokenId.Identifier, 9, 10, 1, '$']
			]
		]);
	});

	test('DSGL, MLCommentEndMark + GStringInterpolationLBraceStartMark -> Chars + DollarSlashyGStringQuotationEndMark + LBrace', async () => {
		const text = '$/abc */\${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 10, 0, text, [
				[TokenId.DollarSlashyGStringLiteral, 0, 9, 1, '$/abc */$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 0, 2, 1, '$/'],
					[TokenId.Chars, 2, 5, 1, 'abc'],
					[TokenId.Whitespaces, 5, 6, 1, ' '],
					[TokenId.Chars, 6, 7, 1, '*'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 7, 9, 1, '/$']
				]],
				[TokenId.CodeBlock, 9, 10, 1, '{', [
					[TokenId.LBrace, 9, 10, 1, '{']
				]]
			]
		]);
	});
});
