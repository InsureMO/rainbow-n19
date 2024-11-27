export type ValueActionPassed<V> = { test: true, value: V };
export type ValueActionFailed<V> = { test: false, value: V };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncValueAction<From = any, To = any> = (value?: From) => Promise<ValueActionPassed<To> | ValueActionFailed<From>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValueAction<From = any, To = any> = (value?: From) => ValueActionPassed<To> | ValueActionFailed<From>;
export type RegisteredValueAction<F extends ValueAction | AsyncValueAction = ValueAction | AsyncValueAction>
	= { type: 'func', func: F }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RegisteredValueActionWithParams<F = (...args: Array<any>) => ValueAction | AsyncValueAction>
	= { type: 'param', func: F };
export const OBJECT_PROTOTYPE = Object.prototype;
