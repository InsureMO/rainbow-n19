import {AstNodeConstructor} from '../../ast-node';
import {WhitespacesNode} from '../../node';
import {AstChars} from '../chars';
import {Char} from '../types';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';

/**
 * starts from a whitespace, and capture util character is not whitespace
 */
export class WhitespacesCaptor extends AbstractSameCharsCaptor<WhitespacesNode> {
	protected get leadChar(): Char {
		return AstChars.Whitespace;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<WhitespacesNode> {
		return WhitespacesNode;
	}
}
