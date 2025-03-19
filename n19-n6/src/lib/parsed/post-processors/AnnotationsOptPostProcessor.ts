import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {
	AnnotationsOptContext,
	DimContext,
	EmptyDimsContext,
	GroovyParser,
	ImportDeclarationContext,
	PackageDeclarationContext,
	TypeArgumentContext,
	TypeContext
} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromPackageDeclaration = (ctx: PackageDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePairForPackageDeclaration = [TerminalNodeGetFromPackageDeclaration, SymbolIndex];
type TerminalNodeGetFromImportDeclaration = (ctx: ImportDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePairForImportDeclaration = [TerminalNodeGetFromImportDeclaration, SymbolIndex];
type TerminalNodeGetFromEmptyDims = (ctx: EmptyDimsContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForEmptyDims = [TerminalNodeGetFromEmptyDims, SymbolIndex];
type TerminalNodeGetFromType = (ctx: TypeContext) => Optional<TerminalNode>;
type TerminalNodePairForType = [TerminalNodeGetFromType, SymbolIndex];
type TerminalNodeGetFromTypeArgument = (ctx: TypeArgumentContext) => Optional<TerminalNode>;
type TerminalNodePairForTypeArgument = [TerminalNodeGetFromTypeArgument, SymbolIndex];
type TerminalNodeGetFromDim = (ctx: DimContext) => Optional<TerminalNode>;
type TerminalNodePairForDim = [TerminalNodeGetFromDim, SymbolIndex];

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
 * 1. find and put a "PACKAGE" node after me, when parent is package declaration,<br>
 * 2. find and put an "IMPORT" node after me, when parent is import declaration,<br>
 * 3. find and put a "STATIC" node after me, when parent is import declaration,<br>
 * 4. find and put "[" and "]" nodes after me, when parent is empty dims,<br>
 * 5. find and put a "VOID" node after me, when parent is type,<br>
 * 6. find and put a "?" node after me, when parent is type argument,<br>
 * 7. find and put a "EXTENDS" node after me, when parent is type argument,<br>
 * 8. find and put a "SUPER" node after me, when parent is type argument,<br>
 * 9. find and put a "[" node after me, when parent is dim.
 */
export class AnnotationsOptPostProcessor extends PostNodeProcessorAdapter<AnnotationsOptContext> {
	private static PACKAGE_DECLARATION__PACKAGE: TerminalNodePairForPackageDeclaration = [(ctx) => ctx.PACKAGE(), GroovyParser.PACKAGE];
	private static IMPORT_DECLARATION__IMPORT: TerminalNodePairForImportDeclaration = [(ctx) => ctx.IMPORT(), GroovyParser.IMPORT];
	private static IMPORT_DECLARATION__STATIC: TerminalNodePairForImportDeclaration = [(ctx) => ctx.STATIC(), GroovyParser.STATIC];
	private static IMPORT_DECLARATION__TERMINALS = [
		AnnotationsOptPostProcessor.IMPORT_DECLARATION__IMPORT,
		AnnotationsOptPostProcessor.IMPORT_DECLARATION__STATIC
	];
	private static EMPTY_DIMS__LBRACK: TerminalNodePairForEmptyDims = [(ctx, index) => ctx.LBRACK(index), GroovyParser.LBRACK];
	private static EMPTY_DIMS__RBRACK: TerminalNodePairForEmptyDims = [(ctx, index) => ctx.RBRACK(index), GroovyParser.RBRACK];
	private static TYPE__VOID: TerminalNodePairForType = [(ctx) => ctx.VOID(), GroovyParser.VOID];
	private static TYPE_ARGUMENT__QUESTION: TerminalNodePairForTypeArgument = [(ctx) => ctx.QUESTION(), GroovyParser.QUESTION];
	private static TYPE_ARGUMENT__EXTENDS: TerminalNodePairForTypeArgument = [(ctx) => ctx.EXTENDS(), GroovyParser.EXTENDS];
	private static TYPE_ARGUMENT__SUPER: TerminalNodePairForTypeArgument = [(ctx) => ctx.SUPER(), GroovyParser.SUPER];
	private static TYPE_ARGUMENT__TERMINALS = [
		AnnotationsOptPostProcessor.TYPE_ARGUMENT__EXTENDS,
		AnnotationsOptPostProcessor.TYPE_ARGUMENT__SUPER
	];
	private static DIM__LBRACK: TerminalNodePairForDim = [(ctx) => ctx.LBRACK(), GroovyParser.LBRACK];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as AnnotationsOptContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof PackageDeclarationContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: AnnotationsOptPostProcessor.PACKAGE_DECLARATION__PACKAGE
			});
		} else if (parentCtx instanceof ImportDeclarationContext) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: AnnotationsOptPostProcessor.IMPORT_DECLARATION__TERMINALS,
				firstOnly: false
			});
		} else if (parentCtx instanceof EmptyDimsContext) {
			const nodes: Array<DecoratedNode> = [];
			const lbrackNode = this.collectTerminalNodeWithIndex({
				decorated,
				siblings: (ctx: EmptyDimsContext) => ctx.annotationsOpt_list(),
				indexOffset: 0,
				terminal: AnnotationsOptPostProcessor.EMPTY_DIMS__LBRACK,
				parentDecorated: node.parent.decorated
			});
			if (lbrackNode != null) {
				nodes.push(lbrackNode);
			}
			const rbrackNode = this.collectTerminalNodeWithIndex({
				decorated,
				siblings: (ctx: EmptyDimsContext) => ctx.annotationsOpt_list(),
				indexOffset: 0,
				terminal: AnnotationsOptPostProcessor.EMPTY_DIMS__RBRACK,
				parentDecorated: node.parent.decorated
			});
			if (rbrackNode != null) {
				nodes.push(rbrackNode);
			}
			return nodes;
		} else if (parentCtx instanceof TypeContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: AnnotationsOptPostProcessor.TYPE__VOID
			});
		} else if (parentCtx instanceof TypeArgumentContext) {
			const nodes: Array<DecoratedNode> = [];
			const questionNode = this.collectTerminalNode({
				decorated: node.parent.decorated,
				terminal: AnnotationsOptPostProcessor.TYPE_ARGUMENT__QUESTION
			});
			if (questionNode != null) {
				nodes.push(questionNode);
			}
			const extendsOrSuperNode = this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: AnnotationsOptPostProcessor.TYPE_ARGUMENT__TERMINALS,
				firstOnly: true
			});
			nodes.push(...extendsOrSuperNode);
			return nodes;
		} else if (parentCtx instanceof DimContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: AnnotationsOptPostProcessor.DIM__LBRACK
			});
		}
		return [];
	}
}
