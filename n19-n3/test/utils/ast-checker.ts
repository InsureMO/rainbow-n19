import {Ast, AstNode} from '../../src';

export type NodeType = any;
export type NodeSpec =
	| [NodeType, number, number, number, string] // leaf node
	| [NodeType, number, number, number, string, Array<NodeSpec>] // container node
const specialCharMap: { [key: string]: string } = {
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\b': '\\b',
	'\f': '\\f'
};
const regex = new RegExp(`[${Object.keys(specialCharMap).join('')}]`, 'g');

export class AstChecker {
	private readonly _ast: Ast;
	private readonly _spec: NodeSpec;
	private readonly _logs: Array<string> = [];

	public static check(ast: Ast, spec: NodeSpec): void {
		new AstChecker(ast, spec).check().print();
	}

	constructor(ast: Ast, spec: NodeSpec) {
		this._ast = ast;
		this._spec = spec;
	}

	private doCheck(node: AstNode, spec: NodeSpec, bullet: string) {
		const [type, startOffset, endOffset, startLine, text, children] = spec;
		const indent = new Array(bullet.split('.').length - 2).fill('\t').join('');
		try {
			expect(node).not.toBeNull();
			expect(node).toBeInstanceOf(type);
			expect(node.startOffset).toBe(startOffset);
			expect(node.endOffset).toBe(endOffset);
			expect(node.text).toBe(text);
			this._logs.push([
				indent,
				bullet,
				' ✅ [',
				`Check[type=${type.name}, `,
				`startOffset=${startOffset}, `,
				`endOffset=${endOffset}, `,
				`startLine=${startLine}, `,
				`text=${(text ?? '').replace(regex, (match) => specialCharMap[match])}`,
				'].'
			].join(''));
		} catch (e) {
			this._logs.push([
				indent,
				bullet,
				' 💔 [',
				`Check[type=${type.name}, `,
				`startOffset=${startOffset}, `,
				`endOffset=${endOffset}, `,
				`startLine=${startLine}, `,
				`text=${(text ?? '').replace(regex, (match) => specialCharMap[match])}`,
				'].'
			].join(''));
			this.print();
			throw e;
		}
		if (children != null) {
			expect(node.children.length).toBe(children.length);
			children.forEach((child, index) => {
				if (bullet === '0.') {
					this.doCheck(node.children[index], children[index], `${index + 1}.`);
				} else {
					this.doCheck(node.children[index], children[index], `${bullet}${index + 1}.`);
				}
			});
		}
	}

	check(): this {
		this.doCheck(this._ast.compilationUnit, this._spec, '0.');
		return this;
	}

	print() {
		console.log(this._logs.join('\n'));
	}
}
