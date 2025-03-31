import {AstNode} from './ast-node';
import {CompilationUnitNode} from './node';

export class Ast {
	private readonly _compilationUnit: CompilationUnitNode;

	constructor(document?: string) {
		document = document ?? '';
		this._compilationUnit = new CompilationUnitNode({text: document, startOffset: 0});
	}

	get compilationUnit(): CompilationUnitNode {
		return this._compilationUnit;
	}

	get document(): string {
		return this._compilationUnit.text;
	}

	get documentLength(): number {
		return this._compilationUnit.text.length;
	}

	get nodes(): Array<AstNode> {
		return this._compilationUnit.nextNodes;
	}

	get leafNodes(): Array<AstNode> {
		return this._compilationUnit.nextNodes.filter(node => node.children.length === 0);
	}

	toString() {
		const lines: Array<string> = [];
		const stringify = (node: AstNode, indent: string): void => {
			lines.push(indent + node.toString());
			node.children.map(child => stringify(child, indent + '\t'));
		};

		const indent = '\t';
		lines.push(this.compilationUnit.toString());
		this.compilationUnit.children.map(child => stringify(child, indent));
		return lines.join('\n') + '\n';
	}
}
