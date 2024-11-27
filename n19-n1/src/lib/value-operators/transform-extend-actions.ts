import {AsyncValueAction, ValueAction} from './action-types';

export const prepend = <From, To>(func: ValueAction<From, To>): ValueAction<From, [To, From]> => {
	return (value?: From) => {
		const {test, value: ret} = func(value);
		return test ? {test, value: [ret, value] as [To, From]} : {test: false, value};
	};
};
export const exchange = <From, To>(func: ValueAction<From, To>): ValueAction<From, To> => {
	return (value?: From) => {
		const {test, value: ret} = func(value);
		return test ? {test, value: ret} : {test: false, value};
	};
};
export const append = <From, To>(func: ValueAction<From, To>): ValueAction<From, [From, To]> => {
	return (value?: From) => {
		const {test, value: ret} = func(value);
		return test ? {test, value: [value, ret] as [From, To]} : {test: false, value};
	};
};
export const prependFirst = <From, To>(func1: ValueAction<From, To>, ...funcs: Array<ValueAction<From, To>>): ValueAction<From, [To, From]> => {
	const func = exchangeFirst(func1, ...funcs);
	return (value?: From) => {
		const {test, value: ret} = func(value);
		return test ? {test: true, value: [ret, value] as [To, From]} : {test: false, value};
	};
};
/**
 * use returned of the first satisfied as the result
 */
export const exchangeFirst = <From, To>(func1: ValueAction<From, To>, ...funcs: Array<ValueAction<From, To>>): ValueAction<From, To> => {
	return (value?: From) => {
		for (const func of [func1, ...funcs]) {
			const {test, value: ret} = func(value);
			if (test) {
				return {test, value: ret};
			}
		}
		return {test: false, value};
	};
};
export const appendFirst = <From, To>(func1: ValueAction<From, To>, ...funcs: Array<ValueAction<From, To>>): ValueAction<From, [From, To]> => {
	const func = exchangeFirst(func1, ...funcs);
	return (value?: From) => {
		const {test, value: ret} = func(value);
		return test ? {test: true, value: [value, ret] as [From, To]} : {test: false, value};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const prependAll = <From, To extends any[] = any[]>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, [...To, From]> => {
	const func = exchangeAll(func1, ...funcs);
	return (value?: From) => {
		const {test, value: results} = func(value);
		return test ? {test: true, value: [...results, value] as [...To, From]} : {test: false, value};
	};
};
/**
 * use all returned as the result
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exchangeAll = <From, To extends any[] = any[]>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, To> => {
	return (value?: From) => {
		const results = [];
		for (const func of [func1, ...funcs]) {
			const {test, value: ret} = func(value);
			if (!test) {
				return {test: false, value};
			} else {
				results.push(ret);
			}
		}
		return {test: true, value: results as To};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appendAll = <From, To extends any[] = any[]>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, [From, ...To]> => {
	const func = exchangeAll(func1, ...funcs);
	return (value?: From) => {
		const {test, value: results} = func(value);
		return test ? {test: true, value: [value, ...results] as [From, ...To]} : {test: false, value};
	};
};

export const asyncPrepend = <From, To>(func: AsyncValueAction<From, To>): AsyncValueAction<From, [To, From]> => {
	return async (value?: From) => {
		const {test, value: ret} = await func(value);
		return test ? {test, value: [ret, value] as [To, From]} : {test: false, value};
	};
};
export const asyncExchange = <From, To>(func: AsyncValueAction<From, To>): AsyncValueAction<From, To> => {
	return async (value) => {
		const {test, value: ret} = await func(value);
		return test ? {test, value: ret} : {test: false, value};
	};
};
export const asyncAppend = <From, To>(func: AsyncValueAction<From, To>): AsyncValueAction<From, [From, To]> => {
	return async (value?: From) => {
		const {test, value: ret} = await func(value);
		return test ? {test, value: [value, ret] as [From, To]} : {test: false, value};
	};
};
export const asyncPrependFirst = <From, To>(func1: AsyncValueAction<From, To>, ...funcs: Array<AsyncValueAction<From, To>>): AsyncValueAction<From, [To, From]> => {
	const func = asyncExchangeFirst(func1, ...funcs);
	return async (value?: From) => {
		const {test, value: ret} = await func(value);
		return test ? {test: true, value: [ret, value] as [To, From]} : {test: false, value};
	};
};
/**
 * use returned of the first satisfied as the result
 */
export const asyncExchangeFirst = <From, To>(func1: AsyncValueAction<From, To>, ...funcs: Array<AsyncValueAction<From, To>>): AsyncValueAction<From, To> => {
	return async (value?: From) => {
		const abort = new AbortController();
		const signal = abort.signal;
		try {
			return new Promise((resolve, reject) => {
				[func1, ...funcs].forEach(async func => {
					if (signal.aborted) {
						reject(new Error('aborted'));
					}
					const abortHandler = () => reject(new Error('aborted'));
					signal.addEventListener('abort', abortHandler, {once: true});
					let abortHandlerRemoved = false;
					try {
						const {test, value: ret} = await func(value);
						signal.removeEventListener('abort', abortHandler);
						abortHandlerRemoved = true;
						if (test) {
							abort.abort();
							resolve({test, value: ret});
						} else {
							reject(new Error('not satisfied'));
						}
					} finally {
						if (!abortHandlerRemoved) {
							signal.removeEventListener('abort', abortHandler);
						}
					}
				});
			});
		} catch {
			return {test: false, value};
		}
	};
};
export const asyncAppendFirst = <From, To>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, [From, To]> => {
	const func = asyncExchangeFirst(func1, ...funcs);
	return async (value?: From) => {
		const {test, value: ret} = await func(value);
		return test ? {test: true, value: [value, ret] as [From, To]} : {test: false, value};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncPrependAll = <From, To extends any[] = any[]>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, [...To, From]> => {
	const func = asyncExchangeAll(func1, ...funcs);
	return async (value?: From) => {
		const {test, value: results} = await func(value);
		return test ? {test: true, value: [...results, value] as [...To, From]} : {test: false, value};
	};
};
/**
 * will not use any returned from the value actions
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncExchangeAll = <From, To extends any[] = any[]>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, To> => {
	return async (value?: From) => {
		const abort = new AbortController();
		const signal = abort.signal;
		try {
			return new Promise((resolve, reject) => {
				const results = [];
				[func1, ...funcs].forEach(async func => {
					if (signal.aborted) {
						reject(new Error('aborted'));
					}
					const abortHandler = () => reject(new Error('aborted'));
					signal.addEventListener('abort', abortHandler, {once: true});
					let abortHandlerRemoved = false;
					try {
						// returned value ignored
						const {test, value: ret} = await func(value);
						signal.removeEventListener('abort', abortHandler);
						abortHandlerRemoved = true;
						if (!test) {
							// once have failed
							abort.abort();
							reject(new Error('not satisfied'));
						} else {
							results.push(ret);
						}
					} finally {
						if (!abortHandlerRemoved) {
							signal.removeEventListener('abort', abortHandler);
						}
					}
				});
				resolve({test: true, value: results as To});
			});
		} catch {
			return {test: false, value};
		}
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncAppendAll = <From, To extends any[] = any[]>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, [From, ...To]> => {
	const func = asyncExchangeAll(func1, ...funcs);
	return async (value?: From) => {
		const {test, value: results} = await func(value);
		return test ? {test: true, value: [value, ...results] as [From, ...To]} : {test: false, value};
	};
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TransformValueFunc<From = any, To = any> = (value?: From) => To;
const replaceToValueAction = <From, To>(func: TransformValueFunc<From, To>): ValueAction<From, To> => {
	return (value?: From) => ({test: true, value: func(value)});
};
export const headWith = <From, To>(func: TransformValueFunc<From, To>): ValueAction<From, [To, From]> => {
	return prepend(replaceToValueAction(func));
};
export const replaceWith = <From, To>(func: TransformValueFunc<From, To>): ValueAction<From, To> => {
	return exchange(replaceToValueAction(func));
};
export const tailWith = <From, To>(func: TransformValueFunc<From, To>): ValueAction<From, [From, To]> => {
	return append(replaceToValueAction(func));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const headWithAll = <From, To extends any[] = any[]>(func1: TransformValueFunc<From>, ...funcs: Array<TransformValueFunc<From>>): ValueAction<From, [...To, From]> => {
	return prependAll(replaceToValueAction(func1), ...funcs.map(replaceToValueAction));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const replaceWithAll = <From, To extends any[] = any[]>(func1: TransformValueFunc<From>, ...funcs: Array<TransformValueFunc<From>>): ValueAction<From, To> => {
	return exchangeAll(replaceToValueAction(func1), ...funcs.map(replaceToValueAction));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tailWithAll = <From, To extends any[] = any[]>(func1: TransformValueFunc<From>, ...funcs: Array<TransformValueFunc<From>>): ValueAction<From, [From, ...To]> => {
	return appendAll(replaceToValueAction(func1), ...funcs.map(replaceToValueAction));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncTransformValueFunc<From = any, To = any> = (value?: From) => Promise<To>;
const asyncReplaceToValueAction = <From, To>(func: AsyncTransformValueFunc<From, To>): AsyncValueAction<From, To> => {
	return async (value?: From) => ({test: true, value: await func(value)});
};
export const asyncHeadWith = <From, To>(func: AsyncTransformValueFunc<From, To>): AsyncValueAction<From, [To, From]> => {
	return asyncPrepend(asyncReplaceToValueAction(func));
};
export const asyncReplaceWith = <From, To>(func: AsyncTransformValueFunc<From, To>): AsyncValueAction<From, To> => {
	return asyncExchange(asyncReplaceToValueAction(func));
};
export const asyncTailWith = <From, To>(func: AsyncTransformValueFunc<From, To>): AsyncValueAction<From, [From, To]> => {
	return asyncAppend(asyncReplaceToValueAction(func));
};
export const asyncHeadWithFirst = <From, To>(func1: AsyncTransformValueFunc<From, To>, ...funcs: Array<AsyncTransformValueFunc<From, To>>): AsyncValueAction<From, [To, From]> => {
	return asyncPrependFirst(asyncReplaceToValueAction(func1), ...funcs.map(asyncReplaceToValueAction));
};
export const asyncReplaceWithFirst = <From, To>(func1: AsyncTransformValueFunc<From, To>, ...funcs: Array<AsyncTransformValueFunc<From, To>>): AsyncValueAction<From, To> => {
	return asyncExchangeFirst(asyncReplaceToValueAction(func1), ...funcs.map(asyncReplaceToValueAction));
};
export const asyncTailWithFirst = <From, To>(func1: AsyncTransformValueFunc<From, To>, ...funcs: Array<AsyncTransformValueFunc<From, To>>): AsyncValueAction<From, [From, To]> => {
	return asyncAppendFirst(asyncReplaceToValueAction(func1), ...funcs.map(asyncReplaceToValueAction));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncHeadWithAll = <From, To extends any[] = any[]>(func1: AsyncTransformValueFunc<From>, ...funcs: Array<AsyncTransformValueFunc<From>>): AsyncValueAction<From, [...To, From]> => {
	return asyncPrependAll(asyncReplaceToValueAction(func1), ...funcs.map(asyncReplaceToValueAction));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncReplaceWithAll = <From, To extends any[] = any[]>(func1: AsyncTransformValueFunc<From>, ...funcs: Array<AsyncTransformValueFunc<From>>): AsyncValueAction<From, To> => {
	return asyncExchangeAll(asyncReplaceToValueAction(func1), ...funcs.map(asyncReplaceToValueAction));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncTailWithAll = <From, To extends any[] = any[]>(func1: AsyncTransformValueFunc<From>, ...funcs: Array<AsyncTransformValueFunc<From>>): AsyncValueAction<From, [From, ...To]> => {
	return asyncAppendAll(asyncReplaceToValueAction(func1), ...funcs.map(asyncReplaceToValueAction));
};
