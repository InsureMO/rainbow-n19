import {
	CompilationUnitNode,
	GroovyAstBuilder,
	LBraceNode,
	NewLineNode,
	RBraceNode,
	WhileBodyNode,
	WhileDeclarationNode,
	WhileNode,
	WhitespacesNode
} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('While declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('While declaration #1', async () => {
		const text = 'while';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 5, 0, text, [
				[WhileDeclarationNode, 0, 5, 1, 'while', [
					[WhileNode, 0, 5, 1, 'while']
				]]
			]
		]);
	});
	test('While declaration #2', async () => {
		const text = 'while {}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 8, 0, text, [
				[WhileDeclarationNode, 0, 8, 1, 'while {}', [
					[WhileNode, 0, 5, 1, 'while'],
					[WhitespacesNode, 5, 6, 1, ' '],
					[WhileBodyNode, 6, 8, 1, '{}', [
						[LBraceNode, 6, 7, 1, '{'],
						[RBraceNode, 7, 8, 1, '}']
					]]
				]]
			]
		]);
	});
	test('While declaration #3', async () => {
		const text = 'while {}\n';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 9, 0, text, [
				[WhileDeclarationNode, 0, 8, 1, 'while {}', [
					[WhileNode, 0, 5, 1, 'while'],
					[WhitespacesNode, 5, 6, 1, ' '],
					[WhileBodyNode, 6, 8, 1, '{}', [
						[LBraceNode, 6, 7, 1, '{'],
						[RBraceNode, 7, 8, 1, '}']
					]]
				]],
				[NewLineNode, 8, 9, 1, '\n']
			]
		]);
	});
});
