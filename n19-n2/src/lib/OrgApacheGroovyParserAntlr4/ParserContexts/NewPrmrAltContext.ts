import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {PrimaryContext} from './PrimaryContext';

export class NewPrmrAltContext extends PrimaryContext {
	NEW(): TerminalNode {
		return this.getToken(GroovyParser.NEW, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	creator(): CreatorContext {
		return this.getRuleContext(CreatorContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitNewPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}