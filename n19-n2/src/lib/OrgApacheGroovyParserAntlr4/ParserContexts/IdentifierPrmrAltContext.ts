import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {PrimaryContext} from './PrimaryContext';
import {TypeArgumentsContext} from './TypeArgumentsContext';

export class IdentifierPrmrAltContext extends PrimaryContext {
	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	typeArguments(): TypeArgumentsContext {
		return this.getRuleContext(TypeArgumentsContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitIdentifierPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}










