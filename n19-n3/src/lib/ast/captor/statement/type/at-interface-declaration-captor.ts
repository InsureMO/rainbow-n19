import {AstNodeConstructor} from '../../../ast-node';
import {AstVisitor} from '../../../ast-visitor';
import {AtInterfaceDeclarationNode, AtInterfaceNode} from '../../../node';
import {AstKeywords} from '../../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class AtInterfaceDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.AtInterface, AtInterfaceDeclarationNode, AtInterfaceNode]> {
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
