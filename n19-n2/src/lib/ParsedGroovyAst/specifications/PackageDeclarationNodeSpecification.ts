import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum PackageDeclarationNodePurpose {
	PACKAGE = GroovyParser.PACKAGE
}

export class PackageDeclarationNodeSpecification implements ParsedNodeSpecification {
	private _purpose: PackageDeclarationNodePurpose;

	get purpose(): PackageDeclarationNodePurpose {
		return this._purpose;
	}

	setPurpose(purpose: PackageDeclarationNodePurpose): void {
		this._purpose = purpose;
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
}
