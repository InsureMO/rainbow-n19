import {CompilationUnitNode, GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';

export interface AstRecognition {
	node: GroovyAstNode;
	nodeIndex: number;
	nodes: Array<GroovyAstNode>;
	compilationUnit: CompilationUnitNode;
	astRecognizer: AstRecognizer;
}

/**
 * must be stateless
 */
export interface NodeRecognizer {
	acceptTokenId(): TokenId;
	recognize(recognition: AstRecognition): number;
}
