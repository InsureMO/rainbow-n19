import {AstNode} from '../../ast-node';
import {AstNodeConstructOptions, TabsNode} from '../../node';
import {AstChars} from '../chars';
import {Char} from '../types';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';

/**
 * starts from a tab, and capture util character is not tab
 */
export class TabsCaptor extends AbstractSameCharsCaptor {
	protected get leadChar(): Char {
		return AstChars.Tab;
	}

	protected createAstNode(options: AstNodeConstructOptions): AstNode {
		return new TabsNode(options);
	}
}
