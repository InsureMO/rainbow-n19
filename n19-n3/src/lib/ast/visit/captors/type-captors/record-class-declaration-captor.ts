import {AstNodeConstructor} from '../../../ast-node';
import {KwRecordNode, RecordClassDeclarationNode} from '../../../node';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class RecordClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Record, RecordClassDeclarationNode, KwRecordNode]> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Record, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RecordClassDeclarationNode> {
		return RecordClassDeclarationNode;
	}

	protected getKeywordAstNodeConstructor(): AstNodeConstructor<KwRecordNode> {
		return KwRecordNode;
	}
}
