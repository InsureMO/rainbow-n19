import {RegisteredValueAction, RegisteredValueActionWithParams} from './action-types';
import {
	asyncExchange,
	asyncExchangeAll,
	asyncExchangeFirst,
	exchange,
	exchangeAll,
	exchangeFirst
} from './transform-extend-actions';
import {format, formatDate, formatNumber, retrieve} from './transform-any-actions';
import {
	day,
	endOfDay,
	endOfHour,
	endOfMinute,
	endOfMonth,
	endOfYear,
	hour,
	minute,
	month,
	second,
	shiftDay,
	shiftHour,
	shiftMinute,
	shiftMonth,
	shiftSecond,
	shiftYear,
	startOfDay,
	startOfHour,
	startOfMinute,
	startOfMonth,
	startOfYear,
	travelTo,
	year
} from './transform-dayjs-actions';
import {ceil, floor, roundBy, roundDown, roundUp, toDecimal, toFixed, toNumber} from './transform-decimal-actions';
import {
	camel,
	capitalize,
	capitalizeAll,
	kebab,
	lower,
	pad,
	padEnd,
	padStart,
	pascal,
	replace,
	replaceAll,
	snake,
	stringify,
	trim,
	upper
} from './transform-string-actions';

const transformers = {
	// any
	formatDate: {type: 'param', func: formatDate} as RegisteredValueActionWithParams<typeof formatDate>,
	formatNumber: {type: 'param', func: formatNumber} as RegisteredValueActionWithParams<typeof formatNumber>,
	format: {type: 'param', func: format} as RegisteredValueActionWithParams<typeof format>,
	retrieve: {type: 'param', func: retrieve} as RegisteredValueActionWithParams<typeof retrieve>,
	// string
	stringify: {type: 'func', func: stringify} as RegisteredValueAction,
	trim: {type: 'func', func: trim} as RegisteredValueAction,
	pad: {type: 'param', func: pad} as RegisteredValueActionWithParams<typeof pad>,
	padStart: {type: 'param', func: padStart} as RegisteredValueActionWithParams<typeof padStart>,
	padLeft: {type: 'param', func: padStart} as RegisteredValueActionWithParams<typeof padStart>,
	lpad: {type: 'param', func: padStart} as RegisteredValueActionWithParams<typeof padStart>,
	padEnd: {type: 'param', func: padEnd} as RegisteredValueActionWithParams<typeof padEnd>,
	padRight: {type: 'param', func: padEnd} as RegisteredValueActionWithParams<typeof padEnd>,
	rpad: {type: 'param', func: padEnd} as RegisteredValueActionWithParams<typeof padEnd>,
	lower: {type: 'func', func: lower} as RegisteredValueAction,
	upper: {type: 'func', func: upper} as RegisteredValueAction,
	capitalize: {type: 'func', func: capitalize} as RegisteredValueAction,
	cap: {type: 'func', func: capitalize} as RegisteredValueAction,
	capitalizeAll: {type: 'func', func: capitalizeAll} as RegisteredValueAction,
	capAll: {type: 'func', func: capitalizeAll} as RegisteredValueAction,
	camel: {type: 'func', func: camel} as RegisteredValueAction,
	pascal: {type: 'func', func: pascal} as RegisteredValueAction,
	snake: {type: 'func', func: snake} as RegisteredValueAction,
	kebab: {type: 'func', func: kebab} as RegisteredValueAction,
	replace: {type: 'param', func: replace} as RegisteredValueActionWithParams<typeof replace>,
	replaceAll: {type: 'param', func: replaceAll} as RegisteredValueActionWithParams<typeof replaceAll>,
	// decimal
	toDecimal: {type: 'func', func: toDecimal} as RegisteredValueAction,
	toNumber: {type: 'func', func: toNumber} as RegisteredValueAction,
	toFixed0: {type: 'func', func: toFixed(0)} as RegisteredValueAction,
	toFixed1: {type: 'func', func: toFixed(1)} as RegisteredValueAction,
	toFixed2: {type: 'func', func: toFixed(2)} as RegisteredValueAction,
	toFixed3: {type: 'func', func: toFixed(3)} as RegisteredValueAction,
	toFixed4: {type: 'func', func: toFixed(4)} as RegisteredValueAction,
	toFixed5: {type: 'func', func: toFixed(5)} as RegisteredValueAction,
	toFixed6: {type: 'func', func: toFixed(6)} as RegisteredValueAction,
	// decimal with params
	toFixed: {type: 'param', func: toFixed} as RegisteredValueActionWithParams<typeof toFixed>,
	round: {type: 'param', func: roundUp} as RegisteredValueActionWithParams<typeof roundUp>,
	roundUp: {type: 'param', func: roundUp} as RegisteredValueActionWithParams<typeof roundUp>,
	roundDown: {type: 'param', func: roundDown} as RegisteredValueActionWithParams<typeof roundDown>,
	floor: {type: 'param', func: floor} as RegisteredValueActionWithParams<typeof floor>,
	ceil: {type: 'param', func: ceil} as RegisteredValueActionWithParams<typeof ceil>,
	roundBy: {type: 'param', func: roundBy} as RegisteredValueActionWithParams<typeof roundBy>,
	// date
	startOfYear: {type: 'func', func: startOfYear} as RegisteredValueAction,
	endOfYear: {type: 'func', func: endOfYear} as RegisteredValueAction,
	startOfMonth: {type: 'func', func: startOfMonth} as RegisteredValueAction,
	endOfMonth: {type: 'func', func: endOfMonth} as RegisteredValueAction,
	startOfDay: {type: 'func', func: startOfDay} as RegisteredValueAction,
	endOfDay: {type: 'func', func: endOfDay} as RegisteredValueAction,
	startOfHour: {type: 'func', func: startOfHour} as RegisteredValueAction,
	endOfHour: {type: 'func', func: endOfHour} as RegisteredValueAction,
	startOfMinute: {type: 'func', func: startOfMinute} as RegisteredValueAction,
	endOfMinute: {type: 'func', func: endOfMinute} as RegisteredValueAction,
	// date with params
	travelTo: {type: 'param', func: travelTo} as RegisteredValueActionWithParams<typeof travelTo>,
	year: {type: 'param', func: year} as RegisteredValueActionWithParams<typeof year>,
	shiftYear: {type: 'param', func: shiftYear} as RegisteredValueActionWithParams<typeof shiftYear>,
	month: {type: 'param', func: month} as RegisteredValueActionWithParams<typeof month>,
	shiftMonth: {type: 'param', func: shiftMonth} as RegisteredValueActionWithParams<typeof shiftMonth>,
	day: {type: 'param', func: day} as RegisteredValueActionWithParams<typeof day>,
	shiftDay: {type: 'param', func: shiftDay} as RegisteredValueActionWithParams<typeof shiftDay>,
	hour: {type: 'param', func: hour} as RegisteredValueActionWithParams<typeof hour>,
	shiftHour: {type: 'param', func: shiftHour} as RegisteredValueActionWithParams<typeof shiftHour>,
	minute: {type: 'param', func: minute} as RegisteredValueActionWithParams<typeof minute>,
	shiftMinute: {type: 'param', func: shiftMinute} as RegisteredValueActionWithParams<typeof shiftMinute>,
	second: {type: 'param', func: second} as RegisteredValueActionWithParams<typeof second>,
	shiftSecond: {type: 'param', func: shiftSecond} as RegisteredValueActionWithParams<typeof shiftSecond>,
	// extension
	exchange: {type: 'param', func: exchange} as RegisteredValueActionWithParams<typeof exchange>,
	exchangeFirst: {type: 'param', func: exchangeFirst} as RegisteredValueActionWithParams<typeof exchangeFirst>,
	exchangeAll: {type: 'param', func: exchangeAll} as RegisteredValueActionWithParams<typeof exchangeAll>,
	// async extension
	asyncExchange: {type: 'param', func: asyncExchange} as RegisteredValueActionWithParams<typeof asyncExchange>,
	asyncExchangeOne: {
		type: 'param', func: asyncExchangeFirst
	} as RegisteredValueActionWithParams<typeof asyncExchangeFirst>,
	asyncExchangeAll: {
		type: 'param', func: asyncExchangeAll
	} as RegisteredValueActionWithParams<typeof asyncExchangeAll>
};
export const AllTransformers: Readonly<typeof transformers> = transformers;
