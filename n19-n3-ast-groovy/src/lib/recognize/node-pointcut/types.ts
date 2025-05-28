import {TokenId, TokenType} from '../../tokens';
import {
	ChildAcceptableCheckFunc,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OneOfChildAcceptableCheckFunc,
	OneOfOnChildAppendedFunc,
	OnNodeClosedFunc
} from '../node-attribute';

export enum PointcutBasisDefType {
	// pointcut functions
	ChildAcceptableCheck = 'ChildAcceptableCheck',
	OnChildAppended = 'OnChildAppended',
	OnChildClosed = 'OnChildClosed',
	OnNodeClosed = 'OnNodeClosed',
	// child acceptable check
	DisableBase5AsChild = 'DisableBase5AsChild',
	AcceptableTokenIds = 'AcceptableTokenIds',
	AcceptableTokenTypes = 'AcceptableTokenTypes',
	AcceptWhen = 'AcceptWhen',
	UnacceptableTokenIds = 'UnacceptableTokenIds',
	UnacceptedWhen = 'UnacceptedWhen',
	// on child appended
	EndsWithAnyOfTokenIdsAppended = 'EndsWithAnyOfTokenIdsAppended',
	EndsWithChecked = 'EndsWithChecked',
	// on child closed
	CloseOnChildWithTokenIdClosed = 'CloseOnChildWithTokenIdClosed',
	// on node closed
	DisableElevateTrailingDetachable = 'DisableElevateTrailingDetachable',
	// additional
	TakeLBraceAs = 'TakeLBraceAs',
	// combined
	TakeLBraceAsEnd = 'TakeLBraceAsEnd'
}

// pointcut functions
export type ChildAcceptableCheck = Readonly<[PointcutBasisDefType.ChildAcceptableCheck, ChildAcceptableCheckFunc]>;
export type OnChildAppended = Readonly<[PointcutBasisDefType.OnChildAppended, OnChildAppendedFunc]>;
export type OnChildClosed = Readonly<[PointcutBasisDefType.OnChildClosed, OnChildClosedFunc]>;
export type OnNodeClosed = Readonly<[PointcutBasisDefType.OnNodeClosed, OnNodeClosedFunc]>;
// child acceptable check
export type DisableBase5AsChild = Readonly<[PointcutBasisDefType.DisableBase5AsChild]>;
export type AcceptableTokenIds = Readonly<[PointcutBasisDefType.AcceptableTokenIds, ...Array<TokenId>]>;
export type AcceptableTokenTypes = Readonly<[PointcutBasisDefType.AcceptableTokenTypes, ...Array<TokenType>]>;
export type AcceptWhen = Readonly<[PointcutBasisDefType.AcceptWhen, OneOfChildAcceptableCheckFunc, ...Array<TokenId>]>;
export type UnacceptableTokenIds = Readonly<[PointcutBasisDefType.UnacceptableTokenIds, ...Array<TokenId>]>;
export type UnacceptedWhen = Readonly<[PointcutBasisDefType.UnacceptedWhen, OneOfChildAcceptableCheckFunc, ...Array<TokenId>]>;
// on child appended
export type EndsWithAnyOfTokenIdsAppended = Readonly<[PointcutBasisDefType.EndsWithAnyOfTokenIdsAppended, ...Array<TokenId>]>;
export type EndsWithChecked = Readonly<[PointcutBasisDefType.EndsWithChecked, OneOfOnChildAppendedFunc]>;
// on child closed
export type CloseOnChildWithTokenIdClosed = Readonly<[PointcutBasisDefType.CloseOnChildWithTokenIdClosed, TokenId]>;
// on node closed
export type DisableElevateTrailingDetachable = Readonly<[PointcutBasisDefType.DisableElevateTrailingDetachable]>;
// additional
export type TakeLBraceAs = Readonly<[PointcutBasisDefType.TakeLBraceAs, TokenId]>;
// combined
export type TakeLBraceAsEnd = Readonly<[PointcutBasisDefType.TakeLBraceAsEnd, TokenId]>;

export type PointcutBasisChildAcceptableCheck =
	| ChildAcceptableCheck
	| DisableBase5AsChild
	| AcceptableTokenIds | AcceptableTokenTypes | AcceptWhen
	| UnacceptableTokenIds | UnacceptedWhen;
export type PointcutBasisOnChildAppended =
	| OnChildAppended
	| EndsWithAnyOfTokenIdsAppended | EndsWithChecked;
export type PointcutBasisOnChildClosed =
	| OnChildClosed
	| CloseOnChildWithTokenIdClosed;
export type PointcutBasisOnNodeClosed =
	| OnNodeClosed
	| DisableElevateTrailingDetachable;

/**
 * each type can be defined multiple times since it is an array, when multiple times occurs, last win.
 */
export type PointcutBasisDef = ReadonlyArray<
	// aspects
	| PointcutBasisChildAcceptableCheck
	| PointcutBasisOnChildAppended
	| PointcutBasisOnChildClosed
	| PointcutBasisOnNodeClosed
	// other
	| TakeLBraceAs
	// combined
	/** will overwrite TakeLBraceAs */
	| TakeLBraceAsEnd
>
export type PointcutBasisDefs = PointcutBasisDef | 'TODO' | 'NotRequired';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PointcutItemsToRecord<T extends readonly [PointcutBasisDefType, ...any[]]> = Partial<{ [K in T[0]]: Extract<T, readonly [K, ...any[]]> }>;
