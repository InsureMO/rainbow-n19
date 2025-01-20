import {TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedNode} from './ParsedNode';
import {ParsedNodeUtils} from './ParsedNodeUtils';
import {SymbolIndex} from './Types';

/**
 * instance created only in {@link ParsedNodeVisitor},
 * which means the given {@link ParsedNode} already finish the lifecycle of {@link GroovyParserRuleContext}, all information are read-in.
 */
export class DecoratedNode {
	static copyPositionAndTextFromToken(node: DecoratedNode, token: Token): void {
		node._startLine = token.line;
		node._startColumn = token.column;
		node._endLine = token.line;
		node._endColumn = token.column + (token.text ?? '').length;
		node._startOffset = token.start;
		node._endOffset = token.stop;
		node._text = token.text;
	}

	static copyPosition(node: DecoratedNode,
	                    startLine: number, startColumn: number,
	                    endLine: number, endColumn: number,
	                    startOffset: number, endOffset: number): void {
		node._startLine = startLine;
		node._startColumn = startColumn;
		node._endLine = endLine;
		node._endColumn = endColumn;
		node._startOffset = startOffset;
		node._endOffset = endOffset;
	}

	static createSymbol(node: ParsedNode, role: SymbolIndex, terminalNode: TerminalNode): DecoratedNode {
		const decorable = new DecoratedNode(node);
		decorable.setRole(role);
		DecoratedNode.copyPositionAndTextFromToken(decorable, terminalNode.symbol);
		return decorable;
	}

	static readonly NO_ROLE_SPECIFIED = -1;
	static readonly SYMBOL_ROLE = (role: number) => GroovyParser.symbolicNames[role];
	static readonly RULE_ROLE = (role: number) => GroovyParser.ruleNames[role];

	private readonly _parsed: ParsedNode;
	private _role: number = DecoratedNode.NO_ROLE_SPECIFIED;
	private _roleText: ((role: number) => string) = DecoratedNode.SYMBOL_ROLE;
	private _startLine: Optional<number> = (void 0);
	private _startColumn: Optional<number> = (void 0);
	private _endLine: Optional<number> = (void 0);
	private _endColumn: Optional<number> = (void 0);
	private _startOffset: Optional<number> = (void 0);
	private _endOffset: Optional<number> = (void 0);
	private _text: Optional<string> = (void 0);

	constructor(node: ParsedNode) {
		this._parsed = node;
	}

	get parsed(): ParsedNode {
		return this._parsed;
	}

	get type(): number {
		return this._parsed.type;
	}

	get role(): number {
		return this._role;
	}

	setRole(role: number, text?: (role: number) => string): void {
		this._role = role;
		if (text != null) {
			this._roleText = text;
		}
	}

	get roleText(): string {
		if (this._role === DecoratedNode.NO_ROLE_SPECIFIED) {
			return 'NoRoleSpecified';
		}
		return this._roleText(this._role);
	}

	get startLine(): number {
		return this._startLine ?? this._parsed.startLine;
	}

	get startColumn(): number {
		return this._startColumn ?? this._parsed.startColumn;
	}

	get endLine(): number {
		return this._endLine ?? this._parsed.endLine;
	}

	get endColumn(): number {
		return this._endColumn ?? this._parsed.endColumn;
	}

	get startOffset(): number {
		return this._startOffset ?? -1;
	}

	get endOffset(): number {
		return this._endOffset ?? -1;
	}

	get text(): string {
		return this._text ?? this._parsed.text ?? '';
	}

	toString(): string {
		// noinspection DuplicatedCode
		const props = [
			['type', ParsedNodeUtils.getRuleName(this.type)],
			['role', this.roleText],
			['text', this.text],
			['startLine', this.startLine],
			['startColumn', this.startColumn],
			['endLine', this.endLine],
			['endColumn', this.endColumn]
		].map(([name, value]) => `${name}=${value ?? ''}`).join(', ');
		return `Decorable Node[${props}]`;
	}
}