import {AstNodeConstructor} from '../../../ast-node';
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
import {AbstractKeywordCaptor} from '../../keyword';
import {Char} from '../../types';
import {AstKeywords} from '../../util';
import {TypeNodeWalker} from './type-node-walker';

export type TypeDefs =
	| [AstKeywords.Interface, InterfaceDeclarationNode, InterfaceNode]
	| [AstKeywords.Class, ClassDeclarationNode, ClassNode]
	| [AstKeywords.AtInterface, AtInterfaceDeclarationNode, AtInterfaceNode]
	| [AstKeywords.Enum, EnumClassDeclarationNode, EnumNode]
	| [AstKeywords.Record, RecordClassDeclarationNode, RecordNode]
	| [AstKeywords.Trait, TraitClassDeclarationNode, TraitNode]

/**
 * capture type keywords to create type declaration node,
 * and will grab previous nodes (modifier keywords, tabs, whitespaces, newlines, comments and annotations)
 * if they are belongs to this type declaration.
 */
export abstract class AbstractTypeCaptor<T extends TypeDefs> extends AbstractKeywordCaptor<T[1]> {
	protected readonly _nodeWalker = new TypeNodeWalker(this);

	protected constructor(keyword: T[0], astVisitor: AstVisitor) {
		super(keyword, astVisitor);
	}

	protected getNodeWalker(): TypeNodeWalker {
		return this._nodeWalker;
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

	visit(char: Char, offset: number): boolean {
		const nodeWalker = this.getNodeWalker();
		// to find all keywords which in front of me and can be grabbed as my child
		const modifierNodes = nodeWalker.grabNodes();

		// detach from parent, from closest to farthest, copy and reverse first
		this.detachFromAst(...(modifierNodes.slice().reverse()));
		// create type declaration node
		const node = this.createAndAppendToAst(this.getAstNodeConstructor(), {
			startOffset: modifierNodes.length === 0 ? offset : modifierNodes[0].startOffset
		});
		// append modifier nodes to type declaration node
		this.appendToAst(...modifierNodes);

		this.moveCursorTo(this.createChildAstNodes(node, char, offset));
		return true;
	}
}
