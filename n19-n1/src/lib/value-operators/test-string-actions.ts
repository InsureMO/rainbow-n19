import {ValueAction} from './action-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startsWith = (prefix: string): ValueAction<any, string> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		if (value == null || typeof value !== 'string') {
			return {test: false, value};
		}
		return {test: `${value}`.startsWith(prefix), value};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const notStartsWith = (prefix: string): ValueAction<any, string> => {
	const func = startsWith(prefix);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: newValue} = func(value);
		return {test: !test, value: newValue};
	}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const endsWith = (suffix: string): ValueAction<any, string> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		if (value == null || typeof value !== 'string') {
			return {test: false, value};
		}
		return {test: `${value}`.endsWith(suffix), value};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const notEndsWith = (suffix: string): ValueAction<any, string> => {
	const func = endsWith(suffix);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: newValue} = func(value);
		return {test: !test, value: newValue};
	}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const includes = (substring: string): ValueAction<any, string> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		if (value == null || typeof value !== 'string') {
			return {test: false, value};
		}
		return {test: `${value}`.includes(substring), value};
	};
};
export const notIncludes = (substring: string): ValueAction => {
	const func = includes(substring);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: newValue} = func(value);
		return {test: !test, value: newValue};
	}
}
export const regexp = (regexp: RegExp): ValueAction => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		if (value == null) {
			return {test: false, value};
		}
		const type = typeof value;
		if (['string', 'number', 'bigint'].includes(type)) {
			return {test: regexp.test(value), value};
		}
		return {test: false, value};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isOneOf = (one: any, ...rest: any[]): ValueAction => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		return {test: [one, ...rest].includes(value), value};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNotAnyOf = (one: any, ...rest: any[]): ValueAction => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		return {test: ![one, ...rest].includes(value), value};
	};
};
