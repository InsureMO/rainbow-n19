import {RegisteredValueAction, RegisteredValueActionWithParams} from './action-types';
import {satisfy, satisfyAll, satisfyOne} from './extend-actions';
import {format, formatDate, formatNumber, retrieve} from './transform-any-actions';
import {ceil, floor, roundBy, roundDown, roundUp, toDecimal, toFixed, toNumber} from './transform-decimal-actions';
import {pad, padEnd, padStart, stringify, trim} from './transform-string-actions';

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
	// extension
	satisfy: {type: 'param', func: satisfy} as RegisteredValueActionWithParams<typeof satisfy>,
	satisfyOne: {type: 'param', func: satisfyOne} as RegisteredValueActionWithParams<typeof satisfyOne>,
	satisfyAll: {type: 'param', func: satisfyAll} as RegisteredValueActionWithParams<typeof satisfyAll>
};
export const AllTransformers: Readonly<typeof transformers> = transformers;