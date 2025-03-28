import {AstNodeConstructor} from '../../../ast-node';
import {DotNode} from '../../../node';
import {AstChars} from '../../chars';
import {Char} from '../../types';
import {AbstractSingleCharCaptor} from '../abstract-single-char-captor';

export class DotCaptor extends AbstractSingleCharCaptor<DotNode> {
	protected get char(): Char {
		return AstChars.Dot;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DotNode> {
		return DotNode;
	}
}
