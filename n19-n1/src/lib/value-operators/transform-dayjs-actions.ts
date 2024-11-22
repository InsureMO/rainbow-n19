import {Dayjs, UnitTypeShort} from 'dayjs';
import {ValueAction} from './action-types';
import {toDate} from './test-dayjs-actions';

type ParsedUnit = 'Y' | 'y' | 'M' | 'D' | 'd' | 'H' | 'h' | 'm' | 's'
/** /([+-]?)(\d+)([YMDHms])/ig */
export type TravelTo = string;
const findUnit = (unit: ParsedUnit): UnitTypeShort => {
	return unit === 'M' ? unit : unit.toLowerCase() as Lowercase<ParsedUnit>;
};
const modifyDate = (date: Dayjs, travelTo: TravelTo): Dayjs => {
	const regex = /([+-]?)(\d+)([YMDHms])/ig;
	let match: RegExpMatchArray | null;
	while ((match = regex.exec(travelTo)) !== null) {
		const [, sign, value, unit] = match;
		const intValue = parseInt(value, 10);
		const opUnit = findUnit(unit as ParsedUnit);
		switch (sign) {
			case '+':
				date = date.add(intValue, opUnit);
				break;
			case '-':
				date = date.subtract(intValue, opUnit);
				break;
			default:
				date = date.set(opUnit, intValue);
				break;
		}
	}
	return date;
};
/** no param toDate */
const baseToDate = toDate();
export const travelTo = (travelTo: TravelTo): ValueAction<Dayjs, Dayjs> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: parsed} = baseToDate(value);
		if (!test) {
			return {test: false, value};
		}
		return {test: true, value: modifyDate(parsed, travelTo)};
	};
};
const createDateModifierByUnit = (func: (date: Dayjs) => Dayjs): ValueAction<Dayjs, Dayjs> => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (value?: any) => {
		const {test, value: parsed} = baseToDate(value);
		if (!test) {
			return {test: false, value};
		}
		return {test: true, value: func(parsed)};
	};
};
export const year = (year: number) => createDateModifierByUnit(date => date.year(year));
export const shiftYear = (year: number) => createDateModifierByUnit(date => date.add(year, 'year'));
export const startOfYear = createDateModifierByUnit(date => date.startOf('year'));
export const endOfYear = createDateModifierByUnit(date => date.endOf('year'));
export const month = (month: number) => createDateModifierByUnit(date => date.month(month));
export const shiftMonth = (month: number) => createDateModifierByUnit(date => date.add(month, 'month'));
export const startOfMonth = createDateModifierByUnit(date => date.startOf('month'));
export const endOfMonth = createDateModifierByUnit(date => date.endOf('month'));
export const day = (day: number) => createDateModifierByUnit(date => date.date(day));
export const shiftDay = (day: number) => createDateModifierByUnit(date => date.add(day, 'day'));
export const startOfDay = createDateModifierByUnit(date => date.startOf('day'));
export const endOfDay = createDateModifierByUnit(date => date.endOf('day'));
export const hour = (hour: number) => createDateModifierByUnit(date => date.hour(hour));
export const shiftHour = (hour: number) => createDateModifierByUnit(date => date.add(hour, 'hour'));
export const startOfHour = createDateModifierByUnit(date => date.startOf('hour'));
export const endOfHour = createDateModifierByUnit(date => date.endOf('hour'));
export const minute = (minute: number) => createDateModifierByUnit(date => date.minute(minute));
export const shiftMinute = (minute: number) => createDateModifierByUnit(date => date.add(minute, 'minute'));
export const startOfMinute = createDateModifierByUnit(date => date.startOf('minute'));
export const endOfMinute = createDateModifierByUnit(date => date.endOf('minute'));
export const second = (second: number) => createDateModifierByUnit(date => date.second(second));
export const shiftSecond = (second: number) => createDateModifierByUnit(date => date.add(second, 'second'));
