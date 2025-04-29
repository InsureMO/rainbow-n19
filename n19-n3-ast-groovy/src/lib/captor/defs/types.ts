import {AstNode} from '@rainbow-n19/n3-ast';
import {GroovyAstNodeConstructOptions} from '../../node';
import {AstNodeCaptor} from '../captor';

export interface GroovyAstNodeConstructor<N extends AstNode = AstNode> {
	new(options: GroovyAstNodeConstructOptions): N;
}

export interface GroovyAstNodeCaptorConstructor<N extends AstNodeCaptor = AstNodeCaptor> {
	new(): N;
}
