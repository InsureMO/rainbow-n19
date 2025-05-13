import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker, NodeSpec} from '../utils/ast-checker';

describe('If declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('If declaration #1', async () => {
		const text = 'if';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 2, 0, text, [
				[TokenId.IfDeclaration, 0, 2, 1, 'if', [
					[TokenId.IfIfDeclaration, 0, 2, 1, 'if', [
						[TokenId.IF, 0, 2, 1, 'if']
					]]
				]]
			]
		]);
	});
	const IfIfDeclarationNodesFor2And3: NodeSpec = [
		TokenId.IfIfDeclaration, 0, 13, 1, 'if (true) {\n}', [
			[TokenId.IF, 0, 2, 1, 'if'],
			[TokenId.Whitespaces, 2, 3, 1, ' '],
			[TokenId.ParenBlock, 3, 9, 1, '(true)', [
				[TokenId.LParen, 3, 4, 1, '('],
				[TokenId.BooleanLiteral, 4, 8, 1, 'true'],
				[TokenId.RParen, 8, 9, 1, ')']
			]],
			[TokenId.Whitespaces, 9, 10, 1, ' '],
			[TokenId.IfIfBody, 10, 13, 1, '{\n}', [
				[TokenId.LBrace, 10, 11, 1, '{'],
				[TokenId.NewLine, 11, 12, 1, '\n'],
				[TokenId.RBrace, 12, 13, 2, '}']
			]]
		]];
	test('If declaration #2', async () => {
		const text = 'if (true) {\n}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 13, 0, text, [
				[TokenId.IfDeclaration, 0, 13, 1, 'if (true) {\n}', [
					IfIfDeclarationNodesFor2And3
				]]
			]
		]);
	});
	test('If declaration #3', async () => {
		const text = 'if (true) {\n} else {\n}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 22, 0, text, [
				[TokenId.IfDeclaration, 0, 22, 1, 'if (true) {\n} else {\n}', [
					IfIfDeclarationNodesFor2And3,
					[TokenId.Whitespaces, 13, 14, 2, ' '],
					[TokenId.IfElseDeclaration, 14, 22, 2, 'else {\n}', [
						[TokenId.ELSE, 14, 18, 2, 'else'],
						[TokenId.Whitespaces, 18, 19, 2, ' '],
						[TokenId.IfElseBody, 19, 22, 2, '{\n}', [
							[TokenId.LBrace, 19, 20, 2, '{'],
							[TokenId.NewLine, 20, 21, 2, '\n'],
							[TokenId.RBrace, 21, 22, 3, '}']
						]]
					]]
				]]
			]
		]);
	});
	test('If declaration #3', async () => {
		const text = 'if (true) {\n} else if (true) {\n} else {\n}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 41, 0, text, [
				[TokenId.IfDeclaration, 0, 41, 1, 'if (true) {\n} else if (true) {\n} else {\n}', [
					IfIfDeclarationNodesFor2And3,
					[TokenId.Whitespaces, 13, 14, 2, ' '],
					[TokenId.IfElseIfDeclaration, 14, 32, 2, 'else if (true) {\n}', [
						[TokenId.ELSE, 14, 18, 2, 'else'],
						[TokenId.Whitespaces, 18, 19, 2, ' '],
						[TokenId.IF, 19, 21, 2, 'if'],
						[TokenId.Whitespaces, 21, 22, 2, ' '],
						[TokenId.ParenBlock, 22, 28, 2, '(true)', [
							[TokenId.LParen, 22, 23, 2, '('],
							[TokenId.BooleanLiteral, 23, 27, 2, 'true'],
							[TokenId.RParen, 27, 28, 2, ')']
						]],
						[TokenId.Whitespaces, 28, 29, 2, ' '],
						[TokenId.IfElseIfBody, 29, 32, 2, '{\n}', [
							[TokenId.LBrace, 29, 30, 2, '{'],
							[TokenId.NewLine, 30, 31, 2, '\n'],
							[TokenId.RBrace, 31, 32, 3, '}']
						]]
					]],
					[TokenId.Whitespaces, 32, 33, 3, ' '],
					[TokenId.IfElseDeclaration, 33, 41, 3, 'else {\n}', [
						[TokenId.ELSE, 33, 37, 3, 'else'],
						[TokenId.Whitespaces, 37, 38, 3, ' '],
						[TokenId.IfElseBody, 38, 41, 3, '{\n}', [
							[TokenId.LBrace, 38, 39, 3, '{'],
							[TokenId.NewLine, 39, 40, 3, '\n'],
							[TokenId.RBrace, 40, 41, 4, '}']
						]]
					]]
				]]
			]
		]);
	});
});
