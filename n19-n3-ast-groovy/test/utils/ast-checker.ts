import * as chalk from 'chalk';
import type {MatcherFunction} from 'expect';
import {AstUtils, GroovyAst, GroovyAstNode, TokenId} from '../../src';

export type NodeType = any;
export type NodeSpec =
	| [TokenId, number, number, number, string] // leaf node
	| [TokenId, number, number, number, string, Array<NodeSpec>] // container node

const Is: MatcherFunction<[expected: any, where: string]> = function (received, expected, where: string) {
	return {
		message: () => `${chalk.red.bold(`❌ With [${where}]`)},\n${this.utils.printDiffOrStringify(expected, received, `       ${chalk.green.underline('Expected')}`, `       ${chalk.red.underline('Received')}`, false)}.`,
		pass: received == expected
	};
};
expect.extend({
	is: Is
});
declare module 'expect' {
	interface AsymmetricMatchers {
		is(expected: any, where: string): void;
	}

	interface Matchers<R> {
		is(expected: any, where: string): R;
	}
}

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
		const [tokenId, startOffset, endOffset, startLine, text, children] = spec;
		const indent = new Array(bullet.split('.').length - 2).fill('\t').join('');
		try {
			expect(node).not.toBeNull();
			expect(node.tokenId).is(tokenId, 'TokenId');
			expect(node.startOffset).is(startOffset, 'StartOffset');
			expect(node.endOffset).is(endOffset, 'EndOffset');
			expect(node.startLine).is(startLine, 'StartLine');
			expect(node.text).is(text, 'Text');
			this._logs.push([
				indent,
				bullet,
				' ✅ ',
				`Check [type=${TokenId[tokenId]}, `,
				`offsetInDoc=[${startOffset}, ${endOffset}], `,
				`xyInDoc=[${startLine}, ${node.startColumn}], `,
				`text=${AstUtils.escapeForPrint(text)}`,
				'].'
			].join(''));
		} catch (e) {
			this._logs.push(chalk.red([
				indent,
				bullet,
				' 💔 ',
				`Check [type=${TokenId[tokenId]}, `,
				`offsetInDoc=[${startOffset}, ${endOffset}], `,
				`xyInDoc=[${startLine}, ${node.startColumn}], `,
				`text=${AstUtils.escapeForPrint(text)}`,
				'].'
			].join('')));
			this.print();
			throw e;
		}
		if (children != null) {
			try {
				expect(node.children.length).is(children.length, 'Children Count');
			} catch (e) {
				this._logs.push(chalk.red([
					indent,
					bullet,
					' 💔 ',
					`Check children count[type=${TokenId[tokenId]}].`
				].join('')));
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
