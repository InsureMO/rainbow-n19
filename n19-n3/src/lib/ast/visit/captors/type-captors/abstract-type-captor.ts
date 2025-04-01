import {AstNode, AstNodeConstructor} from '../../../ast-node';
import {
	KwAbstractNode,
	KwFinalNode,
	KwNonSealedNode,
	KwPrivateNode,
	KwProtectedNode,
	KwPublicNode,
	KwSealedNode,
	KwStrictfpNode,
	MultipleLinesCommentNode,
	NewLineNode,
	SingleLineCommentNode,
	TabsNode,
	WhitespacesNode
} from '../../../node';
import {AstKeywords} from '../../chars';
import {Char} from '../../types';
import {AstVisitor} from '../../visitor';
import {AbstractKeywordCaptor} from '../keyword-captors';

export type TypeKeywords =
	| AstKeywords.Interface
	| AstKeywords.Class
	| AstKeywords.AtInterface
	| AstKeywords.Enum
	| AstKeywords.Record
	| AstKeywords.Trait;

export abstract class AbstractTypeCaptor<N extends AstNode, K extends AstNode> extends AbstractKeywordCaptor<N> {
	protected constructor(keyword: TypeKeywords, astVisitor: AstVisitor) {
		super(keyword, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected abstract getKeywordAstNodeConstructor(): AstNodeConstructor<K>

	/**
	 * create child ast nodes and returns end offset of last one.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected createChildAstNodes(_node: N, _char: Char, offset: number): number {
		this.createAndAppendToAst(this.getKeywordAstNodeConstructor(), {text: this.keyword, startOffset: offset});
		return offset + this.keywordLength;
	}

	protected isModifierConcatenator(node: AstNode): boolean {
		return node instanceof MultipleLinesCommentNode
			|| node instanceof SingleLineCommentNode
			|| node instanceof NewLineNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode;
	}

	protected isModifier(node: AstNode): boolean {
		return node instanceof KwPublicNode
			|| node instanceof KwProtectedNode
			|| node instanceof KwPrivateNode
			|| node instanceof KwAbstractNode
			|| node instanceof KwFinalNode
			|| node instanceof KwSealedNode
			|| node instanceof KwNonSealedNode
			|| node instanceof KwStrictfpNode;
	}

	visit(char: Char, offset: number): boolean {
		// to find all keywords which in front of me and can be grabbed as my child
		const modifierConcatenatorNodes: Array<AstNode> = [];
		const modifierNodes: Array<AstNode> = [];
		let nodeBeforeMe = this.latestNode();
		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (this.isModifierConcatenator(nodeBeforeMe)) {
				modifierConcatenatorNodes.push(nodeBeforeMe);
			} else if (this.isModifier(nodeBeforeMe)) {
				modifierNodes.push(...modifierConcatenatorNodes);
				modifierConcatenatorNodes.length = 0;
				modifierNodes.push(nodeBeforeMe);
			} else {
				break;
			}
			nodeBeforeMe = nodeBeforeMe.previousSibling;
			if (nodeBeforeMe == null) {
				break;
			}
		}
		// detach from parent, from nearest
		modifierNodes.forEach(modifierNode => this.detachFromAst(modifierNode));
		// prepare for appending to ast, from most distant
		modifierNodes.reverse();
		// create node
		const node = this.createAndAppendToAst(this.getAstNodeConstructor(), {
			startOffset: modifierNodes.length === 0 ? offset : modifierNodes[0].startOffset
		});
		modifierNodes.forEach(modifierNode => this.appendToAst(modifierNode));

		this.moveCursorTo(this.createChildAstNodes(node, char, offset));
		return true;
	}
}
