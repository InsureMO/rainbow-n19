import {AstNodeConstructor} from '../../../ast-node';
import {KwTraitNode, TraitClassDeclarationNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class TraitClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Trait, TraitClassDeclarationNode, KwTraitNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Trait, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<TraitClassDeclarationNode> {
		return TraitClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<KwTraitNode> {
		return KwTraitNode;
	}
}
