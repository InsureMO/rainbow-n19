import {AstNode, AstNodeConstructor} from '../../../ast-node';
import {AstVisitor} from '../../../ast-visitor';
import {
	AtInterfaceDeclarationNode,
	AtInterfaceNode,
	ClassDeclarationNode,
	ClassNode,
	EnumClassDeclarationNode,
	EnumNode,
	InterfaceDeclarationNode,
	InterfaceNode,
	RecordClassDeclarationNode,
	RecordNode,
	TraitClassDeclarationNode,
	TraitNode
} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractKeywordCaptor} from '../../keyword';
import {Char} from '../../types';
import {AstKeywords} from '../../util';

export type TypeDefs =
	| [AstKeywords.Interface, InterfaceDeclarationNode, InterfaceNode]
	| [AstKeywords.Class, ClassDeclarationNode, ClassNode]
	| [AstKeywords.AtInterface, AtInterfaceDeclarationNode, AtInterfaceNode]
	| [AstKeywords.Enum, EnumClassDeclarationNode, EnumNode]
	| [AstKeywords.Record, RecordClassDeclarationNode, RecordNode]
	| [AstKeywords.Trait, TraitClassDeclarationNode, TraitNode]

export abstract class AbstractTypeCaptor<T extends TypeDefs> extends AbstractKeywordCaptor<T[1]> {
	protected constructor(keyword: T[0], astVisitor: AstVisitor) {
		super(keyword, astVisitor);
	}

	protected isContainerNode(): boolean {
		return true;
	}

	protected abstract getKeywordAstNodeConstructor(): AstNodeConstructor<T[2]>

	/**
	 * create child ast nodes and returns end offset of last one.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected createChildAstNodes(_node: T[1], _char: Char, offset: number): number {
		this.createAndAppendToAst(this.getKeywordAstNodeConstructor(), {text: this.keyword, startOffset: offset});
		return offset + this.charsLength;
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
		// find all modifier and concatenator nodes before me, from closest to farthest
		// please note not all these nodes are belongs to me, will be removed later
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
		// now remove nodes which not belongs to me
		let removeStartIndex = 0;
		for (let index = modifierNodes.length - 1; index >= 0; index--) {
			const node = modifierNodes[index];
			if (node.tokenId !== TokenId.AnnotationDeclaration && !this.isModifier(node)) {
				removeStartIndex = index;
			} else {
				break;
			}
		}
		if (removeStartIndex !== 0) {
			modifierNodes.splice(removeStartIndex, modifierNodes.length - removeStartIndex);
		}

		// detach from parent, from closest
		modifierNodes.forEach(modifierNode => this.detachFromAst(modifierNode));
		// prepare for appending to ast, from farthest
		modifierNodes.reverse();
		// create type declaration node
		const node = this.createAndAppendToAst(this.getAstNodeConstructor(), {
			startOffset: modifierNodes.length === 0 ? offset : modifierNodes[0].startOffset
		});
		// append modifier nodes to type declaration node
		modifierNodes.forEach(modifierNode => this.appendToAst(modifierNode));

		this.moveCursorTo(this.createChildAstNodes(node, char, offset));
		return true;
	}
}
