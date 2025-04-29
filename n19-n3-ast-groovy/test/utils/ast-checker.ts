import {AstUtils, GroovyAst, GroovyAstNode, TokenId} from '../../src';

export type NodeType = any;
export type NodeSpec =
	| [TokenId, number, number, number, string] // leaf node
	| [TokenId, number, number, number, string, Array<NodeSpec>] // container node

export class AstChecker {
	private readonly _ast: GroovyAst;
	private readonly _spec: NodeSpec;
	private readonly _logs: Array<string> = [];

	public static check(ast: GroovyAst, spec: NodeSpec): void {
		new AstChecker(ast, spec).check().print();
	}

	constructor(ast: GroovyAst, spec: NodeSpec) {
		this._ast = ast;
		this._spec = spec;
	}

	private doCheck(node: GroovyAstNode, spec: NodeSpec, bullet: string) {
		const [type, startOffset, endOffset, startLine, text, children] = spec;
		const indent = new Array(bullet.split('.').length - 2).fill('\t').join('');
		try {
			expect(node).not.toBeNull();
			expect(node.tokenId).toBe(type);
			expect(node.startOffset).toBe(startOffset);
			expect(node.endOffset).toBe(endOffset);
			expect(node.startLine).toBe(startLine);
			expect(node.text).toBe(text);
			this._logs.push([
				indent,
				bullet,
				' ✅ ',
				`Check [type=${TokenId[type]}, `,
				`offsetInDoc=[${startOffset}, ${endOffset}], `,
				`xyInDoc=[${startLine}, ${node.startColumn}], `,
				`text=${AstUtils.escapeForPrint(text)}`,
				'].'
			].join(''));
		} catch (e) {
			this._logs.push([
				indent,
				bullet,
				' 💔 ',
				`Check [type=${TokenId[type]}, `,
				`offsetInDoc=[${startOffset}, ${endOffset}], `,
				`xyInDoc=[${startLine}, ${node.startColumn}], `,
				`text=${AstUtils.escapeForPrint(text)}`,
				'].'
			].join(''));
			this.print();
			throw e;
		}
		if (children != null) {
			try {
				expect(node.children.length).toBe(children.length);
			} catch (e) {
				this._logs.push([
					indent,
					bullet,
					' 💔 ',
					`Check children count[type=${TokenId[type]}].`
				].join(''));
				this.print();
				throw e;
			}
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
