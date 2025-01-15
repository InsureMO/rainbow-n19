import {ClassDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {
	ClassDeclarationNodePurpose,
	ClassDeclarationNodeSpecification,
	ClassDeclarationNodeType
} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ClassDeclarationPostProcessor extends PostNodeProcessorAdapter<ClassDeclarationContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ClassDeclarationContext): boolean {
		return true;
	}

	readSpecificationType(spec: ClassDeclarationNodeSpecification, ctx: ClassDeclarationContext): void {
		let terminalNode = ctx.INTERFACE();
		if (terminalNode != null) {
			spec.setType(ClassDeclarationNodeType.INTERFACE);
			return;
		}

		terminalNode = ctx.ENUM();
		if (terminalNode != null) {
			spec.setType(ClassDeclarationNodeType.ENUM);
			return;
		}

		terminalNode = ctx.CLASS();
		if (terminalNode != null) {
			spec.setType(ClassDeclarationNodeType.CLASS);
			return;
		}

		terminalNode = ctx.RECORD();
		if (terminalNode != null) {
			spec.setType(ClassDeclarationNodeType.RECORD);
			return;
		}

		terminalNode = ctx.TRAIT();
		if (terminalNode != null) {
			spec.setType(ClassDeclarationNodeType.TRAIT);
		}
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: ClassDeclarationContext): void {
		const spec = new ClassDeclarationNodeSpecification();
		this.readSpecificationType(spec, ctx);
		spec.setPurpose(ClassDeclarationNodePurpose.CLASS_DECLARATION);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * since class declaration doesn't have a child context to describe the keyword "interface"/"enum"/"class"/"record"/"trait",
	 * here we use the class declaration node to simulate it
	 * so read the position from INTERFACE/ENUM/CLASS/RECORD/TRAIT terminal node
	 */
	decorate(node: DecorableParsedNode): void {
		const ctx = node.underlay.groovyParserRuleContext as ClassDeclarationContext;
		switch (node.specification.type) {
			case ClassDeclarationNodeType.INTERFACE:
				DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.INTERFACE().symbol);
				break;
			case ClassDeclarationNodeType.ENUM:
				DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.ENUM().symbol);
				break;
			case ClassDeclarationNodeType.CLASS:
				DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.CLASS().symbol);
				break;
			case ClassDeclarationNodeType.RECORD:
				DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.RECORD().symbol);
				break;
			case ClassDeclarationNodeType.TRAIT:
				DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.TRAIT().symbol);
				break;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const ctx = node.underlay.groovyParserRuleContext as ClassDeclarationContext;
		if (node.specification.type === ClassDeclarationNodeType.INTERFACE) {
			let atNode: Optional<DecorableParsedNode> = (void 0);
			const atTerminalNode = ctx.AT();
			if (atTerminalNode != null) {
				// create an at node, share the same underlay node
				atNode = new DecorableParsedNode(node.underlay, true);
				const spec = atNode.specification as ClassDeclarationNodeSpecification;
				spec.setType(ClassDeclarationNodeType.AT);
				DecorableParsedNode.copyPositionAndTextFromToken(atNode, atTerminalNode.symbol);
				atomicNodes.splice(firstNodeIndex, 0, atNode);
			}
		}
	}
}
