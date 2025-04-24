import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {SynchronizedNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwSynchronizedCaptor extends AbstractKeywordCaptor<SynchronizedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Synchronized, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SynchronizedNode> {
		return SynchronizedNode;
	}
}