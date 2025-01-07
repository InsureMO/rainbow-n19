import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {PrimaryContext} from './PrimaryContext';

export class ThisPrmrAltContext extends PrimaryContext {
	THIS(): TerminalNode {
		return this.getToken(GroovyParser.THIS, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitThisPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}