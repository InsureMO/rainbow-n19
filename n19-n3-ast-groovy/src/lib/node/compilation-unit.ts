import {AstNodeConstructOptions, Optional, ProgramNode} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../tokens';
import {GroovyAstNode} from './groovy-node';

/**
 * compilation unit, root.
 */
export class CompilationUnitNode extends GroovyAstNode implements ProgramNode {
	constructor(options: Omit<AstNodeConstructOptions, 'startLine'>) {
		super({
			...options,
			tokenId: TokenId.COMPILATION_UNIT, tokenType: TokenType.CompilationUnit,
			startLine: 0, startColumn: 0
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	replaceTokenNature(_tokenId: TokenId, _tokenType: TokenType) {
		// do nothing
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	replaceTokenNatureAndText(_tokenId: TokenId, _tokenType: TokenType, _text: string): void {
		// do nothing
	}

	get previousSibling(): Optional<GroovyAstNode> {
		return (void 0);
	}

	get previousSiblings(): Array<GroovyAstNode> {
		return [];
	}

	get nextSibling(): Optional<GroovyAstNode> {
		return (void 0);
	}

	get nextSiblings(): Array<GroovyAstNode> {
		return [];
	}

	get parent(): Optional<GroovyAstNode> {
		return (void 0);
	}

	get root(): GroovyAstNode {
		return this;
	}

	clearAndShallowCloneChildren(): Array<GroovyAstNode> {
		const children = [...this._children ?? []];
		if (this._children != null) {
			this._children.length = 0;
		}
		return children;
	}

	protected pushAsLastChild(lastChild: GroovyAstNode): void {
		this.defendChildren();
		this.doPushAsLastChild(lastChild);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	asLastChildOf(_parent: GroovyAstNode): void {
		throw new Error('It is not allowed to set the compilation unit node as a child node of any other node.');
	}

	/**
	 * do nothing, text of this is frozen on constructing
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	appendText(_text: string): void {
		// do nothing
	}
}
