import {AsyncValueAction, ValueAction} from './action-types';

/**
 * test by given value action, never change the value
 */
export const test = <From>(func: ValueAction<From>): ValueAction<From, From> => {
	return (value: From) => ({test: func(value).test, value});
};
/**
 * test by given value action, never change the value
 */
export const asyncTest = <From>(func: AsyncValueAction<From>): AsyncValueAction<From, From> => {
	return async (value: From) => ({test: (await func(value)).test, value});
};
/**
 * test by given value action, never change the value
 * pass the test on at least one given value action passed
 */
export const any = <From>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, From> => {
	return (value: From) => {
		for (const func of [func1, ...funcs]) {
			const {test} = func(value);
			if (test) {
				return {test: true, value};
			}
		}
		return {test: false, value};
	};
};
/**
 * test by given value action, never change the value
 * pass the test on at least one given value action passed
 */
export const asyncAny = <From>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, From> => {
	return async (value: From) => {
		for (const func of [func1, ...funcs]) {
			const {test} = await func(value);
			if (test) {
				return {test: true, value};
			}
		}
		return {test: false, value};
	};
};
/**
 * test by given value action, never change the value.
 * pass the test on all given value actions passed
 */
export const all = <From>(func1: ValueAction<From>, ...funcs: Array<ValueAction<From>>): ValueAction<From, From> => {
	return (value: From) => {
		for (const func of [func1, ...funcs]) {
			const {test} = func(value);
			if (!test) {
				return {test: false, value};
			}
		}
		return {test: true, value};
	};
};
/**
 * test by given value action, never change the value.
 * pass the test on all given value actions passed
 */
export const asyncAll = <From>(func1: AsyncValueAction<From>, ...funcs: Array<AsyncValueAction<From>>): AsyncValueAction<From, From> => {
	return async (value: From) => {
		for (const func of [func1, ...funcs]) {
			const {test} = await func(value);
			if (!test) {
				return {test: false, value};
			}
		}
		return {test: true, value};
	};
};
