import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum QualifiedNameNodeType {
	DOT = GroovyParser.DOT,
}

export enum QualifiedNameNodePurpose {
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration,
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration,
}

export class QualifiedNameNodeSpecification extends AbstractNodeSpecification<QualifiedNameNodeType, QualifiedNameNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): QualifiedNameNodeSpecification {
		return new QualifiedNameNodeSpecification();
	}
}
