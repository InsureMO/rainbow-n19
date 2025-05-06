import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Single line comment test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Single line comment #1', async () => {
		const text = '// todo abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.SingleLineComment, 0, 11, 1, text, [
					[TokenId.SingleLineCommentStartMark, 0, 2, 1, '//'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.CommentKeyword, 3, 7, 1, 'todo'],
					[TokenId.Whitespaces, 7, 8, 1, ' '],
					[TokenId.CommentHighlightChars, 8, 11, 1, 'abc']
				]]
			]
		]);
	});
	test('Single line comment #2', async () => {
		const text = '// abc\t\tdef xyz';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 15, 0, text, [
				[TokenId.SingleLineComment, 0, 15, 1, text, [
					[TokenId.SingleLineCommentStartMark, 0, 2, 1, '//'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.Chars, 3, 6, 1, 'abc'],
					[TokenId.Tabs, 6, 8, 1, '\t\t'],
					[TokenId.Chars, 8, 11, 1, 'def'],
					[TokenId.Whitespaces, 11, 12, 1, ' '],
					[TokenId.Chars, 12, 15, 1, 'xyz']
				]]
			]
		]);
	});
	test('Single line comment #3', async () => {
		const text = `// abc\t\tdef xyz\n\t// 2nd line`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 28, 0, text, [
				[TokenId.SingleLineComment, 0, 15, 1, '// abc\t\tdef xyz', [
					[TokenId.SingleLineCommentStartMark, 0, 2, 1, '//'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.Chars, 3, 6, 1, 'abc'],
					[TokenId.Tabs, 6, 8, 1, '\t\t'],
					[TokenId.Chars, 8, 11, 1, 'def'],
					[TokenId.Whitespaces, 11, 12, 1, ' '],
					[TokenId.Chars, 12, 15, 1, 'xyz']
				]],
				[TokenId.NewLine, 15, 16, 1, '\n'],
				[TokenId.Tabs, 16, 17, 2, '\t'],
				[TokenId.SingleLineComment, 17, 28, 2, '// 2nd line', [
					[TokenId.SingleLineCommentStartMark, 17, 19, 2, '//'],
					[TokenId.Whitespaces, 19, 20, 2, ' '],
					[TokenId.Chars, 20, 23, 2, '2nd'],
					[TokenId.Whitespaces, 23, 24, 2, ' '],
					[TokenId.Chars, 24, 28, 2, 'line']
				]]
			]
		]);
	});
	test('Single line comment #4', async () => {
		const text = `// todo\t\tdef\n\t// 2nd line\n//  3rd`;
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 33, 0, text, [
				[TokenId.SingleLineComment, 0, 12, 1, '// todo\t\tdef', [
					[TokenId.SingleLineCommentStartMark, 0, 2, 1, '//'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.CommentKeyword, 3, 7, 1, 'todo'],
					[TokenId.Tabs, 7, 9, 1, '\t\t'],
					[TokenId.CommentHighlightChars, 9, 12, 1, 'def']
				]],
				[TokenId.NewLine, 12, 13, 1, '\n'],
				[TokenId.Tabs, 13, 14, 2, '\t'],
				[TokenId.SingleLineComment, 14, 25, 2, '// 2nd line', [
					[TokenId.SingleLineCommentStartMark, 14, 16, 2, '//'],
					[TokenId.Whitespaces, 16, 17, 2, ' '],
					[TokenId.CommentHighlightChars, 17, 20, 2, '2nd'],
					[TokenId.Whitespaces, 20, 21, 2, ' '],
					[TokenId.CommentHighlightChars, 21, 25, 2, 'line']
				]],
				[TokenId.NewLine, 25, 26, 2, '\n'],
				[TokenId.SingleLineComment, 26, 33, 3, '//  3rd', [
					[TokenId.SingleLineCommentStartMark, 26, 28, 3, '//'],
					[TokenId.Whitespaces, 28, 30, 3, '  '],
					[TokenId.CommentHighlightChars, 30, 33, 3, '3rd']
				]]
			]
		]);
	});
});
