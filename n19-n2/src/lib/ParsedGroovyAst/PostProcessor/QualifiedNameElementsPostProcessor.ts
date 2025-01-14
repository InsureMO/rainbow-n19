import {QualifiedNameElementsContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../ParsedNode';
import {QualifiedNameElementsNodeSpecification, QualifiedNameElementsNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedNameElementsPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementsContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: QualifiedNameElementsContext): boolean {
		return true;
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: QualifiedNameElementsContext): void {
		const spec = new QualifiedNameElementsNodeSpecification();
		spec.setType(QualifiedNameElementsNodeType.DOT);
		// TODO this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}
}
