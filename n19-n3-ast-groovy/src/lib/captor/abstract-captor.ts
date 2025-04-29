import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode, GroovyAstNodeConstructOptions} from '../node';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptor, AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

export abstract class AbstractAstNodeCaptor implements AstNodeCaptor {
	protected sliceText(tokenizer: AstTokenizer, startOffset: number, endOffset: number): Optional<string> {
		return tokenizer.document.substring(startOffset, endOffset);
	}

	protected appendToAst(tokenizer: AstTokenizer, ...nodes: Array<GroovyAstNode>): void {
		nodes.forEach(node => tokenizer.appendToAst(node));
	}

	// mine
	protected createAstNode(tokenizer: AstTokenizer, options: Omit<GroovyAstNodeConstructOptions, 'startLine'>): GroovyAstNode {
		return GroovyAstNode.createAstNode({...options, startLine: tokenizer.currentLine()});
	}

	protected createAndAppendToAst(tokenizer: AstTokenizer, options: Omit<GroovyAstNodeConstructOptions, 'startLine'>): GroovyAstNode {
		const node = this.createAstNode(tokenizer, options);
		this.appendToAst(tokenizer, node);
		return node;
	}

	abstract checkers(): AstNodeCaptorCheckers;

	abstract visit(char: Char, offset: number, tokenizer: AstTokenizer): void;
}
