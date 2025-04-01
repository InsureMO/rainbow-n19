import {
	AstBuilder,
	CompilationUnitNode,
	InterfaceDeclarationNode,
	KwInterfaceNode,
	KwPublicNode,
	WhitespacesNode
} from '../../src';
import {AstChecker} from '../utils/ast-checker';

describe('Interface declaration test', () => {
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
});
