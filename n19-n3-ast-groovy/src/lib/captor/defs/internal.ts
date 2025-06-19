import {TokenType} from '../../tokens';
import {AstNodeCaptor} from '../captor';
import {Char} from '../types';
import {AstChars, AstKeywords, AstLiterals, AstMarks, AstOperators, AstPrimitiveTypes} from '../util';

export interface GroovyAstNodeCaptorConstructor<N extends AstNodeCaptor = AstNodeCaptor> {
	new(): N;
}

export enum AtomicTokenType {
	PrimitiveType,
	GroovyKeyword,
	JavaKeyword,
	BooleanLiteral,
	NumericLiteral,
	StringLiteral,
	GroovyOperator,
	JavaOperator,
	Separator,
	CommentsMark,
	ScriptCommentMark,
	SameChars,
	Newline,
	Custom
}

// alias for shorten AtomicTokenType
export const Tt = {
	Pt: AtomicTokenType.PrimitiveType as AtomicTokenType.PrimitiveType,
	Gk: AtomicTokenType.GroovyKeyword as AtomicTokenType.GroovyKeyword,
	Jk: AtomicTokenType.JavaKeyword as AtomicTokenType.JavaKeyword,
	Bl: AtomicTokenType.BooleanLiteral as AtomicTokenType.BooleanLiteral,
	Nl: AtomicTokenType.NumericLiteral as AtomicTokenType.NumericLiteral,
	Sl: AtomicTokenType.StringLiteral as AtomicTokenType.StringLiteral,
	Go: AtomicTokenType.GroovyOperator as AtomicTokenType.GroovyOperator,
	Jo: AtomicTokenType.JavaOperator as AtomicTokenType.JavaOperator,
	Sp: AtomicTokenType.Separator as AtomicTokenType.Separator,
	Cm: AtomicTokenType.CommentsMark as AtomicTokenType.CommentsMark,
	Scm: AtomicTokenType.ScriptCommentMark as AtomicTokenType.ScriptCommentMark,
	Sch: AtomicTokenType.SameChars as AtomicTokenType.SameChars,
	Snl: AtomicTokenType.Newline as AtomicTokenType.Newline,
	Ct: AtomicTokenType.Custom as AtomicTokenType.Custom
};
export const KwPt = AstPrimitiveTypes;
export const KwKw = AstKeywords;
export const KwLt = AstLiterals;
export const KwOp = AstOperators;
export const KwCh = AstChars;
export const KwMk = AstMarks;

export type AtomicTokenName = string;

export type AtomicTokenDefOfSingleCaptor = GroovyAstNodeCaptorConstructor;
export type AtomicTokenDefOfDualCaptors = [GroovyAstNodeCaptorConstructor, GroovyAstNodeCaptorConstructor];
export type AtomicTokenDefOfMultiCaptors = Array<GroovyAstNodeCaptorConstructor>;
export type AtomicTokenCaptors =
	| AtomicTokenDefOfSingleCaptor
	| AtomicTokenDefOfDualCaptors
	| AtomicTokenDefOfMultiCaptors;

export type AtomicPrimitiveTokenBasis = [AtomicTokenType.PrimitiveType, AstPrimitiveTypes, AtomicTokenName];
export type AtomicGroovyKeywordTokenBasis = [AtomicTokenType.GroovyKeyword, AstKeywords, AtomicTokenName];
export type AtomicJavaKeywordTokenBasis = [AtomicTokenType.JavaKeyword, AstKeywords, AtomicTokenName];
export type AtomicBooleanLiteralBasis = [AtomicTokenType.BooleanLiteral, AstLiterals, AtomicTokenName];
export type AtomicNumericLiteralBasis =
	| [AtomicTokenType.NumericLiteral, AstLiterals, AtomicTokenName]
	| [AtomicTokenType.NumericLiteral, Array<GroovyAstNodeCaptorConstructor>];
export type AtomicStringLiteralBasic =
	| [AtomicTokenType.StringLiteral, AstLiterals, AtomicTokenName]
	| [AtomicTokenType.StringLiteral, GroovyAstNodeCaptorConstructor];
export type AtomicGroovyOperatorTokenBasis = [AtomicTokenType.GroovyOperator, AstOperators, AtomicTokenName];
export type AtomicJavaOperatorTokenBasis = [AtomicTokenType.JavaOperator, AstOperators, AtomicTokenName];
export type AtomicSeparatorTokenBasis = [AtomicTokenType.Separator, AstChars, AtomicTokenName];
export type AtomicCommentsMarkTokenBasis = [AtomicTokenType.CommentsMark, AstMarks, AtomicTokenName];
export type AtomicScriptCommentMarkTokenBasis = [AtomicTokenType.ScriptCommentMark, AstMarks, AtomicTokenName];
export type AtomicSameCharsTokenBasis = [AtomicTokenType.SameChars, Char, AtomicTokenName, TokenType];
export type AtomicNewlineTokenBasis = [AtomicTokenType.Newline, AtomicTokenDefOfDualCaptors];
export type AtomicCustomTokenBasis = [AtomicTokenType.Custom, AtomicTokenCaptors];
export type AtomicTokenBasisType =
	| AtomicPrimitiveTokenBasis
	| AtomicGroovyKeywordTokenBasis | AtomicJavaKeywordTokenBasis
	| AtomicBooleanLiteralBasis | AtomicNumericLiteralBasis | AtomicStringLiteralBasic
	| AtomicGroovyOperatorTokenBasis | AtomicJavaOperatorTokenBasis
	| AtomicSeparatorTokenBasis
	| AtomicCommentsMarkTokenBasis
	| AtomicScriptCommentMarkTokenBasis
	| AtomicSameCharsTokenBasis
	| AtomicNewlineTokenBasis
	| AtomicCustomTokenBasis;
