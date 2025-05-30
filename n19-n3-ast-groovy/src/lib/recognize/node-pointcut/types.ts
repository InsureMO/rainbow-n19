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
	AcceptedWhen = 'AcceptedWhen',
	UnacceptableTokenIds = 'UnacceptableTokenIds',
	UnacceptedWhen = 'UnacceptedWhen',
	// on child appended
	ReviseCodeBlockTo = 'ReviseCodeBlockTo',
	ReviseTokenTo = 'ReviseTokenTo',
	ReviseTokenToWhen = 'ReviseTokenToWhen',
	EndWithAnyOfTokenIdsAppended = 'EndWithAnyOfTokenIdsAppended',
	EndWithChecked = 'EndWithChecked',
	// on child closed
	CloseOnChildWithTokenIdClosed = 'CloseOnChildWithTokenIdClosed',
	// on node closed
	DisableElevateTrailingDetachable = 'DisableElevateTrailingDetachable',
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
export type AcceptedWhen = Readonly<[PointcutBasisDefType.AcceptedWhen, OneOfChildAcceptableCheckFunc, ...Array<TokenId>]>;
export type UnacceptableTokenIds = Readonly<[PointcutBasisDefType.UnacceptableTokenIds, ...Array<TokenId>]>;
export type UnacceptedWhen = Readonly<[PointcutBasisDefType.UnacceptedWhen, OneOfChildAcceptableCheckFunc, ...Array<TokenId>]>;
// on child appended
export type ReviseCodeBlockTo = Readonly<[PointcutBasisDefType.ReviseCodeBlockTo, TokenId]>;
export type ReviseTokenTo = Readonly<[PointcutBasisDefType.ReviseTokenTo, Partial<Record<TokenId, TokenId | [TokenId, TokenType]>>]>;
export type ReviseTokenToWhen = Readonly<[PointcutBasisDefType.ReviseTokenToWhen, OneOfOnChildAppendedFunc, TokenId | [TokenId, TokenType]]>;
export type EndWithAnyOfTokenIdsAppended = Readonly<[PointcutBasisDefType.EndWithAnyOfTokenIdsAppended, ...Array<TokenId>]>;
export type EndWithChecked = Readonly<[PointcutBasisDefType.EndWithChecked, OneOfOnChildAppendedFunc]>;
// on child closed
export type CloseOnChildWithTokenIdClosed = Readonly<[PointcutBasisDefType.CloseOnChildWithTokenIdClosed, TokenId]>;
// on node closed
export type DisableElevateTrailingDetachable = Readonly<[PointcutBasisDefType.DisableElevateTrailingDetachable]>;

export type PointcutBasisChildAcceptableCheck =
	| ChildAcceptableCheck
	| DisableBase5AsChild
	| AcceptableTokenIds | AcceptableTokenTypes | AcceptedWhen
	| UnacceptableTokenIds | UnacceptedWhen;
export type PointcutBasisOnChildAppended =
	| OnChildAppended
	| ReviseCodeBlockTo | ReviseTokenTo | ReviseTokenToWhen
	| EndWithAnyOfTokenIdsAppended | EndWithChecked;
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
>
export type PointcutBasisDefs = PointcutBasisDef | 'TODO' | 'NotRequired';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PointcutItemsToRecord<T extends readonly [PointcutBasisDefType, ...any[]]> = Partial<{ [K in T[0]]: Extract<T, readonly [K, ...any[]]> }>;
