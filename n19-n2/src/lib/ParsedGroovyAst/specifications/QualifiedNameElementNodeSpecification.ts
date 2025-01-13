import {ParserRuleContext, TerminalNode} from 'antlr4';
import {
	GroovyParser,
	IdentifierContext,
	ImportDeclarationContext,
	PackageDeclarationContext,
	QualifiedNameContext,
	QualifiedNameElementContext
} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedAstDebugger} from '../ParsedAstDebugger';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum QualifiedNameElementNodeType {
	IDENTIFIER = GroovyParser.Identifier,
	DEF = GroovyParser.DEF,
	IN = GroovyParser.IN,
	AS = GroovyParser.AS,
	TRAIT = GroovyParser.TRAIT,
}

export enum QualifiedNameElementNodePurpose {
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration,
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration
}

export class QualifiedNameElementNodeSpecification implements ParsedNodeSpecification {
	private _type: QualifiedNameElementNodeType;
	private _purpose: QualifiedNameElementNodePurpose;

	get type(): QualifiedNameElementNodeType {
		return this._type;
	}

	get typeText(): string {
		return GroovyParser.symbolicNames[this._type];
	}

	get purpose(): QualifiedNameElementNodePurpose {
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

	clone(): ParsedNodeSpecification {
		const spec = new QualifiedNameElementNodeSpecification();
		spec._type = this._type;
		spec._purpose = this._purpose;
		return spec;
	}

	static read(ctx: QualifiedNameElementContext, _debugger: ParsedAstDebugger): QualifiedNameElementNodeSpecification {
		const spec = new QualifiedNameElementNodeSpecification();
		QualifiedNameElementNodeSpecification.readType(ctx, spec, _debugger);
		QualifiedNameElementNodeSpecification.readPurpose(ctx, spec, _debugger);
		return spec;
	}

	private static readType(ctx: QualifiedNameElementContext, spec: QualifiedNameElementNodeSpecification, _debugger: ParsedAstDebugger) {
		// there is only one child in modifier context
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.DEF:
				case GroovyParser.IN:
				case GroovyParser.AS:
				case GroovyParser.TRAIT:
					spec._type = child.symbol.type;
					break;
				default:
					_debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else if (child instanceof IdentifierContext) {
			spec._type = QualifiedNameElementNodeType.IDENTIFIER;
		} else {
			_debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
	}

	private static readPurposeIfAncestorIsPackageOrImportDeclaration(_ctx: QualifiedNameElementContext, parentCtx: ParserRuleContext, spec: QualifiedNameElementNodeSpecification, _debugger: ParsedAstDebugger): boolean {
		if (!(parentCtx instanceof QualifiedNameContext)) {
			return false;
		}

		const parentOfQualifiedNameContext = parentCtx.parentCtx;
		if (parentOfQualifiedNameContext instanceof PackageDeclarationContext) {
			spec._purpose = QualifiedNameElementNodePurpose.PACKAGE_DECLARATION;
		} else if (parentOfQualifiedNameContext instanceof ImportDeclarationContext) {
			spec._purpose = QualifiedNameElementNodePurpose.IMPORT_DECLARATION;
		} else {
			// TODO more qualified name element purposes need to be identified
			_debugger.addMissedLogics(() => `Context[${parentOfQualifiedNameContext.constructor.name}] of QualifiedNameContext/QualifiedNameElementContext is not supported yet.`);
		}
		return true;
	}

	private static readPurpose(ctx: QualifiedNameElementContext, spec: QualifiedNameElementNodeSpecification, _debugger: ParsedAstDebugger) {
		const parentOfIdentifierContext = ctx.parentCtx;
		if (QualifiedNameElementNodeSpecification.readPurposeIfAncestorIsPackageOrImportDeclaration(ctx, parentOfIdentifierContext, spec, _debugger)) {
			// nothing
		} else {
			// TODO more identifier purposes need to be identified
			_debugger.addMissedLogics(() => `Context[${parentOfIdentifierContext.constructor.name}] of QualifiedNameElementContext is not supported yet.`);
		}
	}
}
