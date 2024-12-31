import {GroovyBugError} from '../OrgCodehausGroovy';
import {CSTNode} from './CSTNode';

/**
 * Typing information for the CST system.  The types here are those
 * used by CSTNode, Token, and Reduction.
 */
export class Types {
	//---------------------------------------------------------------------------
	// TYPES: NOTE THAT ORDERING AND VALUES ARE IMPORTANT TO LOCAL ROUTINES!

	//
	// SPECIAL TOKENS

	static readonly EOF: number = -1; // end of file
	static readonly UNKNOWN: number = 0; // the unknown token

	//
	// RELEVANT WHITESPACE

	static readonly NEWLINE: number = 5; // \n

	//
	// OPERATORS AND OTHER MARKERS

	static readonly LEFT_CURLY_BRACE: number = 10; // {
	static readonly RIGHT_CURLY_BRACE: number = 20; // }
	static readonly LEFT_SQUARE_BRACKET: number = 30; // [
	static readonly RIGHT_SQUARE_BRACKET: number = 40; // ]
	static readonly LEFT_PARENTHESIS: number = 50; // (
	static readonly RIGHT_PARENTHESIS: number = 60; // )

	static readonly DOT: number = 70; // .
	static readonly DOT_DOT: number = 75; // ..
	static readonly DOT_DOT_DOT: number = 77; // ...

	static readonly NAVIGATE: number = 80; // ->

	static readonly FIND_REGEX: number = 90; // =~
	static readonly MATCH_REGEX: number = 94; // ==~
	static readonly REGEX_PATTERN: number = 97; // ~

	static readonly EQUAL: number = 100;   // =
	static readonly EQUALS: number = Types.EQUAL;
	static readonly ASSIGN: number = Types.EQUAL;

	static readonly COMPARE_NOT_EQUAL: number = 120; // !=
	static readonly COMPARE_IDENTICAL: number = 121; // ===
	static readonly COMPARE_NOT_IDENTICAL: number = 122; // !==
	static readonly COMPARE_EQUAL: number = 123; // ==
	static readonly COMPARE_LESS_THAN: number = 124; // <
	static readonly COMPARE_LESS_THAN_EQUAL: number = 125; // <=
	static readonly COMPARE_GREATER_THAN: number = 126; // >
	static readonly COMPARE_GREATER_THAN_EQUAL: number = 127; // >=
	static readonly COMPARE_TO: number = 128; // <=>
	static readonly COMPARE_NOT_IN: number = 129; // !in
	static readonly COMPARE_NOT_INSTANCEOF: number = 130; // !instanceof

	static readonly NOT: number = 160; // !
	static readonly LOGICAL_OR: number = 162; // ||
	static readonly LOGICAL_AND: number = 164; // &&

	static readonly LOGICAL_OR_EQUAL: number = 166; // ||=
	static readonly LOGICAL_AND_EQUAL: number = 168; // &&=

	static readonly PLUS: number = 200; // +
	static readonly MINUS: number = 201; // -
	static readonly MULTIPLY: number = 202; // *
	static readonly DIVIDE: number = 203; // /
	static readonly INTDIV: number = 204; // \
	static readonly MOD: number = 205; // %
	static readonly STAR_STAR: number = 206; // **
	static readonly POWER: number = Types.STAR_STAR; // **

	static readonly PLUS_EQUAL: number = 210; // +=
	static readonly MINUS_EQUAL: number = 211; // -=
	static readonly MULTIPLY_EQUAL: number = 212; // *=
	static readonly DIVIDE_EQUAL: number = 213; // /=
	static readonly INTDIV_EQUAL: number = 214; // \=
	static readonly MOD_EQUAL: number = 215; // %=
	static readonly POWER_EQUAL: number = 216; // **=
	static readonly ELVIS_EQUAL: number = 217; // ?=

	static readonly PLUS_PLUS: number = 250; // ++
	static readonly PREFIX_PLUS_PLUS: number = 251; // ++
	static readonly POSTFIX_PLUS_PLUS: number = 252; // ++
	static readonly PREFIX_PLUS: number = 253; // +

	static readonly MINUS_MINUS: number = 260; // --
	static readonly PREFIX_MINUS_MINUS: number = 261; // --
	static readonly POSTFIX_MINUS_MINUS: number = 262; // --
	static readonly PREFIX_MINUS: number = 263; // - (negation)

	static readonly LEFT_SHIFT: number = 280; // <<
	static readonly RIGHT_SHIFT: number = 281; // >>
	static readonly RIGHT_SHIFT_UNSIGNED: number = 282; // >>>

	static readonly LEFT_SHIFT_EQUAL: number = 285; // <<=
	static readonly RIGHT_SHIFT_EQUAL: number = 286; // >>=
	static readonly RIGHT_SHIFT_UNSIGNED_EQUAL: number = 287; // >>>=

	static readonly STAR: number = Types.MULTIPLY;

	static readonly COMMA: number = 300;   // -
	static readonly COLON: number = 310; // :
	static readonly SEMICOLON: number = 320;   // ;
	static readonly QUESTION: number = 330;   // ?

	// TODO COPY FROM GROOVY: refactor PIPE to be BITWISE_OR
	static readonly PIPE: number = 340; // |
	static readonly DOUBLE_PIPE: number = Types.LOGICAL_OR; // ||
	static readonly BITWISE_OR: number = Types.PIPE; // |
	static readonly BITWISE_AND: number = 341; // &
	static readonly BITWISE_XOR: number = 342; // ^

	static readonly BITWISE_OR_EQUAL: number = 350; // |=
	static readonly BITWISE_AND_EQUAL: number = 351; // &=
	static readonly BITWISE_XOR_EQUAL: number = 352; // ^=
	static readonly BITWISE_NEGATION: number = Types.REGEX_PATTERN; // ~

	//
	// LITERALS

	static readonly STRING: number = 400; // any bare string data

	static readonly IDENTIFIER: number = 440; // anything text and not a keyword

	static readonly INTEGER_NUMBER: number = 450; // integer
	static readonly DECIMAL_NUMBER: number = 451; // decimal

	//
	// KEYWORDS: (PRIMARILY) CLASS/METHOD DECLARATION MODIFIERS

	static readonly KEYWORD_PRIVATE: number = 500; // declaration visibility
	static readonly KEYWORD_PROTECTED: number = 501; // declaration visibility
	static readonly KEYWORD_PUBLIC: number = 502; // declaration visibility

	static readonly KEYWORD_ABSTRACT: number = 510; // method body missing
	static readonly KEYWORD_FINAL: number = 511; // declaration cannot be overridden
	static readonly KEYWORD_NATIVE: number = 512; // a native code entry point
	static readonly KEYWORD_TRANSIENT: number = 513; // property should not be persisted
	static readonly KEYWORD_VOLATILE: number = 514; // compiler should never cache property

	static readonly KEYWORD_SYNCHRONIZED: number = 520; // modifier and block type
	static readonly KEYWORD_STATIC: number = 521; // modifier and block type

	//
	// KEYWORDS: TYPE SYSTEM

	static readonly KEYWORD_DEF: number = 530; // identifies a function declaration
	static readonly KEYWORD_DEFMACRO: number = 539; // XXX br identifies a macro declaration
	static readonly KEYWORD_CLASS: number = 531; // identifies a class declaration
	static readonly KEYWORD_INTERFACE: number = 532; // identifies an interface declaration
	static readonly KEYWORD_MIXIN: number = 533; // identifies a mixin declaration

	static readonly KEYWORD_IMPLEMENTS: number = 540; // specifies the interfaces implemented by a class
	static readonly KEYWORD_EXTENDS: number = 541; // specifies the base class/interface for a new one
	static readonly KEYWORD_THIS: number = 542; // method variable points to the current instance
	static readonly KEYWORD_SUPER: number = 543; // method variable points to the base instance
	static readonly KEYWORD_INSTANCEOF: number = 544; // type comparator
	static readonly KEYWORD_PROPERTY: number = 545;   // deprecated; identifies a property
	static readonly KEYWORD_NEW: number = 546; // used to create a new instance of a class

	static readonly KEYWORD_PACKAGE: number = 550; // declares the package scope
	static readonly KEYWORD_IMPORT: number = 551; // declares an external class
	static readonly KEYWORD_AS: number = 552; // used in import statements to create an alias

	//
	// KEYWORDS: CONTROL STRUCTURES

	static readonly KEYWORD_RETURN: number = 560; // returns from a closure or method
	static readonly KEYWORD_IF: number = 561; // if
	static readonly KEYWORD_ELSE: number = 562; // else
	static readonly KEYWORD_DO: number = 570; // do loop
	static readonly KEYWORD_WHILE: number = 571; // while loop
	static readonly KEYWORD_FOR: number = 572; // for loop
	static readonly KEYWORD_IN: number = 573; // for (each) loop separator
	static readonly KEYWORD_BREAK: number = 574; // exits a loop or block
	static readonly KEYWORD_CONTINUE: number = 575; // restarts a loop on the next iteration
	static readonly KEYWORD_SWITCH: number = 576; // switch block
	static readonly KEYWORD_CASE: number = 577; // item in a switch block
	static readonly KEYWORD_DEFAULT: number = 578; // catch-all item in a switch block

	static readonly KEYWORD_TRY: number = 580; // block to monitor for exceptions
	static readonly KEYWORD_CATCH: number = 581; // catch block for a particular exception
	static readonly KEYWORD_FINALLY: number = 582; // block to always execute on exit of the try
	static readonly KEYWORD_THROW: number = 583; // statement to throw an exception
	static readonly KEYWORD_THROWS: number = 584; // method modifier to declare thrown transactions
	static readonly KEYWORD_ASSERT: number = 585; // alternate throw for code invariants

	//
	// KEYWORDS: PRIMITIVE TYPES

	static readonly KEYWORD_VOID: number = 600; // void
	static readonly KEYWORD_BOOLEAN: number = 601; // boolean
	static readonly KEYWORD_BYTE: number = 602; // 1 byte integer
	static readonly KEYWORD_SHORT: number = 603; // 2 byte integer
	static readonly KEYWORD_INT: number = 604; // 4 byte integer
	static readonly KEYWORD_LONG: number = 605; // 8 byte integer
	static readonly KEYWORD_FLOAT: number = 606; // 32 bit floating point number
	static readonly KEYWORD_DOUBLE: number = 607; // 64 bit floating point number
	static readonly KEYWORD_CHAR: number = 608; // unicode character code

	//
	// KEYWORDS: SPECIAL VALUES

	static readonly KEYWORD_TRUE: number = 610; // boolean truth
	static readonly KEYWORD_FALSE: number = 611; // boolean false
	static readonly KEYWORD_NULL: number = 612; // missing instance

	//
	// KEYWORDS: RESERVED

	static readonly KEYWORD_CONST: number = 700; // reserved in java and groovy
	static readonly KEYWORD_GOTO: number = 701; // reserved in java and groovy

	//
	// SPECIAL (CALCULATED) MEANINGS

	static readonly SYNTH_COMPILATION_UNIT: number = 800; // reserved: a synthetic root for a CST

	static readonly SYNTH_CLASS: number = 801; // applied to class names
	static readonly SYNTH_INTERFACE: number = 802; // applied to interface names
	static readonly SYNTH_MIXIN: number = 803; // applied to mixin names
	static readonly SYNTH_METHOD: number = 804; // applied to method names
	static readonly SYNTH_PROPERTY: number = 805; // applied to property names
	static readonly SYNTH_PARAMETER_DECLARATION: number = 806; // applied to method/closure parameter names

	static readonly SYNTH_LIST: number = 810; // applied to "[" that marks a list
	static readonly SYNTH_MAP: number = 811; // applied to "[" that marks a map
	static readonly SYNTH_GSTRING: number = 812; // a complete GString

	static readonly SYNTH_METHOD_CALL: number = 814; // applied to the optional "(" that marks a call to a method
	static readonly SYNTH_CAST: number = 815; // applied to "(" that marks a type cast
	static readonly SYNTH_BLOCK: number = 816; // applied to "{" that marks a block
	static readonly SYNTH_CLOSURE: number = 817; // applied to "{" that marks a closure
	static readonly SYNTH_LABEL: number = 818; // applied to a statement label
	static readonly SYNTH_TERNARY: number = 819; // applied to "?" that marks a ternary expression
	static readonly SYNTH_TUPLE: number = 820; // applied to "{" that marks an array initializer

	static readonly SYNTH_VARIABLE_DECLARATION: number = 830; // applied to an identifier that specifies
	// the type of a variable declaration

	//
	// GSTRING TOKENS

	static readonly GSTRING_START: number = 901; // any marker tha begins a GString
	static readonly GSTRING_END: number = 902; // any matching marker that ends a GString
	static readonly GSTRING_EXPRESSION_START: number = 903; // the ${ marker that starts a GString expression
	static readonly GSTRING_EXPRESSION_END: number = 904; // the } marker that ends a GString expression

	//
	// TYPE CLASSES

	static readonly ANY: number = 1000; // anything
	static readonly NOT_EOF: number = 1001; // anything but EOF
	static readonly GENERAL_END_OF_STATEMENT: number = 1002; // ";", "\n", EOF
	static readonly ANY_END_OF_STATEMENT: number = 1003; // ";", "\n", EOF, "}"

	static readonly ASSIGNMENT_OPERATOR: number = 1100; // =, +=, etc.
	static readonly COMPARISON_OPERATOR: number = 1101; // ==, ===, >, <, etc.
	static readonly MATH_OPERATOR: number = 1102; // +, -, / *, %, plus the LOGICAL_OPERATORS
	static readonly LOGICAL_OPERATOR: number = 1103; // ||, &&, !
	static readonly RANGE_OPERATOR: number = 1104; // .., ...
	static readonly REGEX_COMPARISON_OPERATOR: number = 1105; // =~, etc.
	static readonly DEREFERENCE_OPERATOR: number = 1106; // ., ->
	static readonly BITWISE_OPERATOR: number = 1107; // |, &, <<, >>, >>>, ^, ~
	static readonly INSTANCEOF_OPERATOR: number = 1108; // instanceof, !instanceof

	static readonly PREFIX_OPERATOR: number = 1200; // ++, !, etc.
	static readonly POSTFIX_OPERATOR: number = 1210; // ++, etc.
	static readonly INFIX_OPERATOR: number = 1220; // +, -, =, etc.
	static readonly PREFIX_OR_INFIX_OPERATOR: number = 1230; // +, -
	static readonly PURE_PREFIX_OPERATOR: number = 1235; // prefix +, prefix -

	static readonly KEYWORD: number = 1300; // any keyword
	static readonly SYMBOL: number = 1301; // any symbol
	static readonly LITERAL: number = 1310; // strings, numbers, identifiers
	static readonly NUMBER: number = 1320; // integers and decimals
	static readonly SIGN: number = 1325; // "+", "-"
	static readonly NAMED_VALUE: number = 1330; // true, false, null
	static readonly TRUTH_VALUE: number = 1331; // true, false
	static readonly PRIMITIVE_TYPE: number = 1340; // void, byte, short, int, etc.
	static readonly CREATABLE_PRIMITIVE_TYPE: number = 1341; // any PRIMITIVE_TYPE except void
	static readonly LOOP: number = 1350; // do, while, etc.
	static readonly RESERVED_KEYWORD: number = 1360; // const, goto, etc.
	static readonly KEYWORD_IDENTIFIER: number = 1361; // keywords that can appear as identifiers
	static readonly SYNTHETIC: number = 1370; // any of the SYNTH types

	static readonly TYPE_DECLARATION: number = 1400; // class, interface, mixin
	static readonly DECLARATION_MODIFIER: number = 1410; // public, private, abstract, etc.

	static readonly TYPE_NAME: number = 1420; // identifiers, primitive types
	static readonly CREATABLE_TYPE_NAME: number = 1430; // identifiers, primitive types except void

	static readonly MATCHED_CONTAINER: number = 1500; // (, ), [, ], {, }
	static readonly LEFT_OF_MATCHED_CONTAINER: number = 1501; // (, [, {
	static readonly RIGHT_OF_MATCHED_CONTAINER: number = 1502; // ), ], }

	static readonly EXPRESSION: number = 1900; // all of the below 1900 series

	static readonly OPERATOR_EXPRESSION: number = 1901; // "."-"<<"
	static readonly SYNTH_EXPRESSION: number = 1902; // cast, ternary, and closure expression
	static readonly KEYWORD_EXPRESSION: number = 1903; // new, this, super, instanceof, true, false, null
	static readonly LITERAL_EXPRESSION: number = 1904; // LITERAL
	static readonly ARRAY_EXPRESSION: number = 1905; // "["

	static readonly SIMPLE_EXPRESSION: number = 1910; // LITERAL, this, true, false, null
	static readonly COMPLEX_EXPRESSION: number = 1911; // SIMPLE_EXPRESSION, and various molecules

	//
	// TYPE GROUPS (OPERATIONS SUPPORT)

	static readonly PARAMETER_TERMINATORS: number = 2000; // ")", ","
	static readonly ARRAY_ITEM_TERMINATORS: number = 2001; // "]", ","
	static readonly TYPE_LIST_TERMINATORS: number = 2002; // "implements", "throws", "{", ","
	static readonly OPTIONAL_DATATYPE_FOLLOWERS: number = 2003; // identifier, "[", "."

	static readonly SWITCH_BLOCK_TERMINATORS: number = 2004; // "case", "default", "}"
	static readonly SWITCH_ENTRIES: number = 2005; // "case", "default"

	static readonly METHOD_CALL_STARTERS: number = 2006; // LITERAL, "(", "{"
	static readonly UNSAFE_OVER_NEWLINES: number = 2007; // things the expression parser should cross lines for in it doesn't have to

	static readonly PRECLUDES_CAST_OPERATOR: number = 2008; // anything that prevents (X) from being a cast

	//---------------------------------------------------------------------------
	// TYPE HIERARCHIES

	/**
	 * @since 3.0.0
	 */
	static isAssignment(type: number): boolean {
		return Types.ofType(type, Types.ASSIGNMENT_OPERATOR);
	}

	/**
	 * Given two types, returns true if the second describes the first.
	 */
	static ofType(specific: number, general: number): boolean {

		if (general == specific) {
			return true;
		}

		switch (general) {
			case Types.ANY:
				return true;

			case Types.NOT_EOF:
				return specific >= Types.UNKNOWN && specific <= Types.SYNTH_VARIABLE_DECLARATION;

			case Types.GENERAL_END_OF_STATEMENT:
				switch (specific) {
					case Types.EOF:
					case Types.NEWLINE:
					case Types.SEMICOLON:
						return true;
				}
				break;

			case Types.ANY_END_OF_STATEMENT:
				switch (specific) {
					case Types.EOF:
					case Types.NEWLINE:
					case Types.SEMICOLON:
					case Types.RIGHT_CURLY_BRACE:
						return true;
				}
				break;

			case Types.ASSIGNMENT_OPERATOR:
				return specific == Types.EQUAL
					|| (specific >= Types.PLUS_EQUAL && specific <= Types.ELVIS_EQUAL)
					|| (specific >= Types.LOGICAL_OR_EQUAL && specific <= Types.LOGICAL_AND_EQUAL)
					|| (specific >= Types.LEFT_SHIFT_EQUAL && specific <= Types.RIGHT_SHIFT_UNSIGNED_EQUAL)
					|| (specific >= Types.BITWISE_OR_EQUAL && specific <= Types.BITWISE_XOR_EQUAL);

			case Types.COMPARISON_OPERATOR:
				return specific >= Types.COMPARE_NOT_EQUAL && specific <= Types.COMPARE_TO;

			case Types.INSTANCEOF_OPERATOR:
				return specific == Types.KEYWORD_INSTANCEOF || specific == Types.COMPARE_NOT_INSTANCEOF;

			case Types.MATH_OPERATOR:
				return (specific >= Types.PLUS && specific <= Types.RIGHT_SHIFT_UNSIGNED)
					|| (specific >= Types.NOT && specific <= Types.LOGICAL_AND)
					|| (specific >= Types.BITWISE_OR && specific <= Types.BITWISE_XOR);

			case Types.LOGICAL_OPERATOR:
				return specific >= Types.NOT && specific <= Types.LOGICAL_AND;

			case Types.BITWISE_OPERATOR:
				return (specific >= Types.BITWISE_OR && specific <= Types.BITWISE_XOR) || specific == Types.BITWISE_NEGATION;

			case Types.RANGE_OPERATOR:
				return specific == Types.DOT_DOT || specific == Types.DOT_DOT_DOT;

			case Types.REGEX_COMPARISON_OPERATOR:
				return specific == Types.FIND_REGEX || specific == Types.MATCH_REGEX;

			case Types.DEREFERENCE_OPERATOR:
				return specific == Types.DOT || specific == Types.NAVIGATE;

			case Types.PREFIX_OPERATOR:
				switch (specific) {
					case Types.MINUS:
					case Types.PLUS_PLUS:
					case Types.MINUS_MINUS:
						return true;
				}

			/* FALL THROUGH */

			case Types.PURE_PREFIX_OPERATOR:
				switch (specific) {
					case Types.REGEX_PATTERN:
					case Types.NOT:
					case Types.PREFIX_PLUS:
					case Types.PREFIX_PLUS_PLUS:
					case Types.PREFIX_MINUS:
					case Types.PREFIX_MINUS_MINUS:
					case Types.SYNTH_CAST:
						return true;
				}
				break;

			case Types.POSTFIX_OPERATOR:
				switch (specific) {
					case Types.PLUS_PLUS:
					case Types.POSTFIX_PLUS_PLUS:
					case Types.MINUS_MINUS:
					case Types.POSTFIX_MINUS_MINUS:
						return true;
				}
				break;

			case Types.INFIX_OPERATOR:
				switch (specific) {
					case Types.DOT:
					case Types.NAVIGATE:
					case Types.LOGICAL_OR:
					case Types.LOGICAL_AND:
					case Types.BITWISE_OR:
					case Types.BITWISE_AND:
					case Types.BITWISE_XOR:
					case Types.LEFT_SHIFT:
					case Types.RIGHT_SHIFT:
					case Types.RIGHT_SHIFT_UNSIGNED:
					case Types.FIND_REGEX:
					case Types.MATCH_REGEX:
					case Types.DOT_DOT:
					case Types.DOT_DOT_DOT:
					case Types.KEYWORD_INSTANCEOF:
						return true;
				}

				return (specific >= Types.COMPARE_NOT_EQUAL && specific <= Types.COMPARE_TO)
					|| (specific >= Types.PLUS && specific <= Types.MOD_EQUAL)
					|| specific == Types.EQUAL
					|| (specific >= Types.PLUS_EQUAL && specific <= Types.ELVIS_EQUAL)
					|| (specific >= Types.LOGICAL_OR_EQUAL && specific <= Types.LOGICAL_AND_EQUAL)
					|| (specific >= Types.LEFT_SHIFT_EQUAL && specific <= Types.RIGHT_SHIFT_UNSIGNED_EQUAL)
					|| (specific >= Types.BITWISE_OR_EQUAL && specific <= Types.BITWISE_XOR_EQUAL);

			case Types.PREFIX_OR_INFIX_OPERATOR:
				switch (specific) {
					case Types.POWER:
					case Types.PLUS:
					case Types.MINUS:
					case Types.PREFIX_PLUS:
					case Types.PREFIX_MINUS:
						return true;
				}
				break;

			case Types.KEYWORD:
				return specific >= Types.KEYWORD_PRIVATE && specific <= Types.KEYWORD_GOTO;

			case Types.SYMBOL:
				return specific >= Types.NEWLINE && specific <= Types.PIPE;

			case Types.LITERAL:

			case Types.LITERAL_EXPRESSION:
				return specific >= Types.STRING && specific <= Types.DECIMAL_NUMBER;

			case Types.NUMBER:
				return specific == Types.INTEGER_NUMBER || specific == Types.DECIMAL_NUMBER;

			case Types.SIGN:
				switch (specific) {
					case Types.PLUS:
					case Types.MINUS:
						return true;
				}
				break;

			case Types.NAMED_VALUE:
				return specific >= Types.KEYWORD_TRUE && specific <= Types.KEYWORD_NULL;

			case Types.TRUTH_VALUE:
				return specific == Types.KEYWORD_TRUE || specific == Types.KEYWORD_FALSE;

			case Types.TYPE_NAME:

			case Types.CREATABLE_TYPE_NAME:
				if (specific == Types.IDENTIFIER) {
					return true;
				}

			/* FALL THROUGH */

			case Types.PRIMITIVE_TYPE:
				return specific >= Types.KEYWORD_VOID && specific <= Types.KEYWORD_CHAR;

			/* FALL THROUGH */

			case Types.CREATABLE_PRIMITIVE_TYPE:
				return specific >= Types.KEYWORD_BOOLEAN && specific <= Types.KEYWORD_CHAR;

			case Types.LOOP:
				switch (specific) {
					case Types.KEYWORD_DO:
					case Types.KEYWORD_WHILE:
					case Types.KEYWORD_FOR:
						return true;
				}
				break;

			case Types.RESERVED_KEYWORD:
				return specific >= Types.KEYWORD_CONST && specific <= Types.KEYWORD_GOTO;

			case Types.KEYWORD_IDENTIFIER:
				switch (specific) {
					case Types.KEYWORD_CLASS:
					case Types.KEYWORD_INTERFACE:
					case Types.KEYWORD_MIXIN:
					case Types.KEYWORD_DEF:
					case Types.KEYWORD_DEFMACRO:
					case Types.KEYWORD_IN:
					case Types.KEYWORD_PROPERTY:
						return true;
				}
				break;

			case Types.SYNTHETIC:
				return specific >= Types.SYNTH_COMPILATION_UNIT && specific <= Types.SYNTH_VARIABLE_DECLARATION;

			case Types.TYPE_DECLARATION:
				return specific >= Types.KEYWORD_CLASS && specific <= Types.KEYWORD_MIXIN;

			case Types.DECLARATION_MODIFIER:
				return specific >= Types.KEYWORD_PRIVATE && specific <= Types.KEYWORD_STATIC;

			case Types.MATCHED_CONTAINER:
				switch (specific) {
					case Types.LEFT_CURLY_BRACE:
					case Types.RIGHT_CURLY_BRACE:
					case Types.LEFT_SQUARE_BRACKET:
					case Types.RIGHT_SQUARE_BRACKET:
					case Types.LEFT_PARENTHESIS:
					case Types.RIGHT_PARENTHESIS:
						return true;
				}
				break;

			case Types.LEFT_OF_MATCHED_CONTAINER:
				switch (specific) {
					case Types.LEFT_CURLY_BRACE:
					case Types.LEFT_SQUARE_BRACKET:
					case Types.LEFT_PARENTHESIS:
						return true;
				}
				break;

			case Types.RIGHT_OF_MATCHED_CONTAINER:
				switch (specific) {
					case Types.RIGHT_CURLY_BRACE:
					case Types.RIGHT_SQUARE_BRACKET:
					case Types.RIGHT_PARENTHESIS:
						return true;
				}
				break;

			case Types.PARAMETER_TERMINATORS:
				return specific == Types.RIGHT_PARENTHESIS || specific == Types.COMMA;

			case Types.ARRAY_ITEM_TERMINATORS:
				return specific == Types.RIGHT_SQUARE_BRACKET || specific == Types.COMMA;

			case Types.TYPE_LIST_TERMINATORS:
				switch (specific) {
					case Types.KEYWORD_IMPLEMENTS:
					case Types.KEYWORD_THROWS:
					case Types.LEFT_CURLY_BRACE:
					case Types.COMMA:
						return true;
				}
				break;

			case Types.OPTIONAL_DATATYPE_FOLLOWERS:
				switch (specific) {
					case Types.IDENTIFIER:
					case Types.LEFT_SQUARE_BRACKET:
					case Types.DOT:
						return true;
				}
				break;

			case Types.SWITCH_BLOCK_TERMINATORS:
				if (specific == Types.RIGHT_CURLY_BRACE) {
					return true;
				}

			/* FALL THROUGH */

			case Types.SWITCH_ENTRIES:
				return specific == Types.KEYWORD_CASE || specific == Types.KEYWORD_DEFAULT;

			case Types.METHOD_CALL_STARTERS:
				if (specific >= Types.STRING && specific <= Types.DECIMAL_NUMBER) {
					return true;
				}
				switch (specific) {
					case Types.LEFT_PARENTHESIS:
					case Types.GSTRING_START:
					case Types.SYNTH_GSTRING:
					case Types.KEYWORD_NEW:
						return true;
				}
				break;

			case Types.UNSAFE_OVER_NEWLINES:
				if (Types.ofType(specific, Types.SYMBOL)) {
					switch (specific) {
						case Types.LEFT_CURLY_BRACE:
						case Types.LEFT_PARENTHESIS:
						case Types.LEFT_SQUARE_BRACKET:
						case Types.PLUS:
						case Types.PLUS_PLUS:
						case Types.MINUS:
						case Types.MINUS_MINUS:
						case Types.REGEX_PATTERN:
						case Types.NOT:
							return true;
					}

					return false;
				}

				switch (specific) {
					case Types.KEYWORD_INSTANCEOF:
					case Types.GSTRING_EXPRESSION_START:
					case Types.GSTRING_EXPRESSION_END:
					case Types.GSTRING_END:
						return false;
				}

				return true;

			case Types.PRECLUDES_CAST_OPERATOR:
				switch (specific) {
					case Types.PLUS:
					case Types.MINUS:
					case Types.PREFIX_MINUS:
					case Types.PREFIX_MINUS_MINUS:
					case Types.PREFIX_PLUS:
					case Types.PREFIX_PLUS_PLUS:
					case Types.LEFT_PARENTHESIS:
						return false;
				}

				return !Types.ofType(specific, Types.COMPLEX_EXPRESSION);

			case Types.OPERATOR_EXPRESSION:
				return specific >= Types.DOT && specific <= Types.RIGHT_SHIFT_UNSIGNED;

			case Types.SYNTH_EXPRESSION:
				switch (specific) {
					case Types.SYNTH_CAST:
					case Types.SYNTH_CLOSURE:
					case Types.SYNTH_TERNARY:
						return true;
				}
				break;

			case Types.KEYWORD_EXPRESSION:
				switch (specific) {
					case Types.KEYWORD_NEW:
					case Types.KEYWORD_THIS:
					case Types.KEYWORD_SUPER:
					case Types.KEYWORD_INSTANCEOF:
					case Types.KEYWORD_TRUE:
					case Types.KEYWORD_FALSE:
					case Types.KEYWORD_NULL:
						return true;
				}
				break;

			case Types.ARRAY_EXPRESSION:
				return specific == Types.LEFT_SQUARE_BRACKET;

			case Types.EXPRESSION:
				if (specific >= Types.DOT && specific <= Types.RIGHT_SHIFT_UNSIGNED) {
					return true;
				}

				if (specific >= Types.STRING && specific <= Types.DECIMAL_NUMBER) {
					return true;
				}

				switch (specific) {
					case Types.SYNTH_CAST:
					case Types.SYNTH_CLOSURE:
					case Types.SYNTH_TERNARY:
					case Types.SYNTH_GSTRING:
					case Types.KEYWORD_NEW:
					case Types.KEYWORD_THIS:
					case Types.KEYWORD_SUPER:
					case Types.KEYWORD_INSTANCEOF:
					case Types.KEYWORD_TRUE:
					case Types.KEYWORD_FALSE:
					case Types.KEYWORD_NULL:
					case Types.LEFT_SQUARE_BRACKET:
						return true;
				}
				break;

			case Types.COMPLEX_EXPRESSION:
				switch (specific) {
					case Types.KEYWORD_NEW:
					case Types.SYNTH_METHOD_CALL:
					case Types.SYNTH_GSTRING:
					case Types.SYNTH_LIST:
					case Types.SYNTH_MAP:
					case Types.SYNTH_CLOSURE:
					case Types.SYNTH_TERNARY:
					case Types.SYNTH_VARIABLE_DECLARATION:
						return true;
				}

			/* FALL THROUGH */

			case Types.SIMPLE_EXPRESSION:
				if (specific >= Types.STRING && specific <= Types.DECIMAL_NUMBER) {
					return true;
				}

				switch (specific) {
					case Types.KEYWORD_SUPER:
					case Types.KEYWORD_THIS:
					case Types.KEYWORD_TRUE:
					case Types.KEYWORD_FALSE:
					case Types.KEYWORD_NULL:
						return true;
				}

				break;
		}

		return false;
	}

	//---------------------------------------------------------------------------
	// TYPE COERSIONS

	/**
	 * Given two types, returns true if the first can be viewed as the second.
	 * NOTE that <code>canMean()</code> is orthogonal to <code>ofType()</code>.
	 */
	static canMean(actual: number, preferred: number): boolean {

		if (actual == preferred) {
			return true;
		}

		switch (preferred) {

			case Types.SYNTH_PARAMETER_DECLARATION:
			case Types.IDENTIFIER:
				switch (actual) {
					case Types.IDENTIFIER:
					case Types.KEYWORD_DEF:
					case Types.KEYWORD_DEFMACRO:
					case Types.KEYWORD_CLASS:
					case Types.KEYWORD_INTERFACE:
					case Types.KEYWORD_MIXIN:
						return true;
				}
				break;

			case Types.SYNTH_CLASS:
			case Types.SYNTH_INTERFACE:
			case Types.SYNTH_MIXIN:
			case Types.SYNTH_METHOD:
			case Types.SYNTH_PROPERTY:

			case Types.SYNTH_VARIABLE_DECLARATION:
				return actual == Types.IDENTIFIER;

			case Types.SYNTH_LIST:
			case Types.SYNTH_MAP:
				return actual == Types.LEFT_SQUARE_BRACKET;

			case Types.SYNTH_CAST:
				return actual == Types.LEFT_PARENTHESIS;

			case Types.SYNTH_BLOCK:
			case Types.SYNTH_CLOSURE:
				return actual == Types.LEFT_CURLY_BRACE;

			case Types.SYNTH_LABEL:
				return actual == Types.COLON;
		}

		return false;
	}

	/**
	 * Converts a node from a generic type to a specific prefix type.
	 * Throws a <code>GroovyBugError</code> if the type can't be converted
	 * and requested.
	 */
	static makePrefix(node: CSTNode, throwIfInvalid: boolean): void {

		switch (node.meaning) {
			case Types.PLUS:
				node.setMeaning(Types.PREFIX_PLUS);
				break;

			case Types.MINUS:
				node.setMeaning(Types.PREFIX_MINUS);
				break;

			case Types.PLUS_PLUS:
				node.setMeaning(Types.PREFIX_PLUS_PLUS);
				break;

			case Types.MINUS_MINUS:
				node.setMeaning(Types.PREFIX_MINUS_MINUS);
				break;

			default:
				if (throwIfInvalid) {
					throw new GroovyBugError('cannot convert to prefix for type [' + node.meaning + ']');
				}
		}

	}

	/**
	 * Converts a node from a generic type to a specific postfix type.
	 * Throws a <code>GroovyBugError</code> if the type can't be converted.
	 */
	static makePostfix(node: CSTNode, throwIfInvalid: boolean): void {

		switch (node.meaning) {
			case Types.PLUS_PLUS:
				node.setMeaning(Types.POSTFIX_PLUS_PLUS);
				break;

			case Types.MINUS_MINUS:
				node.setMeaning(Types.POSTFIX_MINUS_MINUS);
				break;

			default:
				if (throwIfInvalid) {
					throw new GroovyBugError('cannot convert to postfix for type [' + node.meaning + ']');
				}
		}

	}

	//---------------------------------------------------------------------------
	// OPERATOR PRECEDENCE

	/**
	 * Returns the precedence of the specified operator.  Non-operator's will
	 * receive -1 or a GroovyBugError, depending on your preference.
	 */
	static getPrecedence(type: number, throwIfInvalid: boolean): number {

		switch (type) {

			case Types.LEFT_PARENTHESIS:
				return 0;

			case Types.EQUAL:
			case Types.PLUS_EQUAL:
			case Types.MINUS_EQUAL:
			case Types.MULTIPLY_EQUAL:
			case Types.DIVIDE_EQUAL:
			case Types.INTDIV_EQUAL:
			case Types.MOD_EQUAL:
			case Types.POWER_EQUAL:
			case Types.ELVIS_EQUAL:
			case Types.LOGICAL_OR_EQUAL:
			case Types.LOGICAL_AND_EQUAL:
			case Types.LEFT_SHIFT_EQUAL:
			case Types.RIGHT_SHIFT_EQUAL:
			case Types.RIGHT_SHIFT_UNSIGNED_EQUAL:
			case Types.BITWISE_OR_EQUAL:
			case Types.BITWISE_AND_EQUAL:
			case Types.BITWISE_XOR_EQUAL:
				return 5;

			case Types.QUESTION:
				return 10;

			case Types.LOGICAL_OR:
				return 15;

			case Types.LOGICAL_AND:
				return 20;

			case Types.BITWISE_OR:
			case Types.BITWISE_AND:
			case Types.BITWISE_XOR:
				return 22;

			case Types.COMPARE_IDENTICAL:
			case Types.COMPARE_NOT_IDENTICAL:
				return 24;

			case Types.COMPARE_NOT_EQUAL:
			case Types.COMPARE_EQUAL:
			case Types.COMPARE_LESS_THAN:
			case Types.COMPARE_LESS_THAN_EQUAL:
			case Types.COMPARE_GREATER_THAN:
			case Types.COMPARE_GREATER_THAN_EQUAL:
			case Types.COMPARE_TO:
			case Types.FIND_REGEX:
			case Types.MATCH_REGEX:
			case Types.KEYWORD_INSTANCEOF:
			case Types.COMPARE_NOT_INSTANCEOF:
				return 25;

			case Types.DOT_DOT:
			case Types.DOT_DOT_DOT:
				return 30;

			case Types.LEFT_SHIFT:
			case Types.RIGHT_SHIFT:
			case Types.RIGHT_SHIFT_UNSIGNED:
				return 35;

			case Types.PLUS:
			case Types.MINUS:
				return 40;

			case Types.MULTIPLY:
			case Types.DIVIDE:
			case Types.INTDIV:
			case Types.MOD:
				return 45;

			case Types.NOT:
			case Types.REGEX_PATTERN:
				return 50;

			case Types.SYNTH_CAST:
				return 55;

			case Types.PLUS_PLUS:
			case Types.MINUS_MINUS:
			case Types.PREFIX_PLUS_PLUS:
			case Types.PREFIX_MINUS_MINUS:
			case Types.POSTFIX_PLUS_PLUS:
			case Types.POSTFIX_MINUS_MINUS:
				return 65;

			case Types.PREFIX_PLUS:
			case Types.PREFIX_MINUS:
				return 70;

			case Types.POWER:
				return 72;

			case Types.SYNTH_METHOD:
			case Types.LEFT_SQUARE_BRACKET:
				return 75;

			case Types.DOT:
			case Types.NAVIGATE:
				return 80;

			case Types.KEYWORD_NEW:
				return 85;
		}

		if (throwIfInvalid) {
			throw new GroovyBugError('precedence requested for non-operator');
		}

		return -1;
	}

	//---------------------------------------------------------------------------
	// TEXTS

	private static readonly TEXTS: Map<number, string> = new Map<number, string>();  // symbol/keyword type -> text
	private static readonly LOOKUP: Map<string, number> = new Map<string, number>();  // text -> symbol/keyword type
	private static readonly KEYWORDS: Set<string> = new Set<string>();  // valid keywords

	static getKeywords(): Set<string> {
		return Types.KEYWORDS;
	}

	static isKeyword(text: string): boolean {
		return Types.KEYWORDS.has(text);
	}

	/**
	 * Returns the type for the specified symbol/keyword text.  Returns UNKNOWN
	 * if the text isn't found.  You can filter finds on a type.
	 */
	static lookup(text: string, filter: number): number {
		let type: number = Types.UNKNOWN;

		if (Types.LOOKUP.has(text)) {
			type = Types.LOOKUP.get(text);
			if (filter != Types.UNKNOWN && !Types.ofType(type, filter)) {
				type = Types.UNKNOWN;
			}
		}

		return type;
	}

	/**
	 * Returns the type for the specified keyword text.  Returns UNKNOWN
	 * if the text isn't found.
	 */
	static lookupKeyword(text: string): number {
		return Types.lookup(text, Types.KEYWORD);
	}

	/**
	 * Returns the type for the specified symbol text.  Returns UNKNOWN
	 * if the text isn't found.
	 */
	static lookupSymbol(text: string): number {
		return Types.lookup(text, Types.SYMBOL);
	}

	/**
	 * Returns the text for the specified type.  Returns "" if the
	 * text isn't found.
	 */
	static getText(type: number): string {
		let text: string = '';

		if (Types.TEXTS.has(type)) {
			text = Types.TEXTS.get(type);
		}

		return text;
	}

	/**
	 * Adds an element to the TEXTS and LOOKUP.
	 */
	private static addTranslation(text: string, type: number): void {
		Types.TEXTS.set(type, text);
		Types.LOOKUP.set(text, type);
	}

	/**
	 * Adds an element to the KEYWORDS, TEXTS and LOOKUP.
	 */
	private static addKeyword(text: string, type: number): void {
		Types.KEYWORDS.add(text);
		Types.addTranslation(text, type);
	}

	static {
		//
		// SYMBOLS

		Types.addTranslation('\n', Types.NEWLINE);

		Types.addTranslation('{', Types.LEFT_CURLY_BRACE);
		Types.addTranslation('}', Types.RIGHT_CURLY_BRACE);
		Types.addTranslation('[', Types.LEFT_SQUARE_BRACKET);
		Types.addTranslation(']', Types.RIGHT_SQUARE_BRACKET);
		Types.addTranslation('(', Types.LEFT_PARENTHESIS);
		Types.addTranslation(')', Types.RIGHT_PARENTHESIS);

		Types.addTranslation('.', Types.DOT);
		Types.addTranslation('..', Types.DOT_DOT);
		Types.addTranslation('...', Types.DOT_DOT_DOT);

		Types.addTranslation('->', Types.NAVIGATE);

		Types.addTranslation('=~', Types.FIND_REGEX);
		Types.addTranslation('==~', Types.MATCH_REGEX);
		Types.addTranslation('~', Types.REGEX_PATTERN);

		Types.addTranslation('=', Types.EQUAL);

		Types.addTranslation('!=', Types.COMPARE_NOT_EQUAL);
		Types.addTranslation('===', Types.COMPARE_IDENTICAL);
		Types.addTranslation('!==', Types.COMPARE_NOT_IDENTICAL);
		Types.addTranslation('==', Types.COMPARE_EQUAL);
		Types.addTranslation('<', Types.COMPARE_LESS_THAN);
		Types.addTranslation('<=', Types.COMPARE_LESS_THAN_EQUAL);
		Types.addTranslation('>', Types.COMPARE_GREATER_THAN);
		Types.addTranslation('>=', Types.COMPARE_GREATER_THAN_EQUAL);
		Types.addTranslation('<=>', Types.COMPARE_TO);
		Types.addTranslation('!in', Types.COMPARE_NOT_IN);
		Types.addTranslation('!instanceof', Types.COMPARE_NOT_INSTANCEOF);

		Types.addTranslation('!', Types.NOT);
		Types.addTranslation('||', Types.LOGICAL_OR);
		Types.addTranslation('&&', Types.LOGICAL_AND);

		Types.addTranslation('||=', Types.LOGICAL_OR_EQUAL);
		Types.addTranslation('&&=', Types.LOGICAL_AND_EQUAL);

		Types.addTranslation('+', Types.PLUS);
		Types.addTranslation('-', Types.MINUS);
		Types.addTranslation('*', Types.MULTIPLY);
		Types.addTranslation('/', Types.DIVIDE);
		Types.addTranslation('\\', Types.INTDIV);
		Types.addTranslation('%', Types.MOD);

		Types.addTranslation('**', Types.POWER);
		Types.addTranslation('+=', Types.PLUS_EQUAL);
		Types.addTranslation('-=', Types.MINUS_EQUAL);
		Types.addTranslation('*=', Types.MULTIPLY_EQUAL);
		Types.addTranslation('/=', Types.DIVIDE_EQUAL);
		Types.addTranslation('\\=', Types.INTDIV_EQUAL);
		Types.addTranslation('%=', Types.MOD_EQUAL);
		Types.addTranslation('**=', Types.POWER_EQUAL);
		Types.addTranslation('?=', Types.ELVIS_EQUAL);

		Types.addTranslation('++', Types.PLUS_PLUS);
		Types.addTranslation('--', Types.MINUS_MINUS);

		Types.addTranslation('<<', Types.LEFT_SHIFT);
		Types.addTranslation('>>', Types.RIGHT_SHIFT);
		Types.addTranslation('>>>', Types.RIGHT_SHIFT_UNSIGNED);

		Types.addTranslation('<<=', Types.LEFT_SHIFT_EQUAL);
		Types.addTranslation('>>=', Types.RIGHT_SHIFT_EQUAL);
		Types.addTranslation('>>>=', Types.RIGHT_SHIFT_UNSIGNED_EQUAL);

		Types.addTranslation('&', Types.BITWISE_AND);
		Types.addTranslation('^', Types.BITWISE_XOR);

		Types.addTranslation('|=', Types.BITWISE_OR_EQUAL);
		Types.addTranslation('&=', Types.BITWISE_AND_EQUAL);
		Types.addTranslation('^=', Types.BITWISE_XOR_EQUAL);

		Types.addTranslation(',', Types.COMMA);
		Types.addTranslation(':', Types.COLON);
		Types.addTranslation(';', Types.SEMICOLON);
		Types.addTranslation('?', Types.QUESTION);
		Types.addTranslation('|', Types.PIPE);

		Types.addTranslation('${}', Types.GSTRING_EXPRESSION_START);

		//
		// Keywords

		Types.addKeyword('abstract', Types.KEYWORD_ABSTRACT);
		Types.addKeyword('as', Types.KEYWORD_AS);
		Types.addKeyword('assert', Types.KEYWORD_ASSERT);
		Types.addKeyword('break', Types.KEYWORD_BREAK);
		Types.addKeyword('case', Types.KEYWORD_CASE);
		Types.addKeyword('catch', Types.KEYWORD_CATCH);
		Types.addKeyword('class', Types.KEYWORD_CLASS);
		Types.addKeyword('const', Types.KEYWORD_CONST);
		Types.addKeyword('continue', Types.KEYWORD_CONTINUE);
		Types.addKeyword('def', Types.KEYWORD_DEF);
		Types.addKeyword('defmacro', Types.KEYWORD_DEF); // xxx br defmacro
		Types.addKeyword('default', Types.KEYWORD_DEFAULT);
		Types.addKeyword('do', Types.KEYWORD_DO);
		Types.addKeyword('else', Types.KEYWORD_ELSE);
		Types.addKeyword('extends', Types.KEYWORD_EXTENDS);
		Types.addKeyword('final', Types.KEYWORD_FINAL);
		Types.addKeyword('finally', Types.KEYWORD_FINALLY);
		Types.addKeyword('for', Types.KEYWORD_FOR);
		Types.addKeyword('goto', Types.KEYWORD_GOTO);
		Types.addKeyword('if', Types.KEYWORD_IF);
		Types.addKeyword('in', Types.KEYWORD_IN);
		Types.addKeyword('implements', Types.KEYWORD_IMPLEMENTS);
		Types.addKeyword('import', Types.KEYWORD_IMPORT);
		Types.addKeyword('instanceof', Types.KEYWORD_INSTANCEOF);
		Types.addKeyword('interface', Types.KEYWORD_INTERFACE);
		Types.addKeyword('mixin', Types.KEYWORD_MIXIN);
		Types.addKeyword('native', Types.KEYWORD_NATIVE);
		Types.addKeyword('new', Types.KEYWORD_NEW);
		Types.addKeyword('package', Types.KEYWORD_PACKAGE);
		Types.addKeyword('private', Types.KEYWORD_PRIVATE);
		Types.addKeyword('property', Types.KEYWORD_PROPERTY);
		Types.addKeyword('protected', Types.KEYWORD_PROTECTED);
		Types.addKeyword('public', Types.KEYWORD_PUBLIC);
		Types.addKeyword('return', Types.KEYWORD_RETURN);
		Types.addKeyword('static', Types.KEYWORD_STATIC);
		Types.addKeyword('super', Types.KEYWORD_SUPER);
		Types.addKeyword('switch', Types.KEYWORD_SWITCH);
		Types.addKeyword('synchronized', Types.KEYWORD_SYNCHRONIZED);
		Types.addKeyword('this', Types.KEYWORD_THIS);
		Types.addKeyword('throw', Types.KEYWORD_THROW);
		Types.addKeyword('throws', Types.KEYWORD_THROWS);
		Types.addKeyword('transient', Types.KEYWORD_TRANSIENT);
		Types.addKeyword('try', Types.KEYWORD_TRY);
		Types.addKeyword('volatile', Types.KEYWORD_VOLATILE);
		Types.addKeyword('while', Types.KEYWORD_WHILE);
		Types.addKeyword('true', Types.KEYWORD_TRUE);
		Types.addKeyword('false', Types.KEYWORD_FALSE);
		Types.addKeyword('null', Types.KEYWORD_NULL);
		Types.addKeyword('void', Types.KEYWORD_VOID);
		Types.addKeyword('boolean', Types.KEYWORD_BOOLEAN);
		Types.addKeyword('byte', Types.KEYWORD_BYTE);
		Types.addKeyword('int', Types.KEYWORD_INT);
		Types.addKeyword('short', Types.KEYWORD_SHORT);
		Types.addKeyword('long', Types.KEYWORD_LONG);
		Types.addKeyword('float', Types.KEYWORD_FLOAT);
		Types.addKeyword('double', Types.KEYWORD_DOUBLE);
		Types.addKeyword('char', Types.KEYWORD_CHAR);
	}

	//---------------------------------------------------------------------------
	// DESCRIPTIONS

	private static readonly DESCRIPTIONS: Map<number, string> = new Map<number, string>();

	/**
	 * Gets the description for the specified type.
	 */
	static getDescription(type: number): string {
		if (Types.DESCRIPTIONS.has(type)) {
			return Types.DESCRIPTIONS.get(type);
		}

		return '<>';
	}

	/**
	 * Adds a description to the set.
	 */
	private static addDescription(type: number, description: string): void {
		if (description.startsWith('<') && description.endsWith('>')) {
			Types.DESCRIPTIONS.set(type, description);
		} else {
			Types.DESCRIPTIONS.set(type, '"' + description + '"');
		}
	}

	static {
		// add description
		for (const [key, value] of Types.LOOKUP.entries()) {
			Types.addDescription(value, key);
		}

		Types.addDescription(Types.NEWLINE, '<newline>');
		Types.addDescription(Types.PREFIX_PLUS_PLUS, '<prefix ++>');
		Types.addDescription(Types.POSTFIX_PLUS_PLUS, '<postfix ++>');
		Types.addDescription(Types.PREFIX_MINUS_MINUS, '<prefix -->');
		Types.addDescription(Types.POSTFIX_MINUS_MINUS, '<postfix -->');
		Types.addDescription(Types.PREFIX_PLUS, '<positive>');
		Types.addDescription(Types.PREFIX_MINUS, '<negative>');

		Types.addDescription(Types.STRING, '<string literal>');
		Types.addDescription(Types.IDENTIFIER, '<identifier>');
		Types.addDescription(Types.INTEGER_NUMBER, '<integer>');
		Types.addDescription(Types.DECIMAL_NUMBER, '<decimal>');

		Types.addDescription(Types.SYNTH_COMPILATION_UNIT, '<compilation unit>');
		Types.addDescription(Types.SYNTH_CLASS, '<class>');
		Types.addDescription(Types.SYNTH_INTERFACE, '<interface>');
		Types.addDescription(Types.SYNTH_MIXIN, '<mixin>');
		Types.addDescription(Types.SYNTH_METHOD, '<method>');
		Types.addDescription(Types.SYNTH_METHOD_CALL, '<method call>');
		Types.addDescription(Types.SYNTH_PROPERTY, '<property>');
		Types.addDescription(Types.SYNTH_PARAMETER_DECLARATION, '<parameter>');
		Types.addDescription(Types.SYNTH_LIST, '<list>');
		Types.addDescription(Types.SYNTH_MAP, '<map>');
		Types.addDescription(Types.SYNTH_TUPLE, '<tuple>');
		Types.addDescription(Types.SYNTH_GSTRING, '<gstring>');
		Types.addDescription(Types.SYNTH_CAST, '<cast>');
		Types.addDescription(Types.SYNTH_BLOCK, '<block>');
		Types.addDescription(Types.SYNTH_CLOSURE, '<closure>');
		Types.addDescription(Types.SYNTH_TERNARY, '<ternary>');
		Types.addDescription(Types.SYNTH_LABEL, '<label>');
		Types.addDescription(Types.SYNTH_VARIABLE_DECLARATION, '<variable declaration>');

		Types.addDescription(Types.GSTRING_START, '<start of gstring tokens>');
		Types.addDescription(Types.GSTRING_END, '<end of gstring tokens>');
		Types.addDescription(Types.GSTRING_EXPRESSION_START, '<start of gstring expression>');
		Types.addDescription(Types.GSTRING_EXPRESSION_END, '<end of gstring expression>');

		Types.addDescription(Types.ASSIGNMENT_OPERATOR, '<assignment operator>');
		Types.addDescription(Types.COMPARISON_OPERATOR, '<comparison operator>');
		// noinspection HtmlUnknownAttribute
		Types.addDescription(Types.MATH_OPERATOR, '<math operator>');
		Types.addDescription(Types.LOGICAL_OPERATOR, '<logical operator>');
		Types.addDescription(Types.BITWISE_OPERATOR, '<bitwise operator>');
		Types.addDescription(Types.RANGE_OPERATOR, '<range operator>');
		Types.addDescription(Types.REGEX_COMPARISON_OPERATOR, '<regex comparison operator>');
		Types.addDescription(Types.DEREFERENCE_OPERATOR, '<dereference operator>');
		Types.addDescription(Types.PREFIX_OPERATOR, '<prefix operator>');
		Types.addDescription(Types.POSTFIX_OPERATOR, '<postfix operator>');
		Types.addDescription(Types.INFIX_OPERATOR, '<infix operator>');
		Types.addDescription(Types.KEYWORD, '<keyword>');
		Types.addDescription(Types.LITERAL, '<literal>');
		Types.addDescription(Types.NUMBER, '<number>');
		Types.addDescription(Types.NAMED_VALUE, '<named value>');
		Types.addDescription(Types.TRUTH_VALUE, '<truth value>');
		Types.addDescription(Types.PRIMITIVE_TYPE, '<primitive type>');
		Types.addDescription(Types.CREATABLE_PRIMITIVE_TYPE, '<creatable primitive type>');
		Types.addDescription(Types.LOOP, '<loop>');
		Types.addDescription(Types.RESERVED_KEYWORD, '<reserved keyword>');
		Types.addDescription(Types.SYNTHETIC, '<synthetic>');
		Types.addDescription(Types.TYPE_DECLARATION, '<type declaration>');
		Types.addDescription(Types.DECLARATION_MODIFIER, '<declaration modifier>');
		Types.addDescription(Types.TYPE_NAME, '<type name>');
		Types.addDescription(Types.CREATABLE_TYPE_NAME, '<creatable type name>');
		Types.addDescription(Types.MATCHED_CONTAINER, '<matched container>');
		Types.addDescription(Types.LEFT_OF_MATCHED_CONTAINER, '<left of matched container>');
		Types.addDescription(Types.RIGHT_OF_MATCHED_CONTAINER, '<right of matched container>');
		Types.addDescription(Types.SWITCH_ENTRIES, '<valid in a switch body>');
	}
}
