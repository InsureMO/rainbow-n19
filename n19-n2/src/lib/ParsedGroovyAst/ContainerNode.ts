import {ParsedNode} from './Node';

export abstract class ParsedContainerNode extends ParsedNode {
	private readonly _children: Array<ParsedNode> = [];

	get children(): Array<ParsedNode> {
		return this._children;
	}

	get childCount(): number {
		return this._children.length;
	}

	childAt(index: number): ParsedNode {
		return this._children[index];
	}

	appendChild(child: ParsedNode): this {
		this._children.push(child);
		return this;
	}
}
