import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum PackageDeclarationNodeType {
	PACKAGE = GroovyParser.PACKAGE
}

export enum PackageDeclarationNodePurpose {
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration
}

export class PackageDeclarationNodeSpecification extends AbstractNodeSpecification<PackageDeclarationNodeType, PackageDeclarationNodePurpose> {
	get type(): PackageDeclarationNodeType {
		return PackageDeclarationNodeType.PACKAGE;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setType(_type: PackageDeclarationNodeType) {
	}

	get typeText(): string {
		return GroovyParser.symbolicNames[PackageDeclarationNodeType.PACKAGE];
	}

	get purpose(): PackageDeclarationNodePurpose {
		return PackageDeclarationNodePurpose.PACKAGE_DECLARATION;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setPurpose(_purpose: PackageDeclarationNodePurpose): void {
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[PackageDeclarationNodePurpose.PACKAGE_DECLARATION];
	}

	createClone(): PackageDeclarationNodeSpecification {
		return new PackageDeclarationNodeSpecification();
	}
}
