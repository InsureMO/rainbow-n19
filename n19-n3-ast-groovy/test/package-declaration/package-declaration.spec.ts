import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Package declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Package declaration #1', async () => {
		const text = 'package\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.PackageDeclaration, 0, 7, 1, 'package', [
					[TokenId.PACKAGE, 0, 7, 1, 'package']
				]],
				[TokenId.NewLine, 7, 8, 1, '\n']
			]
		]);
	});
	test('Package declaration #2', async () => {
		const text = 'package$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.Identifier, 0, 8, 1, 'package$']
			]
		]);
	});
	test('Package declaration #3', async () => {
		const text = 'package.';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 8, 0, text, [
				[TokenId.PackageDeclaration, 0, 8, 1, text, [
					[TokenId.PACKAGE, 0, 7, 1, 'package'],
					[TokenId.Dot, 7, 8, 1, '.']
				]]
			]
		]);
	});
	test('Package declaration #4', async () => {
		const text = 'package abc.edf';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 15, 0, text, [
				[TokenId.PackageDeclaration, 0, 15, 1, text, [
					[TokenId.PACKAGE, 0, 7, 1, 'package'],
					[TokenId.Whitespaces, 7, 8, 1, ' '],
					[TokenId.Identifier, 8, 11, 1, 'abc'],
					[TokenId.Dot, 11, 12, 1, '.'],
					[TokenId.Identifier, 12, 15, 1, 'edf']
				]]
			]
		]);
	});
	test('Package declaration #5', async () => {
		const text = 'package/* a */ abc/*b*/. /*c*/edf/*d*/\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 39, 0, text, [
				[TokenId.PackageDeclaration, 0, 33, 1, 'package/* a */ abc/*b*/. /*c*/edf', [
					[TokenId.PACKAGE, 0, 7, 1, 'package'],
					[TokenId.MultipleLinesComment, 7, 14, 1, '/* a */', [
						[TokenId.MultipleLinesCommentStartMark, 7, 9, 1, '/*'],
						[TokenId.Whitespaces, 9, 10, 1, ' '],
						[TokenId.Chars, 10, 11, 1, 'a'],
						[TokenId.Whitespaces, 11, 12, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 12, 14, 1, '*/']
					]],
					[TokenId.Whitespaces, 14, 15, 1, ' '],
					[TokenId.Identifier, 15, 18, 1, 'abc'],
					[TokenId.MultipleLinesComment, 18, 23, 1, '/*b*/', [
						[TokenId.MultipleLinesCommentStartMark, 18, 20, 1, '/*'],
						[TokenId.Chars, 20, 21, 1, 'b'],
						[TokenId.MultipleLinesCommentEndMark, 21, 23, 1, '*/']
					]],
					[TokenId.Dot, 23, 24, 1, '.'],
					[TokenId.Whitespaces, 24, 25, 1, ' '],
					[TokenId.MultipleLinesComment, 25, 30, 1, '/*c*/', [
						[TokenId.MultipleLinesCommentStartMark, 25, 27, 1, '/*'],
						[TokenId.Chars, 27, 28, 1, 'c'],
						[TokenId.MultipleLinesCommentEndMark, 28, 30, 1, '*/']
					]],
					[TokenId.Identifier, 30, 33, 1, 'edf']
				]],
				[TokenId.MultipleLinesComment, 33, 38, 1, '/*d*/', [
					[TokenId.MultipleLinesCommentStartMark, 33, 35, 1, '/*'],
					[TokenId.Chars, 35, 36, 1, 'd'],
					[TokenId.MultipleLinesCommentEndMark, 36, 38, 1, '*/']
				]],
				[TokenId.NewLine, 38, 39, 1, '\n']
			]
		]);
	});
	test('Package declaration #6', async () => {
		const text = 'package/* a */ abc/*b\n*/.; /*c*/edf/*d*/\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 41, 0, text, [
				[TokenId.PackageDeclaration, 0, 26, 1, 'package/* a */ abc/*b\n*/.;', [
					[TokenId.PACKAGE, 0, 7, 1, 'package'],
					[TokenId.MultipleLinesComment, 7, 14, 1, '/* a */', [
						[TokenId.MultipleLinesCommentStartMark, 7, 9, 1, '/*'],
						[TokenId.Whitespaces, 9, 10, 1, ' '],
						[TokenId.Chars, 10, 11, 1, 'a'],
						[TokenId.Whitespaces, 11, 12, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 12, 14, 1, '*/']
					]],
					[TokenId.Whitespaces, 14, 15, 1, ' '],
					[TokenId.Identifier, 15, 18, 1, 'abc'],
					[TokenId.MultipleLinesComment, 18, 24, 1, '/*b\n*/', [
						[TokenId.MultipleLinesCommentStartMark, 18, 20, 1, '/*'],
						[TokenId.Chars, 20, 21, 1, 'b'],
						[TokenId.NewLine, 21, 22, 1, '\n'],
						[TokenId.MultipleLinesCommentEndMark, 22, 24, 2, '*/']
					]],
					[TokenId.Dot, 24, 25, 2, '.'],
					[TokenId.Semicolon, 25, 26, 2, ';']
				]],
				[TokenId.Whitespaces, 26, 27, 2, ' '],
				[TokenId.MultipleLinesComment, 27, 32, 2, '/*c*/', [
					[TokenId.MultipleLinesCommentStartMark, 27, 29, 2, '/*'],
					[TokenId.Chars, 29, 30, 2, 'c'],
					[TokenId.MultipleLinesCommentEndMark, 30, 32, 2, '*/']
				]],
				[TokenId.Identifier, 32, 35, 2, 'edf'],
				[TokenId.MultipleLinesComment, 35, 40, 2, '/*d*/', [
					[TokenId.MultipleLinesCommentStartMark, 35, 37, 2, '/*'],
					[TokenId.Chars, 37, 38, 2, 'd'],
					[TokenId.MultipleLinesCommentEndMark, 38, 40, 2, '*/']
				]],
				[TokenId.NewLine, 40, 41, 2, '\n']
			]
		]);
	});
});
