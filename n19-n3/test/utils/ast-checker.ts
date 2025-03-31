import {AstNode} from '../../lib';

export type NodeType = any;
export type NodeSpec =
	| [NodeType, number, number, string] // leaf node
	| [NodeType, number, number, string, Array<NodeSpec>] // container node
export const checkAst = <N extends AstNode>(node: AstNode, spec: NodeSpec) => {
	const [type, startOffset, endOffset, text, children] = spec;
	expect(node).not.toBeNull();
	expect(node).toBeInstanceOf(type);
	expect(node.startOffset).toBe(startOffset);
	expect(node.endOffset).toBe(endOffset);
	expect(node.text).toBe(text);
};
