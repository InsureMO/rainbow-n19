import {AstNode, AstNodeConstructOptions, AstNodeConstructor, Optional} from '@rainbow-n19/n3-ast';
import {GroovyAst} from '../ast';
import {AstVisitor} from '../ast-visitor';
import {AbstractContainerAstNode, CompilationUnitNode} from '../node';
import {TokenId} from '../tokens';
import {AstNodeCaptor, AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

export abstract class AbstractAstNodeCaptor implements AstNodeCaptor {
	private readonly _astVisitor: AstVisitor;

	constructor(astVisitor: AstVisitor) {
		this._astVisitor = astVisitor;
	}

	// delegators of ast visitor
	charAt(offset: number): Optional<Char> {
		return this._astVisitor.charAt(offset);
	}

	sliceText(startOffset: number, endOffset: number): Optional<string> {
		return this._astVisitor.document.substring(startOffset, endOffset);
	}

	currentLine(): number {
		return this._astVisitor.currentLine();
	}

	ast(): GroovyAst {
		return this._astVisitor.ast;
	}

	currentNode(): AstNode {
		return this._astVisitor.currentNode();
	}

	latestNode(): AstNode {
		return this._astVisitor.latestNode();
	}

	latestOpenContainerNode(node: AstNode = this.latestNode()): CompilationUnitNode | AbstractContainerAstNode {
		if (node.tokenId === TokenId.COMPILATION_UNIT) {
			return node as CompilationUnitNode;
		}
		if (node instanceof AbstractContainerAstNode && !node.closed) {
			return node;
		}
		return this.latestOpenContainerNode(node.parent);
	}

	latestOpenNode(node: AstNode = this.latestNode()): AstNode {
		const latestOpenContainerNode = this.latestOpenContainerNode(node);
		const children = latestOpenContainerNode.children;
		if (children == null || children.length === 0) {
			return latestOpenContainerNode;
		} else {
			return children[children.length - 1];
		}
	}

	protected moveCursorTo(offset: number): void {
		this._astVisitor.moveCursorTo(offset);
	}

	protected moveToNextLine(): void {
		this._astVisitor.moveToNextLine();
	}

	protected appendToAst(...nodes: Array<AstNode>): void {
		nodes.forEach(node => this._astVisitor.appendToAst(node));
	}

	// mine
	protected createAstNode<N extends AstNode>(Constructor: AstNodeConstructor<N>, options: Omit<AstNodeConstructOptions, 'startLine'>): N {
		return new Constructor({...options, startLine: this.currentLine()});
	}

	protected createAndAppendToAst<N extends AstNode>(Constructor: AstNodeConstructor<N>, options: Omit<AstNodeConstructOptions, 'startLine'>): N {
		const node = this.createAstNode(Constructor, options);
		this.appendToAst(node);
		return node;
	}

	abstract checkers(): AstNodeCaptorCheckers;

	abstract visit(char: Char, offset: number): void;
}
