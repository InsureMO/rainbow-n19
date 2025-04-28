import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAst} from '../ast';
import {GroovyAstNode, GroovyAstNodeConstructOptions} from '../node';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptor, AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

export abstract class AbstractAstNodeCaptor implements AstNodeCaptor {
	private readonly _tokenizer: AstTokenizer;

	constructor(tokenizer: AstTokenizer) {
		this._tokenizer = tokenizer;
	}

	// delegators of ast visitor
	charAt(offset: number): Optional<Char> {
		return this._tokenizer.charAt(offset);
	}

	sliceText(startOffset: number, endOffset: number): Optional<string> {
		return this._tokenizer.document.substring(startOffset, endOffset);
	}

	currentLine(): number {
		return this._tokenizer.currentLine();
	}

	ast(): GroovyAst {
		return this._tokenizer.ast;
	}

	latestNode(): GroovyAstNode {
		return this._tokenizer.latestNode();
	}

	protected moveCursorTo(offset: number): void {
		this._tokenizer.moveCursorTo(offset);
	}

	protected moveToNextLine(): void {
		this._tokenizer.moveToNextLine();
	}

	protected appendToAst(...nodes: Array<GroovyAstNode>): void {
		nodes.forEach(node => this._tokenizer.appendToAst(node));
	}

	// mine
	protected createAstNode(options: Omit<GroovyAstNodeConstructOptions, 'startLine'>): GroovyAstNode {
		return GroovyAstNode.createAstNode({...options, startLine: this.currentLine()});
	}

	protected createAndAppendToAst(options: Omit<GroovyAstNodeConstructOptions, 'startLine'>): GroovyAstNode {
		const node = this.createAstNode(options);
		this.appendToAst(node);
		return node;
	}

	abstract checkers(): AstNodeCaptorCheckers;

	abstract visit(char: Char, offset: number): void;
}
