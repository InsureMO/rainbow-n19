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
					[TokenId.Chars, 8, 11, 1, 'abc'],
					[TokenId.NewLine, 11, 12, 1, '\n'],
					[TokenId.Whitespaces, 12, 13, 2, ' '],
					[TokenId.Multiple, 13, 14, 2, '*'],
					[TokenId.Whitespaces, 14, 15, 2, ' '],
					[TokenId.Chars, 15, 18, 2, 'def'],
					[TokenId.NewLine, 18, 20, 2, '\r\n'],
					[TokenId.Whitespaces, 20, 21, 3, ' '],
					[TokenId.Multiple, 21, 22, 3, '*'],
					[TokenId.Whitespaces, 22, 23, 3, ' '],
					[TokenId.Chars, 23, 26, 3, 'xyz'],
					[TokenId.NewLine, 26, 27, 3, '\r'],
					[TokenId.Whitespaces, 27, 28, 4, ' '],
					[TokenId.MultipleLinesCommentEndMark, 28, 30, 4, '*/']
				]]
			]
		]);
	});
	test('Multiple lines comment not closed', async () => {
		const text = '/* todo abc';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 11, 0, text, [
				[TokenId.MultipleLinesComment, 0, 11, 1, text, [
					[TokenId.MultipleLinesCommentStartMark, 0, 2, 1, '/*'],
					[TokenId.Whitespaces, 2, 3, 1, ' '],
					[TokenId.CommentKeyword, 3, 7, 1, 'todo'],
					[TokenId.Whitespaces, 7, 8, 1, ' '],
					[TokenId.Chars, 8, 11, 1, 'abc']
				]]
			]
		]);
	});
});
