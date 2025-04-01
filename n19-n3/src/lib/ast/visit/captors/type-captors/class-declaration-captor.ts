import {AstNodeConstructor} from '../../../ast-node';
import {KwClassNode} from '../../../node';
import {ClassDeclarationNode} from '../../../node/type-declaration-nodes';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class ClassDeclarationCaptor extends AbstractTypeCaptor<ClassDeclarationNode, typeof KwClassNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Class, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ClassDeclarationNode> {
		return ClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<typeof KwClassNode> {
		return KwClassNode;
	}
}
