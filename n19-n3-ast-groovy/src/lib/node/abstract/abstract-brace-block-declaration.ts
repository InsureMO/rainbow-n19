import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractEndByRBraceAstNode} from './abstract-end-by-rbrace';

export enum BraceBlockStatus {
	NOT_STARTED = 'not-started',
	STARTED = 'started',
	ENDED = 'ended'
}

/**
 * brace block declaration carries more child nodes before the {@link AbstractBraceBlockNode},
 * it is important that the brace block declaration node should have zero or one brace block node,
 * and if there is a brace block node existing, it is the last child of declaration.
 */
export abstract class AbstractBraceBlockDeclarationNode extends AbstractEndByRBraceAstNode {
	private _blockStatus: BraceBlockStatus = BraceBlockStatus.NOT_STARTED;

	protected get blockStatus(): BraceBlockStatus {
		return this._blockStatus;
	}

	protected shouldStartBlock(node: AstNode): boolean {
		return node.tokenId === TokenId.LBrace;
	}

	protected shouldEndBlock(node: AstNode): boolean {
		return node.tokenId === TokenId.RBrace;
	}

	protected abstract couldBeChildOfMeOnBlockNotStarted(node: AstNode): boolean;

	/**
	 * default returns true
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMeOnBlockStarted(_node: AstNode): boolean {
		return true;
	}

	/**
	 * default returns false
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMeOnBlockEnded(_node: AstNode): boolean {
		return false;
	}

	/**
	 * any node could be child of me
	 */
	protected couldBeChildOfMe(node: AstNode): boolean {
		switch (this._blockStatus) {
			case BraceBlockStatus.NOT_STARTED: {
				return this.couldBeChildOfMeOnBlockNotStarted(node);
			}
			case BraceBlockStatus.STARTED: {
				// any node can be child of me when body started
				return this.couldBeChildOfMeOnBlockStarted(node);
			}
			case BraceBlockStatus.ENDED:
			default: {
				// any node cannot be child of me when body ended or status undetermined
				return this.couldBeChildOfMeOnBlockEnded(node);
			}
		}
	}

	protected appendAsLastChildOnBodyNotStarted(node: AstNode): AstNode {
		const ret = super.appendAsLastChild(node);
		if (this.shouldStartBlock(node)) {
			this._blockStatus = BraceBlockStatus.STARTED;
		}
		return ret;
	}

	protected appendAsLastChildOnBlockStarted(node: AstNode): AstNode {
		const ret = super.appendAsLastChild(node);
		if (this.shouldEndBlock(node)) {
			this._blockStatus = BraceBlockStatus.ENDED;
		}
		return ret;
	}

	protected appendAsLastChild(node: AstNode): AstNode {
		switch (this.blockStatus) {
			case BraceBlockStatus.NOT_STARTED: {
				return this.appendAsLastChildOnBodyNotStarted(node);
			}
			case BraceBlockStatus.STARTED: {
				return this.appendAsLastChildOnBlockStarted(node);
			}
			case BraceBlockStatus.ENDED:
			default: {
				// never occurred
				throw new Error(`Cannot append given node[${node.toString()}] when brace block ended.`);
			}
		}
	}
}
