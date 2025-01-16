import {TerminalNode} from 'antlr4';
import {
	AnnotationsOptContext,
	GroovyParser,
	ImportDeclarationContext,
	PackageDeclarationContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromPackageDeclaration = (ctx: PackageDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePairForPackageDeclaration = [TerminalNodeGetFromPackageDeclaration, SymbolIndex];
type TerminalNodeGetFromImportDeclaration = (ctx: ImportDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePairForImportDeclaration = [TerminalNodeGetFromImportDeclaration, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. package declaration,<br>
 * 2. import declaration,<br>
 * 3. type parameter,<br>
 * 4. enum constant,<br>
 * 5. empty dims,<br>
 * 6. standard type,<br>
 * 7. type,<br>
 * 8. type argument,<br>
 * 9. annotation qualified class name,<br>
 * 10. dim,<br>
 * 11. created name.<br>
 * <br>
 * 1. put a "package" node after itself, when parent is package declaration and PACKAGE exists,<br>
 * 2. put an "import" node after itself, when parent is import declaration and IMPORT exists,<br>
 * 3. put a "static" node after itself, when parent is import declaration and STATIC exists,<br>
 */
export class AnnotationsOptPostProcessor extends PostNodeProcessorAdapter<AnnotationsOptContext> {
	private static PACKAGE: TerminalNodePairForPackageDeclaration = [(ctx) => ctx.PACKAGE(), GroovyParser.PACKAGE];
	private static IMPORT: TerminalNodePairForImportDeclaration = [(ctx) => ctx.IMPORT(), GroovyParser.IMPORT];
	private static STATIC: TerminalNodePairForImportDeclaration = [(ctx) => ctx.STATIC(), GroovyParser.STATIC];
	private static IMPORT_TERMINALS = [
		AnnotationsOptPostProcessor.IMPORT,
		AnnotationsOptPostProcessor.STATIC
	];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as AnnotationsOptContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof PackageDeclarationContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: AnnotationsOptPostProcessor.PACKAGE
			});
		} else if (parentCtx instanceof ImportDeclarationContext) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: AnnotationsOptPostProcessor.IMPORT_TERMINALS,
				firstOnly: false
			});
		}
		return [];
	}
}
