import {GroovyAstBuilder, TokenId} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Import declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Import declaration #1', async () => {
		const text = 'import\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.ImportDeclaration, 0, 6, 1, 'import', [
					[TokenId.IMPORT, 0, 6, 1, 'import']
				]],
				[TokenId.NewLine, 6, 7, 1, '\n']
			]
		]);
	});
	test('Import declaration #2', async () => {
		const text = 'import$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.Identifier, 0, 7, 1, 'import$']
			]
		]);
	});
	test('Import declaration #3', async () => {
		const text = 'import.';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 7, 0, text, [
				[TokenId.ImportDeclaration, 0, 7, 1, text, [
					[TokenId.IMPORT, 0, 6, 1, 'import'],
					[TokenId.Dot, 6, 7, 1, '.']
				]]
			]
		]);
	});
	test('Import declaration #4', async () => {
		const text = 'import abc.1df';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 14, 0, text, [
				[TokenId.ImportDeclaration, 0, 14, 1, text, [
					[TokenId.IMPORT, 0, 6, 1, 'import'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.Identifier, 7, 10, 1, 'abc'],
					[TokenId.Dot, 10, 11, 1, '.'],
					[TokenId.Identifier, 11, 14, 1, '1df']
				]]
			]
		]);
	});
	test('Import declaration #5', async () => {
		const text = 'import/* a */ abc/*b*/. /*c*/1df/*d*/\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 38, 0, text, [
				[TokenId.ImportDeclaration, 0, 37, 1, 'import/* a */ abc/*b*/. /*c*/1df/*d*/', [
					[TokenId.IMPORT, 0, 6, 1, 'import'],
					[TokenId.MultipleLinesComment, 6, 13, 1, '/* a */', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
						[TokenId.Whitespaces, 8, 9, 1, ' '],
						[TokenId.Chars, 9, 10, 1, 'a'],
						[TokenId.Whitespaces, 10, 11, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 11, 13, 1, '*/']
					]],
					[TokenId.Whitespaces, 13, 14, 1, ' '],
					[TokenId.Identifier, 14, 17, 1, 'abc'],
					[TokenId.MultipleLinesComment, 17, 22, 1, '/*b*/', [
						[TokenId.MultipleLinesCommentStartMark, 17, 19, 1, '/*'],
						[TokenId.Chars, 19, 20, 1, 'b'],
						[TokenId.MultipleLinesCommentEndMark, 20, 22, 1, '*/']
					]],
					[TokenId.Dot, 22, 23, 1, '.'],
					[TokenId.Whitespaces, 23, 24, 1, ' '],
					[TokenId.MultipleLinesComment, 24, 29, 1, '/*c*/', [
						[TokenId.MultipleLinesCommentStartMark, 24, 26, 1, '/*'],
						[TokenId.Chars, 26, 27, 1, 'c'],
						[TokenId.MultipleLinesCommentEndMark, 27, 29, 1, '*/']
					]],
					[TokenId.Identifier, 29, 32, 1, '1df'],
					[TokenId.MultipleLinesComment, 32, 37, 1, '/*d*/', [
						[TokenId.MultipleLinesCommentStartMark, 32, 34, 1, '/*'],
						[TokenId.Chars, 34, 35, 1, 'd'],
						[TokenId.MultipleLinesCommentEndMark, 35, 37, 1, '*/']
					]]
				]],
				[TokenId.NewLine, 37, 38, 1, '\n']
			]
		]);
	});
	test('Import declaration #6', async () => {
		const text = 'import/* a */ abc/*b\n*/.; /*c*/1df/*d*/\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 40, 0, text, [
				[TokenId.ImportDeclaration, 0, 25, 1, 'import/* a */ abc/*b\n*/.;', [
					[TokenId.IMPORT, 0, 6, 1, 'import'],
					[TokenId.MultipleLinesComment, 6, 13, 1, '/* a */', [
						[TokenId.MultipleLinesCommentStartMark, 6, 8, 1, '/*'],
						[TokenId.Whitespaces, 8, 9, 1, ' '],
						[TokenId.Chars, 9, 10, 1, 'a'],
						[TokenId.Whitespaces, 10, 11, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 11, 13, 1, '*/']
					]],
					[TokenId.Whitespaces, 13, 14, 1, ' '],
					[TokenId.Identifier, 14, 17, 1, 'abc'],
					[TokenId.MultipleLinesComment, 17, 23, 1, '/*b\n*/', [
						[TokenId.MultipleLinesCommentStartMark, 17, 19, 1, '/*'],
						[TokenId.Chars, 19, 20, 1, 'b'],
						[TokenId.NewLine, 20, 21, 1, '\n'],
						[TokenId.MultipleLinesCommentEndMark, 21, 23, 2, '*/']
					]],
					[TokenId.Dot, 23, 24, 2, '.'],
					[TokenId.Semicolon, 24, 25, 2, ';']
				]],
				[TokenId.Whitespaces, 25, 26, 2, ' '],
				[TokenId.MultipleLinesComment, 26, 31, 2, '/*c*/', [
					[TokenId.MultipleLinesCommentStartMark, 26, 28, 2, '/*'],
					[TokenId.Chars, 28, 29, 2, 'c'],
					[TokenId.MultipleLinesCommentEndMark, 29, 31, 2, '*/']
				]],
				[TokenId.Identifier, 31, 34, 2, '1df'],
				[TokenId.MultipleLinesComment, 34, 39, 2, '/*d*/', [
					[TokenId.MultipleLinesCommentStartMark, 34, 36, 2, '/*'],
					[TokenId.Chars, 36, 37, 2, 'd'],
					[TokenId.MultipleLinesCommentEndMark, 37, 39, 2, '*/']
				]],
				[TokenId.NewLine, 39, 40, 2, '\n']
			]
		]);
	});
	test('Import declaration #7', async () => {
		const text = 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ as $1\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 60, 0, text, [
				[TokenId.ImportDeclaration, 0, 59, 1, 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ as $1', [
					[TokenId.IMPORT, 0, 6, 1, 'import'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.MultipleLinesComment, 7, 14, 1, '/* 0 */', [
						[TokenId.MultipleLinesCommentStartMark, 7, 9, 1, '/*'],
						[TokenId.Whitespaces, 9, 10, 1, ' '],
						[TokenId.Chars, 10, 11, 1, '0'],
						[TokenId.Whitespaces, 11, 12, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 12, 14, 1, '*/']
					]],
					[TokenId.Whitespaces, 14, 15, 1, ' '],
					[TokenId.STATIC, 15, 21, 1, 'static'],
					[TokenId.MultipleLinesComment, 21, 28, 1, '/* a */', [
						[TokenId.MultipleLinesCommentStartMark, 21, 23, 1, '/*'],
						[TokenId.Whitespaces, 23, 24, 1, ' '],
						[TokenId.Chars, 24, 25, 1, 'a'],
						[TokenId.Whitespaces, 25, 26, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 26, 28, 1, '*/']
					]],
					[TokenId.Whitespaces, 28, 29, 1, ' '],
					[TokenId.Identifier, 29, 32, 1, 'abc'],
					[TokenId.MultipleLinesComment, 32, 38, 1, '/*b\n*/', [
						[TokenId.MultipleLinesCommentStartMark, 32, 34, 1, '/*'],
						[TokenId.Chars, 34, 35, 1, 'b'],
						[TokenId.NewLine, 35, 36, 1, '\n'],
						[TokenId.MultipleLinesCommentEndMark, 36, 38, 2, '*/']
					]],
					[TokenId.Dot, 38, 39, 2, '.'],
					[TokenId.Whitespaces, 39, 40, 2, ' '],
					[TokenId.MultipleLinesComment, 40, 45, 2, '/*c*/', [
						[TokenId.MultipleLinesCommentStartMark, 40, 42, 2, '/*'],
						[TokenId.Chars, 42, 43, 2, 'c'],
						[TokenId.MultipleLinesCommentEndMark, 43, 45, 2, '*/']
					]],
					[TokenId.Identifier, 45, 48, 2, '1df'],
					[TokenId.MultipleLinesComment, 48, 53, 2, '/*d*/', [
						[TokenId.MultipleLinesCommentStartMark, 48, 50, 2, '/*'],
						[TokenId.Chars, 50, 51, 2, 'd'],
						[TokenId.MultipleLinesCommentEndMark, 51, 53, 2, '*/']
					]],
					[TokenId.Whitespaces, 53, 54, 2, ' '],
					[TokenId.AS, 54, 56, 2, 'as'],
					[TokenId.Whitespaces, 56, 57, 2, ' '],
					[TokenId.Identifier, 57, 59, 2, '$1']
				]],
				[TokenId.NewLine, 59, 60, 2, '\n']
			]
		]);
	});
	test('Import declaration #8', async () => {
		const text = 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ . *\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 58, 0, text, [
				[TokenId.ImportDeclaration, 0, 57, 1, 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ . *', [
					[TokenId.IMPORT, 0, 6, 1, 'import'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.MultipleLinesComment, 7, 14, 1, '/* 0 */', [
						[TokenId.MultipleLinesCommentStartMark, 7, 9, 1, '/*'],
						[TokenId.Whitespaces, 9, 10, 1, ' '],
						[TokenId.Chars, 10, 11, 1, '0'],
						[TokenId.Whitespaces, 11, 12, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 12, 14, 1, '*/']
					]],
					[TokenId.Whitespaces, 14, 15, 1, ' '],
					[TokenId.STATIC, 15, 21, 1, 'static'],
					[TokenId.MultipleLinesComment, 21, 28, 1, '/* a */', [
						[TokenId.MultipleLinesCommentStartMark, 21, 23, 1, '/*'],
						[TokenId.Whitespaces, 23, 24, 1, ' '],
						[TokenId.Chars, 24, 25, 1, 'a'],
						[TokenId.Whitespaces, 25, 26, 1, ' '],
						[TokenId.MultipleLinesCommentEndMark, 26, 28, 1, '*/']
					]],
					[TokenId.Whitespaces, 28, 29, 1, ' '],
					[TokenId.Identifier, 29, 32, 1, 'abc'],
					[TokenId.MultipleLinesComment, 32, 38, 1, '/*b\n*/', [
						[TokenId.MultipleLinesCommentStartMark, 32, 34, 1, '/*'],
						[TokenId.Chars, 34, 35, 1, 'b'],
						[TokenId.NewLine, 35, 36, 1, '\n'],
						[TokenId.MultipleLinesCommentEndMark, 36, 38, 2, '*/']
					]],
					[TokenId.Dot, 38, 39, 2, '.'],
					[TokenId.Whitespaces, 39, 40, 2, ' '],
					[TokenId.MultipleLinesComment, 40, 45, 2, '/*c*/', [
						[TokenId.MultipleLinesCommentStartMark, 40, 42, 2, '/*'],
						[TokenId.Chars, 42, 43, 2, 'c'],
						[TokenId.MultipleLinesCommentEndMark, 43, 45, 2, '*/']
					]],
					[TokenId.Identifier, 45, 48, 2, '1df'],
					[TokenId.MultipleLinesComment, 48, 53, 2, '/*d*/', [
						[TokenId.MultipleLinesCommentStartMark, 48, 50, 2, '/*'],
						[TokenId.Chars, 50, 51, 2, 'd'],
						[TokenId.MultipleLinesCommentEndMark, 51, 53, 2, '*/']
					]],
					[TokenId.Whitespaces, 53, 54, 2, ' '],
					[TokenId.Dot, 54, 55, 2, '.'],
					[TokenId.Whitespaces, 55, 56, 2, ' '],
					[TokenId.ImportAllMark, 56, 57, 2, '*']
				]],
				[TokenId.NewLine, 57, 58, 2, '\n']
			]
		]);
	});
});
