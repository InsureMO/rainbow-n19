import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {InterfaceDeclarationNode, InterfaceNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class KwInterfaceCaptor extends AbstractTypeCaptor<[AstKeywords.Interface, InterfaceDeclarationNode, InterfaceNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Interface, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<InterfaceDeclarationNode> {
		return InterfaceDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<InterfaceNode> {
		return InterfaceNode;
	}
}
