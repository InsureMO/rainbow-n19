import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {NativeNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwNativeCaptor extends AbstractKeywordCaptor<NativeNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Native, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NativeNode> {
		return NativeNode;
	}
}