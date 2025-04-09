import {Char} from '../types';
import {PreviousNodesWalker} from './previous-nodes-walker';

export interface PreviousNodesWalkerAndVisitor extends PreviousNodesWalker {
	visit(char: Char, offset: number): boolean;
}
