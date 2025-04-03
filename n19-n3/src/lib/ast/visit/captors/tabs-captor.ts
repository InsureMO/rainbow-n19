import {AstNodeConstructor} from '../../ast-node';
import {Char} from '../../captor';
import {TabsNode} from '../../node';
import {AstChars} from '../chars';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';

/**
 * starts from a tab, and capture util character is not tab
 */
export class TabsCaptor extends AbstractSameCharsCaptor<TabsNode> {
	protected get leadChar(): Char {
		return AstChars.Tab;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<TabsNode> {
		return TabsNode;
	}
}
