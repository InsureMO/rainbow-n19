import * as fs from 'fs';
import * as path from 'path';
import {GroovyAstBuilder, TokenId} from '../../src';
import {AstChecker} from '../utils/ast-checker';

const readFileAsText = (filePath: string): string => {
	const absolutePath = path.join(__dirname, filePath);
	return fs.readFileSync(absolutePath, 'utf8');
};

const parseAst = (text: string) => {
	const start = process.hrtime();
	for (let i = 0; i < 100; i++) {
		GroovyAstBuilder.ast(text, {timeSpentLogEnabled: false});
	}
	const end = process.hrtime(start);
	const spent = (end[0] * 1e9 + end[1]) / 1_000_000 / 100;
	console.log(`Spent ${spent}ms each time.`);
	const ast = GroovyAstBuilder.ast(text);
	console.log(`Token count: ${ast.compilationUnit.children.length}`);
};
describe('Token test', () => {
	beforeAll(() => {
		GroovyAstBuilder.enableTimeSpentLog();
	});

	test('Token #1', async () => {
		const text = 'd1 p12345 //abc\n\r\n\n/*  def */';
		const ast = GroovyAstBuilder.ast(text);
		AstChecker.check(ast, [
			TokenId.COMPILATION_UNIT, 0, 29, 0, text, [
				[TokenId.Identifier, 0, 2, 1, 'd1'],
				[TokenId.Whitespaces, 2, 3, 1, ' '],
				[TokenId.Identifier, 3, 9, 1, 'p12345'],
				[TokenId.Whitespaces, 9, 10, 1, ' '],
				[TokenId.SingleLineComment, 10, 15, 1, '//abc', [
					[TokenId.SingleLineCommentStartMark, 10, 12, 1, '//'],
					[TokenId.Chars, 12, 15, 1, 'abc']
				]],
				[TokenId.NewLine, 15, 16, 1, '\n'],
				[TokenId.NewLine, 16, 18, 2, '\r\n'],
				[TokenId.NewLine, 18, 19, 3, '\n'],
				[TokenId.MultipleLinesComment, 19, 29, 4, '/*  def */', [
					[TokenId.MultipleLinesCommentStartMark, 19, 21, 4, '/*'],
					[TokenId.Whitespaces, 21, 23, 4, '  '],
					[TokenId.Chars, 23, 26, 4, 'def'],
					[TokenId.Whitespaces, 26, 27, 4, ' '],
					[TokenId.MultipleLinesCommentEndMark, 27, 29, 4, '*/']
				]]
			]
		]);
	});

	test('Token #2', async () => {
		parseAst(readFileAsText('List.java'));
	});

	test('Token #3', async () => {
		parseAst(readFileAsText('String.java'));
	});
});