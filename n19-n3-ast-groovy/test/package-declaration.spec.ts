import {
	GroovyAstBuilder,
	CharsNode,
	CompilationUnitNode,
	DotNode,
	IdentifierNode,
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	NewLineNode,
	PackageDeclarationNode,
	PackageNode,
	SemicolonNode,
	WhitespacesNode
} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Package declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Package declaration #1', async () => {
		const text = 'package\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 8, 0, text, [
				[PackageDeclarationNode, 0, 7, 1, 'package', [
					[PackageNode, 0, 7, 1, 'package']
				]],
				[NewLineNode, 7, 8, 1, '\n']
			]
		]);
	});
	test('Package declaration #2', async () => {
		const text = 'package$';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 8, 0, text, [
				[IdentifierNode, 0, 8, 1, 'package$']
			]
		]);
	});
	test('Package declaration #3', async () => {
		const text = 'package.';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 8, 0, text, [
				[PackageDeclarationNode, 0, 8, 1, text, [
					[PackageNode, 0, 7, 1, 'package'],
					[DotNode, 7, 8, 1, '.']
				]]
			]
		]);
	});
	test('Package declaration #4', async () => {
		const text = 'package abc.1df';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 15, 0, text, [
				[PackageDeclarationNode, 0, 15, 1, text, [
					[PackageNode, 0, 7, 1, 'package'],
					[WhitespacesNode, 7, 8, 1, ' '],
					[IdentifierNode, 8, 11, 1, 'abc'],
					[DotNode, 11, 12, 1, '.'],
					[IdentifierNode, 12, 15, 1, '1df']
				]]
			]
		]);
	});
	test('Package declaration #5', async () => {
		const text = 'package/* a */ abc/*b*/. /*c*/1df/*d*/\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 39, 0, text, [
				[PackageDeclarationNode, 0, 38, 1, 'package/* a */ abc/*b*/. /*c*/1df/*d*/', [
					[PackageNode, 0, 7, 1, 'package'],
					[MultipleLinesCommentNode, 7, 14, 1, '/* a */', [
						[MultipleLinesCommentStartMarkNode, 7, 9, 1, '/*'],
						[WhitespacesNode, 9, 10, 1, ' '],
						[CharsNode, 10, 11, 1, 'a'],
						[WhitespacesNode, 11, 12, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 12, 14, 1, '*/']
					]],
					[WhitespacesNode, 14, 15, 1, ' '],
					[IdentifierNode, 15, 18, 1, 'abc'],
					[MultipleLinesCommentNode, 18, 23, 1, '/*b*/', [
						[MultipleLinesCommentStartMarkNode, 18, 20, 1, '/*'],
						[CharsNode, 20, 21, 1, 'b'],
						[MultipleLinesCommentEndMarkNode, 21, 23, 1, '*/']
					]],
					[DotNode, 23, 24, 1, '.'],
					[WhitespacesNode, 24, 25, 1, ' '],
					[MultipleLinesCommentNode, 25, 30, 1, '/*c*/', [
						[MultipleLinesCommentStartMarkNode, 25, 27, 1, '/*'],
						[CharsNode, 27, 28, 1, 'c'],
						[MultipleLinesCommentEndMarkNode, 28, 30, 1, '*/']
					]],
					[IdentifierNode, 30, 33, 1, '1df'],
					[MultipleLinesCommentNode, 33, 38, 1, '/*d*/', [
						[MultipleLinesCommentStartMarkNode, 33, 35, 1, '/*'],
						[CharsNode, 35, 36, 1, 'd'],
						[MultipleLinesCommentEndMarkNode, 36, 38, 1, '*/']
					]]
				]],
				[NewLineNode, 38, 39, 1, '\n']
			]
		]);
	});
	test('Package declaration #6', async () => {
		const text = 'package/* a */ abc/*b\n*/.; /*c*/1df/*d*/\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 41, 0, text, [
				[PackageDeclarationNode, 0, 26, 1, 'package/* a */ abc/*b\n*/.;', [
					[PackageNode, 0, 7, 1, 'package'],
					[MultipleLinesCommentNode, 7, 14, 1, '/* a */', [
						[MultipleLinesCommentStartMarkNode, 7, 9, 1, '/*'],
						[WhitespacesNode, 9, 10, 1, ' '],
						[CharsNode, 10, 11, 1, 'a'],
						[WhitespacesNode, 11, 12, 1, ' '],
						[MultipleLinesCommentEndMarkNode, 12, 14, 1, '*/']
					]],
					[WhitespacesNode, 14, 15, 1, ' '],
					[IdentifierNode, 15, 18, 1, 'abc'],
					[MultipleLinesCommentNode, 18, 24, 1, '/*b\n*/', [
						[MultipleLinesCommentStartMarkNode, 18, 20, 1, '/*'],
						[CharsNode, 20, 21, 1, 'b'],
						[NewLineNode, 21, 22, 1, '\n'],
						[MultipleLinesCommentEndMarkNode, 22, 24, 2, '*/']
					]],
					[DotNode, 24, 25, 2, '.'],
					[SemicolonNode, 25, 26, 2, ';']
				]],
				[WhitespacesNode, 26, 27, 2, ' '],
				[MultipleLinesCommentNode, 27, 32, 2, '/*c*/', [
					[MultipleLinesCommentStartMarkNode, 27, 29, 2, '/*'],
					[CharsNode, 29, 30, 2, 'c'],
					[MultipleLinesCommentEndMarkNode, 30, 32, 2, '*/']
				]],
				[IdentifierNode, 32, 35, 2, '1df'],
				[MultipleLinesCommentNode, 35, 40, 2, '/*d*/', [
					[MultipleLinesCommentStartMarkNode, 35, 37, 2, '/*'],
					[CharsNode, 37, 38, 2, 'd'],
					[MultipleLinesCommentEndMarkNode, 38, 40, 2, '*/']
				]],
				[NewLineNode, 40, 41, 2, '\n']
			]
		]);
	});
});
