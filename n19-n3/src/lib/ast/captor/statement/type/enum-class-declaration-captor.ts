import {AstNodeConstructor} from '../../../ast-node';
import {EnumClassDeclarationNode, EnumNode} from '../../../node';
import {AstVisitor} from '../../../ast-visitor';
import {AstKeywords} from '../../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class EnumClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Enum, EnumClassDeclarationNode, EnumNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Enum, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<EnumClassDeclarationNode> {
		return EnumClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<EnumNode> {
		return EnumNode;
	}
}
