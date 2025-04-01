import {
	AstBuilder,
	CharsNode,
	ClassDeclarationNode,
	CompilationUnitNode,
	InterfaceDeclarationNode,
	KwAbstractNode,
	KwClassNode,
	KwFinalNode,
	KwInterfaceNode,
	KwNonSealedNode,
	KwPrivateNode,
	KwProtectedNode,
	KwPublicNode,
	KwSealedNode,
	KwStaticNode,
	KwStrictfpNode,
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	NewLineNode,
	SingleLineCommentNode,
	SingleLineCommentStartMarkNode,
	TabsNode,
	WhitespacesNode
} from '../src';
import {AstChecker} from './utils/ast-checker';

describe('Type declaration test', () => {
	test('Interface declaration #1', async () => {
		const text = 'public interface';
		const ast = AstBuilder.ast(text);
		AstChecker.check(ast, [
			CompilationUnitNode, 0, 16, 0, text, [
				[InterfaceDeclarationNode, 0, 16, 1, text, [
					[KwPublicNode, 0, 6, 1, 'public'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[KwInterfaceNode, 7, 16, 1, 'interface']
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
					[KwSealedNode, 0, 6, 1, 'sealed'],
					[WhitespacesNode, 6, 7, 1, ' '],
					[KwPublicNode, 7, 13, 1, 'public'],
					[WhitespacesNode, 13, 14, 1, ' '],
					[KwAbstractNode, 14, 22, 1, 'abstract'],
					[WhitespacesNode, 22, 23, 1, ' '],
					[KwProtectedNode, 23, 32, 1, 'protected'],
					[WhitespacesNode, 32, 33, 1, ' '],
					[KwPrivateNode, 33, 40, 1, 'private'],
					[WhitespacesNode, 40, 41, 1, ' '],
					[KwStaticNode, 41, 47, 1, 'static'],
					[WhitespacesNode, 47, 48, 1, ' '],
					[SingleLineCommentNode, 48, 53, 1, '// sl', [
						[SingleLineCommentStartMarkNode, 48, 50, 1, '//'],
						[WhitespacesNode, 50, 51, 1, ' '],
						[CharsNode, 51, 53, 1, 'sl']
					]],
					[NewLineNode, 53, 54, 1, '\n'],
					[TabsNode, 54, 55, 2, '\t'],
					[KwFinalNode, 55, 60, 2, 'final'],
					[WhitespacesNode, 60, 61, 2, ' '],
					[MultipleLinesCommentNode, 61, 67, 2, '/*a\n*/', [
						[MultipleLinesCommentStartMarkNode, 61, 63, 2, '/*'],
						[CharsNode, 63, 64, 2, 'a'],
						[NewLineNode, 64, 65, 2, '\n'],
						[MultipleLinesCommentEndMarkNode, 65, 67, 3, '*/']
					]],
					[WhitespacesNode, 67, 68, 3, ' '],
					[KwStrictfpNode, 68, 76, 3, 'strictfp'],
					[WhitespacesNode, 76, 77, 3, ' '],
					[NewLineNode, 77, 78, 3, '\n'],
					[KwNonSealedNode, 78, 88, 4, 'non-sealed'],
					[WhitespacesNode, 88, 91, 4, '   '],
					[TabsNode, 91, 92, 4, '\t'],
					[WhitespacesNode, 92, 93, 4, ' '],
					[KwClassNode, 93, 98, 4, 'class']
				]]
			]
		]);
	});
});
