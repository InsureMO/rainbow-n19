import {
	AbstractNode,
	AstBuilder,
	CharsNode,
	ClassDeclarationNode,
	ClassNode,
	CompilationUnitNode,
	FinalNode,
	IdentifierNode,
	InterfaceDeclarationNode,
	InterfaceNode,
	LBraceNode,
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	NewLineNode,
	NonSealedNode,
	PrivateNode,
	ProtectedNode,
	PublicNode,
	RBraceNode,
	SealedNode,
	SingleLineCommentNode,
	SingleLineCommentStartMarkNode,
	StaticNode,
	StrictfpNode,
	TabsNode,
	WhitespacesNode
} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Type declaration test', () => {
	beforeAll(() => {
		AstBuilder.enableTimeSpentLog();
	});

	test('Interface declaration #1', async () => {
		const text = 'public interface';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 16, 0, text, [
				[InterfaceDeclarationNode, 0, 16, 1, text, [
					[PublicNode, 0, 6, 1, 'public'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[InterfaceNode, 7, 16, 1, 'interface']
				]]
			]
		]);
	});
	test('Class declaration #2', async () => {
		const text = 'sealed public abstract protected private static // sl\n\tfinal /*a\n*/ strictfp \nnon-sealed   \t class';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 98, 0, text, [
				[ClassDeclarationNode, 0, 98, 1, text, [
					[SealedNode, 0, 6, 1, 'sealed'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[PublicNode, 7, 13, 1, 'public'],
					[WhitespacesNode, 13, 14, 1, ' '],
					[AbstractNode, 14, 22, 1, 'abstract'],
					[WhitespacesNode, 22, 23, 1, ' '],
					[ProtectedNode, 23, 32, 1, 'protected'],
					[WhitespacesNode, 32, 33, 1, ' '],
					[PrivateNode, 33, 40, 1, 'private'],
					[WhitespacesNode, 40, 41, 1, ' '],
					[StaticNode, 41, 47, 1, 'static'],
					[WhitespacesNode, 47, 48, 1, ' '],
					[SingleLineCommentNode, 48, 53, 1, '// sl', [
						[SingleLineCommentStartMarkNode, 48, 50, 1, '//'],
						[WhitespacesNode, 50, 51, 1, ' '],
						[CharsNode, 51, 53, 1, 'sl']
					]],
					[NewLineNode, 53, 54, 1, '\n'],
					[TabsNode, 54, 55, 2, '\t'],
					[FinalNode, 55, 60, 2, 'final'],
					[WhitespacesNode, 60, 61, 2, ' '],
					[MultipleLinesCommentNode, 61, 67, 2, '/*a\n*/', [
						[MultipleLinesCommentStartMarkNode, 61, 63, 2, '/*'],
						[CharsNode, 63, 64, 2, 'a'],
						[NewLineNode, 64, 65, 2, '\n'],
						[MultipleLinesCommentEndMarkNode, 65, 67, 3, '*/']
					]],
					[WhitespacesNode, 67, 68, 3, ' '],
					[StrictfpNode, 68, 76, 3, 'strictfp'],
					[WhitespacesNode, 76, 77, 3, ' '],
					[NewLineNode, 77, 78, 3, '\n'],
					[NonSealedNode, 78, 88, 4, 'non-sealed'],
					[WhitespacesNode, 88, 91, 4, '   '],
					[TabsNode, 91, 92, 4, '\t'],
					[WhitespacesNode, 92, 93, 4, ' '],
					[ClassNode, 93, 98, 4, 'class']
				]]
			]
		]);
	});
	test('Class declaration #3', async () => {
		const text = 'public abstract class AbstractA {\n}';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 35, 0, text, [
				[ClassDeclarationNode, 0, 35, 1, text, [
					[PublicNode, 0, 6, 1, 'public'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[AbstractNode, 7, 15, 1, 'abstract'],
					[WhitespacesNode, 15, 16, 1, ' '],
					[ClassNode, 16, 21, 1, 'class'],
					[WhitespacesNode, 21, 22, 1, ' '],
					[IdentifierNode, 22, 31, 1, 'AbstractA'],
					[WhitespacesNode, 31, 32, 1, ' '],
					[LBraceNode, 32, 33, 1, '{'],
					[NewLineNode, 33, 34, 1, '\n'],
					[RBraceNode, 34, 35, 1, '}']
				]]
			]
		]);
	});
	test('Interface declaration #4', async () => {
		const text = '/**/public interface';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 20, 0, text, [
				[MultipleLinesCommentNode, 0, 4, 1, '/**/', [
					[MultipleLinesCommentStartMarkNode, 0, 2, 1, '/*'],
					[MultipleLinesCommentEndMarkNode, 2, 4, 1, '*/']
				]],
				[InterfaceDeclarationNode, 4, 20, 1, 'public interface', [
					[PublicNode, 4, 10, 1, 'public'],
					[WhitespacesNode, 10, 11, 1, ' '],
					[InterfaceNode, 11, 20, 1, 'interface']
				]]
			]
		]);
	});
});
