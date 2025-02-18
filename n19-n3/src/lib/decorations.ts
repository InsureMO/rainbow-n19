import {syntaxTree} from '@codemirror/language';
import {Range} from '@codemirror/state';
import {Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate} from '@codemirror/view';
import {SyntaxNodeRef} from '@lezer/common';
import {Groovy, Optional, Parsed} from '@rainbow-n19/n2';
import {GroovyFacet, GroovyFacetParsedCache} from './facet';
import {AdditionalToken, SymbolToken} from './tokens';

const ParsedNodeVisitor = Parsed.ParsedNodeVisitor;

// noinspection JSUnusedGlobalSymbols
export enum DecorationMarkTypes {
	RESERVED_KEYWORD = 'rkw',
	BLOCK = 'blk',
	LITERAL = 'ltl',
	SIGN = 'sig',
	MATH = 'mat',
	LOGIC_COMPARE = 'lgc',
	ASSIGN = 'asg',
	IDENTIFIER = 'idt',
}

export type SyntaxNodeMark = (node: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache) => Decoration;
export const DefaultSyntaxNodeDecorations: { [key in SymbolToken | AdditionalToken]: Decoration } = {
	StringLiteral: Decoration.mark({class: 'ltl ltl-string-literal'}),
	GStringBegin: Decoration.mark({class: 'gst gst-gstring-begin'}),
	GStringEnd: Decoration.mark({class: 'gst gst-gstring-end'}),
	GStringPart: Decoration.mark({class: 'gst gst-gstring-part'}),
	GStringPathPart: Decoration.mark({class: 'gst gst-gstring-path-part'}),
	RollBackOne: Decoration.mark({class: 'rollback-one'}),
	AS: Decoration.mark({class: 'rkw rkw-as'}),
	DEF: Decoration.mark({class: 'rkw rkw-def'}),
	IN: Decoration.mark({class: 'rkw rkw-in'}),
	TRAIT: Decoration.mark({class: 'rkw rkw-trait'}),
	THREADSAFE: Decoration.mark({class: 'rkw rkw-threadsafe'}),
	VAR: Decoration.mark({class: 'rkw rkw-var'}),
	BuiltInPrimitiveType: Decoration.mark({class: 'rkw rkw-builtin-primitive-type'}),
	ABSTRACT: Decoration.mark({class: 'rkw rkw-abstract'}),
	ASSERT: Decoration.mark({class: 'rkw rkw-assert'}),
	BREAK: Decoration.mark({class: 'rkw rkw-break'}),
	YIELD: Decoration.mark({class: 'rkw rkw-yield'}),
	CASE: Decoration.mark({class: 'rkw rkw-case'}),
	CATCH: Decoration.mark({class: 'rkw rkw-catch'}),
	CLASS: Decoration.mark({class: 'rkw rkw-type rkw-class'}),
	CONST: Decoration.mark({class: 'rkw rkw-const'}),
	CONTINUE: Decoration.mark({class: 'rkw rkw-continue'}),
	DEFAULT: Decoration.mark({class: 'rkw rkw-default'}),
	DO: Decoration.mark({class: 'rkw rkw-do'}),
	ELSE: Decoration.mark({class: 'rkw rkw-else'}),
	ENUM: Decoration.mark({class: 'rkw rkw-type rkw-enum'}),
	EXTENDS: Decoration.mark({class: 'rkw rkw-extends'}),
	FINAL: Decoration.mark({class: 'rkw rkw-final'}),
	FINALLY: Decoration.mark({class: 'rkw rkw-finally'}),
	FOR: Decoration.mark({class: 'rkw rkw-for'}),
	IF: Decoration.mark({class: 'rkw rkw-if'}),
	GOTO: Decoration.mark({class: 'rkw rkw-goto'}),
	IMPLEMENTS: Decoration.mark({class: 'rkw rkw-implements'}),
	IMPORT: Decoration.mark({class: 'rkw rkw-import'}),
	INSTANCEOF: Decoration.mark({class: 'rkw rkw-instanceof'}),
	INTERFACE: Decoration.mark({class: 'rkw rkw-type rkw-interface'}),
	NATIVE: Decoration.mark({class: 'rkw rkw-native'}),
	NEW: Decoration.mark({class: 'rkw rkw-new'}),
	NON_SEALED: Decoration.mark({class: 'rkw rkw-non-sealed'}),
	PACKAGE: Decoration.mark({class: 'rkw rkw-package'}),
	PERMITS: Decoration.mark({class: 'rkw rkw-permits'}),
	PRIVATE: Decoration.mark({class: 'rkw rkw-modifier rkw-private'}),
	PROTECTED: Decoration.mark({class: 'rkw rkw-modifier rkw-protected'}),
	PUBLIC: Decoration.mark({class: 'rkw rkw-modifier rkw-public'}),
	RECORD: Decoration.mark({class: 'rkw rkw-type rkw-record'}),
	RETURN: Decoration.mark({class: 'rkw rkw-return'}),
	SEALED: Decoration.mark({class: 'rkw rkw-type rkw-sealed'}),
	STATIC: Decoration.mark({class: 'rkw rkw-static'}),
	STRICTFP: Decoration.mark({class: 'rkw rkw-strictfp'}),
	SUPER: Decoration.mark({class: 'rkw rkw-super'}),
	SWITCH: Decoration.mark({class: 'rkw rkw-switch'}),
	SYNCHRONIZED: Decoration.mark({class: 'rkw rkw-synchronized'}),
	THIS: Decoration.mark({class: 'rkw rkw-this'}),
	THROW: Decoration.mark({class: 'rkw rkw-throw'}),
	THROWS: Decoration.mark({class: 'rkw rkw-throws'}),
	TRANSIENT: Decoration.mark({class: 'rkw rkw-transient'}),
	TRY: Decoration.mark({class: 'rkw rkw-try'}),
	VOID: Decoration.mark({class: 'rkw rkw-void'}),
	VOLATILE: Decoration.mark({class: 'rkw rkw-volatile'}),
	WHILE: Decoration.mark({class: 'rkw rkw-while'}),
	IntegerLiteral: Decoration.mark({class: 'ltl ltl-integer-literal'}),
	FloatingPointLiteral: Decoration.mark({class: 'ltl ltl-floating-literal'}),
	BooleanLiteral: Decoration.mark({class: 'ltl ltl-boolean-literal'}),
	NullLiteral: Decoration.mark({class: 'ltl ltl-null-literal'}),
	RANGE_INCLUSIVE: Decoration.mark({class: 'sig sig-range-inclusive'}),
	RANGE_EXCLUSIVE_LEFT: Decoration.mark({class: 'sig sig-range-exclusive-left'}),
	RANGE_EXCLUSIVE_RIGHT: Decoration.mark({class: 'sig sig-range-exclusive-right'}),
	RANGE_EXCLUSIVE_FULL: Decoration.mark({class: 'sig sig-range-exclusive-full'}),
	SPREAD_DOT: Decoration.mark({class: 'sig sig-spread-dot'}),
	SAFE_DOT: Decoration.mark({class: 'sig sig-safe-dot'}),
	SAFE_INDEX: Decoration.mark({class: 'sig sig-safe-index'}),
	SAFE_CHAIN_DOT: Decoration.mark({class: 'sig sig-safe-chain-dot'}),
	ELVIS: Decoration.mark({class: 'sig sig-elvis'}),
	METHOD_POINTER: Decoration.mark({class: 'sig sig-method-pointer'}),
	METHOD_REFERENCE: Decoration.mark({class: 'sig sig-method-reference'}),
	REGEX_FIND: Decoration.mark({class: 'sig sig-regex-find'}),
	REGEX_MATCH: Decoration.mark({class: 'sig sig-regex-match'}),
	POWER: Decoration.mark({class: 'mat mat-power'}),
	POWER_ASSIGN: Decoration.mark({class: 'asg asg-power-assign'}),
	SPACESHIP: Decoration.mark({class: 'lgc lgc-spaceship'}),
	IDENTICAL: Decoration.mark({class: 'lgc lgc-identical'}),
	NOT_IDENTICAL: Decoration.mark({class: 'lgc lgc-not-identical'}),
	ARROW: Decoration.mark({class: 'sig sig-arrow'}),
	NOT_INSTANCEOF: Decoration.mark({class: 'lgc lgc-not-instanceof'}),
	NOT_IN: Decoration.mark({class: 'lgc lgc-not-in'}),
	LPAREN: Decoration.mark({class: 'blk blk-paren blk-lparen'}),
	RPAREN: Decoration.mark({class: 'blk blk-paren blk-rparen'}),
	LBRACE: Decoration.mark({class: 'blk blk-brace blk-lbrace'}),
	RBRACE: Decoration.mark({class: 'blk blk-brace blk-rbrace'}),
	LBRACK: Decoration.mark({class: 'blk blk-brack blk-lbrack'}),
	RBRACK: Decoration.mark({class: 'blk blk-brack blk-rbrack'}),
	SEMI: Decoration.mark({class: 'sig sig-semi'}),
	COMMA: Decoration.mark({class: 'sig sig-comma'}),
	DOT: Decoration.mark({class: 'sig sig-dot'}),
	ASSIGN: Decoration.mark({class: 'asg asg-assign'}),
	GT: Decoration.mark({class: 'lgc lgc-gt'}),
	LT: Decoration.mark({class: 'lgc lgc-lt'}),
	NOT: Decoration.mark({class: 'mat mat-not'}),
	BITNOT: Decoration.mark({class: 'mat mat-bitnot'}),
	QUESTION: Decoration.mark({class: 'lgc lgc-question'}),
	COLON: Decoration.mark({class: 'sig sig-colon'}),
	EQUAL: Decoration.mark({class: 'lgc lgc-equal'}),
	LE: Decoration.mark({class: 'lgc lgc-le'}),
	GE: Decoration.mark({class: 'lgc lgc-ge'}),
	NOTEQUAL: Decoration.mark({class: 'lgc lgc-notequal'}),
	AND: Decoration.mark({class: 'lgc lgc-and'}),
	OR: Decoration.mark({class: 'lgc lgc-or'}),
	INC: Decoration.mark({class: 'mat mat-inc'}),
	DEC: Decoration.mark({class: 'mat mat-dec'}),
	ADD: Decoration.mark({class: 'mat mat-add'}),
	SUB: Decoration.mark({class: 'mat mat-sub'}),
	MUL: Decoration.mark({class: 'mat mat-mul'}),
	DIV: Decoration.mark({class: 'mat mat-div'}),
	BITAND: Decoration.mark({class: 'mat mat-bitand'}),
	BITOR: Decoration.mark({class: 'mat mat-bitor'}),
	XOR: Decoration.mark({class: 'mat mat-xor'}),
	MOD: Decoration.mark({class: 'mat mat-mod'}),
	ADD_ASSIGN: Decoration.mark({class: 'asg asg-add-assign'}),
	SUB_ASSIGN: Decoration.mark({class: 'asg asg-sub-assign'}),
	MUL_ASSIGN: Decoration.mark({class: 'asg asg-mul-assign'}),
	DIV_ASSIGN: Decoration.mark({class: 'asg asg-div-assign'}),
	AND_ASSIGN: Decoration.mark({class: 'asg asg-and-assign'}),
	OR_ASSIGN: Decoration.mark({class: 'asg asg-or-assign'}),
	XOR_ASSIGN: Decoration.mark({class: 'asg asg-xor-assign'}),
	MOD_ASSIGN: Decoration.mark({class: 'asg asg-mod-assign'}),
	LSHIFT_ASSIGN: Decoration.mark({class: 'asg asg-lshift-assign'}),
	RSHIFT_ASSIGN: Decoration.mark({class: 'asg asg-rshift-assign'}),
	URSHIFT_ASSIGN: Decoration.mark({class: 'asg asg-urshift-assign'}),
	ELVIS_ASSIGN: Decoration.mark({class: 'asg asg-elvis-assign'}),
	CapitalizedIdentifier: Decoration.mark({class: 'idt idt-capitalized-identifier'}),
	Identifier: Decoration.mark({class: 'idt idt-identifier'}),
	AT: Decoration.mark({class: 'sig sig-at'}),
	ELLIPSIS: Decoration.mark({class: 'sig sig-ellipsis'}),
	WS: Decoration.mark({class: 'whitespace'}),
	NL: Decoration.mark({class: 'sig sig-nl'}),
	SH_COMMENT: Decoration.mark({class: 'sh-comment'}),
	UNEXPECTED_CHAR: Decoration.mark({class: 'unexpected-char'}),

	// additional decorations
	AT_for_class_declaration: Decoration.mark({class: 'sig sig-at sig-at-for-interface'}),
	AT_for_annotation: Decoration.mark({class: 'sig sig-at sig-at-for-annotation'}),
	CapitalizedIdentifier_for_annotation: Decoration.mark({class: 'idt idt-capitalized-identifier idt-capitalized-identifier-for-annotation'}),
	Identifier_for_annotation: Decoration.mark({class: 'idt idt-identifier idt-identifier-for-annotation'}),
	ARROW_for_closure: Decoration.mark({class: 'sig sig-arrow sig-arrow-for-closure'}),
	LBRACE_for_closure: Decoration.mark({class: 'blk blk-brace blk-lbrace blk-brace-for-closure blk-lbrace-for-closure'}),
	RBRACE_for_closure: Decoration.mark({class: 'blk blk-brace blk-rbrace blk-brace-for-closure blk-rbrace-for-closure'}),
	NL_for_sl_comment: Decoration.mark({class: 'sig sig-nl sig-nl-for-sl-comment'}),
	NL_for_ml_comment: Decoration.mark({class: 'sig sig-nl sig-nl-for-ml-comment'}),
	NL_for_sl_comment_todo: Decoration.mark({class: 'sig sig-nl sig-nl-for-sl-comment sig-nl-for-sl-comment-todo'}),
	NL_for_ml_comment_todo: Decoration.mark({class: 'sig sig-nl sig-nl-for-ml-comment sig-nl-for-ml-comment-todo'})
};
/* eslint-disable @typescript-eslint/no-unused-vars */
export const DefaultSyntaxNodeMarkers: { [key in SymbolToken]: SyntaxNodeMark } = {
	StringLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.StringLiteral,
	GStringBegin: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringBegin,
	GStringEnd: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringEnd,
	GStringPart: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringPart,
	GStringPathPart: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringPathPart,
	RollBackOne: (_n, _pc) => DefaultSyntaxNodeDecorations.RollBackOne,
	AS: (_n, _pc) => DefaultSyntaxNodeDecorations.AS,
	DEF: (_n, _pc) => DefaultSyntaxNodeDecorations.DEF,
	IN: (_n, _pc) => DefaultSyntaxNodeDecorations.IN,
	TRAIT: (_n, _pc) => DefaultSyntaxNodeDecorations.TRAIT,
	THREADSAFE: (_n, _pc) => DefaultSyntaxNodeDecorations.THREADSAFE,
	VAR: (_n, _pc) => DefaultSyntaxNodeDecorations.VAR,
	BuiltInPrimitiveType: (_n, _pc) => DefaultSyntaxNodeDecorations.BuiltInPrimitiveType,
	ABSTRACT: (_n, _pc) => DefaultSyntaxNodeDecorations.ABSTRACT,
	ASSERT: (_n, _pc) => DefaultSyntaxNodeDecorations.ASSERT,
	BREAK: (_n, _pc) => DefaultSyntaxNodeDecorations.BREAK,
	YIELD: (_n, _pc) => DefaultSyntaxNodeDecorations.YIELD,
	CASE: (_n, _pc) => DefaultSyntaxNodeDecorations.CASE,
	CATCH: (_n, _pc) => DefaultSyntaxNodeDecorations.CATCH,
	CLASS: (_n, _pc) => DefaultSyntaxNodeDecorations.CLASS,
	CONST: (_n, _pc) => DefaultSyntaxNodeDecorations.CONST,
	CONTINUE: (_n, _pc) => DefaultSyntaxNodeDecorations.CONTINUE,
	DEFAULT: (_n, _pc) => DefaultSyntaxNodeDecorations.DEFAULT,
	DO: (_n, _pc) => DefaultSyntaxNodeDecorations.DO,
	ELSE: (_n, _pc) => DefaultSyntaxNodeDecorations.ELSE,
	ENUM: (_n, _pc) => DefaultSyntaxNodeDecorations.ENUM,
	EXTENDS: (_n, _pc) => DefaultSyntaxNodeDecorations.EXTENDS,
	FINAL: (_n, _pc) => DefaultSyntaxNodeDecorations.FINAL,
	FINALLY: (_n, _pc) => DefaultSyntaxNodeDecorations.FINALLY,
	FOR: (_n, _pc) => DefaultSyntaxNodeDecorations.FOR,
	IF: (_n, _pc) => DefaultSyntaxNodeDecorations.IF,
	GOTO: (_n, _pc) => DefaultSyntaxNodeDecorations.GOTO,
	IMPLEMENTS: (_n, _pc) => DefaultSyntaxNodeDecorations.IMPLEMENTS,
	IMPORT: (_n, _pc) => DefaultSyntaxNodeDecorations.IMPORT,
	INSTANCEOF: (_n, _pc) => DefaultSyntaxNodeDecorations.INSTANCEOF,
	INTERFACE: (_n, _pc) => DefaultSyntaxNodeDecorations.INTERFACE,
	NATIVE: (_n, _pc) => DefaultSyntaxNodeDecorations.NATIVE,
	NEW: (_n, _pc) => DefaultSyntaxNodeDecorations.NEW,
	NON_SEALED: (_n, _pc) => DefaultSyntaxNodeDecorations.NON_SEALED,
	PACKAGE: (_n, _pc) => DefaultSyntaxNodeDecorations.PACKAGE,
	PERMITS: (_n, _pc) => DefaultSyntaxNodeDecorations.PERMITS,
	PRIVATE: (_n, _pc) => DefaultSyntaxNodeDecorations.PRIVATE,
	PROTECTED: (_n, _pc) => DefaultSyntaxNodeDecorations.PROTECTED,
	PUBLIC: (_n, _pc) => DefaultSyntaxNodeDecorations.PUBLIC,
	RECORD: (_n, _pc) => DefaultSyntaxNodeDecorations.RECORD,
	RETURN: (_n, _pc) => DefaultSyntaxNodeDecorations.RETURN,
	SEALED: (_n, _pc) => DefaultSyntaxNodeDecorations.SEALED,
	STATIC: (_n, _pc) => DefaultSyntaxNodeDecorations.STATIC,
	STRICTFP: (_n, _pc) => DefaultSyntaxNodeDecorations.STRICTFP,
	SUPER: (_n, _pc) => DefaultSyntaxNodeDecorations.SUPER,
	SWITCH: (_n, _pc) => DefaultSyntaxNodeDecorations.SWITCH,
	SYNCHRONIZED: (_n, _pc) => DefaultSyntaxNodeDecorations.SYNCHRONIZED,
	THIS: (_n, _pc) => DefaultSyntaxNodeDecorations.THIS,
	THROW: (_n, _pc) => DefaultSyntaxNodeDecorations.THROW,
	THROWS: (_n, _pc) => DefaultSyntaxNodeDecorations.THROWS,
	TRANSIENT: (_n, _pc) => DefaultSyntaxNodeDecorations.TRANSIENT,
	TRY: (_n, _pc) => DefaultSyntaxNodeDecorations.TRY,
	VOID: (_n, _pc) => DefaultSyntaxNodeDecorations.VOID,
	VOLATILE: (_n, _pc) => DefaultSyntaxNodeDecorations.VOLATILE,
	WHILE: (_n, _pc) => DefaultSyntaxNodeDecorations.WHILE,
	IntegerLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.IntegerLiteral,
	FloatingPointLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.FloatingPointLiteral,
	BooleanLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.BooleanLiteral,
	NullLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.NullLiteral,
	RANGE_INCLUSIVE: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_INCLUSIVE,
	RANGE_EXCLUSIVE_LEFT: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_EXCLUSIVE_LEFT,
	RANGE_EXCLUSIVE_RIGHT: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_EXCLUSIVE_RIGHT,
	RANGE_EXCLUSIVE_FULL: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_EXCLUSIVE_FULL,
	SPREAD_DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.SPREAD_DOT,
	SAFE_DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.SAFE_DOT,
	SAFE_INDEX: (_n, _pc) => DefaultSyntaxNodeDecorations.SAFE_INDEX,
	SAFE_CHAIN_DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.SAFE_CHAIN_DOT,
	ELVIS: (_n, _pc) => DefaultSyntaxNodeDecorations.ELVIS,
	METHOD_POINTER: (_n, _pc) => DefaultSyntaxNodeDecorations.METHOD_POINTER,
	METHOD_REFERENCE: (_n, _pc) => DefaultSyntaxNodeDecorations.METHOD_REFERENCE,
	REGEX_FIND: (_n, _pc) => DefaultSyntaxNodeDecorations.REGEX_FIND,
	REGEX_MATCH: (_n, _pc) => DefaultSyntaxNodeDecorations.REGEX_MATCH,
	POWER: (_n, _pc) => DefaultSyntaxNodeDecorations.POWER,
	POWER_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.POWER_ASSIGN,
	SPACESHIP: (_n, _pc) => DefaultSyntaxNodeDecorations.SPACESHIP,
	IDENTICAL: (_n, _pc) => DefaultSyntaxNodeDecorations.IDENTICAL,
	NOT_IDENTICAL: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT_IDENTICAL,
	ARROW: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_closure) {
			return DefaultSyntaxNodeDecorations.ARROW_for_closure;
		}
		return DefaultSyntaxNodeDecorations.ARROW;
	},
	NOT_INSTANCEOF: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT_INSTANCEOF,
	NOT_IN: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT_IN,
	LPAREN: (_n, _pc) => DefaultSyntaxNodeDecorations.LPAREN,
	RPAREN: (_n, _pc) => DefaultSyntaxNodeDecorations.RPAREN,
	LBRACE: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_closure) {
			return DefaultSyntaxNodeDecorations.LBRACE_for_closure;
		}
		return DefaultSyntaxNodeDecorations.LBRACE;
	},
	RBRACE: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_closure) {
			return DefaultSyntaxNodeDecorations.RBRACE_for_closure;
		}
		return DefaultSyntaxNodeDecorations.RBRACE;
	},
	LBRACK: (_n, _pc) => DefaultSyntaxNodeDecorations.LBRACK,
	RBRACK: (_n, _pc) => DefaultSyntaxNodeDecorations.RBRACK,
	SEMI: (_n, _pc) => DefaultSyntaxNodeDecorations.SEMI,
	COMMA: (_n, _pc) => DefaultSyntaxNodeDecorations.COMMA,
	DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.DOT,
	ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.ASSIGN,
	GT: (_n, _pc) => DefaultSyntaxNodeDecorations.GT,
	LT: (_n, _pc) => DefaultSyntaxNodeDecorations.LT,
	NOT: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT,
	BITNOT: (_n, _pc) => DefaultSyntaxNodeDecorations.BITNOT,
	QUESTION: (_n, _pc) => DefaultSyntaxNodeDecorations.QUESTION,
	COLON: (_n, _pc) => DefaultSyntaxNodeDecorations.COLON,
	EQUAL: (_n, _pc) => DefaultSyntaxNodeDecorations.EQUAL,
	LE: (_n, _pc) => DefaultSyntaxNodeDecorations.LE,
	GE: (_n, _pc) => DefaultSyntaxNodeDecorations.GE,
	NOTEQUAL: (_n, _pc) => DefaultSyntaxNodeDecorations.NOTEQUAL,
	AND: (_n, _pc) => DefaultSyntaxNodeDecorations.AND,
	OR: (_n, _pc) => DefaultSyntaxNodeDecorations.OR,
	INC: (_n, _pc) => DefaultSyntaxNodeDecorations.INC,
	DEC: (_n, _pc) => DefaultSyntaxNodeDecorations.DEC,
	ADD: (_n, _pc) => DefaultSyntaxNodeDecorations.ADD,
	SUB: (_n, _pc) => DefaultSyntaxNodeDecorations.SUB,
	MUL: (_n, _pc) => DefaultSyntaxNodeDecorations.MUL,
	DIV: (_n, _pc) => DefaultSyntaxNodeDecorations.DIV,
	BITAND: (_n, _pc) => DefaultSyntaxNodeDecorations.BITAND,
	BITOR: (_n, _pc) => DefaultSyntaxNodeDecorations.BITOR,
	XOR: (_n, _pc) => DefaultSyntaxNodeDecorations.XOR,
	MOD: (_n, _pc) => DefaultSyntaxNodeDecorations.MOD,
	ADD_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.ADD_ASSIGN,
	SUB_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.SUB_ASSIGN,
	MUL_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.MUL_ASSIGN,
	DIV_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.DIV_ASSIGN,
	AND_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.AND_ASSIGN,
	OR_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.OR_ASSIGN,
	XOR_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.XOR_ASSIGN,
	MOD_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.MOD_ASSIGN,
	LSHIFT_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.LSHIFT_ASSIGN,
	RSHIFT_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.RSHIFT_ASSIGN,
	URSHIFT_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.URSHIFT_ASSIGN,
	ELVIS_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.ELVIS_ASSIGN,
	CapitalizedIdentifier: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node != null) {
			const positioned = parsedCache.findPositionedNode(node);
			if (positioned.parent?.role === Groovy.GroovyParser.RULE_qualifiedClassName
				&& positioned.parent?.parent?.role === Groovy.GroovyParser.RULE_annotation) {
				return DefaultSyntaxNodeDecorations.CapitalizedIdentifier_for_annotation;
			}
		}
		return DefaultSyntaxNodeDecorations.CapitalizedIdentifier;
	},
	Identifier: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node != null) {
			const positioned = parsedCache.findPositionedNode(node);
			if (positioned.parent?.role === Groovy.GroovyParser.RULE_qualifiedClassName
				&& positioned.parent?.parent?.role === Groovy.GroovyParser.RULE_annotation) {
				return DefaultSyntaxNodeDecorations.Identifier_for_annotation;
			}
		}
		return DefaultSyntaxNodeDecorations.Identifier;
	},
	AT: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_classDeclaration) {
			return DefaultSyntaxNodeDecorations.AT_for_class_declaration;
		}
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_annotation) {
			return DefaultSyntaxNodeDecorations.AT_for_annotation;
		}
		return DefaultSyntaxNodeDecorations.AT;
	},
	ELLIPSIS: (_n, _pc) => DefaultSyntaxNodeDecorations.ELLIPSIS,
	WS: (_n, _pc) => DefaultSyntaxNodeDecorations.WS,
	NL: (_n, _pc) => DefaultSyntaxNodeDecorations.NL,
	SH_COMMENT: (_n, _pc) => DefaultSyntaxNodeDecorations.SH_COMMENT,
	UNEXPECTED_CHAR: (_n, _pc) => DefaultSyntaxNodeDecorations.UNEXPECTED_CHAR
};

export interface GroovyDecorationOptions {
	todos: Array<string>;
}

export class GroovyDecoration {
	private readonly _todoKeywords: Array<string>;

	constructor(options?: GroovyDecorationOptions) {
		const todos = options?.todos ?? ['TODO'];
		if (!todos.includes('TODO')) {
			todos.push('TODO');
		}
		this._todoKeywords = todos.map(keyword => keyword.trim() + ' ');
	}

	get todoKeywords(): Array<string> {
		return this._todoKeywords;
	}

	protected findTodoKeywords(text: string): [Optional<string>, number] {
		return this.todoKeywords
			.map(keyword => [keyword, text.indexOf(keyword)] as [string, number])
			.filter(([, index]) => index >= 0)
			.reduce((first, found) => {
				if (first[1] === -1) {
					return found;
				} else if (found[1] < first[1]) {
					return found;
				} else {
					return first;
				}
			}, [(void 0), -1] as [Optional<string>, number]);
	}

	protected decorateNLNode(sn: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache, defaultMark: SyntaxNodeMark): Array<Range<Decoration>> {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		const text = node?.text ?? '';
		const isSl = text.startsWith('//') === true;
		const isMl = text.length > 3 && text.startsWith('/*') && text.endsWith('*/');
		if (isSl) {
			const [, index] = this.findTodoKeywords(text);
			if (index === -1) {
				// no "t odo" identified
				return [DefaultSyntaxNodeDecorations.NL_for_sl_comment.range(sn.from, sn.to)];
			} else {
				return [
					DefaultSyntaxNodeDecorations.NL_for_sl_comment.range(sn.from, sn.from + index),
					DefaultSyntaxNodeDecorations.NL_for_sl_comment_todo.range(sn.from + index, sn.to)
				];
			}
		}
		if (isMl) {
			let from = sn.from;
			return text.split('\n').map(line => {
				const [, index] = this.findTodoKeywords(line);
				const lineFrom = from;
				from = from + line.length + 1;
				if (index === -1) {
					return [DefaultSyntaxNodeDecorations.NL_for_ml_comment.range(lineFrom, lineFrom + line.length)];
				} else if (line.endsWith('*/')) {
					const todoTo = lineFrom + line.length - 2;
					return [
						DefaultSyntaxNodeDecorations.NL_for_ml_comment.range(lineFrom, lineFrom + index),
						DefaultSyntaxNodeDecorations.NL_for_ml_comment_todo.range(lineFrom + index, todoTo),
						DefaultSyntaxNodeDecorations.NL_for_ml_comment.range(todoTo, todoTo + 2)
					];
				} else {
					return [
						DefaultSyntaxNodeDecorations.NL_for_ml_comment.range(lineFrom, lineFrom + index),
						DefaultSyntaxNodeDecorations.NL_for_ml_comment_todo.range(lineFrom + index, lineFrom + line.length)
					];
				}
			}).flat();
		}
		return [defaultMark(sn, parsedCache).range(sn.from, sn.to)];
	}

	protected decorateBraceBrackParen(sn: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache, selections: Array<[number, number]>, defaultMark: SyntaxNodeMark): Array<Range<Decoration>> {
		const selectionFromOffsets = selections.map(selection => selection[0]);
		if (selectionFromOffsets.includes(sn.from)) {
			// I am the one of selection
			return [defaultMark(sn, parsedCache).range(sn.from, sn.to)];
		}

		// check another one of my pair is in selections or not.
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node == null) {
			return [defaultMark(sn, parsedCache).range(sn.from, sn.to)];
		}
		const positioned = parsedCache.findPositionedNode(node);
		if (positioned == null) {
			return [defaultMark(sn, parsedCache).range(sn.from, sn.to)];
		}
		const parent = positioned?.parent;
		const children = parent.children;
		// find another part
		const anotherRole = {
			[Groovy.GroovyParser.LBRACE]: Groovy.GroovyParser.RBRACE,
			[Groovy.GroovyParser.RBRACE]: Groovy.GroovyParser.LBRACE,
			[Groovy.GroovyParser.LBRACK]: Groovy.GroovyParser.RBRACK,
			[Groovy.GroovyParser.RBRACK]: Groovy.GroovyParser.LBRACK,
			[Groovy.GroovyParser.LPAREN]: Groovy.GroovyParser.RPAREN,
			[Groovy.GroovyParser.RPAREN]: Groovy.GroovyParser.LPAREN
		}[node.role];
		const another = children.find(child => child.role === anotherRole);
		if (another == null || !selectionFromOffsets.includes(another.decorated.startOffset)) {
			return [defaultMark(sn, parsedCache).range(sn.from, sn.to)];
		}
		// another part is in selection
		const decoration = defaultMark(sn, parsedCache);
		const {spec: {class: className, ...rest}} = decoration;
		return [Decoration.mark({class: `${className} blk-matched-side`, ...rest}).range(sn.from, sn.to)];
	}

	protected decorateNode(node: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache, selections: Array<[number, number]>): Array<Range<Decoration>> {
		const name = node.name;
		const mark: SyntaxNodeMark = DefaultSyntaxNodeMarkers[name];
		if (mark == null) {
			return [];
		}

		switch (mark) {
			case DefaultSyntaxNodeMarkers.NL:
				return this.decorateNLNode(node, parsedCache, mark);
			case DefaultSyntaxNodeMarkers.LBRACE:
			case DefaultSyntaxNodeMarkers.RBRACE:
			case DefaultSyntaxNodeMarkers.LBRACK:
			case DefaultSyntaxNodeMarkers.RBRACK:
			case DefaultSyntaxNodeMarkers.LPAREN:
			case DefaultSyntaxNodeMarkers.RPAREN:
				return this.decorateBraceBrackParen(node, parsedCache, selections, mark);
			default:
				return [mark(node, parsedCache).range(node.from, node.to)];
		}
	}

	decorate(view: EditorView): DecorationSet {
		const rangedDecorations: Array<Range<Decoration>> = [];
		const selections: Array<[number, number]> = (view.state.selection.ranges ?? []).map(range => {
			if (range.from === range.to) {
				if ('{}[]()'.includes(view.state.doc.slice(range.from - 1, range.from).toString())) {
					return [range.from - 1, range.from] as [number, number];
				}
				if ('{}[]()'.includes(view.state.doc.slice(range.from, range.from + 1).toString())) {
					return [range.from, range.from + 1] as [number, number];
				}
			} else if (range.from === range.to - 1) {
				if ('{}[]()'.includes(view.state.doc.slice(range.from, range.to).toString())) {
					return [range.from, range.to] as [number, number];
				}
			}
			return null;
		}).filter(x => x != null);

		for (const {from, to} of view.visibleRanges) {
			const config = view.state.facet(GroovyFacet);
			syntaxTree(view.state).iterate({
				from, to,
				enter: (node) => {
					const decorations = this.decorateNode(node, config.parsedCache, selections);
					if (decorations != null && decorations.length !== 0) {
						rangedDecorations.push(...decorations);
					}
				}
			});
		}
		try {
			return Decoration.set(rangedDecorations, true);
		} catch (e) {
			console.error(e);
			return Decoration.set([]);
		}
	}
}

export const GroovyDecorationPlugin = (options?: GroovyDecorationOptions) => {
	const decoration = new GroovyDecoration(options);
	const decorate = (view: EditorView): DecorationSet => {
		return decoration.decorate(view);
	};
	return ViewPlugin.fromClass(class {
		decorations: DecorationSet;

		constructor(view: EditorView) {
			this.decorations = decorate(view);
		}

		update(update: ViewUpdate) {
			if (update.docChanged || update.viewportChanged || syntaxTree(update.startState) != syntaxTree(update.state)) {
				this.decorations = decorate(update.view);
			}
		}
	}, {decorations: v => v.decorations});
};
