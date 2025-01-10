import {TerminalNode} from 'antlr4';
import {IllegalArgumentException, UnsupportedOperationException} from '../../JavaExceptions';
import {GroovyParser, IdentifierContext, VariableDeclaratorIdContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../NodeSpecification';

export enum IdentifierNodeType {
	IDENTIFIER = GroovyParser.Identifier,
	CAPITALIZED_IDENTIFIER = GroovyParser.CapitalizedIdentifier,
	AS = GroovyParser.AS,
	IN = GroovyParser.IN,
	PERMITS = GroovyParser.PERMITS,
	RECORD = GroovyParser.RECORD,
	SEALED = GroovyParser.SEALED,
	TRAIT = GroovyParser.TRAIT,
	VAR = GroovyParser.VAR,
	YIELD = GroovyParser.YIELD,
}

export enum IdentifierNodePurpose {
	VARIABLE = GroovyParser.RULE_variableDeclaratorId
}

export class IdentifierNodeSpecification implements ParsedNodeSpecification {
	private _type: IdentifierNodeType;
	private _purpose: IdentifierNodePurpose;

	get type(): IdentifierNodeType {
		return this._type;
	}

	get typeText(): string {
		return GroovyParser.symbolicNames[this._type];
	}

	get purpose(): IdentifierNodePurpose {
		return this._purpose;
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this._purpose];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['type.text', this.typeText],
			['purpose', this.purpose],
			['purpose.text', this.purposeText]
		];
	}

	static read(ctx: IdentifierContext): IdentifierNodeSpecification {
		const spec = new IdentifierNodeSpecification();
		// there is only one child in identifier context
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.Identifier:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.AS:
				case GroovyParser.IN:
				case GroovyParser.PERMITS:
				case GroovyParser.RECORD:
				case GroovyParser.SEALED:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.YIELD:
					spec._type = child.symbol.type;
					break;
				default:
					throw new IllegalArgumentException(`The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else {
			throw new IllegalArgumentException(`The only child[${child.constructor.name}] is not supported yet.`);
		}

		if (ctx.parentCtx instanceof VariableDeclaratorIdContext) {
			// this identifier is name of variable
			spec._purpose = IdentifierNodePurpose.VARIABLE;
		} else {
			// TODO more identifier purposes need to be identified
			throw new UnsupportedOperationException('TODO hey, implements me please!');
		}
		return spec;
	}
}
