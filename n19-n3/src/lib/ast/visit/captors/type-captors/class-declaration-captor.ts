import {AstNodeConstructor} from '../../../ast-node';
import {ClassDeclarationNode, KwClassNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class ClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Class, ClassDeclarationNode, KwClassNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Class, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ClassDeclarationNode> {
		return ClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<KwClassNode> {
		return KwClassNode;
	}
}
