import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {
	NodeAsParentDeclaration,
	NodeAsParentDeclareFunc,
	NodeDeclareAsParent,
	NodePreservableCheckFunc,
	NodeRehydrateFunc
} from '../defs';
import {NodePointcuts} from '../pointcuts';
import {AstRecognition, NodeRecognizer} from '../types';

/**
 * node recognizer follows steps as below:
 * 1. try to apply rehydration,
 * 2. try to apply preservation,
 * 3. try to apply declaring as parent, upgrade to declaration/statement/expression,
 * 4. append to ast as leaf when none of above 3 applied.
 */
export abstract class AbstractNodeRecognizer implements NodeRecognizer {
	abstract acceptTokenId(): TokenId;

	protected abstract getPreservableCheckFunctions(): Array<NodePreservableCheckFunc>;

	protected doPreserve(recognition: AstRecognition): Optional<number> {
		const preservableCheckFuncs = this.getPreservableCheckFunctions();
		for (let index = 0, count = preservableCheckFuncs.length; index < count; index++) {
			if (preservableCheckFuncs[index](recognition) === true) {
				const {node, nodeIndex, astRecognizer} = recognition;
				astRecognizer.appendAsLeaf(node, false);
				return nodeIndex + 1;
			}
		}
		return (void 0);
	}

	protected abstract getRehydrateFunctions(): Array<NodeRehydrateFunc>;

	protected doRehydrate(recognition: AstRecognition): Optional<number> {
		let nextNodeIndex: Optional<number>;
		const rehydrateFuncs = this.getRehydrateFunctions();
		for (let index = 0, count = rehydrateFuncs.length; index < count; index++) {
			nextNodeIndex = rehydrateFuncs[index](recognition);
			if (nextNodeIndex != null) {
				return nextNodeIndex;
			}
		}
		return (void 0);
	}

	protected abstract getDeclareAsParentFuncs(): Array<NodeAsParentDeclareFunc>;

	private createDeclaredParentNode(givenNode: GroovyAstNode, declaration: NodeAsParentDeclaration): GroovyAstNode {
		const [tokenId, tokenType, extra] = declaration;
		const parentNode = new GroovyAstNode({
			tokenId, tokenType,
			text: '', startOffset: givenNode.startOffset,
			startLine: givenNode.startLine, startColumn: givenNode.startColumn
		});
		(extra ?? NodePointcuts[tokenId])?.(parentNode);
		return parentNode;
	}

	protected doDeclareAsParent(recognition: AstRecognition): Optional<number> {
		const declareParentFuncs = this.getDeclareAsParentFuncs();
		for (let index = 0, count = declareParentFuncs.length; index < count; index++) {
			const declarations = declareParentFuncs[index](recognition);
			if (declarations != null) {
				const {node, nodeIndex, astRecognizer} = recognition;
				if (NodeDeclareAsParent.isNodeAsParentsDeclaration(declarations)) {
					const parentNodes = declarations.map(declaration => {
						return this.createDeclaredParentNode(node, declaration);
					});
					// first one is parent, rest are ancestors
					parentNodes[0].asParentOf(node);
					// append all ancestors to ast
					parentNodes.reverse().forEach(ancestorNode => astRecognizer.appendAsCurrentParent(ancestorNode));
				} else {
					const parentNode = this.createDeclaredParentNode(node, declarations);
					parentNode.asParentOf(node);
					astRecognizer.appendAsCurrentParent(parentNode);
				}
				return nodeIndex + 1;
			}
		}
		return (void 0);
	}

	/**
	 * default append given node to ast as leaf, and perform parent check.
	 */
	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		astRecognizer.appendAsLeaf(node, true);
		return nodeIndex + 1;
	}

	recognize(recognition: AstRecognition): number {
		let nodeIndex = this.doRehydrate(recognition);
		if (nodeIndex != null) {
			return nodeIndex;
		}
		nodeIndex = this.doPreserve(recognition);
		if (nodeIndex != null) {
			return nodeIndex;
		}
		nodeIndex = this.doDeclareAsParent(recognition);
		if (nodeIndex != null) {
			return nodeIndex;
		}
		return this.doRecognize(recognition);
	}
}
