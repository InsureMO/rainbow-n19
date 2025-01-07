import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BuiltInTypeContext} from './BuiltInTypeContext';
import {PrimaryContext} from './PrimaryContext';

export class BuiltInTypePrmrAltContext extends PrimaryContext {
	builtInType(): BuiltInTypeContext {
		return this.getRuleContext(BuiltInTypeContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBuiltInTypePrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}