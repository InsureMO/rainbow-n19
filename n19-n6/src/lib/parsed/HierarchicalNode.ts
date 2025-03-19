import {Optional} from '@rainbow-n19/n2';
import {DecoratedNode} from './DecoratedNode';

export class HierarchicalNode {
	private readonly _parent: Optional<HierarchicalNode>;
	private readonly _decorated: DecoratedNode;
	private readonly _children: Array<HierarchicalNode> = [];

	constructor(node: DecoratedNode, parent?: HierarchicalNode) {
		this._decorated = node;
		this._parent = parent;
		if (parent != null) {
			parent.appendChild(this);
		}
	}

	get parent(): Optional<HierarchicalNode> {
		return this._parent;
	}

	get decorated(): DecoratedNode {
		return this._decorated;
	}

	get role(): number {
		return this._decorated.role;
	}

	get roleText(): string {
		return this._decorated.roleText;
	}

	get text(): string {
		return this._decorated.text ?? '';
	}

	get children(): Array<HierarchicalNode> {
		return this._children;
	}

	get childCount(): number {
		return (this.children ?? []).length;
	}

	appendChild(node: HierarchicalNode) {
		this._children.push(node);
	}

	toString(indent: number = 0): string {
		const indentString = new Array<string>(indent).fill('').map(() => '\t').join('');
		const props = [
			['role', `${this.role}, ${this.roleText}`],
			['text', this.text ?? '']
		].map(([name, value]) => `${name}=${value ?? ''}`).join(', ');
		let s = `${indentString}Hierarchical Node[${props}]`;
		if (this.childCount !== 0) {
			s += '\n' + this.children.map(child => child.toString(indent + 1)).join('\n');
		}
		return s;
	}
}