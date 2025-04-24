import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {AtInterfaceDeclarationNode, AtInterfaceNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class KwAtInterfaceCaptor extends AbstractTypeCaptor<[AstKeywords.AtInterface, AtInterfaceDeclarationNode, AtInterfaceNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.AtInterface, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AtInterfaceDeclarationNode> {
		return AtInterfaceDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<AtInterfaceNode> {
		return AtInterfaceNode;
	}
}
