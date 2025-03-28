import {AstNodeConstructor} from '../../../ast-node';
import {KwStaticNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwStaticCaptor extends AbstractKeywordCaptor<KwStaticNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Static, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwStaticNode> {
		return KwStaticNode;
	}
}