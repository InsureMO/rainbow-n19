import {IdentifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../NodeSpecification';

export class IdentifierNodeSpecification implements ParsedNodeSpecification {
	static read(ctx: IdentifierContext): IdentifierNodeSpecification {
		return new IdentifierNodeSpecification();
	}

	get properties(): Array<[string, any]> {
		return [];
	}
}
