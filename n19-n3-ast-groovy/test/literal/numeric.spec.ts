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
0b1i
0b2
0B011001L
0xff08
0xff31edg
0123.45d
0126l
0129I
01e2d
01E2.1d
019e-2f`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 87, 0, text, [
				[TokenId.IntegralLiteral, 0, 1, 1, '0', [
					[TokenId.NumericBasePart, 0, 1, 1, '0']
				]],
				[TokenId.Newline, 1, 2, 1, '\n'],
				[TokenId.DecimalLiteral, 2, 4, 2, '.0', [
					[TokenId.Dot, 2, 3, 2, '.'],
					[TokenId.NumericBasePart, 3, 4, 2, '0']
				]],
				[TokenId.Newline, 4, 5, 2, '\n'],
				[TokenId.IntegralLiteral, 5, 6, 3, '0', [
					[TokenId.NumericBasePart, 5, 6, 3, '0']
				]],
				[TokenId.Dot, 6, 7, 3, '.'],
				[TokenId.Identifier, 7, 8, 3, 'a'],
				[TokenId.Newline, 8, 9, 3, '\n'],
				[TokenId.BinaryLiteral, 9, 13, 4, '0b1i', [
					[TokenId.BinaryStartMark, 9, 11, 4, '0b'],
					[TokenId.NumericBasePart, 11, 12, 4, '1'],
					[TokenId.NumericSuffixPart, 12, 13, 4, 'i']
				]],
				[TokenId.Newline, 13, 14, 4, '\n'],
				[TokenId.IntegralLiteral, 14, 15, 5, '0', [
					[TokenId.NumericBasePart, 14, 15, 5, '0']
				]],
				[TokenId.Identifier, 15, 17, 5, 'b2'],
				[TokenId.Newline, 17, 18, 5, '\n'],
				[TokenId.BinaryLiteral, 18, 27, 6, '0B011001L', [
					[TokenId.BinaryStartMark, 18, 20, 6, '0B'],
					[TokenId.NumericBasePart, 20, 26, 6, '011001'],
					[TokenId.NumericSuffixPart, 26, 27, 6, 'L']
				]],
				[TokenId.Newline, 27, 28, 6, '\n'],
				[TokenId.HexadecimalLiteral, 28, 34, 7, '0xff08', [
					[TokenId.HexadecimalStartMark, 28, 30, 7, '0x'],
					[TokenId.NumericBasePart, 30, 34, 7, 'ff08']
				]],
				[TokenId.Newline, 34, 35, 7, '\n'],
				[TokenId.HexadecimalLiteral, 35, 44, 8, '0xff31edg', [
					[TokenId.HexadecimalStartMark, 35, 37, 8, '0x'],
					[TokenId.NumericBasePart, 37, 43, 8, 'ff31ed'],
					[TokenId.NumericSuffixPart, 43, 44, 8, 'g']
				]],
				[TokenId.Newline, 44, 45, 8, '\n'],
				[TokenId.DecimalLiteral, 45, 53, 9, '0123.45d', [
					[TokenId.NumericBasePart, 45, 49, 9, '0123'],
					[TokenId.Dot, 49, 50, 9, '.'],
					[TokenId.NumericBasePart, 50, 52, 9, '45'],
					[TokenId.NumericSuffixPart, 52, 53, 9, 'd']
				]],
				[TokenId.Newline, 53, 54, 9, '\n'],
				[TokenId.OctalLiteral, 54, 59, 10, '0126l', [
					[TokenId.OctalStartMark, 54, 55, 10, '0'],
					[TokenId.NumericBasePart, 55, 58, 10, '126'],
					[TokenId.NumericSuffixPart, 58, 59, 10, 'l']
				]],
				[TokenId.Newline, 59, 60, 10, '\n'],
				[TokenId.IntegralLiteral, 60, 65, 11, '0129I', [
					[TokenId.NumericBasePart, 60, 64, 11, '0129'],
					[TokenId.NumericSuffixPart, 64, 65, 11, 'I']
				]],
				[TokenId.Newline, 65, 66, 11, '\n'],
				[TokenId.DecimalLiteral, 66, 71, 12, '01e2d', [
					[TokenId.NumericBasePart, 66, 68, 12, '01'],
					[TokenId.DecimalExponentMark, 68, 69, 12, 'e'],
					[TokenId.NumericBasePart, 69, 70, 12, '2'],
					[TokenId.NumericSuffixPart, 70, 71, 12, 'd']
				]],
				[TokenId.Newline, 71, 72, 12, '\n'],
				[TokenId.DecimalLiteral, 72, 76, 13, '01E2', [
					[TokenId.NumericBasePart, 72, 74, 13, '01'],
					[TokenId.DecimalExponentMark, 74, 75, 13, 'E'],
					[TokenId.NumericBasePart, 75, 76, 13, '2']
				]],
				[TokenId.DecimalLiteral, 76, 79, 13, '.1d', [
					[TokenId.Dot, 76, 77, 13, '.'],
					[TokenId.NumericBasePart, 77, 78, 13, '1'],
					[TokenId.NumericSuffixPart, 78, 79, 13, 'd']
				]],
				[TokenId.Newline, 79, 80, 13, '\n'],
				[TokenId.DecimalLiteral, 80, 87, 14, '019e-2f', [
					[TokenId.NumericBasePart, 80, 83, 14, '019'],
					[TokenId.DecimalExponentMark, 83, 84, 14, 'e'],
					[TokenId.NumericSignPart, 84, 85, 14, '-'],
					[TokenId.NumericBasePart, 85, 86, 14, '2'],
					[TokenId.NumericSuffixPart, 86, 87, 14, 'f']
				]]
			]
		]);
	});
});
