import {Java, Optional} from '@rainbow-n19/n2';

export interface NodeMetaDataHandler {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	readonly nodeMetaData: Map<any, any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getNodeMetaData<T>(key: any): Optional<T>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getNodeMetaData<T>(key: any, valFn: Java.JavaFunction<any, T>): T;
	copyNodeMetaData(other: NodeMetaDataHandler): void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setNodeMetaData(key: any, value: any): void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	putNodeMetaData(key: any, value: any): Optional<any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	removeNodeMetaData(key: any): void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	readonly metaDataMap: Map<any, any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setMetaDataMap(metaDataMap: Map<any, any>): void;
}
