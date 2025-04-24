import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {RecordClassDeclarationNode, RecordNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class KwRecordCaptor extends AbstractTypeCaptor<[AstKeywords.Record, RecordClassDeclarationNode, RecordNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Record, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RecordClassDeclarationNode> {
		return RecordClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<RecordNode> {
		return RecordNode;
	}
}
