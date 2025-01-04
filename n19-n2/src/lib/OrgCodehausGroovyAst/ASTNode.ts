import {RuntimeException} from '../JavaExceptions';
import {JavaFunction} from '../JavaUtil';
import {Optional} from '../TsAddon';
import {GroovyCodeVisitor} from './GroovyCodeVisitor';
import {NodeMetaDataHandler} from './NodeMetaDataHandler';
import {NodeMetaDataHandlerSupport} from './NodeMetaDataHandlerSupport';

export class ASTNode implements NodeMetaDataHandler {
	private readonly _nodeMetaDataHandlerSupport: NodeMetaDataHandlerSupport = new NodeMetaDataHandlerSupport(this);
	private _lineNumber: number = -1;
	private _columnNumber: number = -1;
	private _lastLineNumber: number = -1;
	private _lastColumnNumber: number = -1;
	private readonly _metaDataMap: Map<any, any> = new Map();
	private _randomId: number;

	visit(_visitor: GroovyCodeVisitor): void {
		throw new RuntimeException('No visit() method implemented for class: ' + this.constructor.name);
	}

	/**
	 * needs to be overridden
	 */
	get text(): string {
		let proto = Object.getPrototypeOf(this);
		let className = proto.constructor.name;
		while (className === '') {
			// get constructor name from super class
			proto = Object.getPrototypeOf(proto);
			className = proto.constructor.name;
		}

		// noinspection HtmlUnknownAttribute
		return '<not implemented yet for class: ' + className + '>';
	}

	get lineNumber(): number {
		return this._lineNumber;
	}

	setLineNumber(lineNumber: number): void {
		this._lineNumber = lineNumber;
	}

	get columnNumber(): number {
		return this._columnNumber;
	}

	setColumnNumber(columnNumber: number): void {
		this._columnNumber = columnNumber;
	}

	get lastLineNumber(): number {
		return this._lastLineNumber;
	}

	setLastLineNumber(lastLineNumber: number): void {
		this._lastLineNumber = lastLineNumber;
	}

	get lastColumnNumber(): number {
		return this._lastColumnNumber;
	}

	setLastColumnNumber(lastColumnNumber: number): void {
		this._lastColumnNumber = lastColumnNumber;
	}

	/**
	 * Sets the source position using another ASTNode.
	 * The sourcePosition consists of a line/column pair for
	 * the start and a line/column pair for the end of the
	 * expression or statement
	 *
	 * @param node - the node used to configure the position information
	 */
	setSourcePosition(node: ASTNode): void {
		this._lineNumber = node.lineNumber;
		this._columnNumber = node.columnNumber;
		this._lastLineNumber = node.lastLineNumber;
		this._lastColumnNumber = node.lastColumnNumber;
	}

	// NodeMetaDataHandler
	protected get nodeMetaDataHandlerSupport(): NodeMetaDataHandlerSupport {
		return this._nodeMetaDataHandlerSupport;
	}

	get nodeMetaData(): Map<any, any> {
		return this.nodeMetaDataHandlerSupport.nodeMetaData;
	}

	copyNodeMetaData(other: NodeMetaDataHandler): void {
		this.nodeMetaDataHandlerSupport.copyNodeMetaData(other);
	}

	getNodeMetaData<T>(key: any, valFn?: JavaFunction<any, T>): Optional<T> {
		return this.nodeMetaDataHandlerSupport.getNodeMetaData(key, valFn);
	}

	setNodeMetaData(key: any, value: any): void {
		this.nodeMetaDataHandlerSupport.setNodeMetaData(key, value);
	}

	putNodeMetaData(key: any, value: any): Optional<any> {
		return this.nodeMetaDataHandlerSupport.putNodeMetaData(key, value);
	}

	removeNodeMetaData(key: any): void {
		this.nodeMetaDataHandlerSupport.removeNodeMetaData(key);
	}

	get metaDataMap(): Map<any, any> {
		return this._metaDataMap;
	}

	/**
	 * copy values to inside map, never set value after call this method
	 */
	setMetaDataMap(metaDataMap: Map<any, any>): void {
		this._metaDataMap.clear();
		for (const [key, value] of (metaDataMap ?? new Map())) {
			this._metaDataMap.set(key, value);
		}
	}

	/**
	 * returns true only when o is this.
	 */
	equals(o: any): boolean {
		return this === o;
	}

	toString(): string {
		if (this._randomId == null) {
			this._randomId = Math.round(Math.random() * 0xFFFFFFFF);
		}
		return this.constructor.name + '@' + this._randomId.toString(16);
	}
}
