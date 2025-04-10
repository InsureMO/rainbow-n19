import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {LBraceNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {Char} from '../types';
import {AstChars} from '../util';
import {LBraceNodeWalker} from './lbrace-node-walker';

/** "{" */
export class LBraceCaptor extends AbstractSingleCharCaptor<LBraceNode> {
	protected readonly nodeWalker = new LBraceNodeWalker(this);

	constructor(astVisitor: AstVisitor) {
		super(AstChars.LBrace, astVisitor);
	}

	protected getNodeWalker(): LBraceNodeWalker {
		return this.nodeWalker;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBraceNode> {
		return LBraceNode;
	}

	visit(char: Char, offset: number): boolean {
		const visited: boolean = this.getNodeWalker().visit(char, offset);

		if (visited) {
			return true;
		} else {
			// as single char
			return super.visit(char, offset);
		}
	}
}
