import {AstNodeConstructor} from '../../../ast-node';
import {EnumClassDeclarationNode, KwEnumNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class EnumClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Enum, EnumClassDeclarationNode, KwEnumNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Enum, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<EnumClassDeclarationNode> {
		return EnumClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<KwEnumNode> {
		return KwEnumNode;
	}
}
