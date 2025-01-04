import {ParserRuleContext} from 'antlr4';
import {JavaFunction} from '../../JavaUtil';
import {NodeMetaDataHandler, NodeMetaDataHandlerSupport} from '../../OrgCodehausGroovyAst';
import {Optional} from '../../TsAddon';

export class GroovyParserRuleContext extends ParserRuleContext implements NodeMetaDataHandler {
	private readonly _nodeMetaDataHandlerSupport: NodeMetaDataHandlerSupport = new NodeMetaDataHandlerSupport(this);
	private readonly _metaDataMap: Map<any, any> = new Map();

	constructor(parent?: ParserRuleContext, invokingStateNumber?: number) {
		super(parent, invokingStateNumber);
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
}
