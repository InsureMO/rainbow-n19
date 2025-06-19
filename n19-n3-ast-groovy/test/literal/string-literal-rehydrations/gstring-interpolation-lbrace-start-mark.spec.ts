import {GroovyAstBuilder, TokenId} from '../../../src';
import {AstChecker} from '../../utils/ast-checker';

describe('String literal rehydration test: GString Interpolation LBrace Start Mark', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('NSL, GStringInterpolationLBraceStartMark -> StringQuotationMark', async () => {
		const text = '\${';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.Identifier, 0, 1, 1, '$'],
				[TokenId.CodeBlock, 1, 2, 1, '{', [
					[TokenId.LBrace, 1, 2, 1, '{']
				]]
			]
		]);
	});

	test('SL, GStringInterpolationLBraceStartMark -> Chars', async () => {
		const text = `'\${`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 3, 0, text, [
				[TokenId.StringLiteral, 0, 3, 1, `'\${`, [
					[TokenId.StringQuotationMark, 0, 1, 1, `'`],
					[TokenId.Chars, 1, 3, 1, '\${']
				]]
			]
		]);
	});
});
