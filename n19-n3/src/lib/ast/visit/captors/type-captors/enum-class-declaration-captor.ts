import {AstNodeConstructor} from '../../../ast-node';
import {KwEnumNode} from '../../../node';
import {EnumClassDeclarationNode} from '../../../node/type-declaration-nodes';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class EnumClassDeclarationCaptor extends AbstractTypeCaptor<EnumClassDeclarationNode, typeof KwEnumNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Enum, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<EnumClassDeclarationNode> {
		return EnumClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<typeof KwEnumNode> {
		return KwEnumNode;
	}
}
