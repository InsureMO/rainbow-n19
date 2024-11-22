import {AsyncValueAction, ValueAction} from './action-types';

export const exchange = <From, To>(func: ValueAction<From, To>): ValueAction<From, To> => func;
/**
 * use returned of the first satisfied as the result
 */
export const exchangeFirst = <From, To>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, To> => {
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
export const grabFirst = <From, To>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, [From, To]> => {
	const func = exchangeFirst(func1, ...funcs);
	return (value?: From) => {
		const {test, value: ret} = func(value);
		return test ? {test: true, value: [value, ret] as [From, To]} : {test: false, value};
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
export const grabAll = <From, To extends any[] = any[]>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, [From, ...To]> => {
	const func = exchangeAll(func1, ...funcs);
	return (value?: From) => {
		const {test, value: results} = func(value);
		return test ? {test: true, value: [value, ...results] as [From, ...To]} : {test: false, value};
	};
};
export const asyncExchange = <From, To>(func: AsyncValueAction<From, To>): AsyncValueAction<From, To> => func;
/**
 * use returned of the first satisfied as the result
 */
export const asyncExchangeFirst = <From, To>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, To> => {
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
export const asyncGrabFirst = <From, To>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, [From, To]> => {
	const func = asyncExchangeFirst(func1, ...funcs);
	return async (value?: From) => {
		const {test, value: ret} = await func(value);
		return test ? {test: true, value: [value, ret] as [From, To]} : {test: false, value};
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
export const asyncGrabAll = <From, To extends any[] = any[]>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, [From, ...To]> => {
	const func = asyncExchangeAll(func1, ...funcs);
	return async (value?: From) => {
		const {test, value: results} = await func(value);
		return test ? {test: true, value: [value, ...results] as [From, ...To]} : {test: false, value};
	};
};
