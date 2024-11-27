import {RegisteredValueAction, RegisteredValueActionWithParams} from './action-types';
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
import {
	ceil,
	floor,
	roundBy,
	roundDown,
	roundUp,
	toDecimal,
	toFixed,
	toFixed0,
	toFixed1,
	toFixed2,
	toFixed3,
	toFixed4,
	toFixed5,
	toFixed6,
	toNumber
} from './transform-decimal-actions';
import {
	append,
	appendAll,
	appendFirst,
	asyncAppend,
	asyncAppendAll,
	asyncAppendFirst,
	asyncExchange,
	asyncExchangeAll,
	asyncExchangeFirst,
	asyncHeadWith,
	asyncHeadWithAll,
	asyncHeadWithFirst,
	asyncPrepend,
	asyncPrependAll,
	asyncPrependFirst,
	asyncReplaceWith,
	asyncReplaceWithAll,
	asyncReplaceWithFirst,
	asyncTailWith,
	asyncTailWithAll,
	asyncTailWithFirst,
	exchange,
	exchangeAll,
	exchangeFirst,
	headWith,
	headWithAll,
	prepend,
	prependAll,
	prependFirst,
	replaceWith,
	replaceWithAll,
	tailWith,
	tailWithAll
} from './transform-extend-actions';
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
	postfix,
	prefix,
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
	stringify: {type: 'func', func: stringify} as RegisteredValueAction<typeof stringify>,
	trim: {type: 'func', func: trim} as RegisteredValueAction<typeof trim>,
	pad: {type: 'param', func: pad} as RegisteredValueActionWithParams<typeof pad>,
	padStart: {type: 'param', func: padStart} as RegisteredValueActionWithParams<typeof padStart>,
	padLeft: {type: 'param', func: padStart} as RegisteredValueActionWithParams<typeof padStart>,
	lpad: {type: 'param', func: padStart} as RegisteredValueActionWithParams<typeof padStart>,
	padEnd: {type: 'param', func: padEnd} as RegisteredValueActionWithParams<typeof padEnd>,
	padRight: {type: 'param', func: padEnd} as RegisteredValueActionWithParams<typeof padEnd>,
	rpad: {type: 'param', func: padEnd} as RegisteredValueActionWithParams<typeof padEnd>,
	lower: {type: 'func', func: lower} as RegisteredValueAction<typeof lower>,
	upper: {type: 'func', func: upper} as RegisteredValueAction<typeof upper>,
	capitalize: {type: 'func', func: capitalize} as RegisteredValueAction<typeof capitalize>,
	cap: {type: 'func', func: capitalize} as RegisteredValueAction<typeof capitalize>,
	capitalizeAll: {type: 'func', func: capitalizeAll} as RegisteredValueAction<typeof capitalizeAll>,
	capAll: {type: 'func', func: capitalizeAll} as RegisteredValueAction<typeof capitalizeAll>,
	camel: {type: 'func', func: camel} as RegisteredValueAction<typeof camel>,
	pascal: {type: 'func', func: pascal} as RegisteredValueAction<typeof pascal>,
	snake: {type: 'func', func: snake} as RegisteredValueAction<typeof snake>,
	kebab: {type: 'func', func: kebab} as RegisteredValueAction<typeof kebab>,
	replace: {type: 'param', func: replace} as RegisteredValueActionWithParams<typeof replace>,
	replaceAll: {type: 'param', func: replaceAll} as RegisteredValueActionWithParams<typeof replaceAll>,
	prefix: {type: 'param', func: prefix} as RegisteredValueActionWithParams<typeof prefix>,
	postfix: {type: 'param', func: postfix} as RegisteredValueActionWithParams<typeof postfix>,
	// decimal
	toDecimal: {type: 'func', func: toDecimal} as RegisteredValueAction<typeof toDecimal>,
	toNumber: {type: 'func', func: toNumber} as RegisteredValueAction<typeof toNumber>,
	toFixed0: {type: 'func', func: toFixed0} as RegisteredValueAction<typeof toFixed0>,
	toFixed1: {type: 'func', func: toFixed1} as RegisteredValueAction<typeof toFixed1>,
	toFixed2: {type: 'func', func: toFixed2} as RegisteredValueAction<typeof toFixed2>,
	toFixed3: {type: 'func', func: toFixed3} as RegisteredValueAction<typeof toFixed3>,
	toFixed4: {type: 'func', func: toFixed4} as RegisteredValueAction<typeof toFixed4>,
	toFixed5: {type: 'func', func: toFixed5} as RegisteredValueAction<typeof toFixed5>,
	toFixed6: {type: 'func', func: toFixed6} as RegisteredValueAction<typeof toFixed6>,
	// decimal with params
	toFixed: {type: 'param', func: toFixed} as RegisteredValueActionWithParams<typeof toFixed>,
	round: {type: 'param', func: roundUp} as RegisteredValueActionWithParams<typeof roundUp>,
	roundUp: {type: 'param', func: roundUp} as RegisteredValueActionWithParams<typeof roundUp>,
	roundDown: {type: 'param', func: roundDown} as RegisteredValueActionWithParams<typeof roundDown>,
	floor: {type: 'param', func: floor} as RegisteredValueActionWithParams<typeof floor>,
	ceil: {type: 'param', func: ceil} as RegisteredValueActionWithParams<typeof ceil>,
	roundBy: {type: 'param', func: roundBy} as RegisteredValueActionWithParams<typeof roundBy>,
	// date
	startOfYear: {type: 'func', func: startOfYear} as RegisteredValueAction<typeof startOfYear>,
	endOfYear: {type: 'func', func: endOfYear} as RegisteredValueAction<typeof endOfYear>,
	startOfMonth: {type: 'func', func: startOfMonth} as RegisteredValueAction<typeof startOfMonth>,
	endOfMonth: {type: 'func', func: endOfMonth} as RegisteredValueAction<typeof endOfMonth>,
	startOfDay: {type: 'func', func: startOfDay} as RegisteredValueAction<typeof startOfDay>,
	endOfDay: {type: 'func', func: endOfDay} as RegisteredValueAction<typeof endOfDay>,
	startOfHour: {type: 'func', func: startOfHour} as RegisteredValueAction<typeof startOfHour>,
	endOfHour: {type: 'func', func: endOfHour} as RegisteredValueAction<typeof endOfHour>,
	startOfMinute: {type: 'func', func: startOfMinute} as RegisteredValueAction<typeof startOfMinute>,
	endOfMinute: {type: 'func', func: endOfMinute} as RegisteredValueAction<typeof endOfMinute>,
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
	prepend: {type: 'param', func: prepend} as RegisteredValueActionWithParams<typeof prepend>,
	exchange: {type: 'param', func: exchange} as RegisteredValueActionWithParams<typeof exchange>,
	append: {type: 'param', func: append} as RegisteredValueActionWithParams<typeof append>,
	prependFirst: {type: 'param', func: prependFirst} as RegisteredValueActionWithParams<typeof prependFirst>,
	exchangeFirst: {type: 'param', func: exchangeFirst} as RegisteredValueActionWithParams<typeof exchangeFirst>,
	appendFirst: {type: 'param', func: appendFirst} as RegisteredValueActionWithParams<typeof appendFirst>,
	grabFirst: {type: 'param', func: appendFirst} as RegisteredValueActionWithParams<typeof appendFirst>,
	withFirst: {type: 'param', func: appendFirst} as RegisteredValueActionWithParams<typeof appendFirst>,
	andFirst: {type: 'param', func: appendFirst} as RegisteredValueActionWithParams<typeof appendFirst>,
	prependAll: {type: 'param', func: prependAll} as RegisteredValueActionWithParams<typeof prependAll>,
	exchangeAll: {type: 'param', func: exchangeAll} as RegisteredValueActionWithParams<typeof exchangeAll>,
	appendAll: {type: 'param', func: appendAll} as RegisteredValueActionWithParams<typeof appendAll>,
	grabAll: {type: 'param', func: appendAll} as RegisteredValueActionWithParams<typeof appendAll>,
	withAll: {type: 'param', func: appendAll} as RegisteredValueActionWithParams<typeof appendAll>,
	andAll: {type: 'param', func: appendAll} as RegisteredValueActionWithParams<typeof appendAll>,
	// async extension
	asyncPrepend: {type: 'param', func: asyncPrepend} as RegisteredValueActionWithParams<typeof asyncPrepend>,
	asyncExchange: {type: 'param', func: asyncExchange} as RegisteredValueActionWithParams<typeof asyncExchange>,
	asyncAppend: {type: 'param', func: asyncAppend} as RegisteredValueActionWithParams<typeof asyncAppend>,
	asyncPrependFirst: {
		type: 'param', func: asyncPrependFirst
	} as RegisteredValueActionWithParams<typeof asyncPrependFirst>,
	asyncExchangeFirst: {
		type: 'param', func: asyncExchangeFirst
	} as RegisteredValueActionWithParams<typeof asyncExchangeFirst>,
	asyncAppendFirst: {
		type: 'param', func: asyncAppendFirst
	} as RegisteredValueActionWithParams<typeof asyncAppendFirst>,
	asyncGrabFirst: {type: 'param', func: asyncAppendFirst} as RegisteredValueActionWithParams<typeof asyncAppendFirst>,
	asyncWithFirst: {type: 'param', func: asyncAppendFirst} as RegisteredValueActionWithParams<typeof asyncAppendFirst>,
	asyncAndFirst: {type: 'param', func: asyncAppendFirst} as RegisteredValueActionWithParams<typeof asyncAppendFirst>,
	asyncPrependAll: {type: 'param', func: asyncPrependAll} as RegisteredValueActionWithParams<typeof asyncPrependAll>,
	asyncExchangeAll: {
		type: 'param', func: asyncExchangeAll
	} as RegisteredValueActionWithParams<typeof asyncExchangeAll>,
	asyncAppendAll: {type: 'param', func: asyncAppendAll} as RegisteredValueActionWithParams<typeof asyncAppendAll>,
	asyncGrabAll: {type: 'param', func: asyncAppendAll} as RegisteredValueActionWithParams<typeof asyncAppendAll>,
	asyncWithAll: {type: 'param', func: asyncAppendAll} as RegisteredValueActionWithParams<typeof asyncAppendAll>,
	asyncAndAll: {type: 'param', func: asyncAppendAll} as RegisteredValueActionWithParams<typeof asyncAppendAll>,
	// extension with value transforming function
	headWith: {type: 'param', func: headWith} as RegisteredValueActionWithParams<typeof headWith>,
	replaceWith: {type: 'param', func: replaceWith} as RegisteredValueActionWithParams<typeof replaceWith>,
	tailWith: {type: 'param', func: tailWith} as RegisteredValueActionWithParams<typeof tailWith>,
	headWithAll: {type: 'param', func: headWithAll} as RegisteredValueActionWithParams<typeof headWithAll>,
	replaceWithAll: {type: 'param', func: replaceWithAll} as RegisteredValueActionWithParams<typeof replaceWithAll>,
	tailWithAll: {type: 'param', func: tailWithAll} as RegisteredValueActionWithParams<typeof tailWithAll>,
	asyncHeadWith: {type: 'param', func: asyncHeadWith} as RegisteredValueActionWithParams<typeof asyncHeadWith>,
	asyncReplaceWith: {
		type: 'param', func: asyncReplaceWith
	} as RegisteredValueActionWithParams<typeof asyncReplaceWith>,
	asyncTailWith: {type: 'param', func: asyncTailWith} as RegisteredValueActionWithParams<typeof asyncTailWith>,
	asyncHeadWithFirst: {
		type: 'param', func: asyncHeadWithFirst
	} as RegisteredValueActionWithParams<typeof asyncHeadWithFirst>,
	asyncReplaceWithFirst: {
		type: 'param', func: asyncReplaceWithFirst
	} as RegisteredValueActionWithParams<typeof asyncReplaceWithFirst>,
	asyncTailWithFirst: {
		type: 'param', func: asyncTailWithFirst
	} as RegisteredValueActionWithParams<typeof asyncTailWithFirst>,
	asyncHeadWithAll: {
		type: 'param', func: asyncHeadWithAll
	} as RegisteredValueActionWithParams<typeof asyncHeadWithAll>,
	asyncReplaceWithAll: {
		type: 'param', func: asyncReplaceWithAll
	} as RegisteredValueActionWithParams<typeof asyncReplaceWithAll>,
	asyncTailWithAll: {
		type: 'param', func: asyncTailWithAll
	} as RegisteredValueActionWithParams<typeof asyncTailWithAll>
};
export const AllTransformers: Readonly<typeof transformers> = transformers;
