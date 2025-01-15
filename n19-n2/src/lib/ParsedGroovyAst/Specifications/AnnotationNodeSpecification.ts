import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum AnnotationNodeType {
	AT = GroovyParser.AT,
	LPAREN = GroovyParser.LPAREN,
	RPAREN = GroovyParser.RPAREN,
}

export enum AnnotationNodePurpose {
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration,
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration,
}

export class AnnotationNodeSpecification extends AbstractNodeSpecification<AnnotationNodeType, AnnotationNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): AnnotationNodeSpecification {
		return new AnnotationNodeSpecification();
	}
}
