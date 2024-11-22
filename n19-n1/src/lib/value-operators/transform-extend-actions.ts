import {AsyncValueAction, ValueAction} from './action-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exchange = <To>(func: ValueAction<any, To>): ValueAction<any, To> => func;
/**
 * use returned of the first satisfied as the result
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exchangeFirst = <To>(func1: ValueAction, ...funcs: Array<ValueAction>): ValueAction<any, To> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		for (const func of [func1, ...funcs]) {
			const {test, value: ret} = func(value);
			if (test) {
				return {test, value: ret};
			}
		}
		return {test: false, value};
	};
};
/**
 * use all returned as the result
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exchangeAll = <To extends any[] = any[]>(func1: ValueAction, ...funcs: Array<ValueAction>): ValueAction<any, To> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const results = [];
		for (const func of [func1, ...funcs]) {
			const {test, value: ret} = func(value);
			if (!test) {
				return {test, value};
			} else {
				results.push(ret);
			}
		}
		return {test: true, value: results};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncExchange = <To>(func: AsyncValueAction<any, To>): AsyncValueAction<any, To> => func;
/**
 * use returned of the first satisfied as the result
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncExchangeFirst = <To>(func1: AsyncValueAction, ...funcs: Array<AsyncValueAction>): AsyncValueAction<any, To> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return async (value?: any) => {
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
/**
 * will not use any returned from the value actions
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncExchangeAll = <To extends any[] = any[]>(func1: AsyncValueAction, ...funcs: Array<AsyncValueAction>): AsyncValueAction<any, To> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return async (value?: any) => {
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
