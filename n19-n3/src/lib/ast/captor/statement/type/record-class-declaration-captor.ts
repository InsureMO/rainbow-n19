import {AstNodeConstructor} from '../../../ast-node';
import {RecordClassDeclarationNode, RecordNode} from '../../../node';
import {AstVisitor} from '../../../ast-visitor';
import {AstKeywords} from '../../util';
import {AbstractTypeCaptor} from './abstract-type-captor';

export class RecordClassDeclarationCaptor extends AbstractTypeCaptor<[AstKeywords.Record, RecordClassDeclarationNode, RecordNode]> {
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
