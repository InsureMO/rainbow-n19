import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.Modifier', [
	[/* class description */
		[/* text */ 't', `The Modifier class provides `],
		[/* inline code block */ 'i', `static`],
		[/* text */ 't', ` methods and
 constants to decode class and member access modifiers.  The sets of
 modifiers are represented as integers with distinct bit positions
 representing different modifiers.  The values for the constants
 representing the modifiers are taken from the tables in sections
 `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.1`, `4.1`],
		[/* text */ 't', `, `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.4`, `4.4`],
		[/* text */ 't', `, `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.5`, `4.5`],
		[/* text */ 't', `, and `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-4.html#jvms-4.7`, `4.7`],
		[/* text */ 't', ` of
 `],
		[/* text */ 't', `The Java Virtual Machine Specification`],
		[/* text */ 't', `.`]
	],
	[/* fields */
		[/* field */ 'ABSTRACT', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `abstract`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'FINAL', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `final`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'INTERFACE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `interface`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'NATIVE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `native`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'PRIVATE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `private`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'PROTECTED', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `protected`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'PUBLIC', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `public`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'STATIC', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `static`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'STRICT', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `strictfp`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'SYNCHRONIZED', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `synchronized`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'TRANSIENT', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `transient`],
				[/* text */ 't', `
 modifier.`]
			],
		]],
		[/* field */ 'VOLATILE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value representing the `],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', `
 modifier.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'isAbstract(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `abstract`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `abstract`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isFinal(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `final`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `final`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isInterface(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `interface`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `interface`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isNative(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `native`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `native`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isPrivate(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `private`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `private`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isProtected(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `protected`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `protected`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isPublic(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `public`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `public`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isStatic(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `static`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `static`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isStrict(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `strictfp`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `strictfp`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isSynchronized(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `synchronized`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `synchronized`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isTransient(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `transient`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `transient`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isVolatile(int)', [
			[/* method description */
				[/* text */ 't', `Return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the integer argument includes the
 `],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', ` modifier, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `mod`],
				[/* text */ 't', ` includes the
 `],
				[/* inline code block */ 'i', `volatile`],
				[/* text */ 't', ` modifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'classModifiers()', [
			[/* method description */
				[/* text */ 't', `Return an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a class.`]
			]
		]],
		[/* method */ 'constructorModifiers()', [
			[/* method description */
				[/* text */ 't', `Return an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a constructor.`]
			]
		]],
		[/* method */ 'fieldModifiers()', [
			[/* method description */
				[/* text */ 't', `Return an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a field.`]
			]
		]],
		[/* method */ 'interfaceModifiers()', [
			[/* method description */
				[/* text */ 't', `Return an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to an interface.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to an interface.`]
			]
		]],
		[/* method */ 'methodModifiers()', [
			[/* method description */
				[/* text */ 't', `Return an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a method.`]
			]
		]],
		[/* method */ 'parameterModifiers()', [
			[/* method description */
				[/* text */ 't', `Return an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a parameter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value OR-ing together the source language
 modifiers that can be applied to a parameter.`]
			]
		]],
		[/* method */ 'toString(int)', [
			[/* method description */
				[/* text */ 't', `Return a string describing the access modifier flags in
 the specified modifier. For example:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `    public final synchronized strictfp
 `]
				]],
				[/* text */ 't', `
 The modifier names are returned in an order consistent with the
 suggested modifier orderings given in sections 8.1.1, 8.3.1, 8.4.3, 8.8.3, and 9.1.1 of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.
 The full modifier ordering used by this method is:
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `public protected private abstract static final transient volatile synchronized native strictfp interface`]
				]],
				[/* text */ 't', `
 The `],
				[/* inline code block */ 'i', `interface`],
				[/* text */ 't', ` modifier discussed in this class is
 not a true modifier in the Java language and it appears after
 all other modifiers listed by this method.  This method may
 return a string of modifiers that are not valid modifiers of a
 Java entity; in other words, no checking is done on the
 possible validity of the combination of modifiers represented
 by the input.

 Note that to perform such checking for a known kind of entity,
 such as a constructor or method, first AND the argument of
 `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` with the appropriate mask from a method like
 `],
				[/* reference */ 'r', `#constructorModifiers()`, `constructorModifiers()`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `#methodModifiers()`, `methodModifiers()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'mod', [/* parameter description */
					[/* text */ 't', `a set of modifiers`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the set of modifiers
 represented by `],
				[/* inline code block */ 'i', `mod`]
			]
		]]
	],
]);
