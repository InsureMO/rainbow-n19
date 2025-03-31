import {AstNode, AstNodeConstructor} from '../../../ast-node';
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

	visit(char: Char, offset: number): boolean {
		// TODO to find all keywords which in front of me and can be grabbed as my child
		// create node
		const node = this.createAndAppendToAst(this.getAstNodeConstructor(), {
			text: this.keyword, startOffset: offset
		});

		this.moveCursorTo(this.createChildAstNodes(node, char, offset));
		return true;
	}
}
