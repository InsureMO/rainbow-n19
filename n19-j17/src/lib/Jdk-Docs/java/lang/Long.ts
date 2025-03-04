import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Long', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Long`],
		[/* text */ 't', ` class wraps a value of the primitive type `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', ` in an object. An object of type `],
		[/* inline code block */ 'i', `Long`],
		[/* text */ 't', ` contains a
 single field whose type is `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` In addition, this class provides several methods for converting
 a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', ` to a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` and a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` to a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `, as well as other constants and methods useful when dealing
 with a `],
			[/* inline code block */ 'i', `long`],
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
 occur. For example, in a future release, synchronization may fail.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Implementation note: The implementations of the "bit twiddling"
 methods (such as `],
			[/* reference */ 'r', `#highestOneBit(long)`, `highestOneBit`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#numberOfTrailingZeros(long)`, `numberOfTrailingZeros`],
			[/* text */ 't', `) are
 based on material from Henry S. Warren, Jr.'s `],
			[/* text */ 't', `Hacker's
 Delight`],
			[/* text */ 't', `, (Addison Wesley, 2002).`]
		]]
	],
	[/* fields */
		[/* field */ 'BYTES', [
			[/* field description */
				[/* text */ 't', `The number of bytes used to represent a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value in two's
 complement binary form.`]
			],
		]],
		[/* field */ 'MAX_VALUE', [
			[/* field description */
				[/* text */ 't', `A constant holding the maximum value a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` can
 have, 2`],
				[/* text */ 't', `63`, 'sup'],
				[/* text */ 't', `-1.`]
			],
		]],
		[/* field */ 'MIN_VALUE', [
			[/* field description */
				[/* text */ 't', `A constant holding the minimum value a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` can
 have, -2`],
				[/* text */ 't', `63`, 'sup'],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'SIZE', [
			[/* field description */
				[/* text */ 't', `The number of bits used to represent a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value in two's
 complement binary form.`]
			],
		]],
		[/* field */ 'TYPE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` instance representing the primitive type
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object that
 represents the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value indicated by the
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` parameter. The string is converted to a
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value in exactly the manner used by the
 `],
				[/* inline code block */ 'i', `parseLong`],
				[/* text */ 't', ` method for radix 10.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to be converted to a
             `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` does not
             contain a parsable `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(long)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object that
 represents the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be represented by the
          `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object.`]
				]]
			],
			/* throws */ UDF
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
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object that
 contains the same `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with.`]
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
		[/* method */ 'byteValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Long`],
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
		[/* method */ 'doubleValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Long`],
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
		[/* method */ 'floatValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` after
 a widening primitive conversion.`]
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
		[/* method */ 'compareTo(java.lang.Long)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` objects numerically.`]
			],
			[/* parameters */
				[/* parameter */ 'anotherLong', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` is
          equal to the argument `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', `; a value less than
          `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` is numerically less
          than the argument `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', `; and a value greater
          than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` is numerically
           greater than the argument `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` (signed
           comparison).`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', `. The result is
 the exclusive OR of the two halves of the primitive
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value held by this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', `
 object. That is, the hashcode is the value of the expression:

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `(int)(this.longValue()^(this.longValue()>>>32))`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'intValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` after
 a narrowing primitive conversion.`]
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
		[/* method */ 'resolveConstantDesc(java.lang.invoke.MethodHandles.Lookup)', [
			[/* method description */
				[/* text */ 't', `Resolves this instance as a `],
				[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
				[/* text */ 't', `, the result of which is
 the instance itself.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `ignored`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.Long`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing this
 `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', `'s value.  The value is converted to signed
 decimal representation and returned as a string, exactly as if
 the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value were given as an argument to the
 `],
				[/* reference */ 'r', `#toString(long)`, `toString(long)`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the value of this object in
          base 10.`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` containing the nominal descriptor for this
 instance, which is the instance itself.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` describing the `],
				[/* reference */ 'r', `java.lang.Long`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'longValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` as a
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
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
		[/* method */ 'shortValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` after
 a narrowing primitive conversion.`]
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
		[/* method */ 'bitCount(long)', [
			[/* method description */
				[/* text */ 't', `Returns the number of one-bits in the two's complement binary
 representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.  This function is
 sometimes referred to as the `],
				[/* text */ 't', `population count`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose bits are to be counted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of one-bits in the two's complement binary
     representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'compare(long,long)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values numerically.
 The value returned is identical to what would be returned by:
 `],
				[/* code block */ 'c', `    Long.valueOf(x).compareTo(Long.valueOf(y))
 `]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to compare`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `long`],
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
		[/* method */ 'compareUnsigned(long,long)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values numerically treating the values
 as unsigned.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to compare`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `long`],
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
		[/* method */ 'hashCode(long)', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value; compatible with
 `],
				[/* inline code block */ 'i', `Long.hashCode()`],
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
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'numberOfLeadingZeros(long)', [
			[/* method description */
				[/* text */ 't', `Returns the number of zero bits preceding the highest-order
 ("leftmost") one-bit in the two's complement binary representation
 of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.  Returns 64 if the
 specified value has no one-bits in its two's complement representation,
 in other words if it is equal to zero.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method is closely related to the logarithm base 2.
 For all positive `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` values x:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `floor(log`],
						[/* text */ 't', `2`, 'sub'],
						[/* text */ 't', `(x)) = `],
						[/* inline code block */ 'i', `63 - numberOfLeadingZeros(x)`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `ceil(log`],
						[/* text */ 't', `2`, 'sub'],
						[/* text */ 't', `(x)) = `],
						[/* inline code block */ 'i', `64 - numberOfLeadingZeros(x - 1)`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose number of leading zeros is to be computed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of zero bits preceding the highest-order
     ("leftmost") one-bit in the two's complement binary representation
     of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value, or 64 if the value
     is equal to zero.`]
			]
		]],
		[/* method */ 'numberOfTrailingZeros(long)', [
			[/* method description */
				[/* text */ 't', `Returns the number of zero bits following the lowest-order ("rightmost")
 one-bit in the two's complement binary representation of the specified
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.  Returns 64 if the specified value has no
 one-bits in its two's complement representation, in other words if it is
 equal to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose number of trailing zeros is to be computed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of zero bits following the lowest-order ("rightmost")
     one-bit in the two's complement binary representation of the
     specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value, or 64 if the value is equal
     to zero.`]
			]
		]],
		[/* method */ 'signum(long)', [
			[/* method description */
				[/* text */ 't', `Returns the signum function of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.  (The
 return value is -1 if the specified value is negative; 0 if the
 specified value is zero; and 1 if the specified value is positive.)`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose signum is to be computed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signum function of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'decode(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Decodes a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', `.
 Accepts decimal, hexadecimal, and octal numbers given by the
 following grammar:

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
					[/* inline code block */ 'i', `Long.parseLong`],
					[/* text */ 't', ` method with the indicated radix (10, 16, or 8).
 This sequence of characters must represent a positive value or
 a `],
					[/* reference */ 'r', `java.lang.NumberFormatException`],
					[/* text */ 't', ` will be thrown.  The result is
 negated if first character of the specified `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` is
 the minus sign.  No whitespace characters are permitted in the
 `],
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
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object holding the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
            value represented by `],
				[/* inline code block */ 'i', `nm`]
			]
		]],
		[/* method */ 'getLong(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Determines the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value of the system property
 with the specified name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The first argument is treated as the name of a system
 property.  System properties are accessible through the `],
					[/* reference */ 'r', `.System#getProperty(java.lang.String)`],
					[/* text */ 't', ` method. The
 string value of this property is then interpreted as a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value using the grammar supported by `],
					[/* reference */ 'r', `#decode(java.lang.String)`, `decode`],
					[/* text */ 't', `
 and a `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object representing this value is returned.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If there is no property with the specified name, if the
 specified name is empty or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or if the property
 does not have the correct numeric format, then `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is
 returned.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In other words, this method returns a `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object
 equal to the value of:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getLong(nm, null)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'nm', [/* parameter description */
					[/* text */ 't', `property name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `for the same reasons as
          `],
					[/* reference */ 'r', `.System#getProperty(java.lang.String)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` value of the property.`]
			]
		]],
		[/* method */ 'getLong(java.lang.String,java.lang.Long)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value of the system property with
 the specified name.  The first argument is treated as the name
 of a system property.  System properties are accessible through
 the `],
				[/* reference */ 'r', `.System#getProperty(java.lang.String)`],
				[/* text */ 't', `
 method. The string value of this property is then interpreted
 as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value, as per the
 `],
				[/* reference */ 'r', `#decode(java.lang.String)`, `decode`],
				[/* text */ 't', ` method, and a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object
 representing this value is returned; in summary:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the property value begins with the two ASCII characters
 `],
						[/* inline code block */ 'i', `0x`],
						[/* text */ 't', ` or the ASCII character `],
						[/* inline code block */ 'i', `#`],
						[/* text */ 't', `, not followed by
 a minus sign, then the rest of it is parsed as a hexadecimal integer
 exactly as for the method `],
						[/* reference */ 'r', `#valueOf(java.lang.String,int)`, `valueOf(java.lang.String, int)`],
						[/* text */ 't', `
 with radix 16.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the property value begins with the ASCII character
 `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', ` followed by another character, it is parsed as
 an octal integer exactly as by the method `],
						[/* reference */ 'r', `#valueOf(java.lang.String,int)`, `valueOf(java.lang.String, int)`],
						[/* text */ 't', ` with radix 8.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise the property value is parsed as a decimal
 integer exactly as by the method
 `],
						[/* reference */ 'r', `#valueOf(java.lang.String,int)`, `valueOf(java.lang.String, int)`],
						[/* text */ 't', ` with radix 10.
 `]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that, in every case, neither `],
					[/* inline code block */ 'i', `L`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u004C'`],
					[/* text */ 't', `) nor `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u006C'`],
					[/* text */ 't', `) is permitted to appear at the end
 of the property value as a type indicator, as would be
 permitted in Java programming language source code.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The second argument is the default value. The default value is
 returned if there is no property of the specified name, if the
 property does not have the correct numeric format, or if the
 specified name is empty or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'nm', [/* parameter description */
					[/* text */ 't', `property name.`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `default value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `for the same reasons as
          `],
					[/* reference */ 'r', `.System#getProperty(java.lang.String)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` value of the property.`]
			]
		]],
		[/* method */ 'getLong(java.lang.String,long)', [
			[/* method description */
				[/* text */ 't', `Determines the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value of the system property
 with the specified name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The first argument is treated as the name of a system
 property.  System properties are accessible through the `],
					[/* reference */ 'r', `.System#getProperty(java.lang.String)`],
					[/* text */ 't', ` method. The
 string value of this property is then interpreted as a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value using the grammar supported by `],
					[/* reference */ 'r', `#decode(java.lang.String)`, `decode`],
					[/* text */ 't', `
 and a `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object representing this value is returned.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The second argument is the default value. A `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object
 that represents the value of the second argument is returned if there
 is no property of the specified name, if the property does not have
 the correct numeric format, or if the specified name is empty or null.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In other words, this method returns a `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object equal
 to the value of:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `getLong(nm, new Long(val))`]
				]],
				[/* text */ 't', `

 but in practice it may be implemented in a manner such as:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Long result = getLong(nm, null);
 return (result == null) ? new Long(val) : result;
 `]
				]],
				[/* text */ 't', `

 to avoid the unnecessary allocation of a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object when
 the default value is not needed.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'nm', [/* parameter description */
					[/* text */ 't', `property name.`]
				]],
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `default value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `for the same reasons as
          `],
					[/* reference */ 'r', `.System#getProperty(java.lang.String)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` value of the property.`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object holding the value
 of the specified `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. The argument is
 interpreted as representing a signed decimal `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `,
 exactly as if the argument were given to the `],
				[/* reference */ 'r', `#parseLong(java.lang.String)`, `parseLong(java.lang.String)`],
				[/* text */ 't', ` method. The result is a
 `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object that represents the integer value
 specified by the string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In other words, this method returns a `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object
 equal to the value of:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `new Long(Long.parseLong(s))`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string to be parsed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `If the string cannot be parsed
             as a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object holding the value
             represented by the string argument.`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object holding the value
 extracted from the specified `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` when parsed
 with the radix given by the second argument.  The first
 argument is interpreted as representing a signed
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` in the radix specified by the second
 argument, exactly as if the arguments were given to the `],
				[/* reference */ 'r', `#parseLong(java.lang.String,int)`, `parseLong(java.lang.String, int)`],
				[/* text */ 't', ` method. The result is a
 `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object that represents the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 value specified by the string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `In other words, this method returns a `],
					[/* inline code block */ 'i', `Long`],
					[/* text */ 't', ` object equal
 to the value of:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `new Long(Long.parseLong(s, radix))`]
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
					[/* text */ 't', ` does not
             contain a parsable `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` object holding the value
             represented by the string argument in the specified
             radix.`]
			]
		]],
		[/* method */ 'valueOf(long)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` instance representing the specified
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.
 If a new `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` instance is not required, this method
 should generally be used in preference to the constructor
 `],
				[/* reference */ 'r', `#%3Cinit%3E(long)`, `Long(long)`],
				[/* text */ 't', `, as this method is likely to yield
 significantly better space and time performance by caching
 frequently requested values.

 This method will always cache values in the range -128 to 127,
 inclusive, and may cache other values outside of this range.`]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `a long value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Long`],
				[/* text */ 't', ` instance representing `],
				[/* inline code block */ 'i', `l`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toBinaryString(long)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 argument as an unsigned integer in base 2.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The unsigned `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value is the argument plus
 2`],
					[/* text */ 't', `64`, 'sup'],
					[/* text */ 't', ` if the argument is negative; otherwise, it is
 equal to the argument.  This value is converted to a string of
 ASCII digits in binary (base 2) with no extra leading
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `s.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The value of the argument can be recovered from the returned
 string `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` by calling `],
					[/* reference */ 'r', `#parseUnsignedLong(java.lang.String,int)`, `Long.parseUnsignedLong(s, 2)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the unsigned magnitude is zero, it is represented by a
 single zero character `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0030'`],
					[/* text */ 't', `);
 otherwise, the first character of the representation of the
 unsigned magnitude will not be the zero character. The
 characters `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0030'`],
					[/* text */ 't', `) and `],
					[/* inline code block */ 'i', `'1'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0031'`],
					[/* text */ 't', `) are used as binary digits.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be converted to a string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of the unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
          value represented by the argument in binary (base 2).`]
			]
		]],
		[/* method */ 'toHexString(long)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 argument as an unsigned integer in base 16.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The unsigned `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value is the argument plus
 2`],
					[/* text */ 't', `64`, 'sup'],
					[/* text */ 't', ` if the argument is negative; otherwise, it is
 equal to the argument.  This value is converted to a string of
 ASCII digits in hexadecimal (base 16) with no extra
 leading `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `s.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The value of the argument can be recovered from the returned
 string `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` by calling `],
					[/* reference */ 'r', `#parseUnsignedLong(java.lang.String,int)`, `Long.parseUnsignedLong(s, 16)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the unsigned magnitude is zero, it is represented by a
 single zero character `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0030'`],
					[/* text */ 't', `);
 otherwise, the first character of the representation of the
 unsigned magnitude will not be the zero character. The
 following characters are used as hexadecimal digits:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `0123456789abcdef`]
				]],
				[/* text */ 't', `

 These are the characters `],
				[/* inline code block */ 'i', `'\\u0030'`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `'\\u0039'`],
				[/* text */ 't', ` and  `],
				[/* inline code block */ 'i', `'\\u0061'`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `'\\u0066'`],
				[/* text */ 't', `.  If uppercase letters are desired,
 the `],
				[/* reference */ 'r', `.String#toUpperCase()`],
				[/* text */ 't', ` method may be called
 on the result:

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Long.toHexString(n).toUpperCase()`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be converted to a string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of the unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
          value represented by the argument in hexadecimal
          (base 16).`]
			]
		]],
		[/* method */ 'toOctalString(long)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 argument as an unsigned integer in base 8.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The unsigned `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value is the argument plus
 2`],
					[/* text */ 't', `64`, 'sup'],
					[/* text */ 't', ` if the argument is negative; otherwise, it is
 equal to the argument.  This value is converted to a string of
 ASCII digits in octal (base 8) with no extra leading
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `s.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The value of the argument can be recovered from the returned
 string `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` by calling `],
					[/* reference */ 'r', `#parseUnsignedLong(java.lang.String,int)`, `Long.parseUnsignedLong(s, 8)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the unsigned magnitude is zero, it is represented by a
 single zero character `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0030'`],
					[/* text */ 't', `);
 otherwise, the first character of the representation of the
 unsigned magnitude will not be the zero character. The
 following characters are used as octal digits:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `01234567`]
				]],
				[/* text */ 't', `

 These are the characters `],
				[/* inline code block */ 'i', `'\\u0030'`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `'\\u0037'`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be converted to a string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of the unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
          value represented by the argument in octal (base 8).`]
			]
		]],
		[/* method */ 'toString(long)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing the specified
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.  The argument is converted to signed decimal
 representation and returned as a string, exactly as if the
 argument and the radix 10 were given as arguments to the `],
				[/* reference */ 'r', `#toString(long,int)`, `toString(long, int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the argument in base 10.`]
			]
		]],
		[/* method */ 'toString(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the first argument in the
 radix specified by the second argument.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is smaller than `],
					[/* inline code block */ 'i', `Character.MIN_RADIX`],
					[/* text */ 't', `
 or larger than `],
					[/* inline code block */ 'i', `Character.MAX_RADIX`],
					[/* text */ 't', `, then the radix
 `],
					[/* inline code block */ 'i', `10`],
					[/* text */ 't', ` is used instead.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the first argument is negative, the first element of the
 result is the ASCII minus sign `],
					[/* inline code block */ 'i', `'-'`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u002d'`],
					[/* text */ 't', `). If the first argument is not
 negative, no sign character appears in the result.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The remaining characters of the result represent the magnitude
 of the first argument. If the magnitude is zero, it is
 represented by a single zero character `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u0030'`],
					[/* text */ 't', `); otherwise, the first character of
 the representation of the magnitude will not be the zero
 character.  The following ASCII characters are used as digits:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `0123456789abcdefghijklmnopqrstuvwxyz`]
				]],
				[/* text */ 't', `

 These are `],
				[/* inline code block */ 'i', `'\\u0030'`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `'\\u0039'`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `'\\u0061'`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `'\\u007a'`],
				[/* text */ 't', `. If `],
				[/* inline code block */ 'i', `radix`],
				[/* text */ 't', ` is
 `],
				[/* inline code block */ 'i', `N`],
				[/* text */ 't', `, then the first `],
				[/* inline code block */ 'i', `N`],
				[/* text */ 't', ` of these characters
 are used as radix-`],
				[/* inline code block */ 'i', `N`],
				[/* text */ 't', ` digits in the order shown. Thus,
 the digits for hexadecimal (radix 16) are
 `],
				[/* inline code block */ 'i', `0123456789abcdef`],
				[/* text */ 't', `. If uppercase letters are
 desired, the `],
				[/* reference */ 'r', `.String#toUpperCase()`],
				[/* text */ 't', ` method may
 be called on the result:

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Long.toString(n, 16).toUpperCase()`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be converted to a string.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to use in the string representation.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the argument in the specified radix.`]
			]
		]],
		[/* method */ 'toUnsignedString(long)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the argument as an unsigned
 decimal value.

 The argument is converted to unsigned decimal representation
 and returned as a string exactly as if the argument and radix
 10 were given as arguments to the `],
				[/* reference */ 'r', `#toUnsignedString(long,int)`, `toUnsignedString(long, int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `an integer to be converted to an unsigned string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unsigned string representation of the argument.`]
			]
		]],
		[/* method */ 'toUnsignedString(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the first argument as an
 unsigned integer value in the radix specified by the second
 argument.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is smaller than `],
					[/* inline code block */ 'i', `Character.MIN_RADIX`],
					[/* text */ 't', `
 or larger than `],
					[/* inline code block */ 'i', `Character.MAX_RADIX`],
					[/* text */ 't', `, then the radix
 `],
					[/* inline code block */ 'i', `10`],
					[/* text */ 't', ` is used instead.

 `]
				]],
				[/* block */ 'b', `Note that since the first argument is treated as an unsigned
 value, no leading sign character is printed.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the magnitude is zero, it is represented by a single zero
 character `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0030'`],
					[/* text */ 't', `); otherwise,
 the first character of the representation of the magnitude will
 not be the zero character.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The behavior of radixes and the characters used as digits
 are the same as `],
					[/* reference */ 'r', `#toString(long,int)`, `toString`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `an integer to be converted to an unsigned string.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to use in the string representation.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an unsigned string representation of the argument in the specified radix.`]
			]
		]],
		[/* method */ 'divideUnsigned(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the unsigned quotient of dividing the first argument by
 the second where each argument and the result is interpreted as
 an unsigned value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that in two's complement arithmetic, the three other
 basic arithmetic operations of add, subtract, and multiply are
 bit-wise identical if the two operands are regarded as both
 being signed or both being unsigned.  Therefore separate `],
					[/* inline code block */ 'i', `addUnsigned`],
					[/* text */ 't', `, etc. methods are not provided.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dividend', [/* parameter description */
					[/* text */ 't', `the value to be divided`]
				]],
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `the value doing the dividing`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unsigned quotient of the first argument divided by
 the second argument`]
			]
		]],
		[/* method */ 'highestOneBit(long)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value with at most a single one-bit, in the
 position of the highest-order ("leftmost") one-bit in the specified
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.  Returns zero if the specified value has no
 one-bits in its two's complement binary representation, that is, if it
 is equal to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose highest one bit is to be computed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value with a single one-bit, in the position
     of the highest-order one-bit in the specified value, or zero if
     the specified value is itself equal to zero.`]
			]
		]],
		[/* method */ 'lowestOneBit(long)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value with at most a single one-bit, in the
 position of the lowest-order ("rightmost") one-bit in the specified
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.  Returns zero if the specified value has no
 one-bits in its two's complement binary representation, that is, if it
 is equal to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose lowest one bit is to be computed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value with a single one-bit, in the position
     of the lowest-order one-bit in the specified value, or zero if
     the specified value is itself equal to zero.`]
			]
		]],
		[/* method */ 'max(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the greater of two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values
 as if by calling `],
				[/* reference */ 'r', `.Math#max(double,double)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the greater of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'min(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the smaller of two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values
 as if by calling `],
				[/* reference */ 'r', `.Math#min(double,double)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smaller of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'parseLong(java.lang.CharSequence,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Parses the `],
				[/* reference */ 'r', `java.lang.CharSequence`],
				[/* text */ 't', ` argument as a signed `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` in
 the specified `],
				[/* inline code block */ 'i', `radix`],
				[/* text */ 't', `, beginning at the specified
 `],
				[/* inline code block */ 'i', `beginIndex`],
				[/* text */ 't', ` and extending to `],
				[/* inline code block */ 'i', `endIndex - 1`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method does not take steps to guard against the
 `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` being mutated while parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` containing the `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `
                  representation to be parsed`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the beginning index, inclusive.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the ending index, exclusive.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to be used while parsing `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is
             negative, or if `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` or if `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `s.length()`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` does not
             contain a parsable `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` in the specified
             `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', `, or if `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', ` is either smaller than
             `],
					[/* reference */ 'r', `.Character#MIN_RADIX`],
					[/* text */ 't', ` or larger than
             `],
					[/* reference */ 'r', `.Character#MAX_RADIX`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the signed `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` represented by the subsequence in
             the specified radix.`]
			]
		]],
		[/* method */ 'parseLong(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses the string argument as a signed decimal `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 The characters in the string must all be decimal digits, except
 that the first character may be an ASCII minus sign `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', `
 (`],
				[/* inline code block */ 'i', `\\u002D'`],
				[/* text */ 't', `) to indicate a negative value or an
 ASCII plus sign `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002B'`],
				[/* text */ 't', `) to
 indicate a positive value. The resulting `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value is
 returned, exactly as if the argument and the radix `],
				[/* inline code block */ 'i', `10`],
				[/* text */ 't', `
 were given as arguments to the `],
				[/* reference */ 'r', `#parseLong(java.lang.String,int)`, `parseLong(java.lang.String, int)`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that neither the character `],
					[/* inline code block */ 'i', `L`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u004C'`],
					[/* text */ 't', `) nor `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u006C'`],
					[/* text */ 't', `) is permitted to appear at the end
 of the string as a type indicator, as would be permitted in
 Java programming language source code.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing the `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `
             representation to be parsed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the string does not contain a
             parsable `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` represented by the argument in
             decimal.`]
			]
		]],
		[/* method */ 'parseLong(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Parses the string argument as a signed `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` in the
 radix specified by the second argument. The characters in the
 string must all be digits of the specified radix (as determined
 by whether `],
				[/* reference */ 'r', `.Character#digit(int,int)`],
				[/* text */ 't', ` returns
 a nonnegative value), except that the first character may be an
 ASCII minus sign `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002D'`],
				[/* text */ 't', `) to
 indicate a negative value or an ASCII plus sign `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', `
 (`],
				[/* inline code block */ 'i', `'\\u002B'`],
				[/* text */ 't', `) to indicate a positive value. The
 resulting `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that neither the character `],
					[/* inline code block */ 'i', `L`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u004C'`],
					[/* text */ 't', `) nor `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u006C'`],
					[/* text */ 't', `) is permitted to appear at the end
 of the string as a type indicator, as would be permitted in
 Java programming language source code - except that either
 `],
					[/* inline code block */ 'i', `L`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` may appear as a digit for a
 radix greater than or equal to 22.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `An exception of type `],
					[/* inline code block */ 'i', `NumberFormatException`],
					[/* text */ 't', ` is
 thrown if any of the following situations occurs:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The first argument is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` or is a string of
 length zero.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `radix`],
						[/* text */ 't', ` is either smaller than `],
						[/* reference */ 'r', `.Character#MIN_RADIX`],
						[/* text */ 't', ` or larger than `],
						[/* reference */ 'r', `.Character#MAX_RADIX`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Any character of the string is not a digit of the specified
 radix, except that the first character may be a minus sign
 `],
						[/* inline code block */ 'i', `'-'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u002d'`],
						[/* text */ 't', `) or plus sign `],
						[/* inline code block */ 'i', `'+'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u002B'`],
						[/* text */ 't', `) provided that the string is
 longer than length 1.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The value represented by the string is not a value of type
      `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Examples:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` parseLong("0", 10) returns 0L
 parseLong("473", 10) returns 473L
 parseLong("+42", 10) returns 42L
 parseLong("-0", 10) returns 0L
 parseLong("-FF", 16) returns -255L
 parseLong("1100110", 2) returns 102L
 parseLong("99", 8) throws a NumberFormatException
 parseLong("Hazelnut", 10) throws a NumberFormatException
 parseLong("Hazelnut", 36) returns 1356099454469L
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing the
                     `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` representation to be parsed.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to be used while parsing `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the string does not contain a
             parsable `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` represented by the string argument in
             the specified radix.`]
			]
		]],
		[/* method */ 'parseUnsignedLong(java.lang.CharSequence,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Parses the `],
				[/* reference */ 'r', `java.lang.CharSequence`],
				[/* text */ 't', ` argument as an unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` in
 the specified `],
				[/* inline code block */ 'i', `radix`],
				[/* text */ 't', `, beginning at the specified
 `],
				[/* inline code block */ 'i', `beginIndex`],
				[/* text */ 't', ` and extending to `],
				[/* inline code block */ 'i', `endIndex - 1`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The method does not take steps to guard against the
 `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` being mutated while parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` containing the unsigned
                 `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` representation to be parsed`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the beginning index, inclusive.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the ending index, exclusive.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to be used while parsing `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is
             negative, or if `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` or if `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `s.length()`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` does not
             contain a parsable unsigned `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` in the specified
             `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', `, or if `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', ` is either smaller than
             `],
					[/* reference */ 'r', `.Character#MIN_RADIX`],
					[/* text */ 't', ` or larger than
             `],
					[/* reference */ 'r', `.Character#MAX_RADIX`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` represented by the subsequence in
             the specified radix.`]
			]
		]],
		[/* method */ 'parseUnsignedLong(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses the string argument as an unsigned decimal `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `. The
 characters in the string must all be decimal digits, except
 that the first character may be an ASCII plus sign `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002B'`],
				[/* text */ 't', `). The resulting integer value
 is returned, exactly as if the argument and the radix 10 were
 given as arguments to the `],
				[/* reference */ 'r', `#parseUnsignedLong(java.lang.String,int)`, `parseUnsignedLong(java.lang.String, int)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing the unsigned `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `
            representation to be parsed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the string does not contain a
            parsable unsigned integer.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value represented by the decimal string argument`]
			]
		]],
		[/* method */ 'parseUnsignedLong(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Parses the string argument as an unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` in the
 radix specified by the second argument.  An unsigned integer
 maps the values usually associated with negative numbers to
 positive numbers larger than `],
				[/* inline code block */ 'i', `MAX_VALUE`],
				[/* text */ 't', `.

 The characters in the string must all be digits of the
 specified radix (as determined by whether `],
				[/* reference */ 'r', `.Character#digit(int,int)`],
				[/* text */ 't', ` returns a nonnegative
 value), except that the first character may be an ASCII plus
 sign `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002B'`],
				[/* text */ 't', `). The resulting
 integer value is returned.

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
						[/* text */ 't', `The first argument is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', ` or is a string of
 length zero.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The radix is either smaller than
 `],
						[/* reference */ 'r', `.Character#MIN_RADIX`],
						[/* text */ 't', ` or
 larger than `],
						[/* reference */ 'r', `.Character#MAX_RADIX`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Any character of the string is not a digit of the specified
 radix, except that the first character may be a plus sign
 `],
						[/* inline code block */ 'i', `'+'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u002B'`],
						[/* text */ 't', `) provided that the
 string is longer than length 1.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The value represented by the string is larger than the
 largest unsigned `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `, 2`],
						[/* text */ 't', `64`, 'sup'],
						[/* text */ 't', `-1.

 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing the unsigned integer
                  representation to be parsed`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix to be used while parsing `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `
             does not contain a parsable `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the unsigned `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` represented by the string
             argument in the specified radix.`]
			]
		]],
		[/* method */ 'remainderUnsigned(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the unsigned remainder from dividing the first argument
 by the second where each argument and the result is interpreted
 as an unsigned value.`]
			],
			[/* parameters */
				[/* parameter */ 'dividend', [/* parameter description */
					[/* text */ 't', `the value to be divided`]
				]],
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `the value doing the dividing`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unsigned remainder of the first argument divided by
 the second argument`]
			]
		]],
		[/* method */ 'reverse(long)', [
			[/* method description */
				[/* text */ 't', `Returns the value obtained by reversing the order of the bits in the
 two's complement binary representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 value.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value to be reversed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value obtained by reversing order of the bits in the
     specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'reverseBytes(long)', [
			[/* method description */
				[/* text */ 't', `Returns the value obtained by reversing the order of the bytes in the
 two's complement representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose bytes are to be reversed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value obtained by reversing the bytes in the specified
     `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'rotateLeft(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value obtained by rotating the two's complement binary
 representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value left by the
 specified number of bits.  (Bits shifted out of the left hand, or
 high-order, side reenter on the right, or low-order.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that left rotation with a negative distance is equivalent to
 right rotation: `],
					[/* inline code block */ 'i', `rotateLeft(val, -distance) == rotateRight(val, distance)`],
					[/* text */ 't', `.  Note also that rotation by any multiple of 64 is a
 no-op, so all but the last six bits of the rotation distance can be
 ignored, even if the distance is negative: `],
					[/* inline code block */ 'i', `rotateLeft(val, distance) == rotateLeft(val, distance & 0x3F)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose bits are to be rotated left`]
				]],
				[/* parameter */ 'distance', [/* parameter description */
					[/* text */ 't', `the number of bit positions to rotate left`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value obtained by rotating the two's complement binary
     representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value left by the
     specified number of bits.`]
			]
		]],
		[/* method */ 'rotateRight(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value obtained by rotating the two's complement binary
 representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value right by the
 specified number of bits.  (Bits shifted out of the right hand, or
 low-order, side reenter on the left, or high-order.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that right rotation with a negative distance is equivalent to
 left rotation: `],
					[/* inline code block */ 'i', `rotateRight(val, -distance) == rotateLeft(val, distance)`],
					[/* text */ 't', `.  Note also that rotation by any multiple of 64 is a
 no-op, so all but the last six bits of the rotation distance can be
 ignored, even if the distance is negative: `],
					[/* inline code block */ 'i', `rotateRight(val, distance) == rotateRight(val, distance & 0x3F)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `the value whose bits are to be rotated right`]
				]],
				[/* parameter */ 'distance', [/* parameter description */
					[/* text */ 't', `the number of bit positions to rotate right`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value obtained by rotating the two's complement binary
     representation of the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value right by the
     specified number of bits.`]
			]
		]],
		[/* method */ 'sum(long,long)', [
			[/* method description */
				[/* text */ 't', `Adds two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values together as per the + operator.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sum of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]]
	],
]);
