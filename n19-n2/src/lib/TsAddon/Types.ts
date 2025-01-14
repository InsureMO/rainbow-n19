export type Optional<V> = V | null | undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asT = <T>(v: any): T => v as unknown as T;
