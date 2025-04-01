import {AstNodeConstructor} from '../../../ast-node';
import {AtInterfaceDeclarationNode, KwAtInterfaceNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class AtInterfaceDeclarationCaptor extends AbstractTypeCaptor<AtInterfaceDeclarationNode, typeof KwAtInterfaceNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.AtInterface, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AtInterfaceDeclarationNode> {
		return AtInterfaceDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<typeof KwAtInterfaceNode> {
		return KwAtInterfaceNode;
	}
}
