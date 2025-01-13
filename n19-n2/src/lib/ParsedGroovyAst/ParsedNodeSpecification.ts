export interface ParsedNodeSpecification {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	properties: Array<[string, any]>;
	clone(): ParsedNodeSpecification;
}
