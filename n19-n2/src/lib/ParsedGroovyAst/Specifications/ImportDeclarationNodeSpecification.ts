import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ImportDeclarationNodeType {
	IMPORT = GroovyParser.IMPORT,
	STATIC = GroovyParser.STATIC,
	DOT = GroovyParser.DOT,
	STAR = GroovyParser.MUL,
	AS = GroovyParser.AS
}

export enum ImportDeclarationNodePurpose {
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration
}

export class ImportDeclarationNodeSpecification extends AbstractNodeSpecification<ImportDeclarationNodeType, ImportDeclarationNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purpose(): ImportDeclarationNodePurpose {
		return ImportDeclarationNodePurpose.IMPORT_DECLARATION;
	}

	setPurpose(_purpose: ImportDeclarationNodePurpose) {
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ParsedNodeSpecification<ImportDeclarationNodeType, ImportDeclarationNodePurpose> {
		return new ImportDeclarationNodeSpecification();
	}
}
