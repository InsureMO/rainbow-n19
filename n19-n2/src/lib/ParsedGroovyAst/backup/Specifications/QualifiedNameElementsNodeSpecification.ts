import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum QualifiedNameElementsNodeType {
	DOT = GroovyParser.DOT,
}

export enum QualifiedNameElementsNodePurpose {
}

export class QualifiedNameElementsNodeSpecification extends AbstractNodeSpecification<QualifiedNameElementsNodeType, QualifiedNameElementsNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): QualifiedNameElementsNodeSpecification {
		return new QualifiedNameElementsNodeSpecification();
	}
}
