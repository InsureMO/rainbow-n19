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
	/** at most one definition */
	ChildAcceptableCheck = 'ChildAcceptableCheck',
	/** at most one definition */
	OnChildAppended = 'OnChildAppended',
	/** at most one definition */
	OnChildClosed = 'OnChildClosed',
	/** at most one definition */
	OnNodeClosed = 'OnNodeClosed',
	// child acceptable check
	DisableBase5AsChild = 'DisableBase5AsChild',
	AcceptableTokenIds = 'AcceptableTokenIds',
	AcceptableTokenTypes = 'AcceptableTokenTypes',
	AcceptedWhen = 'AcceptedWhen',
	UnacceptableTokenIds = 'UnacceptableTokenIds',
	UnacceptedWhen = 'UnacceptedWhen',
	// on child appended
	ReviseTokenTo = 'ReviseTokenTo',
	ReviseTokenToWhen = 'ReviseTokenToWhen',
	SplitTokenWhen = 'SplitTokenWhen',
	EndWithAnyOfTokenIdsAppended = 'EndWithAnyOfTokenIdsAppended',
	EndWithUseFunc = 'EndWithUseFunc',
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
export type ReviseTokenTo = Readonly<[PointcutBasisDefType.ReviseTokenTo, Partial<Record<TokenId, TokenId | [TokenId, TokenType]>>]>;
export type ReviseTokenToWhen = Readonly<[PointcutBasisDefType.ReviseTokenToWhen, OneOfOnChildAppendedFunc, TokenId | [TokenId, TokenType]]>;
export type SplitTokenWhen = Readonly<[PointcutBasisDefType.SplitTokenWhen, OneOfOnChildAppendedFunc, OnChildAppendedFunc]>;
export type EndWithAnyOfTokenIdsAppended = Readonly<[PointcutBasisDefType.EndWithAnyOfTokenIdsAppended, ...Array<TokenId>]>;
export type EndWithUseFunc = Readonly<[PointcutBasisDefType.EndWithUseFunc, OneOfOnChildAppendedFunc]>;
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
	| ReviseTokenTo | ReviseTokenToWhen | SplitTokenWhen
	| EndWithAnyOfTokenIdsAppended | EndWithUseFunc;
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

