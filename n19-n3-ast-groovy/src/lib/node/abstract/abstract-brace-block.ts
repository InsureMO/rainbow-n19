import {AbstractEndByRBraceAstNode} from './abstract-end-by-rbrace';

/**
 * nothing special for brace block node, just a container node.
 * the first child node of brace block node is lbrace, and the last child node is rbrace (if exists).
 */
export abstract class AbstractBraceBlockNode extends AbstractEndByRBraceAstNode {
}
