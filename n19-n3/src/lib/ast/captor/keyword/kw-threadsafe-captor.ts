import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ThreadsafeNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwThreadsafeCaptor extends AbstractKeywordCaptor<ThreadsafeNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Threadsafe, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ThreadsafeNode> {
		return ThreadsafeNode;
	}
}