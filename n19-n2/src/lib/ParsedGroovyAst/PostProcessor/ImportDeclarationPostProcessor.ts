import {GroovyParser, ImportDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {asT, Optional} from '../../TsAddon';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {
	ImportDeclarationNodePurpose,
	ImportDeclarationNodeSpecification,
	ImportDeclarationNodeType
} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ImportDeclarationPostProcessor extends PostNodeProcessorAdapter<ImportDeclarationContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ImportDeclarationContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, _ctx: ImportDeclarationContext): void {
		const spec = new ImportDeclarationNodeSpecification();
		spec.setType(ImportDeclarationNodeType.IMPORT);
		spec.setPurpose(ImportDeclarationNodePurpose.IMPORT_DECLARATION);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * since import declaration doesn't have a child context to describe the keyword "import",
	 * here we use the import declaration node to simulate it
	 * so read the position from import terminal node
	 */
	decorate(node: DecorableParsedNode): void {
		const ctx = node.underlay.groovyParserRuleContext as ImportDeclarationContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.IMPORT().symbol);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * since import declaration doesn't have a child context to describe the keyword "static",
	 * here we use the import declaration node to simulate it
	 * so read the position from STATIC terminal node
	 */
	protected decorateForStaticKeyword(node: DecorableParsedNode): Optional<DecorableParsedNode> {
		const ctx = node.underlay.groovyParserRuleContext as ImportDeclarationContext;
		let staticNode: Optional<DecorableParsedNode> = (void 0);
		const staticTerminalNode = ctx.STATIC();
		if (staticTerminalNode != null) {
			// create a static node, share the same underlay node
			staticNode = new DecorableParsedNode(node.underlay, true);
			const spec = staticNode.specification as ImportDeclarationNodeSpecification;
			spec.setType(ImportDeclarationNodeType.STATIC);
			DecorableParsedNode.copyPositionAndTextFromToken(staticNode, staticTerminalNode.symbol);
		}

		return staticNode;
	}

	/**
	 * since import declaration doesn't have a child context to describe the keywords ".*",
	 * here we use the import declaration node to simulate it
	 * so read the position from DOT and MUL terminal node
	 */
	protected decorateForDotStarKeywords(node: DecorableParsedNode): Optional<[DecorableParsedNode, DecorableParsedNode]> {
		const ctx = node.underlay.groovyParserRuleContext as ImportDeclarationContext;
		let dotNode: Optional<DecorableParsedNode> = (void 0);
		let starNode: Optional<DecorableParsedNode> = (void 0);
		const starTerminalNode = ctx.MUL();
		if (starTerminalNode != null) {
			// create a dot node, share the same underlay node
			dotNode = new DecorableParsedNode(node.underlay, true);
			let spec = dotNode.specification as ImportDeclarationNodeSpecification;
			spec.setType(ImportDeclarationNodeType.DOT);
			DecorableParsedNode.copyPositionAndTextFromToken(dotNode, ctx.DOT().symbol);
			// create a star node, share the same underlay node
			starNode = new DecorableParsedNode(node.underlay, true);
			spec = starNode.specification as ImportDeclarationNodeSpecification;
			spec.setType(ImportDeclarationNodeType.STAR);
			DecorableParsedNode.copyPositionAndTextFromToken(starNode, starTerminalNode.symbol);
			return [dotNode, starNode];
		}

		return (void 0);
	}

	/**
	 * since import declaration doesn't have a child context to describe the keyword "as",
	 * here we use the import declaration node to simulate it
	 * so read the position from AS terminal node
	 */
	protected decorateForAsKeyword(node: DecorableParsedNode): Optional<DecorableParsedNode> {
		const ctx = node.underlay.groovyParserRuleContext as ImportDeclarationContext;
		let asNode: Optional<DecorableParsedNode> = (void 0);
		const asTerminalNode = ctx.AS();
		if (asTerminalNode != null) {
			// create a static node, share the same underlay node
			asNode = new DecorableParsedNode(node.underlay, true);
			const spec = asNode.specification as ImportDeclarationNodeSpecification;
			spec.setType(ImportDeclarationNodeType.AS);
			DecorableParsedNode.copyPositionAndTextFromToken(asNode, asTerminalNode.symbol);
		}

		return asNode;
	}

	/**
	 * insert import declaration node into atomic nodes, placing before all qualified name element nodes that are led by this import declaration.<br>
	 */
	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const nodes = [node];
		const staticNode = this.decorateForStaticKeyword(node);
		if (staticNode != null) {
			nodes.push(staticNode);
		}
		if (firstNodeIndex === atomicNodes.length) {
			// no child node appended, add myself
			atomicNodes.push(...nodes);
		} else {
			const [found, index] = this.findFirstNodeOfTypeFromAtomicNodes(firstNodeIndex, atomicNodes,
				(node) => node.type !== GroovyParser.RULE_qualifiedNameElement);

			if (found != null) {
				// qualifiedNameElement found
				atomicNodes.splice(index, 0, ...nodes);
			} else {
				// qualifiedNameElement not found
				atomicNodes.push(...nodes);
			}
		}

		const dotStarNodes = this.decorateForDotStarKeywords(node);
		if (dotStarNodes != null) {
			atomicNodes.push(...dotStarNodes);
		}

		const asNode = this.decorateForAsKeyword(node);
		if (asNode != null) {
			if (asT<ImportDeclarationContext>(node.underlay.groovyParserRuleContext).identifier() != null) {
				atomicNodes.splice(atomicNodes.length - 1, 0, asNode);
			} else {
				atomicNodes.push(asNode);
			}
		}
	}
}
