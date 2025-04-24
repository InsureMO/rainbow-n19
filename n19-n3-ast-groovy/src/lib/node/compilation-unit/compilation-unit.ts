import {Optional} from '@rainbow-n19/n2';
import {AstNode, AstNodeConstructOptions, ProgramNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * compilation unit, root.
 */
export class CompilationUnitNode extends AbstractAstNode implements ProgramNode {
	constructor(options: Omit<AstNodeConstructOptions, 'startLine'>) {
		super({...options, startLine: 0});
	}

	get tokenId(): TokenId {
		return TokenId.COMPILATION_UNIT;
	}

	get previous(): Optional<AstNode> {
		return (void 0);
	}

	get previousNodes(): Array<AstNode> {
		return [];
	}

	get previousSibling(): Optional<AstNode> {
		return (void 0);
	}

	get previousSiblings(): Array<AstNode> {
		return [];
	}

	get nextSibling(): Optional<AstNode> {
		return (void 0);
	}

	get nextSiblings(): Array<AstNode> {
		return [];
	}

	get parent(): Optional<AstNode> {
		return (void 0);
	}

	get root(): AstNode {
		return this;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	asNextOf(_previous: AstNode) {
		throw new Error('It is not allowed to set the compilation unit node as the subsequent node of any other node.');
	}

	protected pushAsLastChild(lastChild: AstNode) {
		this.defendChildren();
		this.doPushAsLastChild(lastChild);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	asLastChildOf(_parent: AstNode) {
		throw new Error('It is not allowed to set the compilation unit node as a child node of any other node.');
	}

	/**
	 * always append as child, and returns given one
	 */
	append(node: AstNode): AstNode {
		node.asLastChildOf(this);
		return node;
	}

	/**
	 * do nothing, text of this is frozen on constructing
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	appendText(_text: string): void {
		// do nothing
	}

	/**
	 * do nothing, compilation unit node is root node
	 */
	detachFromParent() {
		// do nothing
	}

	detachLastChild(lastNode: AstNode) {
		super.detachLastChild(lastNode);
	}

	/**
	 * do nothing, text of this is frozen on constructing
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	detachTextFromTail(_text: string) {
		// do nothing
	}
}
