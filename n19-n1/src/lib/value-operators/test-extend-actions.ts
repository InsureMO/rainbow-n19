import {ValueAction} from './action-types';

/**
 * test by given value action, never change the value
 */
export const test = (func: ValueAction): ValueAction => {
	return (value) => ({test: func(value).test, value});
};
/**
 * test by given value action, never change the value
 * pass the test on at least one given value action passed
 */
export const any = (func1: ValueAction, ...funcs: Array<ValueAction>): ValueAction => {
	return (value) => {
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
 * test by given value action, never change the value.
 * pass the test on all given value actions passed
 */
export const all = (func1: ValueAction, ...funcs: Array<ValueAction>): ValueAction => {
	return (value) => {
		for (const func of [func1, ...funcs]) {
			const {test} = func(value);
			if (!test) {
				return {test: false, value};
			}
		}
		return {test: true, value};
	};
};
