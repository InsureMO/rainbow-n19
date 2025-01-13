import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum ImportDeclarationNodePurpose {
	IMPORT = GroovyParser.IMPORT,
	STATIC = GroovyParser.STATIC,
	DOT_FOR_ALL_TYPES = GroovyParser.DOT,
	ALL_TYPES = GroovyParser.MUL,
	AS = GroovyParser.AS
}

export class ImportDeclarationNodeSpecification implements ParsedNodeSpecification {
	private _purpose: ImportDeclarationNodePurpose;

	get purpose(): ImportDeclarationNodePurpose {
		return this._purpose;
	}

	setPurpose(purpose: ImportDeclarationNodePurpose): void {
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
		const spec = new ImportDeclarationNodeSpecification();
		spec._purpose = this._purpose;
		return spec;
	}
}

