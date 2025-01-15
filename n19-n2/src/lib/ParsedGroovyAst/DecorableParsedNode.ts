import {Token} from 'antlr4';
import {GroovyParser} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {ParsedNode} from './ParsedNode';
import {ParsedNodeUtils} from './ParsedNodeUtils';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';

/**
 * instance created only in {@link ParsedNodeVisitor},
 * which means the given {@link ParsedNode} already finish the lifecycle of {@link GroovyParserRuleContext}, all information are read-in.
 */
export class DecorableParsedNode {
	static copyPositionAndTextFromToken(node: DecorableParsedNode, token: Token): void {
		node._startLine = token.line;
		node._startColumn = token.column;
		node._endLine = token.line;
		node._endColumn = token.stop;
		node._text = token.text;
	}

	static readonly NO_ROLE_SPECIFIED = -1;
	static readonly SYMBOLIC_ROLE = (role: number) => GroovyParser.symbolicNames[role];
	static readonly RULE_ROLE = (role: number) => GroovyParser.ruleNames[role];

	private readonly _node: ParsedNode;
	private _role: number = DecorableParsedNode.NO_ROLE_SPECIFIED;
	private _roleText: ((role: number) => string) = DecorableParsedNode.SYMBOLIC_ROLE;
	private _startLine: Optional<number> = (void 0);
	private _startColumn: Optional<number> = (void 0);
	private _endLine: Optional<number> = (void 0);
	private _endColumn: Optional<number> = (void 0);
	private _text: Optional<string> = (void 0);

	constructor(node: ParsedNode) {
		this._node = node;
		this.decorate();
	}

	protected decorate() {
		const processor = PostNodeProcessorRegistry.getProcessor(this.type);
		if (processor.shouldDecorate(this)) {
			processor.decorate(this);
		}
	}

	get underlay(): ParsedNode {
		return this._node;
	}

	get type(): number {
		return this._node.type;
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
		if (this._role === DecorableParsedNode.NO_ROLE_SPECIFIED) {
			return 'NoRoleSpecified';
		}
		return this._roleText(this._role);
	}

	get startLine(): number {
		return this._startLine ?? this._node.startLine;
	}

	get startColumn(): number {
		return this._startColumn ?? this._node.startColumn;
	}

	get endLine(): number {
		return this._endLine ?? this._node.endLine;
	}

	get endColumn(): number {
		return this._endColumn ?? this._node.endColumn;
	}

	get text(): string {
		return this._text ?? this._node.text ?? '';
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