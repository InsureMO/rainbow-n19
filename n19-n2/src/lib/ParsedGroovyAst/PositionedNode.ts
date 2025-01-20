import {DecoratedNode} from './DecoratedNode';
import {HierarchicalNode} from './HierarchicalNode';

export class PositionedNode extends HierarchicalNode {
	constructor(node: DecoratedNode, parent?: PositionedNode) {
		super(node, parent);
	}

	get startLine(): number {
		return this.decorated.startLine;
	}

	get startColumn(): number {
		return this.decorated.startColumn;
	}

	get endLine(): number {
		return this.decorated.endLine;
	}

	get endColumn(): number {
		return this.decorated.endColumn;
	}

	positioning(): void {
		let startLine = 999_999_999;
		let startColumn = 999_999_999;
		let endLine = -1;
		let endColumn = -1;
		let startOffset = 999_999_999;
		let endOffset = -1;
		if (this.childCount === 0) {
			// do nothing
		} else {
			this.children.forEach(child => {
				const {
					startLine: l1, startColumn: c1,
					endLine: l2, endColumn: c2,
					startOffset: so, endOffset: eo
				} = child.decorated;
				if (l1 < startLine) {
					startLine = l1;
					startColumn = c1;
				} else if (l1 === startLine && c1 < startColumn) {
					startColumn = c1;
				}
				if (l2 > endLine) {
					endLine = l2;
					endColumn = c2;
				} else if (l2 === endLine && c2 > endColumn) {
					endColumn = c2;
				}
				if (so < startOffset) {
					startOffset = so;
				}
				if (eo > endOffset) {
					endOffset = eo;
				}
			});
			DecoratedNode.copyPosition(this.decorated, startLine, startColumn, endLine, endColumn, startOffset, endOffset);
		}
	}

	toString(indent: number = 0): string {
		const indentString = new Array<string>(indent).fill('').map(() => '\t').join('');
		const props = [
			['role', `${this.role}, ${this.roleText}`],
			['text', this.text ?? ''],
			['position', `L${this.startLine}C${this.startColumn}, L${this.endLine}C${this.endColumn}`]
		].map(([name, value]) => `${name}=${value ?? ''}`).join(', ');
		let s = `${indentString}Hierarchical Node[${props}]`;
		if (this.childCount !== 0) {
			s += '\n' + this.children.map(child => child.toString(indent + 1)).join('\n');
		}
		return s;
	}
}
