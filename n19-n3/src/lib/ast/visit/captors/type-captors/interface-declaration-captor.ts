import {AstNodeConstructor} from '../../../ast-node';
import {InterfaceDeclarationNode, KwInterfaceNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class InterfaceDeclarationCaptor extends AbstractTypeCaptor<InterfaceDeclarationNode, typeof KwInterfaceNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Interface, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<InterfaceDeclarationNode> {
		return InterfaceDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<typeof KwInterfaceNode> {
		return KwInterfaceNode;
	}
}
