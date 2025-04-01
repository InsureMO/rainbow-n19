import {AstNodeConstructor} from '../../../ast-node';
import {AtInterfaceDeclarationNode, KwAtInterfaceNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class AtInterfaceDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.AtInterface, AtInterfaceDeclarationNode, KwAtInterfaceNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.AtInterface, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AtInterfaceDeclarationNode> {
		return AtInterfaceDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<KwAtInterfaceNode> {
		return KwAtInterfaceNode;
	}
}
