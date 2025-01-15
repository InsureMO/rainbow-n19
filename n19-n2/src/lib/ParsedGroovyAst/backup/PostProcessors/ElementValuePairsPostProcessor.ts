import {ElementValuePairsContext} from '../../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../../ParsedNode';
import {ElementValuePairsNodeSpecification, ElementValuePairsNodeType} from '../../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValuePairsPostProcessor extends PostNodeProcessorAdapter<ElementValuePairsContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ElementValuePairsContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, _ctx: ElementValuePairsContext): void {
		const spec = new ElementValuePairsNodeSpecification();
		spec.setType(ElementValuePairsNodeType.COMMA);
		// TODO this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}
}
