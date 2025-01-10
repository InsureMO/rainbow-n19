import {ParsedNode} from './Node';
import {ParsedNodeSpecification} from './NodeSpecification';
import {ParsedNodeUtils} from './NodeUtils';

export class DecorableParsedNode {
	private readonly _node: ParsedNode;

	constructor(node: ParsedNode) {
		this._node = node;
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
		return this._node.endColumn;
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