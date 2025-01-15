import {ElementValueArrayInitializerContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {
	ElementValueArrayInitializerNodePurpose,
	ElementValueArrayInitializerNodeSpecification,
	ElementValueArrayInitializerNodeType
} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValueArrayInitializerPostProcessor extends PostNodeProcessorAdapter<ElementValueArrayInitializerContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ElementValueArrayInitializerContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, _ctx: ElementValueArrayInitializerContext): void {
		const spec = new ElementValueArrayInitializerNodeSpecification();
		spec.setType(ElementValueArrayInitializerNodeType.LBRACK);
		spec.setPurpose(ElementValueArrayInitializerNodePurpose.ELEMENT_VALUE_ARRAY_INITIALIZER);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	decorate(node: DecorableParsedNode): void {
		const ctx = node.underlay.groovyParserRuleContext as ElementValueArrayInitializerContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.LBRACK().symbol);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
		const ctx = node.underlay.groovyParserRuleContext as ElementValueArrayInitializerContext;
		const elementValueList = ctx.elementValue_list();
		const commaList = ctx.COMMA_list();
		if (commaList.length !== 0 && elementValueList.length === commaList.length) {
			const lastCommaTerminalNode = commaList[commaList.length - 1];
			const lastCommaNode = new DecorableParsedNode(node.underlay, true);
			const spec = lastCommaNode.specification as ElementValueArrayInitializerNodeSpecification;
			spec.setType(ElementValueArrayInitializerNodeType.COMMA);
			DecorableParsedNode.copyPositionAndTextFromToken(lastCommaNode, lastCommaTerminalNode.symbol);
			atomicNodes.push(lastCommaNode);
		}

		const rbrackTerminalNode = ctx.RBRACK();
		if (rbrackTerminalNode != null) {
			// append to atomic nodes
			const rbrackNode = new DecorableParsedNode(node.underlay, true);
			const spec = rbrackNode.specification as ElementValueArrayInitializerNodeSpecification;
			spec.setType(ElementValueArrayInitializerNodeType.RBRACK);
			DecorableParsedNode.copyPositionAndTextFromToken(rbrackNode, rbrackTerminalNode.symbol);
			atomicNodes.push(rbrackNode);
		}
	}
}
