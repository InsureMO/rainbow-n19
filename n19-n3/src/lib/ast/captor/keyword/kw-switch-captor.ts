import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {SwitchNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwSwitchCaptor extends AbstractKeywordCaptor<SwitchNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Switch, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SwitchNode> {
		return SwitchNode;
	}
}