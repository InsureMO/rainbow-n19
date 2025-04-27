import {Ast} from '@rainbow-n19/n3-ast';

/**
 * Stateful, and an instance needs to be created for each use.
 */
export class NodeRecognizer {
	recognize(ast: Ast): void {
		const complicationUnitNode = ast.compilationUnit;
		const nodes = complicationUnitNode.nextNodes;
		if (nodes == null || nodes.length === 0) {
			return;
		}

		const nodeCount = nodes.length;
		let nodeIndex = 0;
		while (nodeIndex < nodeCount) {
			const node = nodes[nodeIndex];

		}
	}
}