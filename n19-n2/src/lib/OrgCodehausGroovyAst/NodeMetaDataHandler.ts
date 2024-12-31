import {JavaFunction} from '../JavaUtil';
import {Optional} from '../TsAddon';

export interface NodeMetaDataHandler {
	readonly nodeMetaData: Map<any, any>;
	getNodeMetaData<T>(key: any): Optional<T>;
	getNodeMetaData<T>(key: any, valFn: JavaFunction<any, T>): T;
	copyNodeMetaData(other: NodeMetaDataHandler): void;
	setNodeMetaData(key: any, value: any): void;
	putNodeMetaData(key: any, value: any): Optional<any>;
	removeNodeMetaData(key: any): void;
	readonly metaDataMap: Map<any, any>;
	setMetaDataMap(metaDataMap: Map<any, any>): void;
}
