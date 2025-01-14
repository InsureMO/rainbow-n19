import {ClassBodyContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {ClassBodyNodePurpose, ClassBodyNodeSpecification, ClassBodyNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ClassBodyPostProcessor extends PostNodeProcessorAdapter<ClassBodyContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ClassBodyContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, _ctx: ClassBodyContext): void {
		const spec = new ClassBodyNodeSpecification();
		spec.setType(ClassBodyNodeType.LEFT_BRACE);
		spec.setPurpose(ClassBodyNodePurpose.CLASS_BODY);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	decorate(node: DecorableParsedNode) {
		const ctx = node.underlay.groovyParserRuleContext as ClassBodyContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.LBRACE().symbol);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * insert class body node into atomic nodes, placing at tail
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
		const ctx = node.underlay.groovyParserRuleContext as ClassBodyContext;
		const rightBraceTerminalNode = ctx.RBRACE();
		// create a right brace node, share the same underlay node
		const rightBraceNode = new DecorableParsedNode(node.underlay, true);
		const spec = rightBraceNode.specification as ClassBodyNodeSpecification;
		spec.setType(ClassBodyNodeType.RIGHT_BRACE);
		if (rightBraceTerminalNode != null) {
			DecorableParsedNode.copyPositionAndTextFromToken(rightBraceNode, rightBraceTerminalNode.symbol);
		}

		atomicNodes.push(rightBraceNode);
	}
}
