import {GroovyParser, PackageDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedAstDebugger} from '../ParsedAstDebugger';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum PackageDeclarationNodePurpose {
	PACKAGE = GroovyParser.PACKAGE
}

export class PackageDeclarationNodeSpecification implements ParsedNodeSpecification {
	private _purpose: PackageDeclarationNodePurpose;

	get purpose(): PackageDeclarationNodePurpose {
		return this._purpose;
	}

	get purposeText(): string {
		return GroovyParser.literalNames[this._purpose];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['purpose', this.purpose],
			['purpose.text', this.purposeText]
		];
	}

	clone(): ParsedNodeSpecification {
		const spec = new PackageDeclarationNodeSpecification();
		spec._purpose = this._purpose;
		return spec;
	}

	/**
	 * default purpose is {@link PackageDeclarationNodePurpose#IMPORT}
	 */
	static read(_ctx: PackageDeclarationContext, _debugger: ParsedAstDebugger): PackageDeclarationNodeSpecification {
		const spec = new PackageDeclarationNodeSpecification();
		spec._purpose = PackageDeclarationNodePurpose.PACKAGE;
		return spec;
	}
}
