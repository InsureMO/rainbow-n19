import {AstNodeConstructor} from '../../../ast-node';
import {AstVisitor} from '../../../ast-visitor';
import {ClassDeclarationNode, ClassNode} from '../../../node';
import {AstKeywords} from '../../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class ClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Class, ClassDeclarationNode, ClassNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Class, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ClassDeclarationNode> {
		return ClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<ClassNode> {
		return ClassNode;
	}
}
