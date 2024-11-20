import {AsyncValueAction, ValueAction} from './action-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const satisfy = <To>(func: ValueAction<any, To>): ValueAction<any, To> => func;
/**
 * use returned of the first satisfied as the result
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const satisfyOne = <To>(func1: AsyncValueAction<any, To>, ...funcs: Array<AsyncValueAction<any, To>>): AsyncValueAction<any, To> => {
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
export const satisfyAll = <To>(func1: AsyncValueAction<any, To>, ...funcs: Array<AsyncValueAction<any, To>>): AsyncValueAction<any, To> => {
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
						// returned value ignored
						const {test} = await func(value);
						signal.removeEventListener('abort', abortHandler);
						abortHandlerRemoved = true;
						if (!test) {
							// once have failed
							abort.abort();
							reject(new Error('not satisfied'));
						}
					} finally {
						if (!abortHandlerRemoved) {
							signal.removeEventListener('abort', abortHandler);
						}
					}
				});
				resolve({test: true, value});
			});
		} catch {
			return {test: false, value};
		}
	};
};