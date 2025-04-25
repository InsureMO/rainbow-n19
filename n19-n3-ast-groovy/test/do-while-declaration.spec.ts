import {
	CompilationUnitNode,
	DoNode,
	DoWhileBodyNode,
	DoWhileDeclarationNode,
	GroovyAstBuilder,
	LBraceNode,
	NewLineNode,
	RBraceNode,
	WhileNode,
	WhitespacesNode
} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Do-While declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Do-While declaration #1', async () => {
		const text = 'do';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 2, 0, text, [
				[DoWhileDeclarationNode, 0, 2, 1, 'do', [
					[DoNode, 0, 2, 1, 'do']
				]]
			]
		]);
	});
	test('Do-While declaration #2', async () => {
		const text = 'do {}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 5, 0, text, [
				[DoWhileDeclarationNode, 0, 5, 1, 'do {}', [
					[DoNode, 0, 2, 1, 'do'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[DoWhileBodyNode, 3, 5, 1, '{}', [
						[LBraceNode, 3, 4, 1, '{'],
						[RBraceNode, 4, 5, 1, '}']
					]]
				]]
			]
		]);
	});
	test('Do-While declaration #3', async () => {
		const text = 'do {}\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 6, 0, text, [
				[DoWhileDeclarationNode, 0, 6, 1, 'do {}\n', [
					[DoNode, 0, 2, 1, 'do'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[DoWhileBodyNode, 3, 5, 1, '{}', [
						[LBraceNode, 3, 4, 1, '{'],
						[RBraceNode, 4, 5, 1, '}']
					]],
					[NewLineNode, 5, 6, 1, '\n']
				]]
			]
		]);
	});
	test('Do-While declaration #4', async () => {
		const text = 'do while';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 8, 0, text, [
				[DoWhileDeclarationNode, 0, 8, 1, 'do while', [
					[DoNode, 0, 2, 1, 'do'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[WhileNode, 3, 8, 1, 'while']
				]]
			]
		]);
	});
});
