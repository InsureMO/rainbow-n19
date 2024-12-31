import {GroovySyntaxSource} from './GroovySyntaxSource';
import {PositionInfo} from './PositionInfo';

export interface SyntaxErrorReportable {
	require(condition: boolean, msg: string): void;
	require(condition: boolean, msg: string, offset: number): void;
	require(condition: boolean, msg: string, offset: number, toAttachPositionInfo: boolean): void;
	require(condition: boolean, msg: string, offset: [number, number]): void;
	require(condition: boolean, msg: string, offset: [number, number], toAttachPositionInfo: boolean): void;
	require(condition: boolean, msg: string, toAttachPositionInfo: boolean): void;

	throwSyntaxError(msg: string, offset: number, toAttachPositionInfo: boolean): void;
	throwSyntaxError(msg: string, offset: [number, number], toAttachPositionInfo: boolean): void;

	readonly syntaxErrorSource: GroovySyntaxSource;

	genPositionInfo(offset: number): PositionInfo;
	genPositionInfo(offset: [number, number]): PositionInfo;

	readonly errorLine: number;
	readonly errorColumn: number;
}