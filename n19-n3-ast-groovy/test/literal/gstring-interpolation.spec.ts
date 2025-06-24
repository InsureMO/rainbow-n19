import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('GString Interpolation Test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('GString interpolation #1', async () => {
		const text = '"$abc"';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 6, 0, text, [
				[TokenId.GStringLiteral, 0, 6, 1, '"$abc"', [
					[TokenId.GStringQuotationMark, 0, 1, 1, '"'],
					[TokenId.GStringInterpolation, 1, 5, 1, '$abc', [
						[TokenId.GStringInterpolationStartMark, 1, 2, 1, '$'],
						[TokenId.Identifier, 2, 5, 1, 'abc']
					]],
					[TokenId.GStringQuotationMark, 5, 6, 1, '"']
				]]
			]
		]);
	});
});
