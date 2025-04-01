import {AstNode, AstNodeConstructor} from '../../../ast-node';
import {TokenId} from '../../../tokens';
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

	/**
	 * modifier can be concatenated with comments, new lines, whitespaces, tabs, annotations
	 */
	protected isModifierConcatenator(node: AstNode): boolean {
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			// annotation
			TokenId.AnnotationDeclaration
		].includes(node.tokenId);
	}

	/**
	 * check the given node is modifier or not
	 */
	protected isModifier(node: AstNode): boolean {
		return [
			// comment nodes
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.ABSTRACT, TokenId.FINAL, TokenId.STATIC,
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.STRICTFP
		].includes(node.tokenId);
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
