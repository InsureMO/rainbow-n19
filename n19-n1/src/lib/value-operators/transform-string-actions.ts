import Decimal from 'decimal.js';
import {ValueAction} from './action-types';

/**
 * convert number/boolean/bigint/Decimal to string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stringify: ValueAction<any, string> = (value?: any) => {
	if (value == null) {
		return {test: true, value: ''};
	}
	const type = typeof value;
	if (type === 'string') {
		return {test: true, value};
	} else if (['number', 'boolean', 'bigint'].includes(type)) {
		return {test: true, value: `${value}`};
	} else if (value instanceof Decimal) {
		return {test: true, value: value.toString()};
	}
	return {test: false, value};
};
/**
 * always pass, and trim if given value is string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trim: ValueAction = (value?: any) => {
	if (value == null) {
		return {test: true, value};
	} else if (typeof value === 'string') {
		return {test: true, value: value.trim()};
	} else {
		return {test: true, value};
	}
};
export type PadOptions = {
	length: number;
	char?: string;
	direction?: 'left' | 'right';
}
/**
 * return value must be a string if padding could perform, otherwise return given value itself no matter what it is.
 * could perform means performed, or not performed when length of given value is greater than or equal to given length.
 */
export const pad = (options: PadOptions): ValueAction => {
	const {length, char = ' ', direction = 'right'} = options;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		if (value == null) {
			return {test: false, value};
		}
		const type = typeof value;
		if (['string', 'number', 'bigint', 'boolean'].includes(type)) {
			const stringified = `${value}`;
			const len = stringified.length;
			if (len >= length) {
				return {test: true, value: stringified};
			}
			return {
				test: true,
				value: direction === 'left' ? stringified.padStart(length, char) : stringified.padEnd(length, char)
			};
		} else {
			return {test: false, value};
		}
	};
};
export const padStart = (options: Omit<PadOptions, 'direction'>): ValueAction => pad({...options, direction: 'left'});
export const padEnd = (options: Omit<PadOptions, 'direction'>): ValueAction => pad({...options, direction: 'right'});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transform = (func: (str: string) => string): ValueAction<any, string | null | undefined> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		if (value == null) {
			return {test: true, value};
		}
		if (typeof value === 'string') {
			return {test: true, value: func(value)};
		}
		return {test: false, value};
	};
};
export const lower = transform(str => str.toLowerCase());
export const upper = transform(str => str.toUpperCase());
export const capitalize = transform(str => str.charAt(0).toUpperCase() + str.slice(1));
export const capitalizeAll = transform(str => str.replace(/\b\w/g, c => c.toUpperCase()));
export const camel = transform(str => str.replace(/[-_](\w)/g, (_: string, c: string) => c.toUpperCase()));
export const pascal = transform(str => str.replace(/[-_](\w)/g, (_: string, c: string) => c.toUpperCase()).replace(/^\w/, c => c.toUpperCase()));
export const snake = transform(str => str.replace(/[A-Z]/g, c => `_${c.toLowerCase()}`));
export const kebab = transform(str => str.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`));
export const replace = (searchValue: string | RegExp, replaceValue: string): ValueAction => transform(str => str.replace(searchValue, replaceValue));
export const replaceAll = (searchValue: string | RegExp, replaceValue: string): ValueAction => transform(str => str.replace(new RegExp(searchValue, 'g'), replaceValue));
export const prefix = (prefix: string): ValueAction => transform(str => `${prefix}${str}`);
export const postfix = (postfix: string): ValueAction => transform(str => `${str}${postfix}`);
