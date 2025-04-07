import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ByteNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtByteCaptor extends AbstractMultipleCharsCaptor<ByteNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.BYTE, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ByteNode> {
		return ByteNode;
	}
}