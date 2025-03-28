import {AstNodeConstructor} from '../../../ast-node';
import {KwAsNode, KwStaticNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwAsCaptor extends AbstractKeywordCaptor<KwStaticNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.As, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwAsNode> {
		return KwAsNode;
	}
}