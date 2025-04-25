import {AstNode, AstNodeConstructOptions} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {AstNodeCaptor} from '../captor';

export interface AstNodeConstructor<N extends AstNode = AstNode> {
	new(options: AstNodeConstructOptions): N;
}

export interface AstNodeCaptorConstructor<N extends AstNodeCaptor = AstNodeCaptor> {
	new(astVisitor: AstVisitor): N;
}
