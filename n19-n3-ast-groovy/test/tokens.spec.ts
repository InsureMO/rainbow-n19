import {CompilationUnitNode, GroovyAstBuilder, TokenId} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Token test', () => {
	test('Token #1', async () => {
		const text = 'do public //abc\n\r\n\n/*  def */';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 29, 0, text, [
				[TokenId.DO, 0, 2, 1, 'do'],
				[TokenId.Whitespaces, 2, 3, 1, ' '],
				[TokenId.PUBLIC, 3, 9, 1, 'public'],
				[TokenId.Whitespaces, 9, 10, 1, ' '],
				[TokenId.SingleLineCommentStartMark, 10, 12, 1, '//'],
				[TokenId.Identifier, 12, 15, 1, 'abc'],
				[TokenId.NewLine, 15, 16, 1, '\n'],
				[TokenId.NewLine, 16, 18, 2, '\r\n'],
				[TokenId.NewLine, 18, 19, 3, '\n'],
				[TokenId.MultipleLinesCommentStartMark, 19, 21, 4, '/*'],
				[TokenId.Whitespaces, 21, 23, 4, '  '],
				[TokenId.DEF, 23, 26, 4, 'def'],
				[TokenId.Whitespaces, 26, 27, 4, ' '],
				[TokenId.MultipleLinesCommentEndMark, 27, 29, 4, '*/'],
			]
		]);
	});
});