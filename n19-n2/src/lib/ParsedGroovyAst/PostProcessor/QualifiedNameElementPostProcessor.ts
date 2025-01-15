import {ParserRuleContext, TerminalNode} from 'antlr4';
import {
	GroovyParser,
	IdentifierContext,
	ImportDeclarationContext,
	PackageDeclarationContext,
	QualifiedClassNameContext,
	QualifiedNameContext,
	QualifiedNameElementContext,
	QualifiedNameElementsContext
} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../HierarchicalDecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {
	QualifiedNameElementNodePurpose,
	QualifiedNameElementNodeSpecification,
	QualifiedNameElementNodeType,
	QualifiedNameElementsNodeSpecification,
	QualifiedNameElementsNodeType,
	QualifiedNameNodeSpecification,
	QualifiedNameNodeType
} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedNameElementPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: QualifiedNameElementContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: QualifiedNameElementContext): boolean {
		return true;
	}

	protected readType(node: ParsedNode, spec: QualifiedNameElementNodeSpecification, ctx: QualifiedNameElementContext): void {
		// there is only one child in modifier context
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.DEF:
				case GroovyParser.IN:
				case GroovyParser.AS:
				case GroovyParser.TRAIT:
					spec.setType(child.symbol.type);
					break;
				default:
					node.debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else if (child instanceof IdentifierContext) {
			spec.setType(QualifiedNameElementNodeType.IDENTIFIER);
		} else {
			node.debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
	}

	protected readPurposeIfAncestorIsPackageOrImportDeclaration(node: ParsedNode, spec: QualifiedNameElementNodeSpecification,
	                                                            _ctx: QualifiedNameElementContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof QualifiedNameContext)) {
			return false;
		}

		const parentCtxOfParent = parentCtx.parentCtx;
		if (parentCtxOfParent instanceof PackageDeclarationContext) {
			spec.setPurpose(QualifiedNameElementNodePurpose.PACKAGE_DECLARATION);
		} else if (parentCtxOfParent instanceof ImportDeclarationContext) {
			spec.setPurpose(QualifiedNameElementNodePurpose.IMPORT_DECLARATION);
		} else {
			// TODO more qualified name element purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of QualifiedNameContext/QualifiedNameElementContext is not supported yet.`);
		}
		return true;
	}

	protected readPurposeIfAncestorIsQualifiedClassName(node: ParsedNode, spec: QualifiedNameElementNodeSpecification,
	                                                    _ctx: QualifiedNameElementContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof QualifiedNameElementsContext)) {
			return false;
		}

		const parentCtxOfParent = parentCtx.parentCtx;
		if (parentCtxOfParent instanceof QualifiedClassNameContext) {
			spec.setPurpose(QualifiedNameElementNodePurpose.QUALIFIED_CLASS_NAME);
		} else {
			// TODO more qualified name element purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of QualifiedNameElementsContext/QualifiedNameElementContext is not supported yet.`);
		}
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: QualifiedNameElementNodeSpecification, ctx: QualifiedNameElementContext): void {
		const parentCtx = ctx.parentCtx;
		this.readPurposeIfAncestorIsPackageOrImportDeclaration(node, spec, ctx, parentCtx)
		|| this.readPurposeIfAncestorIsQualifiedClassName(node, spec, ctx, parentCtx)
		// TODO more identifier purposes need to be identified
		|| node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of QualifiedNameElementContext is not supported yet.`);
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: QualifiedNameElementContext): void {
		const spec = new QualifiedNameElementNodeSpecification();
		this.readType(node, spec, ctx);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext;
		if (parentCtx instanceof QualifiedNameElementsContext) {
			const qualifiedNameElementList = parentCtx.qualifiedNameElement_list();
			const index = qualifiedNameElementList.indexOf(hierarchicalNode.node.underlay.groovyParserRuleContext as QualifiedNameElementContext);
			// append to atomic nodes
			const dotNode = new DecorableParsedNode(parentNode.underlay, true);
			const spec = dotNode.specification as QualifiedNameElementsNodeSpecification;
			spec.setType(QualifiedNameElementsNodeType.DOT);
			DecorableParsedNode.copyPositionAndTextFromToken(dotNode, parentCtx.DOT(index).symbol);
			atomicNodes.push(dotNode);
		} else if (parentCtx instanceof QualifiedNameContext) {
			const qualifiedNameElementList = parentCtx.qualifiedNameElement_list();
			const index = qualifiedNameElementList.indexOf(hierarchicalNode.node.underlay.groovyParserRuleContext as QualifiedNameElementContext);
			if (index !== qualifiedNameElementList.length - 1) {
				// append to atomic nodes
				const dotNode = new DecorableParsedNode(parentNode.underlay, true);
				const spec = dotNode.specification as QualifiedNameNodeSpecification;
				spec.setType(QualifiedNameNodeType.DOT);
				DecorableParsedNode.copyPositionAndTextFromToken(dotNode, parentCtx.DOT(index).symbol);
				atomicNodes.push(dotNode);
			}
		}
	}
}
