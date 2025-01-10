import {ParserRuleContext} from 'antlr4';
import {JavaFunction} from '../JavaUtil';
import {NodeMetaDataHandler, NodeMetaDataHandlerSupport} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';

export abstract class GroovyParserRuleContext extends ParserRuleContext implements NodeMetaDataHandler {
	private readonly _nodeMetaDataHandlerSupport: NodeMetaDataHandlerSupport = new NodeMetaDataHandlerSupport(this);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private readonly _metaDataMap: Map<any, any> = new Map();

	protected constructor(parent?: ParserRuleContext, invokingStateNumber?: number) {
		super(parent, invokingStateNumber);
	}

	abstract get ruleIndex(): number;

	// NodeMetaDataHandler
	protected get nodeMetaDataHandlerSupport(): NodeMetaDataHandlerSupport {
		return this._nodeMetaDataHandlerSupport;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get nodeMetaData(): Map<any, any> {
		return this.nodeMetaDataHandlerSupport.nodeMetaData;
	}

	copyNodeMetaData(other: NodeMetaDataHandler): void {
		this.nodeMetaDataHandlerSupport.copyNodeMetaData(other);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getNodeMetaData<T>(key: any, valFn?: JavaFunction<any, T>): Optional<T> {
		return this.nodeMetaDataHandlerSupport.getNodeMetaData(key, valFn);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setNodeMetaData(key: any, value: any): void {
		this.nodeMetaDataHandlerSupport.setNodeMetaData(key, value);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	putNodeMetaData(key: any, value: any): Optional<any> {
		return this.nodeMetaDataHandlerSupport.putNodeMetaData(key, value);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	removeNodeMetaData(key: any): void {
		this.nodeMetaDataHandlerSupport.removeNodeMetaData(key);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get metaDataMap(): Map<any, any> {
		return this._metaDataMap;
	}

	/**
	 * copy values to inside map, never set value after call this method
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setMetaDataMap(metaDataMap: Map<any, any>): void {
		this._metaDataMap.clear();
		for (const [key, value] of (metaDataMap ?? new Map())) {
			this._metaDataMap.set(key, value);
		}
	}
}
