import {ParsedNode} from './Node';
import {ParsedNodeSpecification} from './NodeSpecification';
import {ParsedNodeUtils} from './NodeUtils';

export class DecorableParsedNode {
	private readonly _node: ParsedNode;
	private readonly _endColumn: number;

	constructor(node: ParsedNode) {
		this._node = node;
		if (node.endLine === node.startLine && node.endColumn < node.startColumn) {
			// just guard, decorable node must have text, otherwise it's meaningless
			const text = node.text ?? '';
			if (text.length === 0) {
				// no text, end is same as start
				this._endColumn = node.startColumn;
			} else {
				// has text, length is end - start + 1
				this._endColumn = node.startColumn + (node.text ?? '').length - 1;
			}
		} else {
			this._endColumn = node.endColumn;
		}

	}

	get underlay(): ParsedNode {
		return this._node;
	}

	get type(): number {
		return this._node.type;
	}

	get startLine(): number {
		return this._node.startLine;
	}

	get startColumn(): number {
		return this._node.startColumn;
	}

	get endLine(): number {
		return this._node.endLine;
	}

	get endColumn(): number {
		return this._endColumn;
	}

	get text(): string {
		return this._node.text ?? '';
	}

	get specification(): ParsedNodeSpecification {
		return this._node.specification;
	}

	toString(): string {
		// noinspection DuplicatedCode
		const props = [
			['type', ParsedNodeUtils.getRuleName(this.type)],
			['text', this.text],
			['startLine', this.startLine],
			['startColumn', this.startColumn],
			['endLine', this.endLine],
			['endColumn', this.endColumn],
			...(this.specification.properties.map(([key, value]) => [`spec.${key}`, value]))
		].map(([name, value]) => `${name}=${value ?? ''}`).join(', ');
		return `Decorable Node[${props}]`;
	}
}