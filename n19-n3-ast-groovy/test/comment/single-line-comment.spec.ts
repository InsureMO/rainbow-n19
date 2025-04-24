import {
	CharsNode,
	CommentKeywordNode,
	CompilationUnitNode,
	GroovyAstBuilder,
	NewLineNode,
	SingleLineCommentNode,
	SingleLineCommentStartMarkNode,
	TabsNode,
	WhitespacesNode
} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Single line comment test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Single line comment #1', async () => {
		const text = '// todo abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 11, 0, text, [
				[SingleLineCommentNode, 0, 11, 1, text, [
					[SingleLineCommentStartMarkNode, 0, 2, 1, '//'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[CommentKeywordNode, 3, 7, 1, 'todo'],
					[WhitespacesNode, 7, 8, 1, ' '],
					[CharsNode, 8, 11, 1, 'abc']
				]]
			]
		]);
	});
	test('Single line comment #2', async () => {
		const text = '// abc\t\tdef xyz';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 15, 0, text, [
				[SingleLineCommentNode, 0, 15, 1, text, [
					[SingleLineCommentStartMarkNode, 0, 2, 1, '//'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[CharsNode, 3, 6, 1, 'abc'],
					[TabsNode, 6, 8, 1, '\t\t'],
					[CharsNode, 8, 11, 1, 'def'],
					[WhitespacesNode, 11, 12, 1, ' '],
					[CharsNode, 12, 15, 1, 'xyz']
				]]
			]
		]);
	});
	test('Single line comment #2', async () => {
		const text = `// abc\t\tdef xyz
	// 2nd line`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 28, 0, text, [
				[SingleLineCommentNode, 0, 15, 1, '// abc\t\tdef xyz', [
					[SingleLineCommentStartMarkNode, 0, 2, 1, '//'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[CharsNode, 3, 6, 1, 'abc'],
					[TabsNode, 6, 8, 1, '\t\t'],
					[CharsNode, 8, 11, 1, 'def'],
					[WhitespacesNode, 11, 12, 1, ' '],
					[CharsNode, 12, 15, 1, 'xyz']
				]],
				[NewLineNode, 15, 16, 1, '\n'],
				[TabsNode, 16, 17, 2, '\t'],
				[SingleLineCommentNode, 17, 28, 2, '// 2nd line', [
					[SingleLineCommentStartMarkNode, 17, 19, 2, '//'],
					[WhitespacesNode, 19, 20, 2, ' '],
					[CharsNode, 20, 23, 2, '2nd'],
					[WhitespacesNode, 23, 24, 2, ' '],
					[CharsNode, 24, 28, 2, 'line']
				]]
			]
		]);

	});
});
