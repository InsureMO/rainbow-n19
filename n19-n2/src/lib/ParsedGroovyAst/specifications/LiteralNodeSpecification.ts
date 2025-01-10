import {LiteralContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../NodeSpecification';

export class LiteralNodeSpecification implements ParsedNodeSpecification {
	static read(ctx: LiteralContext): LiteralNodeSpecification {
		return new LiteralNodeSpecification();
	}

	get properties(): Array<[string, any]> {
		return [];
	}
}
