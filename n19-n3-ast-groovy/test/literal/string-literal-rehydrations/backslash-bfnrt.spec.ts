import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration tests: Backslash + BFNRT', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, \\b\\f\\n\\r\\t -> Undetermined Chars + Identifier', async () => {
		const text = '\\b\\f1\\n2\\r3\\t4';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 14, 0, text, [
				[TokenId.UndeterminedChars, 0, 1, 1, '\\'],
				[TokenId.Identifier, 1, 2, 1, 'b'],
				[TokenId.UndeterminedChars, 2, 3, 1, '\\'],
				[TokenId.Identifier, 3, 5, 1, 'f1'],
				[TokenId.UndeterminedChars, 5, 6, 1, '\\'],
				[TokenId.Identifier, 6, 8, 1, 'n2'],
				[TokenId.UndeterminedChars, 8, 9, 1, '\\'],
				[TokenId.Identifier, 9, 11, 1, 'r3'],
				[TokenId.UndeterminedChars, 11, 12, 1, '\\'],
				[TokenId.Identifier, 12, 14, 1, 't4'],
			]
		]);
	});

	test('SGL/DSL, \\b\\f\\n\\r\\t -> Chars', async () => {
		const text = '/\\b\\f1\\n2\\r3\\t4/$/\\b\\f1\\n2\\r3\\t4/$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 34, 0, text, [
				[TokenId.SlashyGStringLiteral, 0, 16, 1, '/\\b\\f1\\n2\\r3\\t4/', [
					[TokenId.SlashyGStringQuotationMark, 0, 1, 1, '/'],
					[TokenId.Chars, 1, 3, 1, '\\b'],
					[TokenId.Chars, 3, 5, 1, '\\f'],
					[TokenId.Chars, 5, 6, 1, '1'],
					[TokenId.Chars, 6, 8, 1, '\\n'],
					[TokenId.Chars, 8, 9, 1, '2'],
					[TokenId.Chars, 9, 11, 1, '\\r'],
					[TokenId.Chars, 11, 12, 1, '3'],
					[TokenId.Chars, 12, 14, 1, '\\t'],
					[TokenId.Chars, 14, 15, 1, '4'],
					[TokenId.SlashyGStringQuotationMark, 15, 16, 1, '/'],
				]],
				[TokenId.DollarSlashyGStringLiteral, 16, 34, 1, '$/\\b\\f1\\n2\\r3\\t4/$', [
					[TokenId.DollarSlashyGStringQuotationStartMark, 16, 18, 1, '$/'],
					[TokenId.Chars, 18, 20, 1, '\\b'],
					[TokenId.Chars, 20, 22, 1, '\\f'],
					[TokenId.Chars, 22, 23, 1, '1'],
					[TokenId.Chars, 23, 25, 1, '\\n'],
					[TokenId.Chars, 25, 26, 1, '2'],
					[TokenId.Chars, 26, 28, 1, '\\r'],
					[TokenId.Chars, 28, 29, 1, '3'],
					[TokenId.Chars, 29, 31, 1, '\\t'],
					[TokenId.Chars, 31, 32, 1, '4'],
					[TokenId.DollarSlashyGStringQuotationEndMark, 32, 34, 1, '/$'],
				]],
			]
		]);
	});
});
