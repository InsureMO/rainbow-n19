import {GroovyAstBuilder, TokenId} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Type declaration test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Interface declaration #1', async () => {
		const text = 'public interface';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 16, 0, text, [
				[TokenId.InterfaceDeclaration, 0, 16, 1, text, [
					[TokenId.PUBLIC, 0, 6, 1, 'public'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.INTERFACE, 7, 16, 1, 'interface']
				]]
			]
		]);
	});
	test('Class declaration #2', async () => {
		const text = 'sealed public abstract protected private static // sl\n\tfinal /*a\n*/ strictfp \nnon-sealed   \t class';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 98, 0, text, [
				[TokenId.ClassDeclaration, 0, 98, 1, text, [
					[TokenId.SEALED, 0, 6, 1, 'sealed'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.PUBLIC, 7, 13, 1, 'public'],
					[TokenId.Whitespaces, 13, 14, 1, ' '],
					[TokenId.ABSTRACT, 14, 22, 1, 'abstract'],
					[TokenId.Whitespaces, 22, 23, 1, ' '],
					[TokenId.PROTECTED, 23, 32, 1, 'protected'],
					[TokenId.Whitespaces, 32, 33, 1, ' '],
					[TokenId.PRIVATE, 33, 40, 1, 'private'],
					[TokenId.Whitespaces, 40, 41, 1, ' '],
					[TokenId.STATIC, 41, 47, 1, 'static'],
					[TokenId.Whitespaces, 47, 48, 1, ' '],
					[TokenId.SingleLineComment, 48, 53, 1, '// sl', [
						[TokenId.SingleLineCommentStartMark, 48, 50, 1, '//'],
						[TokenId.Whitespaces, 50, 51, 1, ' '],
						[TokenId.Chars, 51, 53, 1, 'sl']
					]],
					[TokenId.NewLine, 53, 54, 1, '\n'],
					[TokenId.Tabs, 54, 55, 2, '\t'],
					[TokenId.FINAL, 55, 60, 2, 'final'],
					[TokenId.Whitespaces, 60, 61, 2, ' '],
					[TokenId.MultipleLinesComment, 61, 67, 2, '/*a\n*/', [
						[TokenId.MultipleLinesCommentStartMark, 61, 63, 2, '/*'],
						[TokenId.Chars, 63, 64, 2, 'a'],
						[TokenId.NewLine, 64, 65, 2, '\n'],
						[TokenId.MultipleLinesCommentEndMark, 65, 67, 3, '*/']
					]],
					[TokenId.Whitespaces, 67, 68, 3, ' '],
					[TokenId.STRICTFP, 68, 76, 3, 'strictfp'],
					[TokenId.Whitespaces, 76, 77, 3, ' '],
					[TokenId.NewLine, 77, 78, 3, '\n'],
					[TokenId.NON_SEALED, 78, 88, 4, 'non-sealed'],
					[TokenId.Whitespaces, 88, 91, 4, '   '],
					[TokenId.Tabs, 91, 92, 4, '\t'],
					[TokenId.Whitespaces, 92, 93, 4, ' '],
					[TokenId.CLASS, 93, 98, 4, 'class']
				]]
			]
		]);
	});
	test('Class declaration #3', async () => {
		const text = 'public abstract class AbstractA {\n}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 35, 0, text, [
				[TokenId.ClassDeclaration, 0, 35, 1, text, [
					[TokenId.PUBLIC, 0, 6, 1, 'public'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.ABSTRACT, 7, 15, 1, 'abstract'],
					[TokenId.Whitespaces, 15, 16, 1, ' '],
					[TokenId.CLASS, 16, 21, 1, 'class'],
					[TokenId.Whitespaces, 21, 22, 1, ' '],
					[TokenId.Identifier, 22, 31, 1, 'AbstractA'],
					[TokenId.Whitespaces, 31, 32, 1, ' '],
					[TokenId.ClassBody, 32, 35, 1, '{\n}', [
						[TokenId.LBrace, 32, 33, 1, '{'],
						[TokenId.NewLine, 33, 34, 1, '\n'],
						[TokenId.RBrace, 34, 35, 2, '}']
					]]
				]]
			]
		]);
	});
	test('Interface declaration #4', async () => {
		const text = '/**/public interface';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 20, 0, text, [
				[TokenId.MultipleLinesComment, 0, 4, 1, '/**/', [
					[TokenId.MultipleLinesCommentStartMark, 0, 2, 1, '/*'],
					[TokenId.MultipleLinesCommentEndMark, 2, 4, 1, '*/']
				]],
				[TokenId.InterfaceDeclaration, 4, 20, 1, 'public interface', [
					[TokenId.PUBLIC, 4, 10, 1, 'public'],
					[TokenId.Whitespaces, 10, 11, 1, ' '],
					[TokenId.INTERFACE, 11, 20, 1, 'interface']
				]]
			]
		]);
	});
	test('Class declaration #5', async () => {
		const text = 'public abstract class AbstractA {\n\tstatic /* abc */{\n\t}\n}';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 57, 0, text, [
				[TokenId.ClassDeclaration, 0, 57, 1, text, [
					[TokenId.PUBLIC, 0, 6, 1, 'public'],
					[TokenId.Whitespaces, 6, 7, 1, ' '],
					[TokenId.ABSTRACT, 7, 15, 1, 'abstract'],
					[TokenId.Whitespaces, 15, 16, 1, ' '],
					[TokenId.CLASS, 16, 21, 1, 'class'],
					[TokenId.Whitespaces, 21, 22, 1, ' '],
					[TokenId.Identifier, 22, 31, 1, 'AbstractA'],
					[TokenId.Whitespaces, 31, 32, 1, ' '],
					[TokenId.ClassBody, 32, 57, 1, '{\n\tstatic /* abc */{\n\t}\n}', [
						[TokenId.LBrace, 32, 33, 1, '{'],
						[TokenId.NewLine, 33, 34, 1, '\n'],
						[TokenId.Tabs, 34, 35, 2, '\t'],
						[TokenId.StaticBlockDeclaration, 35, 55, 2, 'static /* abc */{\n\t}', [
							[TokenId.STATIC, 35, 41, 2, 'static'],
							[TokenId.Whitespaces, 41, 42, 2, ' '],
							[TokenId.MultipleLinesComment, 42, 51, 2, '/* abc */', [
								[TokenId.MultipleLinesCommentStartMark, 42, 44, 2, '/*'],
								[TokenId.Whitespaces, 44, 45, 2, ' '],
								[TokenId.Chars, 45, 48, 2, 'abc'],
								[TokenId.Whitespaces, 48, 49, 2, ' '],
								[TokenId.MultipleLinesCommentEndMark, 49, 51, 2, '*/']
							]],
							[TokenId.StaticBlockBody, 51, 55, 2, '{\n\t}', [
								[TokenId.LBrace, 51, 52, 2, '{'],
								[TokenId.NewLine, 52, 53, 2, '\n'],
								[TokenId.Tabs, 53, 54, 3, '\t'],
								[TokenId.RBrace, 54, 55, 3, '}']
							]]
						]],
						[TokenId.NewLine, 55, 56, 3, '\n'],
						[TokenId.RBrace, 56, 57, 4, '}']
					]]
				]]
			]
		]);
	});
});
