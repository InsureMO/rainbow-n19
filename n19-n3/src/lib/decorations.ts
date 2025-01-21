import {syntaxTree} from '@codemirror/language';
import {Range} from '@codemirror/state';
import {Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate} from '@codemirror/view';
import {SyntaxNodeRef} from '@lezer/common';
import {Token} from './tokens';

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

export type SyntaxNodeMark = (node: SyntaxNodeRef) => Decoration;
/* eslint-disable @typescript-eslint/no-unused-vars */
export const DefaultSyntaxNodeMarkers: { [key in Token]: SyntaxNodeMark } = {
	StringLiteral: (_node) => Decoration.mark({class: 'ltl ltl-string-literal'}),
	GStringBegin: (_node) => Decoration.mark({class: 'gstring-begin'}),
	GStringEnd: (_node) => Decoration.mark({class: 'gstring-end'}),
	GStringPart: (_node) => Decoration.mark({class: 'gstring-part'}),
	GStringPathPart: (_node) => Decoration.mark({class: 'gstring-path-part'}),
	RollBackOne: (_node) => Decoration.mark({class: 'rollback-one'}),
	AS: (_node) => Decoration.mark({class: 'rkw rkw-as'}),
	DEF: (_node) => Decoration.mark({class: 'rkw rkw-def'}),
	IN: (_node) => Decoration.mark({class: 'rkw rkw-in'}),
	TRAIT: (_node) => Decoration.mark({class: 'rkw rkw-trait'}),
	THREADSAFE: (_node) => Decoration.mark({class: 'rkw rkw-threadsafe'}),
	VAR: (_node) => Decoration.mark({class: 'rkw rkw-var'}),
	BuiltInPrimitiveType: (_node) => Decoration.mark({class: 'rkw rkw-builtin-primitive-type'}),
	ABSTRACT: (_node) => Decoration.mark({class: 'rkw rkw-abstract'}),
	ASSERT: (_node) => Decoration.mark({class: 'rkw rkw-assert'}),
	BREAK: (_node) => Decoration.mark({class: 'rkw rkw-break'}),
	YIELD: (_node) => Decoration.mark({class: 'rkw rkw-yield'}),
	CASE: (_node) => Decoration.mark({class: 'rkw rkw-case'}),
	CATCH: (_node) => Decoration.mark({class: 'rkw rkw-catch'}),
	CLASS: (_node) => Decoration.mark({class: 'rkw rkw-type rkw-class'}),
	CONST: (_node) => Decoration.mark({class: 'rkw rkw-const'}),
	CONTINUE: (_node) => Decoration.mark({class: 'rkw rkw-continue'}),
	DEFAULT: (_node) => Decoration.mark({class: 'rkw rkw-default'}),
	DO: (_node) => Decoration.mark({class: 'rkw rkw-do'}),
	ELSE: (_node) => Decoration.mark({class: 'rkw rkw-else'}),
	ENUM: (_node) => Decoration.mark({class: 'rkw rkw-type rkw-enum'}),
	EXTENDS: (_node) => Decoration.mark({class: 'rkw rkw-extends'}),
	FINAL: (_node) => Decoration.mark({class: 'rkw rkw-final'}),
	FINALLY: (_node) => Decoration.mark({class: 'rkw rkw-finally'}),
	FOR: (_node) => Decoration.mark({class: 'rkw rkw-for'}),
	IF: (_node) => Decoration.mark({class: 'rkw rkw-if'}),
	GOTO: (_node) => Decoration.mark({class: 'rkw rkw-goto'}),
	IMPLEMENTS: (_node) => Decoration.mark({class: 'rkw rkw-implements'}),
	IMPORT: (_node) => Decoration.mark({class: 'rkw rkw-import'}),
	INSTANCEOF: (_node) => Decoration.mark({class: 'rkw rkw-instanceof'}),
	INTERFACE: (_node) => Decoration.mark({class: 'rkw rkw-type rkw-interface'}),
	NATIVE: (_node) => Decoration.mark({class: 'rkw rkw-native'}),
	NEW: (_node) => Decoration.mark({class: 'rkw rkw-new'}),
	NON_SEALED: (_node) => Decoration.mark({class: 'rkw rkw-non-sealed'}),
	PACKAGE: (_node) => Decoration.mark({class: 'rkw rkw-package'}),
	PERMITS: (_node) => Decoration.mark({class: 'rkw rkw-permits'}),
	PRIVATE: (_node) => Decoration.mark({class: 'rkw rkw-modifier rkw-private'}),
	PROTECTED: (_node) => Decoration.mark({class: 'rkw rkw-modifier rkw-protected'}),
	PUBLIC: (_node) => Decoration.mark({class: 'rkw rkw-modifier rkw-public'}),
	RECORD: (_node) => Decoration.mark({class: 'rkw rkw-type rkw-record'}),
	RETURN: (_node) => Decoration.mark({class: 'rkw rkw-return'}),
	SEALED: (_node) => Decoration.mark({class: 'rkw rkw-type rkw-sealed'}),
	STATIC: (_node) => Decoration.mark({class: 'rkw rkw-static'}),
	STRICTFP: (_node) => Decoration.mark({class: 'rkw rkw-strictfp'}),
	SUPER: (_node) => Decoration.mark({class: 'rkw rkw-super'}),
	SWITCH: (_node) => Decoration.mark({class: 'rkw rkw-switch'}),
	SYNCHRONIZED: (_node) => Decoration.mark({class: 'rkw rkw-synchronized'}),
	THIS: (_node) => Decoration.mark({class: 'rkw rkw-this'}),
	THROW: (_node) => Decoration.mark({class: 'rkw rkw-throw'}),
	THROWS: (_node) => Decoration.mark({class: 'rkw rkw-throws'}),
	TRANSIENT: (_node) => Decoration.mark({class: 'rkw rkw-transient'}),
	TRY: (_node) => Decoration.mark({class: 'rkw rkw-try'}),
	VOID: (_node) => Decoration.mark({class: 'rkw rkw-void'}),
	VOLATILE: (_node) => Decoration.mark({class: 'rkw rkw-volatile'}),
	WHILE: (_node) => Decoration.mark({class: 'rkw rkw-while'}),
	IntegerLiteral: (_node) => Decoration.mark({class: 'ltl ltl-integer-literal'}),
	FloatingPointLiteral: (_node) => Decoration.mark({class: 'ltl ltl-floating-literal'}),
	BooleanLiteral: (_node) => Decoration.mark({class: 'ltl ltl-boolean-literal'}),
	NullLiteral: (_node) => Decoration.mark({class: 'ltl ltl-null-literal'}),
	RANGE_INCLUSIVE: (_node) => Decoration.mark({class: 'sig sig-range_inclusive'}),
	RANGE_EXCLUSIVE_LEFT: (_node) => Decoration.mark({class: 'sig sig-range_exclusive_left'}),
	RANGE_EXCLUSIVE_RIGHT: (_node) => Decoration.mark({class: 'sig sig-range_exclusive_right'}),
	RANGE_EXCLUSIVE_FULL: (_node) => Decoration.mark({class: 'sig sig-range_exclusive_full'}),
	SPREAD_DOT: (_node) => Decoration.mark({class: 'sig sig-spread_dot'}),
	SAFE_DOT: (_node) => Decoration.mark({class: 'sig sig-safe_dot'}),
	SAFE_INDEX: (_node) => Decoration.mark({class: 'sig sig-safe_index'}),
	SAFE_CHAIN_DOT: (_node) => Decoration.mark({class: 'sig sig-safe_chain_dot'}),
	ELVIS: (_node) => Decoration.mark({class: 'sig sig-elvis'}),
	METHOD_POINTER: (_node) => Decoration.mark({class: 'sig sig--method_pointer'}),
	METHOD_REFERENCE: (_node) => Decoration.mark({class: 'sig sig--method_reference'}),
	REGEX_FIND: (_node) => Decoration.mark({class: 'sig sig--regex_find'}),
	REGEX_MATCH: (_node) => Decoration.mark({class: 'sig sig--regex_match'}),
	POWER: (_node) => Decoration.mark({class: 'mat mat-power'}),
	POWER_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-power-assign'}),
	SPACESHIP: (_node) => Decoration.mark({class: 'lgc lgc-spaceship'}),
	IDENTICAL: (_node) => Decoration.mark({class: 'lgc lgc-identical'}),
	NOT_IDENTICAL: (_node) => Decoration.mark({class: 'lgc lgc-not-identical'}),
	ARROW: (_node) => Decoration.mark({class: 'sig sig-arrow'}),
	NOT_INSTANCEOF: (_node) => Decoration.mark({class: 'lgc lgc--not-instanceof'}),
	NOT_IN: (_node) => Decoration.mark({class: 'lgc lgc-not-in'}),
	LPAREN: (_node) => Decoration.mark({class: 'blk blk-paren blk-lparen'}),
	RPAREN: (_node) => Decoration.mark({class: 'blk blk-paren blk-rparen'}),
	LBRACE: (_node) => Decoration.mark({class: 'blk blk-brace blk-lbrace'}),
	RBRACE: (_node) => Decoration.mark({class: 'blk blk-brace blk-rbrace'}),
	LBRACK: (_node) => Decoration.mark({class: 'blk blk-brack blk-lbrack'}),
	RBRACK: (_node) => Decoration.mark({class: 'blk blk-brack blk--rbrack'}),
	SEMI: (_node) => Decoration.mark({class: 'sig sig-semi'}),
	COMMA: (_node) => Decoration.mark({class: 'sig sig-comma'}),
	DOT: (_node) => Decoration.mark({class: 'sig sig-dot'}),
	ASSIGN: (_node) => Decoration.mark({class: 'asg asg-assign'}),
	GT: (_node) => Decoration.mark({class: 'lgc lgc-gt'}),
	LT: (_node) => Decoration.mark({class: 'lgc lgc-lt'}),
	NOT: (_node) => Decoration.mark({class: 'mat mat-not'}),
	BITNOT: (_node) => Decoration.mark({class: 'mat mat-bitnot'}),
	QUESTION: (_node) => Decoration.mark({class: 'lgc lgc-question'}),
	COLON: (_node) => Decoration.mark({class: 'sig sig-colon'}),
	EQUAL: (_node) => Decoration.mark({class: 'lgc lgc-equal'}),
	LE: (_node) => Decoration.mark({class: 'lgc lgc-le'}),
	GE: (_node) => Decoration.mark({class: 'lgc lgc-ge'}),
	NOTEQUAL: (_node) => Decoration.mark({class: 'lgc lgc-notequal'}),
	AND: (_node) => Decoration.mark({class: 'lgc lgc-and'}),
	OR: (_node) => Decoration.mark({class: 'lgc lgc-or'}),
	INC: (_node) => Decoration.mark({class: 'mat mat-inc'}),
	DEC: (_node) => Decoration.mark({class: 'mat mat-dec'}),
	ADD: (_node) => Decoration.mark({class: 'mat mat-add'}),
	SUB: (_node) => Decoration.mark({class: 'mat mat-sub'}),
	MUL: (_node) => Decoration.mark({class: 'mat mat-mul'}),
	DIV: (_node) => Decoration.mark({class: 'mat mat-div'}),
	BITAND: (_node) => Decoration.mark({class: 'mat mat-bitand'}),
	BITOR: (_node) => Decoration.mark({class: 'mat mat-bitor'}),
	XOR: (_node) => Decoration.mark({class: 'mat mat-xor'}),
	MOD: (_node) => Decoration.mark({class: 'mat mat-mod'}),
	ADD_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-add_assign'}),
	SUB_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-sub_assign'}),
	MUL_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-mul_assign'}),
	DIV_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-div_assign'}),
	AND_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-and_assign'}),
	OR_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-or_assign'}),
	XOR_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-xor_assign'}),
	MOD_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-mod_assign'}),
	LSHIFT_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-lshift_assign'}),
	RSHIFT_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-rshift_assign'}),
	URSHIFT_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-urshift_assign'}),
	ELVIS_ASSIGN: (_node) => Decoration.mark({class: 'asg asg-elvis_assign'}),
	CapitalizedIdentifier: (_node) => Decoration.mark({class: 'idt idt-capitalized-identifier'}),
	Identifier: (_node) => Decoration.mark({class: 'idt idt-identifier'}),
	AT: (_node) => Decoration.mark({class: 'sig sig-at'}),
	ELLIPSIS: (_node) => Decoration.mark({class: 'sig sig-ellipsis'}),
	WS: (_node) => Decoration.mark({class: 'whitespace'}),
	NL: (_node) => Decoration.mark({class: 'sig-nl'}),
	SH_COMMENT: (_node) => Decoration.mark({class: 'sh-comment'}),
	UNEXPECTED_CHAR: (_node) => Decoration.mark({class: 'unexpected-char'})
};
/* eslint-enable @typescript-eslint/no-unused-vars */

export const decorateGroovy = (view: EditorView) => {
	const rangedDecorations: Array<Range<Decoration>> = [];
	for (const {from, to} of view.visibleRanges) {
		syntaxTree(view.state).iterate({
			from, to,
			enter: (node) => {
				const name = node.name;
				const mark: SyntaxNodeMark = DefaultSyntaxNodeMarkers[name];
				if (mark != null) {
					rangedDecorations.push(mark(node).range(node.from, node.to));
				}
			}
		});
	}
	return Decoration.set(rangedDecorations);
};

export const GroovyDecorationPlugin = ViewPlugin.fromClass(class {
	public decorations: DecorationSet;

	constructor(view: EditorView) {
		this.decorations = decorateGroovy(view);
	}

	public update(update: ViewUpdate) {
		if (update.docChanged || update.viewportChanged || syntaxTree(update.startState) != syntaxTree(update.state)) {
			this.decorations = decorateGroovy(update.view);
		}
	}
}, {decorations: v => v.decorations});
