import dayjs, {ConfigType, Dayjs, OpUnitType} from 'dayjs';
import {ValueAction} from './action-types';

export type IsDateOptions = {
	format?: dayjs.OptionType;
	locale?: string;
	strict?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toDate = (options?: IsDateOptions): ValueAction<any, Dayjs> => (value?: any) => {
	if (value == null) {
		return {test: false, value};
	}
	const parsed = dayjs(value, options.format, options.locale, options.strict);
	if (parsed.isValid()) {
		return {test: true, value: parsed};
	} else {
		return {test: false, value};
	}
};

export type CompareDateOptions = IsDateOptions & { unit?: OpUnitType };
const compareDate = (test: (base: Dayjs, compare: Dayjs, unit?: OpUnitType) => boolean) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (compare: ConfigType, options?: CompareDateOptions): ValueAction<any, Dayjs> => {
		const {unit = 'day'} = options;
		const toDateFunc = toDate(options);
		const {test: testCompare, value: compareTo} = toDateFunc(compare);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (value?: any) => {
			if (!testCompare || value == null) {
				return {test: false, value};
			}
			const {test: testBase, value: base} = toDateFunc(value);
			if (!testBase) {
				return {test: false, value};
			}
			const testResult = test(base, compareTo, unit);
			return {test: testResult, value: testResult ? base : value};
		};
	};
};
export const before = compareDate((base: Dayjs, compare: Dayjs, unit?: OpUnitType) => base.isBefore(compare, unit));
export const notBefore = compareDate((base: Dayjs, compare: Dayjs, unit?: OpUnitType) => !base.isAfter(compare, unit));
export const after = compareDate((base: Dayjs, compare: Dayjs, unit?: OpUnitType) => base.isAfter(compare, unit));
export const notAfter = compareDate((base: Dayjs, compare: Dayjs, unit?: OpUnitType) => !base.isBefore(compare, unit));
export type DateInterval = 'closed' | 'c' | 'open' | 'o' | 'left-open' | 'lo' | 'right-open' | 'ro';
export type CompareDateRange =
	& { interval?: DateInterval }
	& ({ from?: ConfigType, to: ConfigType } | { from: ConfigType, to?: ConfigType });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const between = (range: CompareDateRange, options?: CompareDateOptions): ValueAction<any, Dayjs> => {
	const {from, to, interval = 'closed'} = range;
	const {unit = 'day'} = options;
	const toDateFunc = toDate(options);
	const {test: testStart, value: startDate} = toDateFunc(from);
	const {test: testEnd, value: endDate} = toDateFunc(to);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: date} = toDateFunc(value);
		if (!test) {
			return {test: false, value};
		}
		let pass = false;
		switch (interval) {
			case 'open':
			case 'o':
				pass = (testStart || date.isAfter(startDate, unit)) && (testEnd || date.isBefore(endDate, unit));
				break;
			case 'left-open':
			case 'lo':
				pass = (testStart || date.isAfter(startDate, unit)) && (testEnd || !date.isAfter(endDate, unit));
				break;
			case 'right-open':
			case 'ro':
				pass = (testStart || !date.isBefore(startDate, unit)) && (testEnd || date.isBefore(endDate, unit));
				break;
			case 'closed':
			case 'c':
			default:
				pass = (testStart || !date.isBefore(startDate, unit)) && (testEnd || !date.isAfter(endDate, unit));
				break;
		}
		return pass ? {test: true, value: date} : {test: false, value};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const notBetween = (range: CompareDateRange, options?: CompareDateOptions): ValueAction<any, Dayjs> => {
	const check = between(range, options);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: date} = check(value);
		return test ? {test: false, value} : {test, value: date};
	};
};
