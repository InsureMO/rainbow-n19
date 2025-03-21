import {AstNode} from '../../ast-node';
import {AstNodeConstructOptions, WhitespacesNode} from '../../node';
import {AstChars} from '../chars';
import {Char} from '../types';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';

/**
 * starts from a whitespace, and capture util character is not whitespace
 */
export class WhitespacesCaptor extends AbstractSameCharsCaptor {
	protected get leadChar(): Char {
		return AstChars.Whitespace;
	}

	protected createAstNode(options: AstNodeConstructOptions): AstNode {
		return new WhitespacesNode(options);
	}
}
