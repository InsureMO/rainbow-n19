import {JavaFunction} from '../JavaUtil';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {Optional} from '../TsAddon';
import {NodeMetaDataHandler} from './NodeMetaDataHandler';

export class NodeMetaDataHandlerSupport {
	private static EMPTY_MAP: Map<any, any> = new Map();
	private readonly _handler: NodeMetaDataHandler;

	constructor(handler: NodeMetaDataHandler) {
		this._handler = handler;
	}

	get nodeMetaData(): Map<any, any> {
		const metaDataMap = this._handler.metaDataMap;
		if (metaDataMap == null) {
			return NodeMetaDataHandlerSupport.EMPTY_MAP;
		}
		return metaDataMap;
	}

	getNodeMetaData<T>(key: any, valFn?: JavaFunction<any, T>): Optional<T> {
		if (key == null) {
			throw new GroovyBugError('Tried to get/set meta data with null key on ' + this + '.');
		}

		const metaDataMap = this._handler.metaDataMap;
		if (metaDataMap == null) {
			if (valFn == null) {
				// no value function given, return null directly
				return null;
			} else {
				const value = valFn.apply(key);
				const map = new Map();
				map.set(key, value);
				this._handler.setMetaDataMap(map);
				return value;
			}
		} else {
			return metaDataMap.get(key) as T;
		}
	}

	copyNodeMetaData(other: NodeMetaDataHandler): void {
		const otherMetaDataMap = other.metaDataMap;
		if (otherMetaDataMap == null) {
			return;
		}
		let metaDataMap = this._handler.metaDataMap;
		if (metaDataMap == null) {
			metaDataMap = new Map();
			this._handler.setMetaDataMap(metaDataMap);
		}

		for (const [key, value] of otherMetaDataMap.entries()) {
			metaDataMap.set(key, value);
		}
	}

	setNodeMetaData(key: any, value: any): void {
		const old = this._handler.putNodeMetaData(key, value);
		if (old != null) {
			throw new GroovyBugError('Tried to overwrite existing meta data ' + this._handler + '.');
		}
	}

	putNodeMetaData(key: any, value: any): Optional<any> {
		if (key == null) {
			throw new GroovyBugError('Tried to set meta data with null key on ' + this + '.');
		}

		let metaDataMap = this._handler.metaDataMap;
		if (metaDataMap == null) {
			metaDataMap = new Map();
			this._handler.setMetaDataMap(metaDataMap);
		}
		const exists = metaDataMap.get(key);
		metaDataMap.set(key, value);
		return exists;
	}

	removeNodeMetaData(key: any): void {
		if (key == null) {
			throw new GroovyBugError('Tried to remove meta data with null key ' + this + '.');
		}

		const metaDataMap = this._handler.metaDataMap;
		if (metaDataMap == null) {
			return;
		}
		metaDataMap.delete(key);
	}
}