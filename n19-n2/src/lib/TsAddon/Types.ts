export type Optional<V> = V | null | undefined;
export const asT = <T>(v: any): T => v as unknown as T;
