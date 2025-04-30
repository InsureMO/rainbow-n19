import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Multiple lines comment test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Multiple lines comment #1', async () => {
		const text = '/* todo abc\n * def\r\n * xyz\r */';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 30, 0, text, [
				[TokenId.MultipleLinesComment, 0, 30, 1, text, [
					[TokenId.MultipleLinesCommentStartMark, 0, 2, 1, '/*'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.CommentKeyword, 3, 7, 1, 'todo'],
					[TokenId.Whitespaces, 7, 8, 1, ' '],
					[TokenId.CommentHighlightChars, 8, 11, 1, 'abc'],
					[TokenId.NewLine, 11, 12, 1, '\n'],
					[TokenId.Whitespaces, 12, 13, 2, ' '],
					[TokenId.MultipleLinesCommentsHeadAsterisks, 13, 14, 2, '*'],
					[TokenId.Whitespaces, 14, 15, 2, ' '],
					[TokenId.Chars, 15, 18, 2, 'def'],
					[TokenId.NewLine, 18, 20, 2, '\r\n'],
					[TokenId.Whitespaces, 20, 21, 3, ' '],
					[TokenId.MultipleLinesCommentsHeadAsterisks, 21, 22, 3, '*'],
					[TokenId.Whitespaces, 22, 23, 3, ' '],
					[TokenId.Chars, 23, 27, 3, 'xyz\r'],
					[TokenId.Whitespaces, 27, 28, 3, ' '],
					[TokenId.MultipleLinesCommentEndMark, 28, 30, 3, '*/']
				]]
			]
		]);
	});
	test('Multiple lines comment #2', async () => {
		const text = '/* todo abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.MultipleLinesComment, 0, 11, 1, text, [
					[TokenId.MultipleLinesCommentStartMark, 0, 2, 1, '/*'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.CommentKeyword, 3, 7, 1, 'todo'],
					[TokenId.Whitespaces, 7, 8, 1, ' '],
					[TokenId.CommentHighlightChars, 8, 11, 1, 'abc']
				]]
			]
		]);
	});
	test('Multiple lines comment #3', async () => {
		const text = '/* todo abc\n *  def\r\n ** xyz\r\n * abc\n */';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 40, 0, text, [
				[TokenId.MultipleLinesComment, 0, 40, 1, text, [
					[TokenId.MultipleLinesCommentStartMark, 0, 2, 1, '/*'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.CommentKeyword, 3, 7, 1, 'todo'],
					[TokenId.Whitespaces, 7, 8, 1, ' '],
					[TokenId.CommentHighlightChars, 8, 11, 1, 'abc'],
					[TokenId.NewLine, 11, 12, 1, '\n'],
					[TokenId.Whitespaces, 12, 13, 2, ' '],
					[TokenId.MultipleLinesCommentsHeadAsterisks, 13, 14, 2, '*'],
					[TokenId.Whitespaces, 14, 16, 2, '  '],
					[TokenId.CommentHighlightChars, 16, 19, 2, 'def'],
					[TokenId.NewLine, 19, 21, 2, '\r\n'],
					[TokenId.Whitespaces, 21, 22, 3, ' '],
					[TokenId.MultipleLinesCommentsHeadAsterisks, 22, 24, 3, '**'],
					[TokenId.Whitespaces, 24, 25, 3, ' '],
					[TokenId.CommentHighlightChars, 25, 28, 3, 'xyz'],
					[TokenId.NewLine, 28, 30, 3, '\r\n'],
					[TokenId.Whitespaces, 30, 31, 4, ' '],
					[TokenId.MultipleLinesCommentsHeadAsterisks, 31, 32, 4, '*'],
					[TokenId.Whitespaces, 32, 33, 4, ' '],
					[TokenId.Chars, 33, 36, 4, 'abc'],
					[TokenId.NewLine, 36, 37, 4, '\n'],
					[TokenId.Whitespaces, 37, 38, 5, ' '],
					[TokenId.MultipleLinesCommentEndMark, 38, 40, 5, '*/']
				]]
			]
		]);
	});
});
