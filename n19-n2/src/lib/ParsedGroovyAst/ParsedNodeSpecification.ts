/**
 * Type is my detail type,
 * Purpose is for what rule context
 */
export interface ParsedNodeSpecification<Type, Purpose> {
	type: Type;
	setType(type: Type): void;
	purpose: Purpose;
	setPurpose(purpose: Purpose): void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	properties: Array<[string, any]>;
	clone(): ParsedNodeSpecification<Type, Purpose>;
}
