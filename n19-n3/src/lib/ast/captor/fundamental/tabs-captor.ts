import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {TabsNode} from '../../node';
import {AbstractSameCharsCaptor} from '../abstract';
import {AstChars} from '../util';

/**
 * starts from a tab, and capture util character is not tab
 */
export class TabsCaptor extends AbstractSameCharsCaptor<TabsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.Tab, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<TabsNode> {
		return TabsNode;
	}
}
