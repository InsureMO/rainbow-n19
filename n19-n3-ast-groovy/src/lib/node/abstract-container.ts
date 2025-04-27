import {AstNode} from '@rainbow-n19/n3-ast';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractContainerAstNode extends AbstractAstNode {
	private _closed: boolean = false;

	protected constructor(firstChild: AstNode) {
		super({text: '', startOffset: firstChild.startOffset, startLine: firstChild.startLine});
	}

	/**
	 * close me and do not accept child anymore
	 */
	close(): void {
		this._closed = true;
	}

	get closed(): boolean {
		return this._closed;
	}
}
