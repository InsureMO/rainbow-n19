import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeContext} from './TypeContext';
import {VariableDeclaratorIdContext} from './VariableDeclaratorIdContext';

export class TypeNamePairContext extends GroovyParserRuleContext {
	variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(VariableDeclaratorIdContext, 0);
	}

	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_typeNamePair;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}