import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {DefaultNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * could be
 * 1. modifier of interface method,
 * 2. or default route of switch block.
 */
export class KwDefaultCaptor extends AbstractKeywordCaptor<DefaultNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Default, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DefaultNode> {
		return DefaultNode;
	}
}