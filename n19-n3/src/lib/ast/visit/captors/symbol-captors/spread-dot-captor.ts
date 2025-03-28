import {AstNodeConstructor} from '../../../ast-node';
import {SpreadDotNode} from '../../../node';
import {AstChars} from '../../chars';
import {Char} from '../../types';
import {AbstractSingleCharCaptor} from '../abstract-single-char-captor';

export class SpreadDotCaptor extends AbstractSingleCharCaptor<SpreadDotNode> {
	protected get char(): Char {
		return AstChars.AsteriskMark;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SpreadDotNode> {
		return SpreadDotNode;
	}
}
