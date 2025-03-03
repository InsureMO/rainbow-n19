import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.StringConcatFactory', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `Methods to facilitate the creation of String concatenation methods, that
 can be used to efficiently concatenate a known number of arguments of known
 types, possibly after type adaptation and partial evaluation of arguments.
 These methods are typically used as `],
			[/* text */ 't', `bootstrap methods`],
			[/* text */ 't', ` for `],
			[/* inline code block */ 'i', `invokedynamic`],
			[/* text */ 't', ` call sites, to support the `],
			[/* text */ 't', `string concatenation`],
			[/* text */ 't', `
 feature of the Java Programming Language.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Indirect access to the behavior specified by the provided `],
			[/* inline code block */ 'i', `MethodHandle`],
			[/* text */ 't', ` proceeds in order through two phases:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Linkage`],
				[/* text */ 't', ` occurs when the methods in this class are invoked.
 They take as arguments a method type describing the concatenated arguments
 count and types, and optionally the String `],
				[/* text */ 't', `recipe`],
				[/* text */ 't', `, plus the
 constants that participate in the String concatenation. The details on
 accepted recipe shapes are described further below. Linkage may involve
 dynamically loading a new class that implements the expected concatenation
 behavior. The `],
				[/* inline code block */ 'i', `CallSite`],
				[/* text */ 't', ` holds the `],
				[/* inline code block */ 'i', `MethodHandle`],
				[/* text */ 't', ` pointing to the
 exact concatenation method. The concatenation methods may be shared among
 different `],
				[/* inline code block */ 'i', `CallSite`],
				[/* text */ 't', `s, e.g. if linkage methods produce them as pure
 functions.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Invocation`],
				[/* text */ 't', ` occurs when a generated concatenation method is
 invoked with the exact dynamic arguments. This may occur many times for a
 single concatenation method. The method referenced by the behavior `],
				[/* inline code block */ 'i', `MethodHandle`],
				[/* text */ 't', ` is invoked with the static arguments and any additional dynamic
 arguments provided on invocation, as if by `],
				[/* reference */ 'r', `.MethodHandle#invoke(java.lang.Object...)`],
				[/* text */ 't', `.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` This class provides two forms of linkage methods: a simple version
 (`],
			[/* reference */ 'r', `#makeConcat(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.invoke.MethodType)`, `makeConcat(java.lang.invoke.MethodHandles.Lookup, String, MethodType)`],
			[/* text */ 't', `) using only the dynamic arguments, and an advanced version
 (`],
			[/* reference */ 'r', `#makeConcatWithConstants(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.invoke.MethodType,java.lang.String,java.lang.Object...)`, `makeConcatWithConstants(java.lang.invoke.MethodHandles.Lookup, String, MethodType, String, Object...)`],
			[/* text */ 't', ` using the advanced forms of capturing
 the constant arguments. The advanced strategy can produce marginally better
 invocation bytecode, at the expense of exploding the number of shapes of
 string concatenation methods present at runtime, because those shapes would
 include constant static arguments as well.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'makeConcatWithConstants(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.invoke.MethodType,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Facilitates the creation of optimized String concatenation methods, that
 can be used to efficiently concatenate a known number of arguments of
 known types, possibly after type adaptation and partial evaluation of
 arguments. Typically used as a `],
				[/* text */ 't', `bootstrap method`],
				[/* text */ 't', ` for `],
				[/* inline code block */ 'i', `invokedynamic`],
				[/* text */ 't', ` call sites, to support the `],
				[/* text */ 't', `string concatenation`],
				[/* text */ 't', `
 feature of the Java Programming Language.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When the target of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', ` returned from this method is
 invoked, it returns the result of String concatenation, taking all
 function arguments and constants passed to the linkage method as inputs for
 concatenation. The target signature is given by `],
					[/* inline code block */ 'i', `concatType`],
					[/* text */ 't', `, and
 does not include constants.
 For a target accepting:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', `zero inputs, concatenation results in an empty string;`],
					[/* block */ 'b', `one input, concatenation results in the single
     input converted as per JLS 5.1.11 "String Conversion"; otherwise`],
					[/* block */ 'b', `two or more inputs, the inputs are concatenated as per
     requirements stated in JLS 15.18.1 "String Concatenation Operator +".
     The inputs are converted as per JLS 5.1.11 "String Conversion",
     and combined from left to right.`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `recipe`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `\\1 (Unicode point 0001)`],
						[/* text */ 't', `: an ordinary argument. This
   input is passed through dynamic argument, and is provided during the
   concatenation method invocation. This input can be null.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `\\2 (Unicode point 0002):`],
						[/* text */ 't', ` a constant. This input passed
   through static bootstrap argument. This constant can be any value
   representable in constant pool. If necessary, the factory would call
   `],
						[/* inline code block */ 'i', `toString`],
						[/* text */ 't', ` to perform a one-time String conversion.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Any other char value:`],
						[/* text */ 't', ` a single character constant.`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Assume the linkage arguments are as follows:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `concatType`],
						[/* text */ 't', `, describing the `],
						[/* inline code block */ 'i', `CallSite`],
						[/* text */ 't', ` signature`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `recipe`],
						[/* text */ 't', `, describing the String recipe`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `constants`],
						[/* text */ 't', `, the vararg array of constants`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Then the following linkage invariants must hold:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The number of parameter slots in `],
						[/* inline code block */ 'i', `concatType`],
						[/* text */ 't', ` is less than
       or equal to 200`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The parameter count in `],
						[/* inline code block */ 'i', `concatType`],
						[/* text */ 't', ` is equal to number of \\1 tags
   in `],
						[/* inline code block */ 'i', `recipe`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The return type in `],
						[/* inline code block */ 'i', `concatType`],
						[/* text */ 't', ` is assignable
   from `],
						[/* reference */ 'r', `java.lang.String`],
						[/* text */ 't', `, and matches the return type of the
   returned `],
						[/* reference */ 'r', `java.lang.invoke.MethodHandle`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The number of elements in `],
						[/* inline code block */ 'i', `constants`],
						[/* text */ 't', ` is equal to number of \\2
   tags in `],
						[/* inline code block */ 'i', `recipe`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `Represents a lookup context with the accessibility
                  privileges of the caller. Specifically, the lookup
                  context must have
                  `],
					[/* reference */ 'r', `.MethodHandles.Lookup#hasFullPrivilegeAccess()`],
					[/* text */ 't', `.
                  When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is stacked
                  automatically by the VM.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the method to implement. This name is
                  arbitrary, and has no meaning for this linkage method.
                  When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is provided
                  by the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', `
                  structure and is stacked automatically by the VM.`]
				]],
				[/* parameter */ 'concatType', [/* parameter description */
					[/* text */ 't', `The expected signature of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', `.  The
                  parameter types represent the types of dynamic concatenation
                  arguments; the return type is always assignable from `],
					[/* reference */ 'r', `java.lang.String`],
					[/* text */ 't', `.  When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is provided by the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', ` structure and
                  is stacked automatically by the VM.`]
				]],
				[/* parameter */ 'recipe', [/* parameter description */
					[/* text */ 't', `Concatenation recipe, described above.`]
				]],
				[/* parameter */ 'constants', [/* parameter description */
					[/* text */ 't', `A vararg parameter representing the constants passed to
                  the linkage method.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.StringConcatException', [/* throw description */
					[/* text */ 't', `If any of the linkage invariants described
                               here are violated, or the lookup context
                               does not have private access privileges.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If any of the incoming arguments is null, or
                              any constant in `],
					[/* inline code block */ 'i', `recipe`],
					[/* text */ 't', ` is null.
                              This will never happen when a bootstrap method
                              is called with invokedynamic.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a CallSite whose target can be used to perform String
 concatenation, with dynamic concatenation arguments described by the given
 `],
				[/* inline code block */ 'i', `concatType`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'makeConcat(java.lang.invoke.MethodHandles.Lookup,java.lang.String,java.lang.invoke.MethodType)', [
			[/* method description */
				[/* text */ 't', `Facilitates the creation of optimized String concatenation methods, that
 can be used to efficiently concatenate a known number of arguments of
 known types, possibly after type adaptation and partial evaluation of
 arguments. Typically used as a `],
				[/* text */ 't', `bootstrap method`],
				[/* text */ 't', ` for `],
				[/* inline code block */ 'i', `invokedynamic`],
				[/* text */ 't', ` call sites, to support the `],
				[/* text */ 't', `string concatenation`],
				[/* text */ 't', `
 feature of the Java Programming Language.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When the target of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', ` returned from this method is
 invoked, it returns the result of String concatenation, taking all
 function arguments passed to the linkage method as inputs for
 concatenation. The target signature is given by `],
					[/* inline code block */ 'i', `concatType`],
					[/* text */ 't', `.
 For a target accepting:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', `zero inputs, concatenation results in an empty string;`],
					[/* block */ 'b', `one input, concatenation results in the single
     input converted as per JLS 5.1.11 "String Conversion"; otherwise`],
					[/* block */ 'b', `two or more inputs, the inputs are concatenated as per
     requirements stated in JLS 15.18.1 "String Concatenation Operator +".
     The inputs are converted as per JLS 5.1.11 "String Conversion",
     and combined from left to right.`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Assume the linkage arguments are as follows:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `concatType`],
						[/* text */ 't', `, describing the `],
						[/* inline code block */ 'i', `CallSite`],
						[/* text */ 't', ` signature`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Then the following linkage invariants must hold:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The number of parameter slots in `],
						[/* inline code block */ 'i', `concatType`],
						[/* text */ 't', ` is
         less than or equal to 200`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The return type in `],
						[/* inline code block */ 'i', `concatType`],
						[/* text */ 't', ` is assignable from `],
						[/* reference */ 'r', `java.lang.String`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `Represents a lookup context with the accessibility
                 privileges of the caller. Specifically, the lookup
                 context must have
                 `],
					[/* reference */ 'r', `.MethodHandles.Lookup#hasFullPrivilegeAccess()`],
					[/* text */ 't', `.
                 When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is stacked
                 automatically by the VM.`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the method to implement. This name is
                 arbitrary, and has no meaning for this linkage method.
                 When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `, this is provided by
                 the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', `
                 structure and is stacked automatically by the VM.`]
				]],
				[/* parameter */ 'concatType', [/* parameter description */
					[/* text */ 't', `The expected signature of the `],
					[/* inline code block */ 'i', `CallSite`],
					[/* text */ 't', `.  The
                   parameter types represent the types of concatenation
                   arguments; the return type is always assignable from `],
					[/* reference */ 'r', `java.lang.String`],
					[/* text */ 't', `.  When used with `],
					[/* inline code block */ 'i', `invokedynamic`],
					[/* text */ 't', `,
                   this is provided by the `],
					[/* inline code block */ 'i', `NameAndType`],
					[/* text */ 't', ` of the `],
					[/* inline code block */ 'i', `InvokeDynamic`],
					[/* text */ 't', ` structure and is stacked automatically by
                   the VM.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.invoke.StringConcatException', [/* throw description */
					[/* text */ 't', `If any of the linkage invariants described
                               here are violated, or the lookup context
                               does not have private access privileges.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If any of the incoming arguments is null.
                              This will never happen when a bootstrap method
                              is called with invokedynamic.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a CallSite whose target can be used to perform String
 concatenation, with dynamic concatenation arguments described by the given
 `],
				[/* inline code block */ 'i', `concatType`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
