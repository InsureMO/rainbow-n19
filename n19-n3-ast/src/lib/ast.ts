import {AstNode} from './ast-node';
import {ProgramNode} from './program-node';

export interface Ast {
	readonly compilationUnit: ProgramNode;
	readonly document: string;
	readonly documentLength: number;
	readonly nodes: ReadonlyArray<AstNode>;
	readonly leafNodes: ReadonlyArray<AstNode>;
}

export abstract class AbstractAst implements Ast {
	protected readonly _compilationUnit: ProgramNode;

	protected constructor(document?: string) {
		document = document ?? '';
		this._compilationUnit = this.createProgramNode(document);
	}

	protected abstract createProgramNode(document: string): ProgramNode;

	get compilationUnit(): ProgramNode {
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
