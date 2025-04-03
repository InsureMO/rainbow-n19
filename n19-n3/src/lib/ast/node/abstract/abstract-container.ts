import {AstNode, AstNodeConstructOptions} from '../../ast-node';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractContainerAstNode extends AbstractAstNode {
	private _closed: boolean = false;

	constructor(options: AstNodeConstructOptions) {
		super({...options, text: ''});
		if (options.text != null && options.text.length !== 0) {
			console.warn(`For class[${this.constructor.name}], ` +
				'is one of implementation classes of AbstractContainerAstNode, ' +
				'text should be null or empty string, ' +
				`but is [${options.text}], and it is constructed by empty string now, check your code please.`);
		}
	}

	/**
	 * check given node could be child of me or not
	 */
	protected abstract couldBeChildOfMe(node: AstNode): boolean;

	/**
	 * close me and do not accept child anymore
	 */
	close(): void {
		this._closed = true;
	}

	get closed(): boolean {
		return this._closed;
	}

	protected appendAsLastChild(node: AstNode): AstNode {
		node.asLastChildOf(this);
		return node;
	}

	/**
	 * accept node which pass the {@link couldBeChildOfMe} check,
	 * otherwise call super.
	 */
	append(node: AstNode): AstNode {
		if (!this.closed && this.couldBeChildOfMe(node)) {
			// this is opened for child, and given node can be child of this
			return this.appendAsLastChild(node);
		} else {
			// given one cannot be child of this
			// also means this is closed for child
			const ret = super.append(node);
			if (!this._closed) {
				this.close();
			}
			return ret;
		}
	}
}
