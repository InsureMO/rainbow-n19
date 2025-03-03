import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Short', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Short`],
		[/* text */ 't', ` class wraps a value of primitive type `],
		[/* inline code block */ 'i', `short`],
		[/* text */ 't', ` in an object.  An object of type `],
		[/* inline code block */ 'i', `Short`],
		[/* text */ 't', ` contains a
 single field whose type is `],
		[/* inline code block */ 'i', `short`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `In addition, this class provides several methods for converting
 a `],
			[/* inline code block */ 'i', `short`],
			[/* text */ 't', ` to a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` and a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` to a
 `],
			[/* inline code block */ 'i', `short`],
			[/* text */ 't', `, as well as other constants and methods useful when
 dealing with a `],
			[/* inline code block */ 'i', `short`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.`]
		]]
	],
	[/* fields */
		[/* field */ 'MIN_VALUE', [
			[/* field description */
				[/* text */ 't', `A constant holding the minimum value a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` can
 have, -2`],
				[/* text */ 't', `15`, 'sup'],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_VALUE', [
			[/* field description */
				[/* text */ 't', `A constant holding the maximum value a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` can
 have, 2`],
				[/* text */ 't', `15`, 'sup'],
				[/* text */ 't', `-1.`]
			],
		]],
		[/* field */ 'TYPE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` instance representing the primitive type
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'SIZE', [
			[/* field description */
				[/* text */ 't', `The number of bits used to represent a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value in two's
 complement binary form.`]
			],
		]],
		[/* field */ 'BYTES', [
			[/* field description */
				[/* text */ 't', `The number of bytes used to represent a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value in two's
 complement binary form.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(short)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object that
 represents the specified `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be represented by the
                  `],
					[/* inline code block */ 'i', `Short`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object that
 represents the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value indicated by the
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` parameter. The string is converted to a
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value in exactly the manner used by the
 `],
				[/* inline code block */ 'i', `parseShort`],
				[/* text */ 't', ` method for radix 10.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to be converted to a
          `],
					[/* inline code block */ 'i', `Short`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `
          does not contain a parsable `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object to the specified object.  The result is
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is not
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object that
 contains the same `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are the same;
                  `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing this
 `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', `'s value.  The value is converted to signed
 decimal representation and returned as a string, exactly as if
 the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value were given as an argument to the
 `],
				[/* reference */ 'r', `#toString(short)`, `toString(short)`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the value of this object in
          base 10.`]
			]
		]],
		[/* method */ 'toString(short)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing the
 specified `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `. The radix is assumed to be 10.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` to be converted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of the specified `],
				[/* inline code block */ 'i', `short`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', `; equal to the result
 of invoking `],
				[/* inline code block */ 'i', `intValue()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this `],
				[/* inline code block */ 'i', `Short`]
			]
		]],
		[/* method */ 'hashCode(short)', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value; compatible with
 `],
				[/* inline code block */ 'i', `Short.hashCode()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to hash`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'reverseBytes(short)', [
			[/* method description */
				[/* text */ 't', `Returns the value obtained by reversing the order of the bytes in the
 two's complement representation of the specified `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose bytes are to be reversed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value obtained by reversing (or, equivalently, swapping)
     the bytes in the specified `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'compareTo(java.lang.Short)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` objects numerically.`]
			],
			[/* parameters */
				[/* parameter */ 'anotherShort', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Short`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` is
          equal to the argument `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', `; a value less than
          `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` is numerically less
          than the argument `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', `; and a value greater than
           `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` is numerically
           greater than the argument `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` (signed
           comparison).`]
			]
		]],
		[/* method */ 'compare(short,short)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` values numerically.
 The value returned is identical to what would be returned by:
 `],
				[/* code block */ 'c', `    Short.valueOf(x).compareTo(Short.valueOf(y))
 `]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` to compare`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x == y`],
				[/* text */ 't', `;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x < y`],
				[/* text */ 't', `; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x > y`]
			]
		]],
		[/* method */ 'byteValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` after
 a narrowing primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'shortValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` as a
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'intValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` after
 a widening primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'longValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` after
 a widening primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'floatValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 after a widening primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'doubleValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
 after a widening primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object holding the
 value given by the specified `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. The argument
 is interpreted as representing a signed decimal
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `, exactly as if the argument were given to
 the `],
				[/* reference */ 'r', `#parseShort(java.lang.String)`, `parseShort(java.lang.String)`],
				[/* text */ 't', ` method. The result is
 a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object that represents the
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value specified by the string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In other words, this method returns a `],
					[/* inline code block */ 'i', `Short`],
					[/* text */ 't', ` object
 equal to the value of:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `new Short(Short.parseShort(s))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string to be parsed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` does
          not contain a parsable `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object holding the value
          represented by the string argument`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object holding the value
 extracted from the specified `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` when parsed
 with the radix given by the second argument. The first argument
 is interpreted as representing a signed `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` in
 the radix specified by the second argument, exactly as if the
 argument were given to the `],
				[/* reference */ 'r', `#parseShort(java.lang.String,int)`, `parseShort(java.lang.String, int)`],
				[/* text */ 't', ` method. The result is a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object that
 represents the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value specified by the string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In other words, this method returns a `],
					[/* inline code block */ 'i', `Short`],
					[/* text */ 't', ` object
 equal to the value of:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `new Short(Short.parseShort(s, radix))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string to be parsed`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to be used in interpreting `],
					[/* inline code block */ 'i', `s`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` does
                  not contain a parsable `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object holding the value
                  represented by the string argument in the
                  specified radix.`]
			]
		]],
		[/* method */ 'valueOf(short)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` instance representing the specified
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value.
 If a new `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` instance is not required, this method
 should generally be used in preference to the constructor
 `],
				[/* reference */ 'r', `#%3Cinit%3E(short)`, `Short(short)`],
				[/* text */ 't', `, as this method is likely to yield
 significantly better space and time performance by caching
 frequently requested values.

 This method will always cache values in the range -128 to 127,
 inclusive, and may cache other values outside of this range.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a short value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` instance representing `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'decode(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Decodes a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', `.
 Accepts decimal, hexadecimal, and octal numbers given by
 the following grammar:

 `],
				[/* block */ 'b', [
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `DecodableString:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `0x`],
							[/* text */ 't', ` `],
							[/* text */ 't', `HexDigits`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `0X`],
							[/* text */ 't', ` `],
							[/* text */ 't', `HexDigits`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `#`],
							[/* text */ 't', ` `],
							[/* text */ 't', `HexDigits`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `0`],
							[/* text */ 't', ` `],
							[/* text */ 't', `OctalDigits`],
							[/* text */ 't', `

 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Sign:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `-`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `+`],
							[/* text */ 't', `
 `]
						]]
					]]
				]],
				[/* text */ 't', `DecimalNumeral`],
				[/* text */ 't', `, `],
				[/* text */ 't', `HexDigits`],
				[/* text */ 't', `, and `],
				[/* text */ 't', `OctalDigits`],
				[/* text */ 't', `
 are as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.10.1`, `3.10.1`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `,
 except that underscores are not accepted between digits.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The sequence of characters following an optional
 sign and/or radix specifier ("`],
					[/* inline code block */ 'i', `0x`],
					[/* text */ 't', `", "`],
					[/* inline code block */ 'i', `0X`],
					[/* text */ 't', `",
 "`],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', `", or leading zero) is parsed as by the `],
					[/* inline code block */ 'i', `Short.parseShort`],
					[/* text */ 't', ` method with the indicated radix (10, 16, or
 8).  This sequence of characters must represent a positive
 value or a `],
					[/* reference */ 'r', `java.lang.NumberFormatException`],
					[/* text */ 't', ` will be thrown.  The
 result is negated if first character of the specified `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` is the minus sign.  No whitespace characters are
 permitted in the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'nm', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to decode.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` does not
            contain a parsable `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Short`],
				[/* text */ 't', ` object holding the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `
            value represented by `],
				[/* inline code block */ 'i', `nm`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` containing the nominal descriptor for this
 instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` describing the `],
				[/* reference */ 'r', `java.lang.Short`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'toUnsignedLong(short)', [
			[/* method description */
				[/* text */ 't', `Converts the argument to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` by an unsigned
 conversion.  In an unsigned conversion to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, the
 high-order 48 bits of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` are zero and the
 low-order 16 bits are equal to the bits of the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` argument.

 Consequently, zero and positive `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` values are mapped
 to a numerically equal `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value and negative `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` values are mapped to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value equal to the
 input plus 2`],
				[/* text */ 't', `16`, 'sup'],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the value to convert to an unsigned `],
					[/* inline code block */ 'i', `long`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the argument converted to `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` by an unsigned
         conversion`]
			]
		]],
		[/* method */ 'toUnsignedInt(short)', [
			[/* method description */
				[/* text */ 't', `Converts the argument to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` by an unsigned
 conversion.  In an unsigned conversion to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, the
 high-order 16 bits of the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` are zero and the
 low-order 16 bits are equal to the bits of the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` argument.

 Consequently, zero and positive `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` values are mapped
 to a numerically equal `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value and negative `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` values are mapped to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value equal to the
 input plus 2`],
				[/* text */ 't', `16`, 'sup'],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the value to convert to an unsigned `],
					[/* inline code block */ 'i', `int`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the argument converted to `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` by an unsigned
         conversion`]
			]
		]],
		[/* method */ 'compareUnsigned(short,short)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` values numerically treating the values
 as unsigned.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` to compare`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x == y`],
				[/* text */ 't', `; a value less
         than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x < y`],
				[/* text */ 't', ` as unsigned values; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x > y`],
				[/* text */ 't', ` as
         unsigned values`]
			]
		]],
		[/* method */ 'parseShort(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Parses the string argument as a signed `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` in the
 radix specified by the second argument. The characters in the
 string must all be digits, of the specified radix (as
 determined by whether `],
				[/* reference */ 'r', `.Character#digit(int,int)`],
				[/* text */ 't', ` returns a nonnegative value) except that the first
 character may be an ASCII minus sign `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', `
 (`],
				[/* inline code block */ 'i', `'\\u002D'`],
				[/* text */ 't', `) to indicate a negative value or an
 ASCII plus sign `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002B'`],
				[/* text */ 't', `) to
 indicate a positive value.  The resulting `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value
 is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `An exception of type `],
					[/* inline code block */ 'i', `NumberFormatException`],
					[/* text */ 't', ` is
 thrown if any of the following situations occurs:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` The first argument is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` or is a string of
 length zero.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The radix is either smaller than `],
						[/* reference */ 'r', `.Character#MIN_RADIX`],
						[/* text */ 't', ` or larger than `],
						[/* reference */ 'r', `.Character#MAX_RADIX`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` Any character of the string is not a digit of the
 specified radix, except that the first character may be a minus
 sign `],
						[/* inline code block */ 'i', `'-'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u002D'`],
						[/* text */ 't', `) or plus sign
 `],
						[/* inline code block */ 'i', `'+'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u002B'`],
						[/* text */ 't', `) provided that the
 string is longer than length 1.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The value represented by the string is not a value of type
 `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing the
                  `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` representation to be parsed`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to be used while parsing `],
					[/* inline code block */ 'i', `s`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `
                  does not contain a parsable `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` represented by the string
                  argument in the specified radix.`]
			]
		]],
		[/* method */ 'parseShort(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses the string argument as a signed decimal `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `. The characters in the string must all be decimal
 digits, except that the first character may be an ASCII minus
 sign `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002D'`],
				[/* text */ 't', `) to indicate a
 negative value or an ASCII plus sign `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', `
 (`],
				[/* inline code block */ 'i', `'\\u002B'`],
				[/* text */ 't', `) to indicate a positive value.  The
 resulting `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value is returned, exactly as if the
 argument and the radix 10 were given as arguments to the `],
				[/* reference */ 'r', `#parseShort(java.lang.String,int)`, `parseShort(java.lang.String, int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing the `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `
          representation to be parsed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `If the string does not
          contain a parsable `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value represented by the
          argument in decimal.`]
			]
		]]
	],
]);
