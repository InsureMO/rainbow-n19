import {
	AstBuilder,
	CharsNode,
	CommentKeywordNode,
	CompilationUnitNode,
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	MultipleNode,
	NewLineNode,
	WhitespacesNode
} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Multiple lines comment test', () => {
	test('Multiple lines comment #1', async () => {
		const text = '/* todo abc\n * def\r\n * xyz\r */';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 30, 0, text, [
				[MultipleLinesCommentNode, 0, 30, 1, text, [
					[MultipleLinesCommentStartMarkNode, 0, 2, 1, '/*'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[CommentKeywordNode, 3, 7, 1, 'todo'],
					[WhitespacesNode, 7, 8, 1, ' '],
					[CharsNode, 8, 11, 1, 'abc'],
					[NewLineNode, 11, 12, 1, '\n'],
					[WhitespacesNode, 12, 13, 2, ' '],
					[MultipleNode, 13, 14, 2, '*'],
					[WhitespacesNode, 14, 15, 2, ' '],
					[CharsNode, 15, 18, 2, 'def'],
					[NewLineNode, 18, 20, 2, '\r\n'],
					[WhitespacesNode, 20, 21, 3, ' '],
					[MultipleNode, 21, 22, 3, '*'],
					[WhitespacesNode, 22, 23, 3, ' '],
					[CharsNode, 23, 26, 3, 'xyz'],
					[NewLineNode, 26, 27, 3, '\r'],
					[WhitespacesNode, 27, 28, 4, ' '],
					[MultipleLinesCommentEndMarkNode, 28, 30, 4, '*/']
				]]
			]
		]);
	});
	test('Multiple lines comment not closed', async () => {
		const text = '/* todo abc';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 11, 0, text, [
				[MultipleLinesCommentNode, 0, 11, 1, text, [
					[MultipleLinesCommentStartMarkNode, 0, 2, 1, '/*'],
					[WhitespacesNode, 2, 3, 1, ' '],
					[CommentKeywordNode, 3, 7, 1, 'todo'],
					[WhitespacesNode, 7, 8, 1, ' '],
					[CharsNode, 8, 11, 1, 'abc']
				]]
			]
		]);
	});
});
