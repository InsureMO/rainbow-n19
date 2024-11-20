import {Dayjs} from 'dayjs';
import Decimal from 'decimal.js';
import {ValueAction} from './action-types';
import {IsDateOptions, toDate} from './test-dayjs-actions';
import {Rounding, toDecimal, ToDecimalJsRounding} from './transform-decimal-actions';

export enum FormatType {
	DATE = 'date', NUMBER = 'number'
}

export interface DateFormatOptions extends IsDateOptions {
	type: FormatType.DATE;
	format: Parameters<Dayjs['format']>[0];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatDate = (options: DateFormatOptions): ValueAction<any, string> => {
	const toDateFunc = toDate(options);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: parsed} = toDateFunc(value);
		if (!test) {
			return {test: false, value};
		}
		return {test: true, value: parsed.format(options.format)};
	};
};

export interface NumberFormatOptions {
	type: FormatType.NUMBER;
	percent?: 'h' | 'centi' | 'percentage' | 'k' | 'milli' | 'permillage' | '10k' | 'myriad' | 'permyriad';
	/** works only on percent is given, and default is true. which means default 0.25 -> 25% */
	convertOnPercent?: boolean;
	percentSign?: string;
	/** default false */
	grouping?: boolean;
	fractionDigits?: number;
	/** default half up */
	round?: Rounding;
	locale?: string | string[];
	prefix?: string;
	suffix?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatNumber = (options: NumberFormatOptions): ValueAction<any, string> => {
	const {convertOnPercent = true, grouping = false, round = Rounding.ROUND_HALF_UP} = options;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: parsed} = toDecimal(value);
		if (!test) {
			return {test: false, value};
		}
		let computed = parsed;
		if (convertOnPercent) {
			switch (options.percent) {
				case 'h':
				case 'centi':
				case 'percentage':
					computed = computed.mul(100);
					break;
				case 'k':
				case 'milli':
				case 'permillage':
					computed = computed.mul(1000);
					break;
				case '10k':
				case 'myriad':
				case 'permyriad':
					computed = computed.mul(new Decimal(10000));
					break;
				default:
				// no percentage format
			}
		}
		if (options.fractionDigits != null) {
			computed = computed.toDecimalPlaces(options.fractionDigits, ToDecimalJsRounding[round]);
		}
		let locale = options.locale;
		if (locale == null || locale.length === 0) {
			locale = (void 0);
		}
		const fractionDigits = computed.decimalPlaces();
		const formatted = new Intl.NumberFormat(locale, {
			useGrouping: grouping, minimumFractionDigits: fractionDigits
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}).format(computed.toString() as any); // number format can format string
		let suffix = options.suffix ?? '';
		switch (options.percent) {
			case 'h':
			case 'centi':
			case 'percentage':
				suffix = `${options.percentSign ?? '%'}${suffix}`;
				break;
			case 'k':
			case 'milli':
			case 'permillage':
				suffix = `${options.percentSign ?? '‰'}${suffix}`;
				break;
			case '10k':
			case 'myriad':
			case 'permyriad':
				suffix = `${options.percentSign ?? '‱'}${suffix}`;
				break;
			default:
			// no percentage format
		}
		return {test: true, value: `${options.prefix ?? ''}${formatted}${suffix}`};
	};
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const format = (options: DateFormatOptions | NumberFormatOptions): ValueAction<any, string> => {
	switch (options.type) {
		case FormatType.DATE: {
			const format = formatDate(options);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return (value?: any) => format(value);
		}
		case FormatType.NUMBER: {
			const format = formatNumber(options);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return (value?: any) => format(value);
		}
		default:
			// @ts-expect-error guard unknown type
			throw new Error(`Unsupported format type: ${options?.type}`);
	}
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const retrieve = <To>(propOrFunc: string | ValueAction<any, To>): ValueAction<any, To> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		if (value == null) {
			return {test: false, value};
		}
		if (typeof propOrFunc === 'string') {
			return {test: propOrFunc in value, value: value[propOrFunc]};
		}
		const {test, value: newValue} = propOrFunc(value);
		return {test, value: newValue};
	};
};

/** temporary plugin action */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const manipulate = <To>(func: ValueAction<any, To>): ValueAction<any, To> => func;
