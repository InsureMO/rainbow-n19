import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {LBraceNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {Char} from '../types';
import {AstChars} from '../util';
import {LBraceNodeWalker} from './lbrace-node-walker';

/**
 * "{"
 *
 * When encountering {@link LBraceNode}, there are multiple scenarios, and it is necessary to determine how to capture it based on the previous nodes.
 * Consider the following scenarios:
 * - {@link ClassBodyNode},
 * - {@link StaticBlockBodyNode},
 * - {@link MethodBodyNode},
 * - {@link ClosureNode},
 * - {@link LambdaBodyNode},
 * - {@link IfIfBodyNode}, {@link IfElseIfBodyNode} and {@link IfElseBodyNode},
 * - {@link WhileBodyNode}, {@link DoWhileBodyNode},
 * - {@link ForBodyNode},
 * - {@link TryBodyNode}, {@link CatchBodyNode}, {@link FinallyBodyNode},
 * - {@link CodeBlock},
 * - {@link ArrayInitializer}
 */
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
		const previousNodes = this.getNodeWalker().grabModifiersAndConcatenators();

		// as single char
		return super.visit(char, offset);
	}
}
