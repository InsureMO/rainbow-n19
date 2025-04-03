import {
	AsNode,
	AstBuilder,
	CharsNode,
	CompilationUnitNode,
	DotNode,
	IdentifierNode,
	ImportDeclarationNode,
	ImportNode,
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	MultipleNode,
	NewLineNode,
	SemicolonNode,
	StaticNode,
	WhitespacesNode
} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Import declaration test', () => {
	test('Import declaration #1', async () => {
		const text = 'import\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 7, 0, text, [
				[ImportDeclarationNode, 0, 6, 1, 'import', [
					[ImportNode, 0, 6, 1, 'import']
				]],
				[NewLineNode, 6, 7, 1, '\n']
			]
		]);
	});
	test('Import declaration #2', async () => {
		const text = 'import$';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 7, 0, text, [
				[IdentifierNode, 0, 7, 1, 'import$']
			]
		]);
	});
	test('Import declaration #3', async () => {
		const text = 'import.';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 7, 0, text, [
				[ImportDeclarationNode, 0, 7, 1, text, [
					[ImportNode, 0, 6, 1, 'import'],
					[DotNode, 6, 7, 1, '.']
				]]
			]
		]);
	});
	test('Import declaration #4', async () => {
		const text = 'import abc.1df';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 14, 0, text, [
				[ImportDeclarationNode, 0, 14, 1, text, [
					[ImportNode, 0, 6, 1, 'import'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[IdentifierNode, 7, 10, 1, 'abc'],
					[DotNode, 10, 11, 1, '.'],
					[IdentifierNode, 11, 14, 1, '1df']
				]]
			]
		]);
	});
	test('Import declaration #5', async () => {
		const text = 'import/* a */ abc/*b*/. /*c*/1df/*d*/\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 38, 0, text, [
				[ImportDeclarationNode, 0, 37, 1, 'import/* a */ abc/*b*/. /*c*/1df/*d*/', [
					[ImportNode, 0, 6, 1, 'import'],
					[MultipleLinesCommentNode, 6, 13, 1, '/* a */', [
						[MultipleLinesCommentStartMarkNode, 6, 8, 1, '/*'],
						[WhitespacesNode, 8, 9, 1, ' '],
						[CharsNode, 9, 10, 1, 'a'],
						[WhitespacesNode, 10, 11, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 11, 13, 1, '*/']
					]],
					[WhitespacesNode, 13, 14, 1, ' '],
					[IdentifierNode, 14, 17, 1, 'abc'],
					[MultipleLinesCommentNode, 17, 22, 1, '/*b*/', [
						[MultipleLinesCommentStartMarkNode, 17, 19, 1, '/*'],
						[CharsNode, 19, 20, 1, 'b'],
						[MultipleLinesCommentEndMarkNode, 20, 22, 1, '*/']
					]],
					[DotNode, 22, 23, 1, '.'],
					[WhitespacesNode, 23, 24, 1, ' '],
					[MultipleLinesCommentNode, 24, 29, 1, '/*c*/', [
						[MultipleLinesCommentStartMarkNode, 24, 26, 1, '/*'],
						[CharsNode, 26, 27, 1, 'c'],
						[MultipleLinesCommentEndMarkNode, 27, 29, 1, '*/']
					]],
					[IdentifierNode, 29, 32, 1, '1df'],
					[MultipleLinesCommentNode, 32, 37, 1, '/*d*/', [
						[MultipleLinesCommentStartMarkNode, 32, 34, 1, '/*'],
						[CharsNode, 34, 35, 1, 'd'],
						[MultipleLinesCommentEndMarkNode, 35, 37, 1, '*/']
					]]
				]],
				[NewLineNode, 37, 38, 1, '\n']
			]
		]);
	});
	test('Import declaration #6', async () => {
		const text = 'import/* a */ abc/*b\n*/.; /*c*/1df/*d*/\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 40, 0, text, [
				[ImportDeclarationNode, 0, 25, 1, 'import/* a */ abc/*b\n*/.;', [
					[ImportNode, 0, 6, 1, 'import'],
					[MultipleLinesCommentNode, 6, 13, 1, '/* a */', [
						[MultipleLinesCommentStartMarkNode, 6, 8, 1, '/*'],
						[WhitespacesNode, 8, 9, 1, ' '],
						[CharsNode, 9, 10, 1, 'a'],
						[WhitespacesNode, 10, 11, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 11, 13, 1, '*/']
					]],
					[WhitespacesNode, 13, 14, 1, ' '],
					[IdentifierNode, 14, 17, 1, 'abc'],
					[MultipleLinesCommentNode, 17, 23, 1, '/*b\n*/', [
						[MultipleLinesCommentStartMarkNode, 17, 19, 1, '/*'],
						[CharsNode, 19, 20, 1, 'b'],
						[NewLineNode, 20, 21, 1, '\n'],
						[MultipleLinesCommentEndMarkNode, 21, 23, 2, '*/']
					]],
					[DotNode, 23, 24, 2, '.'],
					[SemicolonNode, 24, 25, 2, ';']
				]],
				[WhitespacesNode, 25, 26, 2, ' '],
				[MultipleLinesCommentNode, 26, 31, 2, '/*c*/', [
					[MultipleLinesCommentStartMarkNode, 26, 28, 2, '/*'],
					[CharsNode, 28, 29, 2, 'c'],
					[MultipleLinesCommentEndMarkNode, 29, 31, 2, '*/']
				]],
				[IdentifierNode, 31, 34, 2, '1df'],
				[MultipleLinesCommentNode, 34, 39, 2, '/*d*/', [
					[MultipleLinesCommentStartMarkNode, 34, 36, 2, '/*'],
					[CharsNode, 36, 37, 2, 'd'],
					[MultipleLinesCommentEndMarkNode, 37, 39, 2, '*/']
				]],
				[NewLineNode, 39, 40, 2, '\n']
			]
		]);
	});
	test('Import declaration #7', async () => {
		const text = 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ as $1\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 60, 0, text, [
				[ImportDeclarationNode, 0, 59, 1, 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ as $1', [
					[ImportNode, 0, 6, 1, 'import'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[MultipleLinesCommentNode, 7, 14, 1, '/* 0 */', [
						[MultipleLinesCommentStartMarkNode, 7, 9, 1, '/*'],
						[WhitespacesNode, 9, 10, 1, ' '],
						[CharsNode, 10, 11, 1, '0'],
						[WhitespacesNode, 11, 12, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 12, 14, 1, '*/']
					]],
					[WhitespacesNode, 14, 15, 1, ' '],
					[StaticNode, 15, 21, 1, 'static'],
					[MultipleLinesCommentNode, 21, 28, 1, '/* a */', [
						[MultipleLinesCommentStartMarkNode, 21, 23, 1, '/*'],
						[WhitespacesNode, 23, 24, 1, ' '],
						[CharsNode, 24, 25, 1, 'a'],
						[WhitespacesNode, 25, 26, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 26, 28, 1, '*/']
					]],
					[WhitespacesNode, 28, 29, 1, ' '],
					[IdentifierNode, 29, 32, 1, 'abc'],
					[MultipleLinesCommentNode, 32, 38, 1, '/*b\n*/', [
						[MultipleLinesCommentStartMarkNode, 32, 34, 1, '/*'],
						[CharsNode, 34, 35, 1, 'b'],
						[NewLineNode, 35, 36, 1, '\n'],
						[MultipleLinesCommentEndMarkNode, 36, 38, 2, '*/']
					]],
					[DotNode, 38, 39, 2, '.'],
					[WhitespacesNode, 39, 40, 2, ' '],
					[MultipleLinesCommentNode, 40, 45, 2, '/*c*/', [
						[MultipleLinesCommentStartMarkNode, 40, 42, 2, '/*'],
						[CharsNode, 42, 43, 2, 'c'],
						[MultipleLinesCommentEndMarkNode, 43, 45, 2, '*/']
					]],
					[IdentifierNode, 45, 48, 2, '1df'],
					[MultipleLinesCommentNode, 48, 53, 2, '/*d*/', [
						[MultipleLinesCommentStartMarkNode, 48, 50, 2, '/*'],
						[CharsNode, 50, 51, 2, 'd'],
						[MultipleLinesCommentEndMarkNode, 51, 53, 2, '*/']
					]],
					[WhitespacesNode, 53, 54, 2, ' '],
					[AsNode, 54, 56, 2, 'as'],
					[WhitespacesNode, 56, 57, 2, ' '],
					[IdentifierNode, 57, 59, 2, '$1']
				]],
				[NewLineNode, 59, 60, 2, '\n']
			]
		]);
	});
	test('Import declaration #8', async () => {
		const text = 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ . *\n';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 58, 0, text, [
				[ImportDeclarationNode, 0, 57, 1, 'import /* 0 */ static/* a */ abc/*b\n*/. /*c*/1df/*d*/ . *', [
					[ImportNode, 0, 6, 1, 'import'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[MultipleLinesCommentNode, 7, 14, 1, '/* 0 */', [
						[MultipleLinesCommentStartMarkNode, 7, 9, 1, '/*'],
						[WhitespacesNode, 9, 10, 1, ' '],
						[CharsNode, 10, 11, 1, '0'],
						[WhitespacesNode, 11, 12, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 12, 14, 1, '*/']
					]],
					[WhitespacesNode, 14, 15, 1, ' '],
					[StaticNode, 15, 21, 1, 'static'],
					[MultipleLinesCommentNode, 21, 28, 1, '/* a */', [
						[MultipleLinesCommentStartMarkNode, 21, 23, 1, '/*'],
						[WhitespacesNode, 23, 24, 1, ' '],
						[CharsNode, 24, 25, 1, 'a'],
						[WhitespacesNode, 25, 26, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 26, 28, 1, '*/']
					]],
					[WhitespacesNode, 28, 29, 1, ' '],
					[IdentifierNode, 29, 32, 1, 'abc'],
					[MultipleLinesCommentNode, 32, 38, 1, '/*b\n*/', [
						[MultipleLinesCommentStartMarkNode, 32, 34, 1, '/*'],
						[CharsNode, 34, 35, 1, 'b'],
						[NewLineNode, 35, 36, 1, '\n'],
						[MultipleLinesCommentEndMarkNode, 36, 38, 2, '*/']
					]],
					[DotNode, 38, 39, 2, '.'],
					[WhitespacesNode, 39, 40, 2, ' '],
					[MultipleLinesCommentNode, 40, 45, 2, '/*c*/', [
						[MultipleLinesCommentStartMarkNode, 40, 42, 2, '/*'],
						[CharsNode, 42, 43, 2, 'c'],
						[MultipleLinesCommentEndMarkNode, 43, 45, 2, '*/']
					]],
					[IdentifierNode, 45, 48, 2, '1df'],
					[MultipleLinesCommentNode, 48, 53, 2, '/*d*/', [
						[MultipleLinesCommentStartMarkNode, 48, 50, 2, '/*'],
						[CharsNode, 50, 51, 2, 'd'],
						[MultipleLinesCommentEndMarkNode, 51, 53, 2, '*/']
					]],
					[WhitespacesNode, 53, 54, 2, ' '],
					[DotNode, 54, 55, 2, '.'],
					[WhitespacesNode, 55, 56, 2, ' '],
					[MultipleNode, 56, 57, 2, '*']
				]],
				[NewLineNode, 57, 58, 2, '\n']
			]
		]);
	});
});
