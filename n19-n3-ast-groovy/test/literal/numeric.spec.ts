import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Numeric test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Numeric #1', async () => {
		const text = `0
.0
0.a
0b1i`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 13, 0, text, [
				[TokenId.IntegralLiteral, 0, 1, 1, '0', [
					[TokenId.NumericBasePart, 0, 1, 1, '0']
				]],
				[TokenId.NewLine, 1, 2, 1, '\n'],
				[TokenId.DecimalLiteral, 2, 4, 2, '.0', [
					[TokenId.Dot, 2, 3, 2, '.'],
					[TokenId.NumericBasePart, 3, 4, 2, '0']
				]],
				[TokenId.NewLine, 4, 5, 2, '\n'],
				[TokenId.IntegralLiteral, 5, 6, 3, '0', [
					[TokenId.NumericBasePart, 5, 6, 3, '0']
				]],
				[TokenId.Dot, 6, 7, 3, '.'],
				[TokenId.Identifier, 7, 8, 3, 'a'],
				[TokenId.NewLine, 8, 9, 3, '\n'],
				[TokenId.BinaryLiteral, 9, 13, 4, '0b1i', [
					[TokenId.BinaryStartMark, 9, 11, 4, '0b'],
					[TokenId.NumericBasePart, 11, 12, 4, '1'],
					[TokenId.NumericSuffixPart, 12, 13, 4, 'i'],
				]],
			]
		]);
	});
});
