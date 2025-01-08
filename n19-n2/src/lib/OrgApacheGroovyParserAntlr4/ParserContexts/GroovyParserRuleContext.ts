import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {JavaFunction} from '../../JavaUtil';
import {NodeMetaDataHandler, NodeMetaDataHandlerSupport} from '../../OrgCodehausGroovyAst';
import {Optional} from '../../TsAddon';

declare module 'antlr4' {
	interface ParserRuleContext {
		accept<Result>(visitor: ParseTreeVisitor<Result>): Result;
	}
}

export type TypeExtendGroovyParserRuleContext = {
	new(parent?: ParserRuleContext, invokingStateNumber?: number);
}

export class GroovyParserRuleContext extends ParserRuleContext implements NodeMetaDataHandler {
	private readonly _nodeMetaDataHandlerSupport: NodeMetaDataHandlerSupport = new NodeMetaDataHandlerSupport(this);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private readonly _metaDataMap: Map<any, any> = new Map();

	constructor(parent?: ParserRuleContext, invokingStateNumber?: number) {
		super(parent, invokingStateNumber);
	}

	/**
	 * another version of {@link #getChild}, use different {@link TypeExtendGroovyParserRuleContext}
	 */
	private getChildRuleContext<T extends GroovyParserRuleContext>(i: number, type: TypeExtendGroovyParserRuleContext): Optional<T> {
		type = type || null;
		if (this.children === null || i < 0 || i >= this.children.length) {
			return null;
		}
		if (type === null) {
			return this.children[i] as T;
		} else {
			for (let j = 0; j < this.children.length; j++) {
				const child = this.children[j];
				if (child instanceof type) {
					if (i === 0) {
						return child as T;
					} else {
						i -= 1;
					}
				}
			}
			return null;
		}
	}

	/**
	 * another version of {@link #getTypedRuleContext}, use different {@link TypeExtendGroovyParserRuleContext}
	 */
	getRuleContext<T extends GroovyParserRuleContext>(ctxType: TypeExtendGroovyParserRuleContext, i: number): Optional<T> {
		return this.getChildRuleContext(i, ctxType);
	}

	/**
	 * another version of {@link #getTypedRuleContexts}, use different {@link TypeExtendGroovyParserRuleContext}
	 */
	getRuleContexts<T extends GroovyParserRuleContext>(ctxType: TypeExtendGroovyParserRuleContext): Array<T> {
		if (this.children === null) {
			return [];
		} else {
			const contexts = [];
			for (let j = 0; j < this.children.length; j++) {
				const child = this.children[j];
				if (child instanceof ctxType) {
					contexts.push(child);
				}
			}
			return contexts;
		}
	}

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
