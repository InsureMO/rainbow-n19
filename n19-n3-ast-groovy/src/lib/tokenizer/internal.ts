import {AstChars, AstKeywords, AstLiterals, AstMarks, AstOperators, AstPrimitiveTypes, Char} from '../captor';
import {AstNodeCaptorConstructor, AstNodeConstructor} from './types';

export enum AtomicTokenType {
	PrimitiveType,
	GroovyKeyword,
	JavaKeyword,
	BooleanLiteral,
	GroovyOperator,
	JavaOperator,
	Separator,
	CommentsMark,
	ScriptCommentMark,
	SameChars,
	MultiCharPatterns,
	Custom
}

// alias for shorten AtomicTokenType
export const Tt = {
	Pt: AtomicTokenType.PrimitiveType as AtomicTokenType.PrimitiveType,
	Gk: AtomicTokenType.GroovyKeyword as AtomicTokenType.GroovyKeyword,
	Jk: AtomicTokenType.JavaKeyword as AtomicTokenType.JavaKeyword,
	Bl: AtomicTokenType.BooleanLiteral as AtomicTokenType.BooleanLiteral,
	Go: AtomicTokenType.GroovyOperator as AtomicTokenType.GroovyOperator,
	Jo: AtomicTokenType.JavaOperator as AtomicTokenType.JavaOperator,
	Sp: AtomicTokenType.Separator as AtomicTokenType.Separator,
	Cm: AtomicTokenType.CommentsMark as AtomicTokenType.CommentsMark,
	Scm: AtomicTokenType.ScriptCommentMark as AtomicTokenType.ScriptCommentMark,
	Sch: AtomicTokenType.SameChars as AtomicTokenType.SameChars,
	Mcp: AtomicTokenType.MultiCharPatterns as AtomicTokenType.MultiCharPatterns,
	Ct: AtomicTokenType.Custom as AtomicTokenType.Custom
};
export const KwPt = AstPrimitiveTypes;
export const KwKw = AstKeywords;
export const KwLt = AstLiterals;
export const KwOp = AstOperators;
export const KwCh = AstChars;
export const KwMk = AstMarks;

export type AtomicTokenName = string;

export type AtomicTokenDefOfSingleCaptor = [AstNodeConstructor, AstNodeCaptorConstructor];
export type AtomicTokenDefOfDualCaptors = [AstNodeConstructor, [AstNodeCaptorConstructor, AstNodeCaptorConstructor]];
export type AtomicTokenDefOfMultiCaptors = [AstNodeConstructor, Array<AstNodeCaptorConstructor>];
export type AtomicTokenDefType =
	| AtomicTokenDefOfSingleCaptor
	| AtomicTokenDefOfDualCaptors
	| AtomicTokenDefOfMultiCaptors;

export type AtomicPrimitiveTokenBasis = [AtomicTokenType.PrimitiveType, AstPrimitiveTypes, AtomicTokenName];
export type AtomicGroovyKeywordTokenBasis = [AtomicTokenType.GroovyKeyword, AstKeywords, AtomicTokenName];
export type AtomicJavaKeywordTokenBasis = [AtomicTokenType.JavaKeyword, AstKeywords, AtomicTokenName];
export type AtomicBooleanLiteralBasis = [AtomicTokenType.BooleanLiteral, [AstLiterals, AstLiterals], AtomicTokenName];
export type AtomicGroovyOperatorTokenBasis = [AtomicTokenType.GroovyOperator, AstOperators, AtomicTokenName];
export type AtomicJavaOperatorTokenBasis = [AtomicTokenType.JavaOperator, AstOperators, AtomicTokenName];
export type AtomicSeparatorTokenBasis = [AtomicTokenType.Separator, AstChars, AtomicTokenName];
export type AtomicCommentsMarkTokenBasis = [AtomicTokenType.CommentsMark, AstMarks, AtomicTokenName];
export type AtomicScriptCommentMarkTokenBasis = [AtomicTokenType.ScriptCommentMark, AstMarks, AtomicTokenName];
export type AtomicSameCharsTokenBasis = [AtomicTokenType.SameChars, Char, AtomicTokenName];
export type AtomicMultiCharPatternsTokenBasis = [AtomicTokenType.MultiCharPatterns, Array<Char | string>, AtomicTokenName];
export type AtomicCustomTokenBasis = [AtomicTokenType.Custom, AstNodeConstructor, AstNodeCaptorConstructor];
export type AtomicTokenBasisType =
	| AtomicPrimitiveTokenBasis
	| AtomicGroovyKeywordTokenBasis | AtomicJavaKeywordTokenBasis
	| AtomicBooleanLiteralBasis
	| AtomicGroovyOperatorTokenBasis | AtomicJavaOperatorTokenBasis
	| AtomicSeparatorTokenBasis
	| AtomicCommentsMarkTokenBasis
	| AtomicScriptCommentMarkTokenBasis
	| AtomicSameCharsTokenBasis
	| AtomicMultiCharPatternsTokenBasis
	| AtomicCustomTokenBasis;
