import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: String Multiple Lines Newline Eraser', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('ASL, Backslash -> StringMLNewlineEraser', async () => {
		const text = `'''\\\n\\\n'''"""\\\n\\\n"""\n/\\\n\\\n/$/\\\n\\\n/$`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 35, 0, text, [
				[TokenId.StringLiteral, 0, 10, 1, `'''\\\n\\\n'''`, [
					[TokenId.StringQuotationMarkML, 0, 3, 1, `'''`],
					[TokenId.StringMLNewlineEraser, 3, 4, 1, '\\'],
					[TokenId.Newline, 4, 5, 1, '\n'],
					[TokenId.StringMLNewlineEraser, 5, 6, 2, '\\'],
					[TokenId.Newline, 6, 7, 2, '\n'],
					[TokenId.StringQuotationMarkML, 7, 10, 3, `'''`]
				]],
				[TokenId.GStringLiteral, 10, 20, 3, '"""\\\n\\\n"""', [
					[TokenId.GStringQuotationMarkML, 10, 13, 3, '"""'],
					[TokenId.StringMLNewlineEraser, 13, 14, 3, '\\'],
					[TokenId.Newline, 14, 15, 3, '\n'],
					[TokenId.StringMLNewlineEraser, 15, 16, 4, '\\'],
					[TokenId.Newline, 16, 17, 4, '\n'],
					[TokenId.GStringQuotationMarkML, 17, 20, 5, '"""']
				]],
				[TokenId.Newline, 20, 21, 5, '\n'],
				[TokenId.SlashyGStringLiteral, 21, 27, 6, '/\\\n\\\n/', [
					[TokenId.SlashyGStringQuotationMark, 21, 22, 6, '/'],
					[TokenId.StringMLNewlineEraser, 22, 23, 6, '\\'],
					[TokenId.Newline, 23, 24, 6, '\n'],
					[TokenId.StringMLNewlineEraser, 24, 25, 7, '\\'],
					[TokenId.Newline, 25, 26, 7, '\n'],
					[TokenId.SlashyGStringQuotationMark, 26, 27, 8, '/']
				]],
				[TokenId.DollarSlashyGStringLiteral, 27, 35, 8, '$/\\\n\\\n/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 27, 29, 8, '$/'],
					[TokenId.StringMLNewlineEraser, 29, 30, 8, '\\'],
					[TokenId.Newline, 30, 31, 8, '\n'],
					[TokenId.StringMLNewlineEraser, 31, 32, 9, '\\'],
					[TokenId.Newline, 32, 33, 9, '\n'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 33, 35, 10, '/$']
				]]
			]
		]);
	});
});
