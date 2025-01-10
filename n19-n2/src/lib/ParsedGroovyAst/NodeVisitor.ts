import {IllegalArgumentException} from '../JavaExceptions';
import {GroovyParser} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {DecorableParsedNode} from './DecorableParsedNode';
import {ParsedNode} from './Node';

export class ParsedNodeVisitor {
	private readonly _root: DecorableParsedNode;
	// sorted
	private readonly _atomicNodes: Array<DecorableParsedNode>;

	constructor(root: ParsedNode) {
		this._root = new DecorableParsedNode(root);
		this._atomicNodes = [];
		this.initBuild(this._root);
	}

	protected initBuild(node: DecorableParsedNode): void {
		this.collectToAtomicList(node);
		node.underlay.children.forEach(child => this.initBuild(new DecorableParsedNode(child)));
	}

	protected shouldCollectToAtomicList(node: DecorableParsedNode): boolean {
		switch (node.type) {
			case GroovyParser.RULE_compilationUnit:
			case GroovyParser.RULE_scriptStatements:
			case GroovyParser.RULE_scriptStatement:
			case GroovyParser.RULE_statement:
			case GroovyParser.RULE_localVariableDeclaration:
			case GroovyParser.RULE_variableDeclaration:
			case GroovyParser.RULE_modifiers:
			case GroovyParser.RULE_variableDeclarators:
			case GroovyParser.RULE_variableDeclarator:
			case GroovyParser.RULE_variableDeclaratorId:
			case GroovyParser.RULE_variableInitializer:
			case GroovyParser.RULE_enhancedStatementExpression:
			case GroovyParser.RULE_statementExpression:
			case GroovyParser.RULE_commandExpression:
			case GroovyParser.RULE_expression:
			case GroovyParser.RULE_postfixExpression:
			case GroovyParser.RULE_pathExpression:
			case GroovyParser.RULE_primary:
				return false;
			case GroovyParser.RULE_modifier:
			case GroovyParser.RULE_identifier:
			case GroovyParser.RULE_literal:
				return true;
			default:
				throw new IllegalArgumentException(`Node type[${node.type}] is not supported yet.`);
		}
	}

	protected collectToAtomicList(node: DecorableParsedNode): void {
		if (this.shouldCollectToAtomicList(node)) {
			this._atomicNodes.push(node);
		}
	}

	get atomicNodes(): Array<DecorableParsedNode> {
		return this._atomicNodes;
	}

	findAtomicNode(line: number, column: number): Optional<DecorableParsedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		while (startIndex <= endIndex) {
			const midIndex = Math.floor((startIndex + endIndex) / 2);
			const node = this._atomicNodes[midIndex];

			if (node.startLine <= line && node.startColumn <= column && node.endLine >= line && node.endColumn >= column) {
				// found, return
				return node;
			} else if (node.endLine < line || (node.endLine === line && node.endColumn < column)) {
				// not found, continue finding on right part when position is after current node
				startIndex = midIndex + 1;
			} else {
				// not found, continue finding on left part when given position is before current node
				endIndex = midIndex - 1;
			}
		}

		// not found
		return (void 0);
	}
}
