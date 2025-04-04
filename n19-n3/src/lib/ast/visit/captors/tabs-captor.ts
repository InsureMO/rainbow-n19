import {AstNodeConstructor} from '../../ast-node';
import {TabsNode} from '../../node';
import {AstChars} from '../chars';
import {Char} from '../types';
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
