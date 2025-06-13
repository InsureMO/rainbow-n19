import {GroovyAstNode} from '../../../node';
import {AstRecognition} from '../../node-recognize';

export type RetokenizeGroovyAstNodePosition = Pick<GroovyAstNode, 'startOffset' | 'startLine' | 'startColumn'>;
export type RetokenizedNodes = [nodes: Array<GroovyAstNode>, consumedNodeCount: number];
/**
 * node is the first node which needs to be retokenize, could be null,
 * node index is index of the first node,
 * position is for the first retokenized node.
 *
 * note there is an in-air text as very first part of retokenizing.
 */
export type RetokenizeAstRecognition =
	& Omit<AstRecognition, 'node'>
	& Partial<Pick<AstRecognition, 'node'>>
	& RetokenizeGroovyAstNodePosition;
export type Retokenize = (recognition: RetokenizeAstRecognition) => RetokenizedNodes;
