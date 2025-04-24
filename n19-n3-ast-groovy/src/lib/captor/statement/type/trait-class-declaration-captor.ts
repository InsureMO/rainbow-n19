import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../../ast-visitor';
import {TraitClassDeclarationNode, TraitNode} from '../../../node';
import {AstKeywords} from '../../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class TraitClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Trait, TraitClassDeclarationNode, TraitNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Trait, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<TraitClassDeclarationNode> {
		return TraitClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<TraitNode> {
		return TraitNode;
	}
}
