export interface EnumValue {
	readonly name: string;
	readonly ordinal: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}
