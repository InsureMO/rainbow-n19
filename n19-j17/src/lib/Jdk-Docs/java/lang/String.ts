import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.String', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', ` class represents character strings. All
 string literals in Java programs, such as `],
		[/* inline code block */ 'i', `"abc"`],
		[/* text */ 't', `, are
 implemented as instances of this class.
 `],
		[/* block */ 'b', `
 Strings are constant; their values cannot be changed after they
 are created. String buffers support mutable strings.
 Because String objects are immutable they can be shared. For example:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     String str = "abc";
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 is equivalent to:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     char data[] = {'a', 'b', 'c'};
     String str = new String(data);
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Here are some more examples of how strings can be used:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     System.out.println("abc");
     String cde = "cde";
     System.out.println("abc" + cde);
     String c = "abc".substring(2, 3);
     String d = cde.substring(1, 2);
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The class `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` includes methods for examining
 individual characters of the sequence, for comparing strings, for
 searching strings, for extracting substrings, and for creating a
 copy of a string with all characters translated to uppercase or to
 lowercase. Case mapping is based on the Unicode Standard version
 specified by the `],
			[/* reference */ 'r', `java.lang.Character`],
			[/* text */ 't', ` class.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The Java language provides special support for the string
 concatenation operator ( + ), and for conversion of
 other objects to strings. For additional information on string
 concatenation and conversion, see `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a constructor
 or method in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be
 thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` represents a string in the UTF-16 format
 in which `],
			[/* text */ 't', `supplementary characters`],
			[/* text */ 't', ` are represented by `],
			[/* text */ 't', `surrogate
 pairs`],
			[/* text */ 't', ` (see the section `],
			[/* reference */ 'r', `.Character#unicode`],
			[/* text */ 't', ` in the `],
			[/* inline code block */ 'i', `Character`],
			[/* text */ 't', ` class for
 more information).
 Index values refer to `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` code units, so a supplementary
 character uses two positions in a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` class provides methods for dealing with
 Unicode code points (i.e., characters), in addition to those for
 dealing with Unicode code units (i.e., `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` values).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Unless otherwise noted, methods for comparing Strings do not take locale
 into account.  The `],
			[/* reference */ 'r', `java.text.Collator`],
			[/* text */ 't', ` class provides methods for
 finer-grain, locale-sensitive String comparison.`]
		]]
	],
	[/* fields */
		[/* field */ 'CASE_INSENSITIVE_ORDER', [
			[/* field description */
				[/* text */ 't', `A Comparator that orders `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` objects as by
 `],
				[/* reference */ 'r', `#compareToIgnoreCase(java.lang.String)`, `compareToIgnoreCase`],
				[/* text */ 't', `.
 This comparator is serializable.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this Comparator does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` take locale into account,
 and will result in an unsatisfactory ordering for certain locales.
 The `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', ` class provides locale-sensitive comparison.`]
				]]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a newly created `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object so that it represents
 an empty character sequence.  Note that use of this constructor is
 unnecessary since Strings are immutable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(byte[])', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` by decoding the specified array of bytes
 using the platform's default charset.  The length of the new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is a function of the charset, and hence may not be equal to the
 length of the byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The behavior of this constructor when the given bytes are not valid
 in the default charset is unspecified.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`],
					[/* text */ 't', ` class should be used when more control
 over the decoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `The bytes to be decoded into characters`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(byte[],int)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` containing characters constructed from
 an array of 8-bit integer values. Each character `],
				[/* text */ 't', `c`],
				[/* text */ 't', ` in the
 resulting string is constructed from the corresponding component
 `],
				[/* text */ 't', `b`],
				[/* text */ 't', ` in the byte array such that:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', `c`],
						[/* text */ 't', ` == (char)(((hibyte & 0xff) << 8)
                         | (`],
						[/* text */ 't', `b`],
						[/* text */ 't', ` & 0xff))
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ascii', [/* parameter description */
					[/* text */ 't', `The bytes to be converted to characters`]
				]],
				[/* parameter */ 'hibyte', [/* parameter description */
					[/* text */ 't', `The top 8 bits of each 16-bit Unicode code unit`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(byte[],int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` by decoding the specified subarray of
 bytes using the platform's default charset.  The length of the new
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is a function of the charset, and hence may not be equal
 to the length of the subarray.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The behavior of this constructor when the given bytes are not valid
 in the default charset is unspecified.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`],
					[/* text */ 't', ` class should be used when more control
 over the decoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `The bytes to be decoded into characters`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The index of the first byte to decode`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of bytes to decode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `bytes.length - length`]
				]]
			]
		]],
		[/* constructor */ '<init>(byte[],int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` constructed from a subarray of an array
 of 8-bit integer values.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument is the index of the first byte of the
 subarray, and the `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` argument specifies the length of the
 subarray.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Each `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` in the subarray is converted to a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` as
 specified in the `],
					[/* reference */ 'r', `#%3Cinit%3E(byte%5B%5D,int)`, `String(byte[],int)`],
					[/* text */ 't', ` constructor.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ascii', [/* parameter description */
					[/* text */ 't', `The bytes to be converted to characters`]
				]],
				[/* parameter */ 'hibyte', [/* parameter description */
					[/* text */ 't', `The top 8 bits of each 16-bit Unicode code unit`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The initial offset`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `The length`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `ascii.length - count`]
				]]
			]
		]],
		[/* constructor */ '<init>(byte[],int,int,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` by decoding the specified subarray of
 bytes using the specified charset.  The length of the new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `
 is a function of the charset, and hence may not be equal to the length
 of the subarray.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The behavior of this constructor when the given bytes are not valid
 in the given charset is unspecified.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`],
					[/* text */ 't', ` class should be used when more control
 over the decoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `The bytes to be decoded into characters`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The index of the first byte to decode`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of bytes to decode`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `bytes.length - length`]
				]]
			]
		]],
		[/* constructor */ '<init>(byte[],int,int,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` by decoding the specified subarray of
 bytes using the specified `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `.
 The length of the new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is a function of the charset, and
 hence may not be equal to the length of the subarray.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always replaces malformed-input and unmappable-character
 sequences with this charset's default replacement string.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`],
					[/* text */ 't', ` class should be used when more control
 over the decoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `The bytes to be decoded into characters`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The index of the first byte to decode`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of bytes to decode`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` to be used to
         decode the `],
					[/* inline code block */ 'i', `bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `bytes.length - length`]
				]]
			]
		]],
		[/* constructor */ '<init>(byte[],java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` by decoding the specified array of bytes
 using the specified `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `.  The
 length of the new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is a function of the charset, and hence
 may not be equal to the length of the byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The behavior of this constructor when the given bytes are not valid
 in the given charset is unspecified.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`],
					[/* text */ 't', ` class should be used when more control
 over the decoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `The bytes to be decoded into characters`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(byte[],java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` by decoding the specified array of
 bytes using the specified `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `.
 The length of the new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is a function of the charset, and
 hence may not be equal to the length of the byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always replaces malformed-input and unmappable-character
 sequences with this charset's default replacement string.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`],
					[/* text */ 't', ` class should be used when more control
 over the decoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `The bytes to be decoded into characters`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` to be used to
         decode the `],
					[/* inline code block */ 'i', `bytes`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(char[])', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` so that it represents the sequence of
 characters currently contained in the character array argument. The
 contents of the character array are copied; subsequent modification of
 the character array does not affect the newly created string.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The initial value of the string`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(char[],int,int)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains characters from a subarray
 of the character array argument. The `],
				[/* inline code block */ 'i', `offset`],
				[/* text */ 't', ` argument is the
 index of the first character of the subarray and the `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', `
 argument specifies the length of the subarray. The contents of the
 subarray are copied; subsequent modification of the character array does
 not affect the newly created string.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `Array that is the source of characters`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The initial offset`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `The length`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `value.length - count`]
				]]
			]
		]],
		[/* constructor */ '<init>(int[],int,int)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains characters from a subarray
 of the `],
				[/* reference */ 'r', `.Character#unicode`],
				[/* text */ 't', ` array
 argument.  The `],
				[/* inline code block */ 'i', `offset`],
				[/* text */ 't', ` argument is the index of the first code
 point of the subarray and the `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` argument specifies the
 length of the subarray.  The contents of the subarray are converted to
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s; subsequent modification of the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` array does not
 affect the newly created string.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoints', [/* parameter description */
					[/* text */ 't', `Array that is the source of Unicode code points`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The initial offset`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `The length`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If any invalid Unicode code point is found in `],
					[/* inline code block */ 'i', `codePoints`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `codePoints.length - count`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Initializes a newly created `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object so that it represents
 the same sequence of characters as the argument; in other words, the
 newly created string is a copy of the argument string. Unless an
 explicit copy of `],
				[/* inline code block */ 'i', `original`],
				[/* text */ 't', ` is needed, use of this constructor is
 unnecessary since Strings are immutable.`]
			],
			[/* parameters */
				[/* parameter */ 'original', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `String`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.StringBuffer)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new string that contains the sequence of characters
 currently contained in the string buffer argument. The contents of the
 string buffer are copied; subsequent modification of the string buffer
 does not affect the newly created string.`]
			],
			[/* parameters */
				[/* parameter */ 'buffer', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `StringBuffer`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.StringBuilder)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a new string that contains the sequence of characters
 currently contained in the string builder argument. The contents of the
 string builder are copied; subsequent modification of the string builder
 does not affect the newly created string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This constructor is provided to ease migration to `],
					[/* inline code block */ 'i', `StringBuilder`],
					[/* text */ 't', `. Obtaining a string from a string builder via the `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` method is likely to run faster and is generally preferred.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'builder', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `StringBuilder`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'transform(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `This method allows the application of a function to `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `
 string. The function should expect a single String argument
 and produce an `],
				[/* inline code block */ 'i', `R`],
				[/* text */ 't', ` result.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Any exception thrown by `],
					[/* inline code block */ 'i', `f.apply()`],
					[/* text */ 't', ` will be propagated to the
 caller.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `a function to apply`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of applying the function to this string`]
			]
		]],
		[/* method */ 'contains(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Returns true if and only if this string contains the specified
 sequence of char values.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the sequence to search for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this string contains `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `, false otherwise`]
			]
		]],
		[/* method */ 'contentEquals(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Compares this string to the specified `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', `.  The
 result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` represents the
 same sequence of char values as the specified sequence. Note that if the
 `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` is a `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` then the method
 synchronizes on it.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For finer-grained String comparison, refer to
 `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `The sequence to compare this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` against`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` represents the same
          sequence of char values as the specified sequence, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'contentEquals(java.lang.StringBuffer)', [
			[/* method description */
				[/* text */ 't', `Compares this string to the specified `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `.  The result
 is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` represents the same
 sequence of characters as the specified `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `. This method
 synchronizes on the `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For finer-grained String comparison, refer to
 `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sb', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', ` to compare this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` against`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` represents the same
          sequence of characters as the specified `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `,
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'endsWith(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tests if this string ends with the specified suffix.`]
			],
			[/* parameters */
				[/* parameter */ 'suffix', [/* parameter description */
					[/* text */ 't', `the suffix.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character sequence represented by the
          argument is a suffix of the character sequence represented by
          this object; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise. Note that the
          result will be `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the argument is the
          empty string or is equal to this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object
          as determined by the `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(Object)`],
				[/* text */ 't', ` method.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this string to the specified object.  The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object that represents the same sequence of characters as this
 object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For finer-grained String comparison, refer to
 `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'anObject', [/* parameter description */
					[/* text */ 't', `The object to compare this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` against`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given object represents a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `
          equivalent to this string, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'equalsIgnoreCase(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` to another `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, ignoring case
 considerations.  Two strings are considered equal ignoring case if they
 are of the same length and corresponding Unicode code points in the two
 strings are equal ignoring case.

 `],
				[/* block */ 'b', ` Two Unicode code points are considered the same
 ignoring case if at least one of the following is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` The two Unicode code points are the same (as compared by the
        `],
						[/* inline code block */ 'i', `==`],
						[/* text */ 't', ` operator)
   `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` Calling `],
						[/* inline code block */ 'i', `Character.toLowerCase(Character.toUpperCase(int))`],
						[/* text */ 't', `
        on each Unicode code point produces the same result
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` take locale into account, and
 will result in unsatisfactory results for certain locales.  The
 `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', ` class provides locale-sensitive comparison.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'anotherString', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to compare this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` against`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and it
          represents an equivalent `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` ignoring case; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isBlank()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the string is empty or contains only
 `],
				[/* reference */ 'r', `.Character#isWhitespace(int)`],
				[/* text */ 't', ` codepoints,
 otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the string is empty or contains only
         `],
				[/* reference */ 'r', `.Character#isWhitespace(int)`],
				[/* text */ 't', ` codepoints,
         otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, `],
				[/* reference */ 'r', `#length()`, `length()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* reference */ 'r', `#length()`, `length()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `, otherwise
 `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'matches(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this string matches the given `],
				[/* reference */ 'r', `java.regex.Pattern#sum`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* text */ 't', `str`],
					[/* inline code block */ 'i', `.matches(`],
					[/* text */ 't', `regex`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', ` yields exactly the
 same result as the expression

 `]
				]],
				[/* block */ 'b', [
					[/* reference */ 'r', `java.util.regex.Pattern`],
					[/* text */ 't', `.`],
					[/* reference */ 'r', `java.regex.Pattern#matches(java.lang.String,java.lang.CharSequence)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `the regular expression to which this string is to be matched`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `if the regular expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this string matches the
          given regular expression`]
			]
		]],
		[/* method */ 'regionMatches(boolean,int,java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Tests if two string regions are equal.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A substring of this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is compared to a substring
 of the argument `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', `. The result is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if these
 substrings represent Unicode code point sequences that are the same,
 ignoring case if and only if `],
					[/* inline code block */ 'i', `ignoreCase`],
					[/* text */ 't', ` is true.
 The sequences `],
					[/* inline code block */ 'i', `tsequence`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `osequence`],
					[/* text */ 't', ` are compared,
 where `],
					[/* inline code block */ 'i', `tsequence`],
					[/* text */ 't', ` is the sequence produced as if by calling
 `],
					[/* inline code block */ 'i', `this.substring(toffset, toffset + len).codePoints()`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `osequence`],
					[/* text */ 't', ` is the sequence produced as if by calling
 `],
					[/* inline code block */ 'i', `other.substring(ooffset, ooffset + len).codePoints()`],
					[/* text */ 't', `.
 The result is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if and only if all of the following
 are true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `toffset`],
						[/* text */ 't', ` is non-negative.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ooffset`],
						[/* text */ 't', ` is non-negative.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `toffset+len`],
						[/* text */ 't', ` is less than or equal to the length of this
 `],
						[/* inline code block */ 'i', `String`],
						[/* text */ 't', ` object.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ooffset+len`],
						[/* text */ 't', ` is less than or equal to the length of the other
 argument.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `if `],
						[/* inline code block */ 'i', `ignoreCase`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `, all pairs of corresponding Unicode
 code points are equal integer values; or if `],
						[/* inline code block */ 'i', `ignoreCase`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `,
 `],
						[/* reference */ 'r', `.Character#toLowerCase(int)`],
						[/* reference */ 'r', `.Character#toUpperCase(int)`],
						[/* inline code block */ 'i', `)`],
						[/* text */ 't', ` on all pairs of Unicode code points
 results in equal integer values.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` take locale into account,
 and will result in unsatisfactory results for certain locales when
 `],
					[/* inline code block */ 'i', `ignoreCase`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  The `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', ` class
 provides locale-sensitive comparison.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ignoreCase', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, ignore case when comparing
                       characters.`]
				]],
				[/* parameter */ 'toffset', [/* parameter description */
					[/* text */ 't', `the starting offset of the subregion in this
                       string.`]
				]],
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the string argument.`]
				]],
				[/* parameter */ 'ooffset', [/* parameter description */
					[/* text */ 't', `the starting offset of the subregion in the string
                       argument.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of characters (Unicode code units -
                       16bit `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value) to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified subregion of this string
          matches the specified subregion of the string argument;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise. Whether the matching is exact
          or case insensitive depends on the `],
				[/* inline code block */ 'i', `ignoreCase`],
				[/* text */ 't', `
          argument.`]
			]
		]],
		[/* method */ 'regionMatches(int,java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Tests if two string regions are equal.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A substring of this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is compared to a substring
 of the argument other. The result is true if these substrings
 represent identical character sequences. The substring of this
 `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object to be compared begins at index `],
					[/* inline code block */ 'i', `toffset`],
					[/* text */ 't', `
 and has length `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `. The substring of other to be compared
 begins at index `],
					[/* inline code block */ 'i', `ooffset`],
					[/* text */ 't', ` and has length `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `. The
 result is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if and only if at least one of the following
 is true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `toffset`],
						[/* text */ 't', ` is negative.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ooffset`],
						[/* text */ 't', ` is negative.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `toffset+len`],
						[/* text */ 't', ` is greater than the length of this
 `],
						[/* inline code block */ 'i', `String`],
						[/* text */ 't', ` object.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ooffset+len`],
						[/* text */ 't', ` is greater than the length of the other
 argument.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `There is some nonnegative integer `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` less than `],
						[/* inline code block */ 'i', `len`],
						[/* text */ 't', `
 such that:
 `],
						[/* inline code block */ 'i', `this.charAt(toffset +`],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `) != other.charAt(ooffset +`],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `)`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` take locale into account.  The
 `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', ` class provides locale-sensitive comparison.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'toffset', [/* parameter description */
					[/* text */ 't', `the starting offset of the subregion in this string.`]
				]],
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the string argument.`]
				]],
				[/* parameter */ 'ooffset', [/* parameter description */
					[/* text */ 't', `the starting offset of the subregion in the string
                    argument.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of characters to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified subregion of this string
          exactly matches the specified subregion of the string argument;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'startsWith(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tests if this string starts with the specified prefix.`]
			],
			[/* parameters */
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `the prefix.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character sequence represented by the
          argument is a prefix of the character sequence represented by
          this string; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.
          Note also that `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` will be returned if the
          argument is an empty string or is equal to this
          `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object as determined by the
          `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(Object)`],
				[/* text */ 't', ` method.`]
			]
		]],
		[/* method */ 'startsWith(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Tests if the substring of this string beginning at the
 specified index starts with the specified prefix.`]
			],
			[/* parameters */
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `the prefix.`]
				]],
				[/* parameter */ 'toffset', [/* parameter description */
					[/* text */ 't', `where to begin looking in this string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character sequence represented by the
          argument is a prefix of the substring of this object starting
          at index `],
				[/* inline code block */ 'i', `toffset`],
				[/* text */ 't', `; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.
          The result is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `toffset`],
				[/* text */ 't', ` is
          negative or greater than the length of this
          `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object; otherwise the result is the same
          as the result of the expression
          `],
				[/* code block */ 'c', `          this.substring(toffset).startsWith(prefix)
          `]
			]
		]],
		[/* method */ 'getBytes()', [
			[/* method description */
				[/* text */ 't', `Encodes this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` into a sequence of bytes using the
 platform's default charset, storing the result into a new byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The behavior of this method when this string cannot be encoded in
 the default charset is unspecified.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetEncoder`],
					[/* text */ 't', ` class should be used when more control
 over the encoding process is required.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The resultant byte array`]
			]
		]],
		[/* method */ 'getBytes(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Encodes this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` into a sequence of bytes using the named
 charset, storing the result into a new byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The behavior of this method when this string cannot be encoded in
 the given charset is unspecified.  The `],
					[/* reference */ 'r', `java.nio.charset.CharsetEncoder`],
					[/* text */ 't', ` class should be used when more control
 over the encoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resultant byte array`]
			]
		]],
		[/* method */ 'getBytes(java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Encodes this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` into a sequence of bytes using the given
 `],
				[/* reference */ 'r', `java.nio.charset.Charset`],
				[/* text */ 't', `, storing the result into a
 new byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always replaces malformed-input and unmappable-character
 sequences with this charset's default replacement byte array.  The
 `],
					[/* reference */ 'r', `java.nio.charset.CharsetEncoder`],
					[/* text */ 't', ` class should be used when more
 control over the encoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.nio.charset.Charset`],
					[/* text */ 't', ` to be used to encode
         the `],
					[/* inline code block */ 'i', `String`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The resultant byte array`]
			]
		]],
		[/* method */ 'charAt(int)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the
 specified index. An index ranges from `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `length() - 1`],
				[/* text */ 't', `. The first `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value of the sequence
 is at index `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `, the next at index `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `,
 and so on, as for array indexing.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value specified by the index is a
 `],
					[/* reference */ 'r', `.Character#unicode`],
					[/* text */ 't', `, the surrogate
 value is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
             argument is negative or not less than the length of this
             string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the specified index of this string.
             The first `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is at index `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toCharArray()', [
			[/* method description */
				[/* text */ 't', `Converts this string to a new character array.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a newly allocated character array whose length is the length
          of this string and whose contents are initialized to contain
          the character sequence represented by this string.`]
			]
		]],
		[/* method */ 'codePointAt(int)', [
			[/* method description */
				[/* text */ 't', `Returns the character (Unicode code point) at the specified
 index. The index refers to `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values
 (Unicode code units) and ranges from `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to
 `],
				[/* reference */ 'r', `#length()`, `length()`],
				[/* inline code block */ 'i', `- 1`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value specified at the given index
 is in the high-surrogate range, the following index is less
 than the length of this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `, and the
 `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at the following index is in the
 low-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at the given index is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
             argument is negative or not less than the length of this
             string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the code point value of the character at the
             `],
				[/* inline code block */ 'i', `index`]
			]
		]],
		[/* method */ 'codePointBefore(int)', [
			[/* method description */
				[/* text */ 't', `Returns the character (Unicode code point) before the specified
 index. The index refers to `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values
 (Unicode code units) and ranges from `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', ` to `],
				[/* reference */ 'r', `.CharSequence#length()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at `],
					[/* inline code block */ 'i', `(index - 1)`],
					[/* text */ 't', `
 is in the low-surrogate range, `],
					[/* inline code block */ 'i', `(index - 2)`],
					[/* text */ 't', ` is not
 negative, and the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at `],
					[/* inline code block */ 'i', `(index - 2)`],
					[/* text */ 't', ` is in the high-surrogate range, then the
 supplementary code point value of the surrogate pair is
 returned. If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at `],
					[/* inline code block */ 'i', `index - 1`],
					[/* text */ 't', ` is an unpaired low-surrogate or a high-surrogate, the
 surrogate value is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index following the code point that should be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
            argument is less than 1 or greater than the length
            of this string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point value before the given index.`]
			]
		]],
		[/* method */ 'codePointCount(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the number of Unicode code points in the specified text
 range of this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. The text range begins at the
 specified `],
				[/* inline code block */ 'i', `beginIndex`],
				[/* text */ 't', ` and extends to the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` at index `],
				[/* inline code block */ 'i', `endIndex - 1`],
				[/* text */ 't', `. Thus the
 length (in `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s) of the text range is
 `],
				[/* inline code block */ 'i', `endIndex-beginIndex`],
				[/* text */ 't', `. Unpaired surrogates within
 the text range count as one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the index to the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of
 the text range.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the index after the last `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of
 the text range.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the
 `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', `
 is larger than the length of this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `, or
 `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is larger than `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of Unicode code points in the specified text
 range`]
			]
		]],
		[/* method */ 'compareTo(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compares two strings lexicographically.
 The comparison is based on the Unicode value of each character in
 the strings. The character sequence represented by this
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object is compared lexicographically to the
 character sequence represented by the argument string. The result is
 a negative integer if this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object
 lexicographically precedes the argument string. The result is a
 positive integer if this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object lexicographically
 follows the argument string. The result is zero if the strings
 are equal; `],
				[/* inline code block */ 'i', `compareTo`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` exactly when
 the `],
				[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(Object)`],
				[/* text */ 't', ` method would return `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is the definition of lexicographic ordering. If two strings are
 different, then either they have different characters at some index
 that is a valid index for both strings, or their lengths are different,
 or both. If they have different characters at one or more index
 positions, let `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` be the smallest such index; then the string
 whose character at position `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` has the smaller value, as
 determined by using the `],
					[/* inline code block */ 'i', `<`],
					[/* text */ 't', ` operator, lexicographically precedes the
 other string. In this case, `],
					[/* inline code block */ 'i', `compareTo`],
					[/* text */ 't', ` returns the
 difference of the two character values at position `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` in
 the two string -- that is, the value:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` this.charAt(k)-anotherString.charAt(k)
 `]
				]],
				[/* text */ 't', `
 If there is no index position at which they differ, then the shorter
 string lexicographically precedes the longer string. In this case,
 `],
				[/* inline code block */ 'i', `compareTo`],
				[/* text */ 't', ` returns the difference of the lengths of the
 strings -- that is, the value:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` this.length()-anotherString.length()
 `]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `For finer-grained String comparison, refer to
 `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'anotherString', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the argument string is equal to
          this string; a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this string
          is lexicographically less than the string argument; and a
          value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this string is
          lexicographically greater than the string argument.`]
			]
		]],
		[/* method */ 'compareToIgnoreCase(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Compares two strings lexicographically, ignoring case
 differences. This method returns an integer whose sign is that of
 calling `],
				[/* inline code block */ 'i', `compareTo`],
				[/* text */ 't', ` with case folded versions of the strings
 where case differences have been eliminated by calling
 `],
				[/* inline code block */ 'i', `Character.toLowerCase(Character.toUpperCase(int))`],
				[/* text */ 't', ` on
 each Unicode code point.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this method does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` take locale into account,
 and will result in an unsatisfactory ordering for certain locales.
 The `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', ` class provides locale-sensitive comparison.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a negative integer, zero, or a positive integer as the
          specified String is greater than, equal to, or less
          than this String, ignoring case considerations.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this string. The hash code for a
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object is computed as
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
 `]
				]],
				[/* text */ 't', `
 using `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arithmetic, where `],
				[/* inline code block */ 'i', `s[i]`],
				[/* text */ 't', ` is the
 `],
				[/* text */ 't', `i`],
				[/* text */ 't', `th character of the string, `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is the length of
 the string, and `],
				[/* inline code block */ 'i', `^`],
				[/* text */ 't', ` indicates exponentiation.
 (The hash value of the empty string is zero.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'indexOf(int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the first occurrence of
 the specified character. If a character with value
 `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', ` occurs in the character sequence represented by
 this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object, then the index (in Unicode
 code units) of the first such occurrence is returned. For
 values of `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', ` in the range from 0 to 0xFFFF
 (inclusive), this is the smallest value `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` this.charAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch
 `]
					]]
				]],
				[/* text */ 't', `
 is true. For other values of `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', `, it is the
 smallest value `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` this.codePointAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch
 `]
					]]
				]],
				[/* text */ 't', `
 is true. In either case, if no such character occurs in this
 string, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `a character (Unicode code point).`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the character in the
          character sequence represented by this object, or
          `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the character does not occur.`]
			]
		]],
		[/* method */ 'indexOf(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the first occurrence of the
 specified character, starting the search at the specified index.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a character with value `],
					[/* inline code block */ 'i', `ch`],
					[/* text */ 't', ` occurs in the
 character sequence represented by this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `
 object at an index no smaller than `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', `, then
 the index of the first such occurrence is returned. For values
 of `],
					[/* inline code block */ 'i', `ch`],
					[/* text */ 't', ` in the range from 0 to 0xFFFF (inclusive),
 this is the smallest value `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` such that:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` (this.charAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch) `],
						[/* inline code block */ 'i', `&&`],
						[/* text */ 't', ` (`],
						[/* text */ 't', `k`],
						[/* text */ 't', ` >= fromIndex)
 `]
					]]
				]],
				[/* text */ 't', `
 is true. For other values of `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', `, it is the
 smallest value `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` (this.codePointAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch) `],
						[/* inline code block */ 'i', `&&`],
						[/* text */ 't', ` (`],
						[/* text */ 't', `k`],
						[/* text */ 't', ` >= fromIndex)
 `]
					]]
				]],
				[/* text */ 't', `
 is true. In either case, if no such character occurs in this
 string at or after position `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, then
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 There is no restriction on the value of `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', `. If it
 is negative, it has the same effect as if it were zero: this entire
 string may be searched. If it is greater than the length of this
 string, it has the same effect as if it were equal to the length of
 this string: `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `All indices are specified in `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values
 (Unicode code units).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `a character (Unicode code point).`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start the search from.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the character in the
          character sequence represented by this object that is greater
          than or equal to `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `
          if the character does not occur.`]
			]
		]],
		[/* method */ 'indexOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the first occurrence of the
 specified substring.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the smallest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `this.startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the specified substring,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'indexOf(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the first occurrence of the
 specified substring, starting at the specified index.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the smallest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `k >= Math.min(fromIndex, this.length()) &&
                   this.startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index from which to start the search.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the specified substring,
          starting at the specified index,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'lastIndexOf(int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the last occurrence of
 the specified character. For values of `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', ` in the
 range from 0 to 0xFFFF (inclusive), the index (in Unicode code
 units) returned is the largest value `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` this.charAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch
 `]
					]]
				]],
				[/* text */ 't', `
 is true. For other values of `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', `, it is the
 largest value `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` this.codePointAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch
 `]
					]]
				]],
				[/* text */ 't', `
 is true.  In either case, if no such character occurs in this
 string, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.  The
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is searched backwards starting at the last
 character.`]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `a character (Unicode code point).`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the character in the
          character sequence represented by this object, or
          `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the character does not occur.`]
			]
		]],
		[/* method */ 'lastIndexOf(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the last occurrence of
 the specified character, searching backward starting at the
 specified index. For values of `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', ` in the range
 from 0 to 0xFFFF (inclusive), the index returned is the largest
 value `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` (this.charAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch) `],
						[/* inline code block */ 'i', `&&`],
						[/* text */ 't', ` (`],
						[/* text */ 't', `k`],
						[/* text */ 't', ` <= fromIndex)
 `]
					]]
				]],
				[/* text */ 't', `
 is true. For other values of `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', `, it is the
 largest value `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` (this.codePointAt(`],
						[/* text */ 't', `k`],
						[/* text */ 't', `) == ch) `],
						[/* inline code block */ 'i', `&&`],
						[/* text */ 't', ` (`],
						[/* text */ 't', `k`],
						[/* text */ 't', ` <= fromIndex)
 `]
					]]
				]],
				[/* text */ 't', `
 is true. In either case, if no such character occurs in this
 string at or before position `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, then
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `All indices are specified in `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values
 (Unicode code units).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `a character (Unicode code point).`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start the search from. There is no
          restriction on the value of `],
					[/* inline code block */ 'i', `fromIndex`],
					[/* text */ 't', `. If it is
          greater than or equal to the length of this string, it has
          the same effect as if it were equal to one less than the
          length of this string: this entire string may be searched.
          If it is negative, it has the same effect as if it were -1:
          -1 is returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the character in the
          character sequence represented by this object that is less
          than or equal to `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `
          if the character does not occur before that point.`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the last occurrence of the
 specified substring.  The last occurrence of the empty string ""
 is considered to occur at the index value `],
				[/* inline code block */ 'i', `this.length()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the largest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `this.startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified substring,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the last occurrence of the
 specified substring, searching backward starting at the specified index.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the largest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `k <= Math.min(fromIndex, this.length()) &&
                   this.startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start the search from.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified substring,
          searching backward from the specified index,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length of this string.
 The length is equal to the number of `],
				[/* reference */ 'r', `.Character#unicode`],
				[/* text */ 't', ` in the string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the length of the sequence of characters represented by this
          object.`]
			]
		]],
		[/* method */ 'offsetByCodePoints(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that is
 offset from the given `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` by
 `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', ` code points. Unpaired surrogates
 within the text range given by `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', ` count as one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to be offset`]
				]],
				[/* parameter */ 'codePointOffset', [/* parameter description */
					[/* text */ 't', `the offset in code points`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
   is negative or larger then the length of this
   `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `, or if `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is positive
   and the substring starting with `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` has fewer
   than `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code points,
   or if `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is negative and the substring
   before `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` has fewer than the absolute value
   of `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code points.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index within this `],
				[/* inline code block */ 'i', `String`]
			]
		]],
		[/* method */ 'subSequence(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a character sequence that is a subsequence of this sequence.

 `],
				[/* block */ 'b', ` An invocation of this method of the form

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` str.subSequence(begin, end)`]
				]],
				[/* text */ 't', `

 behaves in exactly the same way as the invocation

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` str.substring(begin, end)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the begin index, inclusive.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the end index, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` is negative,
          if `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `,
          or if `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `endIndex`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the specified subsequence.`]
			]
		]],
		[/* method */ 'concat(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Concatenates the specified string to the end of this string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the length of the argument string is `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, then this
 `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is returned. Otherwise, a
 `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is returned that represents a character
 sequence that is the concatenation of the character sequence
 represented by this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object and the character
 sequence represented by the argument string.`]
				]],
				[/* block */ 'b', `
 Examples:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` "cares".concat("s") returns "caress"
 "to".concat("get").concat("her") returns "together"
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` that is concatenated to the end
                of this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string that represents the concatenation of this object's
          characters followed by the string argument's characters.`]
			]
		]],
		[/* method */ 'formatted(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Formats using this string as the format string, and the supplied
 arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in this string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A formatted string`]
			]
		]],
		[/* method */ 'indent(int)', [
			[/* method description */
				[/* text */ 't', `Adjusts the indentation of each line of this string based on the value of
 `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', `, and normalizes line termination characters.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This string is conceptually separated into lines using
 `],
					[/* reference */ 'r', `#lines()`, `lines()`],
					[/* text */ 't', `. Each line is then adjusted as described below
 and then suffixed with a line feed `],
					[/* inline code block */ 'i', `"\\n"`],
					[/* text */ 't', ` (U+000A). The resulting
 lines are then concatenated and returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `n > 0`],
					[/* text */ 't', ` then `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` spaces (U+0020) are inserted at the
 beginning of each line.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `n < 0`],
					[/* text */ 't', ` then up to `],
					[/* inline code block */ 'i', `n`],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', ` are removed
 from the beginning of each line. If a given line does not contain
 sufficient white space then all leading
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', ` are removed.
 Each white space character is treated as a single character. In
 particular, the tab character `],
					[/* inline code block */ 'i', `"\\t"`],
					[/* text */ 't', ` (U+0009) is considered a
 single character; it is not expanded.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `n == 0`],
					[/* text */ 't', ` then the line remains unchanged. However, line
 terminators are still normalized.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `number of leading
           `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `
           to add or remove`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `string with indentation adjusted and line endings normalized`]
			]
		]],
		[/* method */ 'repeat(int)', [
			[/* method description */
				[/* text */ 't', `Returns a string whose value is the concatenation of this
 string repeated `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` times.
 `],
				[/* block */ 'b', `
 If this string is empty or count is zero then the empty
 string is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `number of times to repeat`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is
          negative.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A string composed of this string repeated
          `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` times or the empty string if this
          string is empty or count is zero`]
			]
		]],
		[/* method */ 'replace(char,char)', [
			[/* method description */
				[/* text */ 't', `Returns a string resulting from replacing all occurrences of
 `],
				[/* inline code block */ 'i', `oldChar`],
				[/* text */ 't', ` in this string with `],
				[/* inline code block */ 'i', `newChar`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the character `],
					[/* inline code block */ 'i', `oldChar`],
					[/* text */ 't', ` does not occur in the
 character sequence represented by this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object,
 then a reference to this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is returned.
 Otherwise, a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is returned that
 represents a character sequence identical to the character sequence
 represented by this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object, except that every
 occurrence of `],
					[/* inline code block */ 'i', `oldChar`],
					[/* text */ 't', ` is replaced by an occurrence
 of `],
					[/* inline code block */ 'i', `newChar`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Examples:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` "mesquite in your cellar".replace('e', 'o')
         returns "mosquito in your collar"
 "the war of baronets".replace('r', 'y')
         returns "the way of bayonets"
 "sparring with a purple porpoise".replace('p', 't')
         returns "starring with a turtle tortoise"
 "JonL".replace('q', 'x') returns "JonL" (no change)
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'oldChar', [/* parameter description */
					[/* text */ 't', `the old character.`]
				]],
				[/* parameter */ 'newChar', [/* parameter description */
					[/* text */ 't', `the new character.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string derived from this string by replacing every
          occurrence of `],
				[/* inline code block */ 'i', `oldChar`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `newChar`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'replace(java.lang.CharSequence,java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Replaces each substring of this string that matches the literal target
 sequence with the specified literal replacement sequence. The
 replacement proceeds from the beginning of the string to the end, for
 example, replacing "aa" with "b" in the string "aaa" will result in
 "ba" rather than "ab".`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `The sequence of char values to be replaced`]
				]],
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `The replacement sequence of char values`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The resulting string`]
			]
		]],
		[/* method */ 'replaceAll(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Replaces each substring of this string that matches the given `],
				[/* reference */ 'r', `java.regex.Pattern#sum`],
				[/* text */ 't', ` with the
 given replacement.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* text */ 't', `str`],
					[/* inline code block */ 'i', `.replaceAll(`],
					[/* text */ 't', `regex`],
					[/* inline code block */ 'i', `,`],
					[/* text */ 't', `repl`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `
 yields exactly the same result as the expression

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Pattern.compile(regex).matcher(str).replaceAll(repl)`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in the
 replacement string may cause the results to be different than if it were
 being treated as a literal replacement string; see
 `],
					[/* reference */ 'r', `java.regex.Matcher#replaceAll(java.lang.String)`],
					[/* text */ 't', `.
 Use `],
					[/* reference */ 'r', `java.regex.Matcher#quoteReplacement(java.lang.String)`],
					[/* text */ 't', ` to suppress the special
 meaning of these characters, if desired.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `the regular expression to which this string is to be matched`]
				]],
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `the string to be substituted for each match`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `if the regular expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `String`]
			]
		]],
		[/* method */ 'replaceFirst(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Replaces the first substring of this string that matches the given `],
				[/* reference */ 'r', `java.regex.Pattern#sum`],
				[/* text */ 't', ` with the
 given replacement.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* text */ 't', `str`],
					[/* inline code block */ 'i', `.replaceFirst(`],
					[/* text */ 't', `regex`],
					[/* inline code block */ 'i', `,`],
					[/* text */ 't', `repl`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `
 yields exactly the same result as the expression

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Pattern.compile(regex).matcher(str).replaceFirst(repl)`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in the
 replacement string may cause the results to be different than if it were
 being treated as a literal replacement string; see
 `],
					[/* reference */ 'r', `java.regex.Matcher#replaceFirst(java.lang.String)`],
					[/* text */ 't', `.
 Use `],
					[/* reference */ 'r', `java.regex.Matcher#quoteReplacement(java.lang.String)`],
					[/* text */ 't', ` to suppress the special
 meaning of these characters, if desired.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `the regular expression to which this string is to be matched`]
				]],
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `the string to be substituted for the first match`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `if the regular expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `String`]
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
				[/* reference */ 'r', `java.lang.String`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'strip()', [
			[/* method description */
				[/* text */ 't', `Returns a string whose value is this string, with all leading
 and trailing `],
				[/* reference */ 'r', `.Character#isWhitespace(int)`],
				[/* text */ 't', `
 removed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object represents an empty string,
 or if all code points in this string are
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `, then an empty string
 is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, returns a substring of this string beginning with the first
 code point that is not a `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `
 up to and including the last code point that is not a
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method may be used to strip
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', ` from
 the beginning and end of a string.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string whose value is this string, with all leading
          and trailing white space removed`]
			]
		]],
		[/* method */ 'stripIndent()', [
			[/* method description */
				[/* text */ 't', `Returns a string whose value is this string, with incidental
 `],
				[/* reference */ 'r', `.Character#isWhitespace(int)`],
				[/* text */ 't', ` removed from
 the beginning and end of every line.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Incidental `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `
 is often present in a text block to align the content with the opening
 delimiter. For example, in the following code, dots represent incidental
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` String html = """
 ..............<html>
 ..............    <body>
 ..............        <p>Hello, world</p>
 ..............    </body>
 ..............</html>
 ..............""";
 `]
				]],
				[/* text */ 't', `
 This method treats the incidental
 `],
				[/* reference */ 'r', `.Character#isWhitespace(int)`],
				[/* text */ 't', ` as indentation to be
 stripped, producing a string that preserves the relative indentation of
 the content. Using | to visualize the start of each line of the string:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` |<html>
 |    <body>
 |        <p>Hello, world</p>
 |    </body>
 |</html>
 `]
				]],
				[/* text */ 't', `
 First, the individual lines of this string are extracted. A `],
				[/* text */ 't', `line`],
				[/* text */ 't', `
 is a sequence of zero or more characters followed by either a line
 terminator or the end of the string.
 If the string has at least one line terminator, the last line consists
 of the characters between the last terminator and the end of the string.
 Otherwise, if the string has no terminators, the last line is the start
 of the string to the end of the string, in other words, the entire
 string.
 A line does not include the line terminator.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Then, the `],
					[/* text */ 't', `minimum indentation`],
					[/* text */ 't', ` (min) is determined as follows:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `For each non-blank line (as defined by `],
							[/* reference */ 'r', `#isBlank()`, `isBlank()`],
							[/* text */ 't', `),
   the leading `],
							[/* reference */ 'r', `.Character#isWhitespace(int)`],
							[/* text */ 't', `
   characters are counted.`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `The leading `],
							[/* reference */ 'r', `.Character#isWhitespace(int)`],
							[/* text */ 't', `
   characters on the last line are also counted even if
   `],
							[/* reference */ 'r', `#isBlank()`, `blank`],
							[/* text */ 't', `.`]
						]]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* text */ 't', `min`],
					[/* text */ 't', ` value is the smallest of these counts.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For each `],
					[/* reference */ 'r', `#isBlank()`, `non-blank`],
					[/* text */ 't', ` line, `],
					[/* text */ 't', `min`],
					[/* text */ 't', ` leading
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', ` characters are
 removed, and any trailing `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', ` characters are removed. `],
					[/* reference */ 'r', `#isBlank()`, `Blank`],
					[/* text */ 't', ` lines
 are replaced with the empty string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Finally, the lines are joined into a new string, using the LF character
 `],
					[/* inline code block */ 'i', `"\\n"`],
					[/* text */ 't', ` (U+000A) to separate lines.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `string with incidental indentation removed and line
         terminators normalized`]
			]
		]],
		[/* method */ 'stripLeading()', [
			[/* method description */
				[/* text */ 't', `Returns a string whose value is this string, with all leading
 `],
				[/* reference */ 'r', `.Character#isWhitespace(int)`],
				[/* text */ 't', ` removed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object represents an empty string,
 or if all code points in this string are
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `, then an empty string
 is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, returns a substring of this string beginning with the first
 code point that is not a `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `
 up to and including the last code point of this string.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method may be used to trim
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', ` from
 the beginning of a string.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string whose value is this string, with all leading white
          space removed`]
			]
		]],
		[/* method */ 'stripTrailing()', [
			[/* method description */
				[/* text */ 't', `Returns a string whose value is this string, with all trailing
 `],
				[/* reference */ 'r', `.Character#isWhitespace(int)`],
				[/* text */ 't', ` removed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object represents an empty string,
 or if all characters in this string are
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `, then an empty string
 is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, returns a substring of this string beginning with the first
 code point of this string up to and including the last code point
 that is not a `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method may be used to trim
 `],
					[/* reference */ 'r', `.Character#isWhitespace(int)`],
					[/* text */ 't', ` from
 the end of a string.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string whose value is this string, with all trailing white
          space removed`]
			]
		]],
		[/* method */ 'substring(int)', [
			[/* method description */
				[/* text */ 't', `Returns a string that is a substring of this string. The
 substring begins with the character at the specified index and
 extends to the end of this string. `],
				[/* block */ 'b', `
 Examples:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` "unhappy".substring(2) returns "happy"
 "Harbison".substring(3) returns "bison"
 "emptiness".substring(9) returns "" (an empty string)
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the beginning index, inclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if
             `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is negative or larger than the
             length of this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the specified substring.`]
			]
		]],
		[/* method */ 'substring(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a string that is a substring of this string. The
 substring begins at the specified `],
				[/* inline code block */ 'i', `beginIndex`],
				[/* text */ 't', ` and
 extends to the character at index `],
				[/* inline code block */ 'i', `endIndex - 1`],
				[/* text */ 't', `.
 Thus the length of the substring is `],
				[/* inline code block */ 'i', `endIndex-beginIndex`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Examples:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` "hamburger".substring(4, 8) returns "urge"
 "smiles".substring(1, 5) returns "mile"
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the beginning index, inclusive.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the ending index, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the
             `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is negative, or
             `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', ` is larger than the length of
             this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object, or
             `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is larger than
             `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the specified substring.`]
			]
		]],
		[/* method */ 'toLowerCase()', [
			[/* method description */
				[/* text */ 't', `Converts all of the characters in this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` to lower
 case using the rules of the default locale. This is equivalent to calling
 `],
				[/* inline code block */ 'i', `toLowerCase(Locale.getDefault())`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method is locale sensitive, and may produce unexpected
 results if used for strings that are intended to be interpreted locale
 independently.
 Examples are programming language identifiers, protocol keys, and HTML
 tags.
 For instance, `],
					[/* inline code block */ 'i', `"TITLE".toLowerCase()`],
					[/* text */ 't', ` in a Turkish locale
 returns `],
					[/* inline code block */ 'i', `"t\\u0131tle"`],
					[/* text */ 't', `, where '\\u0131' is the
 LATIN SMALL LETTER DOTLESS I character.
 To obtain correct results for locale insensitive strings, use
 `],
					[/* inline code block */ 'i', `toLowerCase(Locale.ROOT)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, converted to lowercase.`]
			]
		]],
		[/* method */ 'toLowerCase(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Converts all of the characters in this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` to lower
 case using the rules of the given `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `.  Case mapping is based
 on the Unicode Standard version specified by the `],
				[/* reference */ 'r', `java.lang.Character`],
				[/* text */ 't', `
 class. Since case mappings are not always 1:1 char mappings, the resulting
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` may be a different length than the original `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Examples of lowercase  mappings are in the following table:
 `],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Language Code of Locale`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Upper Case`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Lower Case`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Description`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tr (Turkish)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `\\u0130`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `\\u0069`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `capital letter I with dot above -> small letter i`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tr (Turkish)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `\\u0049`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `\\u0131`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `capital letter I -> small letter dotless i `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `(all)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `French Fries`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `french fries`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `lowercased all chars in String`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `(all)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `
       ΙΧΘΥΣ`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `ιχθυσ`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `lowercased all chars in String`]
							]]
						]]
					]],
				],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `use the case transformation rules for this locale`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, converted to lowercase.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `This object (which is already a string!) is itself returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string itself.`]
			]
		]],
		[/* method */ 'toUpperCase()', [
			[/* method description */
				[/* text */ 't', `Converts all of the characters in this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` to upper
 case using the rules of the default locale. This method is equivalent to
 `],
				[/* inline code block */ 'i', `toUpperCase(Locale.getDefault())`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method is locale sensitive, and may produce unexpected
 results if used for strings that are intended to be interpreted locale
 independently.
 Examples are programming language identifiers, protocol keys, and HTML
 tags.
 For instance, `],
					[/* inline code block */ 'i', `"title".toUpperCase()`],
					[/* text */ 't', ` in a Turkish locale
 returns `],
					[/* inline code block */ 'i', `"T\\u0130TLE"`],
					[/* text */ 't', `, where '\\u0130' is the
 LATIN CAPITAL LETTER I WITH DOT ABOVE character.
 To obtain correct results for locale insensitive strings, use
 `],
					[/* inline code block */ 'i', `toUpperCase(Locale.ROOT)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, converted to uppercase.`]
			]
		]],
		[/* method */ 'toUpperCase(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Converts all of the characters in this `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` to upper
 case using the rules of the given `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `. Case mapping is based
 on the Unicode Standard version specified by the `],
				[/* reference */ 'r', `java.lang.Character`],
				[/* text */ 't', `
 class. Since case mappings are not always 1:1 char mappings, the resulting
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` may be a different length than the original `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Examples of locale-sensitive and 1:M case mappings are in the following table.

 `],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Language Code of Locale`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Lower Case`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Upper Case`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Description`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tr (Turkish)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `\\u0069`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `\\u0130`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `small letter i -> capital letter I with dot above`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `tr (Turkish)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `\\u0131`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `\\u0049`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `small letter dotless i -> capital letter I`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `(all)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `\\u00df`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `\\u0053 \\u0053`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `small letter sharp s -> two letters: SS`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table cell */ 'tbc', [
								[/* text */ 't', `(all)`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Fahrvergnügen`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `FAHRVERGNÜGEN`]
							]],
							[/* table cell */ 'tbc']
						]]
					]],
				],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `use the case transformation rules for this locale`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, converted to uppercase.`]
			]
		]],
		[/* method */ 'translateEscapes()', [
			[/* method description */
				[/* text */ 't', `Returns a string whose value is this string, with escape sequences
 translated as if in a string literal.
 `],
				[/* block */ 'b', `
 Escape sequences are translated as follows;
 `],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Escape`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Name`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Translation`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\b`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `backspace`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+0008`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\t`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `horizontal tab`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+0009`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\n`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `line feed`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+000A`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\f`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `form feed`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+000C`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\r`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `carriage return`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+000D`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\s`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `space`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+0020`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\"`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `double quote`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+0022`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\'`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `single quote`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+0027`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\\\`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `backslash`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+005C`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\0 - \\377`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `octal escape`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `code point equivalents`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `\\<line-terminator>`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `continuation`]
							]],
							[/* table cell */ 'tbc', [
								[/* text */ 't', `discard`]
							]]
						]]
					]],
				],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `when an escape sequence is malformed.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `String with escape sequences translated.`]
			]
		]],
		[/* method */ 'trim()', [
			[/* method description */
				[/* text */ 't', `Returns a string whose value is this string, with all leading
 and trailing space removed, where space is defined
 as any character whose codepoint is less than or equal to
 `],
				[/* inline code block */ 'i', `'U+0020'`],
				[/* text */ 't', ` (the space character).
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object represents an empty character
 sequence, or the first and last characters of character sequence
 represented by this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object both have codes
 that are not space (as defined above), then a
 reference to this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, if all characters in this string are space (as
 defined above), then a  `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object representing an
 empty string is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Otherwise, let `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` be the index of the first character in the
 string whose code is not a space (as defined above) and let
 `],
					[/* text */ 't', `m`],
					[/* text */ 't', ` be the index of the last character in the string whose code
 is not a space (as defined above). A `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `
 object is returned, representing the substring of this string that
 begins with the character at index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` and ends with the
 character at index `],
					[/* text */ 't', `m`],
					[/* text */ 't', `-that is, the result of
 `],
					[/* inline code block */ 'i', `this.substring(k, m + 1)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This method may be used to trim space (as defined above) from
 the beginning and end of a string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string whose value is this string, with all leading
          and trailing space removed, or this string if it
          has no leading or trailing space.`]
			]
		]],
		[/* method */ 'split(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Splits this string around matches of the given `],
				[/* reference */ 'r', `java.regex.Pattern#sum`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works as if by invoking the two-argument `],
					[/* reference */ 'r', `#split(java.lang.String,int)`, `split`],
					[/* text */ 't', ` method with the given expression and a limit
 argument of zero.  Trailing empty strings are therefore not included in
 the resulting array.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The string `],
					[/* inline code block */ 'i', `"boo:and:foo"`],
					[/* text */ 't', `, for example, yields the following
 results with these expressions:

 `]
				]],
				[/* block */ 'b', [
					[/* table */ 'tbl',
						[/* caption */ 'tc'],
						[/* table header */ 'th', [
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `Regex`]
								]],
								[/* table header cell */ 'thc', [
									[/* text */ 't', `Result`]
								]]
							]]
						]],
						[/* table body */ 'tb', [
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `:`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "boo", "and", "foo" }`]
								]]
							]],
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `o`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "b", "", ":and:f" }`]
								]]
							]]
						]],
					]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `the delimiting regular expression`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `if the regular expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of strings computed by splitting this string
          around matches of the given regular expression`]
			]
		]],
		[/* method */ 'split(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Splits this string around matches of the given
 `],
				[/* reference */ 'r', `java.regex.Pattern#sum`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` The array returned by this method contains each substring of this
 string that is terminated by another substring that matches the given
 expression or is terminated by the end of the string.  The substrings in
 the array are in the order in which they occur in this string.  If the
 expression does not match any part of the input then the resulting array
 has just one element, namely this string.

 `],
				[/* block */ 'b', ` When there is a positive-width match at the beginning of this
 string then an empty leading substring is included at the beginning
 of the resulting array. A zero-width match at the beginning however
 never produces such empty leading substring.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `limit`],
					[/* text */ 't', ` parameter controls the number of times the
 pattern is applied and therefore affects the length of the resulting
 array.
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `
    If the `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` is positive then the pattern will be applied
    at most `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` - 1 times, the array's length will be
    no greater than `],
							[/* text */ 't', `limit`],
							[/* text */ 't', `, and the array's last entry will contain
    all input beyond the last matched delimiter.`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `
    If the `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` is zero then the pattern will be applied as
    many times as possible, the array can have any length, and trailing
    empty strings will be discarded.`]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', `
    If the `],
							[/* text */ 't', `limit`],
							[/* text */ 't', ` is negative then the pattern will be applied
    as many times as possible and the array can have any length.`]
						]]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` The string `],
					[/* inline code block */ 'i', `"boo:and:foo"`],
					[/* text */ 't', `, for example, yields the
 following results with these parameters:

 `]
				]],
				[/* block */ 'b', [
					[/* table */ 'tbl',
						[/* caption */ 'tc'],
						[/* table header */ 'th', [
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `Regex`]
								]],
								[/* table header cell */ 'thc', [
									[/* text */ 't', `Limit`]
								]],
								[/* table header cell */ 'thc', [
									[/* text */ 't', `Result`]
								]]
							]]
						]],
						[/* table body */ 'tb', [
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', 1, 3, [
									[/* text */ 't', `:`]
								]],
								[/* table header cell */ 'thc', [
									[/* text */ 't', `2`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "boo", "and:foo" }`]
								]]
							]],
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `5`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "boo", "and", "foo" }`]
								]]
							]],
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `-2`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "boo", "and", "foo" }`]
								]]
							]],
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', 1, 3, [
									[/* text */ 't', `o`]
								]],
								[/* table header cell */ 'thc', [
									[/* text */ 't', `5`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "b", "", ":and:f", "", "" }`]
								]]
							]],
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `-2`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "b", "", ":and:f", "", "" }`]
								]]
							]],
							[/* table row */ 'tr', [
								[/* table header cell */ 'thc', [
									[/* text */ 't', `0`]
								]],
								[/* table cell */ 'tbc', [
									[/* inline code block */ 'i', `{ "b", "", ":and:f" }`]
								]]
							]]
						]],
					]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* text */ 't', `str.`],
					[/* inline code block */ 'i', `split(`],
					[/* text */ 't', `regex`],
					[/* inline code block */ 'i', `,`],
					[/* text */ 't', ` `],
					[/* text */ 't', `n`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `
 yields the same result as the expression

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Pattern.compile(regex).split(str, n)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'regex', [/* parameter description */
					[/* text */ 't', `the delimiting regular expression`]
				]],
				[/* parameter */ 'limit', [/* parameter description */
					[/* text */ 't', `the result threshold, as described above`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.regex.PatternSyntaxException', [/* throw description */
					[/* text */ 't', `if the regular expression's syntax is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the array of strings computed by splitting this string
          around matches of the given regular expression`]
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
				[/* reference */ 'r', `java.lang.String`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'chars()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` zero-extending the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values
 from this sequence.  Any char which maps to a `],
				[/* text */ 't', `surrogate code point`],
				[/* text */ 't', ` is passed through uninterpreted.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an IntStream of char values from this sequence`]
			]
		]],
		[/* method */ 'codePoints()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of code point values from this sequence.  Any surrogate
 pairs encountered in the sequence are combined as if by `],
				[/* reference */ 'r', `.Character#toCodePoint(char,char)`],
				[/* text */ 't', ` and the result is passed
 to the stream. Any other code units, including ordinary BMP characters,
 unpaired surrogates, and undefined code units, are zero-extended to
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values which are then passed to the stream.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an IntStream of Unicode code points from this sequence`]
			]
		]],
		[/* method */ 'lines()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of lines extracted from this string,
 separated by line terminators.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* text */ 't', `line terminator`],
					[/* text */ 't', ` is one of the following:
 a line feed character `],
					[/* inline code block */ 'i', `"\\n"`],
					[/* text */ 't', ` (U+000A),
 a carriage return character `],
					[/* inline code block */ 'i', `"\\r"`],
					[/* text */ 't', ` (U+000D),
 or a carriage return followed immediately by a line feed
 `],
					[/* inline code block */ 'i', `"\\r\\n"`],
					[/* text */ 't', ` (U+000D U+000A).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A `],
					[/* text */ 't', `line`],
					[/* text */ 't', ` is either a sequence of zero or more characters
 followed by a line terminator, or it is a sequence of one or
 more characters followed by the end of the string. A
 line does not include the line terminator.
 `]
				]],
				[/* block */ 'b', `
 The stream returned by this method contains the lines from
 this string in the order in which they occur.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the stream of lines extracted from this string`]
			]
		]],
		[/* method */ 'intern()', [
			[/* method description */
				[/* text */ 't', `Returns a canonical representation for the string object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A pool of strings, initially empty, is maintained privately by the
 class `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When the intern method is invoked, if the pool already contains a
 string equal to this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object as determined by
 the `],
					[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(Object)`],
					[/* text */ 't', ` method, then the string from the pool is
 returned. Otherwise, this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is added to the
 pool and a reference to this `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` object is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 It follows that for any two strings `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `t`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `s.intern() == t.intern()`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `
 if and only if `],
					[/* inline code block */ 'i', `s.equals(t)`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 All literal strings and string-valued constant expressions are
 interned. String literals are defined in section `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.10.5`, `3.10.5`],
					[/* text */ 't', ` of the
 `],
					[/* text */ 't', `The Java Language Specification`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string that has the same contents as this string, but is
          guaranteed to be from a pool of unique strings.`]
			]
		]],
		[/* method */ 'copyValueOf(char[])', [
			[/* method description */
				[/* text */ 't', `Equivalent to `],
				[/* reference */ 'r', `#valueOf(char%5B%5D)`, `valueOf(char[])`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'data', [/* parameter description */
					[/* text */ 't', `the character array.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains the characters of the
          character array.`]
			]
		]],
		[/* method */ 'copyValueOf(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Equivalent to `],
				[/* reference */ 'r', `#valueOf(char%5B%5D,int,int)`, `valueOf(char[], int, int)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'data', [/* parameter description */
					[/* text */ 't', `the character array.`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `initial offset of the subarray.`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `length of the subarray.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is
          negative, or `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset+count`],
					[/* text */ 't', ` is larger than
          `],
					[/* inline code block */ 'i', `data.length`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains the characters of the
          specified subarray of the character array.`]
			]
		]],
		[/* method */ 'format(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Returns a formatted string using the specified format string and
 arguments.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale always used is the one returned by `],
					[/* reference */ 'r', `java.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` with
 `],
					[/* reference */ 'r', `java.Locale.Category#FORMAT`],
					[/* text */ 't', ` category specified.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.Formatter#syntax`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The number of arguments is
         variable and may be zero.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.
         The behaviour on a
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` argument depends on the `],
					[/* reference */ 'r', `java.Formatter#syntax`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* reference */ 'r', `java.Formatter#detail`],
					[/* text */ 't', ` section of the
          formatter class specification.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A formatted string`]
			]
		]],
		[/* method */ 'format(java.util.Locale,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Returns a formatted string using the specified locale, format string,
 and arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.Formatter#syntax`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The number of arguments is
         variable and may be zero.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.
         The behaviour on a
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` argument depends on the
         `],
					[/* reference */ 'r', `java.Formatter#syntax`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* reference */ 'r', `java.Formatter#detail`],
					[/* text */ 't', ` section of the
          formatter class specification`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A formatted string`]
			]
		]],
		[/* method */ 'join(java.lang.CharSequence,java.lang.CharSequence...)', [
			[/* method description */
				[/* text */ 't', `Returns a new String composed of copies of the
 `],
				[/* inline code block */ 'i', `CharSequence elements`],
				[/* text */ 't', ` joined together with a copy of
 the specified `],
				[/* inline code block */ 'i', `delimiter`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example,
 `],
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `String message = String.join("-", "Java", "is", "cool");
     // message returned is: "Java-is-cool"`]
					]]
				]],
				[/* text */ 't', `

 Note that if an element is null, then `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` is added.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `the delimiter that separates each element`]
				]],
				[/* parameter */ 'elements', [/* parameter description */
					[/* text */ 't', `the elements to join together.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `delimiter`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `elements`],
					[/* text */ 't', `
         is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that is composed of the `],
				[/* inline code block */ 'i', `elements`],
				[/* text */ 't', `
         separated by the `],
				[/* inline code block */ 'i', `delimiter`]
			]
		]],
		[/* method */ 'join(java.lang.CharSequence,java.lang.Iterable)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` composed of copies of the
 `],
				[/* inline code block */ 'i', `CharSequence elements`],
				[/* text */ 't', ` joined together with a copy of the
 specified `],
				[/* inline code block */ 'i', `delimiter`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example,
 `],
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `List<String> strings = List.of("Java", "is", "cool");
     String message = String.join(" ", strings);
     // message returned is: "Java is cool"

     Set<String> strings =
         new LinkedHashSet<>(List.of("Java", "is", "very", "cool"));
     String message = String.join("-", strings);
     // message returned is: "Java-is-very-cool"`]
					]]
				]],
				[/* text */ 't', `

 Note that if an individual element is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` is added.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `a sequence of characters that is used to separate each
         of the `],
					[/* inline code block */ 'i', `elements`],
					[/* text */ 't', ` in the resulting `],
					[/* inline code block */ 'i', `String`]
				]],
				[/* parameter */ 'elements', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `Iterable`],
					[/* text */ 't', ` that will have its `],
					[/* inline code block */ 'i', `elements`],
					[/* text */ 't', `
         joined together.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `delimiter`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `elements`],
					[/* text */ 't', `
         is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that is composed from the `],
				[/* inline code block */ 'i', `elements`],
				[/* text */ 't', `
         argument`]
			]
		]],
		[/* method */ 'valueOf(boolean)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `if the argument is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, a string equal to
          `],
				[/* inline code block */ 'i', `"true"`],
				[/* text */ 't', ` is returned; otherwise, a string equal to
          `],
				[/* inline code block */ 'i', `"false"`],
				[/* text */ 't', ` is returned.`]
			]
		]],
		[/* method */ 'valueOf(char)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `
 argument.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string of length `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', ` containing
          as its single character the argument `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'valueOf(char[])', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array
 argument. The contents of the character array are copied; subsequent
 modification of the character array does not affect the returned
 string.`]
			],
			[/* parameters */
				[/* parameter */ 'data', [/* parameter description */
					[/* text */ 't', `the character array.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains the characters of the
          character array.`]
			]
		]],
		[/* method */ 'valueOf(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of a specific subarray of the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument is the index of the first
 character of the subarray. The `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` argument
 specifies the length of the subarray. The contents of the subarray
 are copied; subsequent modification of the character array does not
 affect the returned string.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'data', [/* parameter description */
					[/* text */ 't', `the character array.`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `initial offset of the subarray.`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `length of the subarray.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` is
          negative, or `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is negative, or
          `],
					[/* inline code block */ 'i', `offset+count`],
					[/* text */ 't', ` is larger than
          `],
					[/* inline code block */ 'i', `data.length`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains the characters of the
          specified subarray of the character array.`]
			]
		]],
		[/* method */ 'valueOf(double)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The representation is exactly the one returned by the
 `],
					[/* inline code block */ 'i', `Double.toString`],
					[/* text */ 't', ` method of one argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a  string representation of the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'valueOf(float)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The representation is exactly the one returned by the
 `],
					[/* inline code block */ 'i', `Float.toString`],
					[/* text */ 't', ` method of one argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'valueOf(int)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The representation is exactly the one returned by the
 `],
					[/* inline code block */ 'i', `Integer.toString`],
					[/* text */ 't', ` method of one argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'valueOf(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `if the argument is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, then a string equal to
          `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', `; otherwise, the value of
          `],
				[/* inline code block */ 'i', `obj.toString()`],
				[/* text */ 't', ` is returned.`]
			]
		]],
		[/* method */ 'valueOf(long)', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The representation is exactly the one returned by the
 `],
					[/* inline code block */ 'i', `Long.toString`],
					[/* text */ 't', ` method of one argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'getBytes(int,int,byte[],int)', [
			[/* method description */
				[/* text */ 't', `Copies characters from this string into the destination byte array. Each
 byte receives the 8 low-order bits of the corresponding character. The
 eight high-order bits of each character are not copied and do not
 participate in the transfer in any way.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The first character to be copied is at index `],
					[/* inline code block */ 'i', `srcBegin`],
					[/* text */ 't', `; the
 last character to be copied is at index `],
					[/* inline code block */ 'i', `srcEnd-1`],
					[/* text */ 't', `.  The total
 number of characters to be copied is `],
					[/* inline code block */ 'i', `srcEnd-srcBegin`],
					[/* text */ 't', `. The
 characters, converted to bytes, are copied into the subarray of `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', ` starting at index `],
					[/* inline code block */ 'i', `dstBegin`],
					[/* text */ 't', ` and ending at index:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', `     dstBegin + (srcEnd-srcBegin) - 1
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'srcBegin', [/* parameter description */
					[/* text */ 't', `Index of the first character in the string to copy`]
				]],
				[/* parameter */ 'srcEnd', [/* parameter description */
					[/* text */ 't', `Index after the last character in the string to copy`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]],
				[/* parameter */ 'dstBegin', [/* parameter description */
					[/* text */ 't', `The start offset in the destination array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If any of the following is true:
          `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcBegin`],
							[/* text */ 't', ` is negative
            `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcBegin`],
							[/* text */ 't', ` is greater than `],
							[/* inline code block */ 'i', `srcEnd`]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcEnd`],
							[/* text */ 't', ` is greater than the length of this String
            `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `dstBegin`],
							[/* text */ 't', ` is negative
            `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `dstBegin+(srcEnd-srcBegin)`],
							[/* text */ 't', ` is larger than `],
							[/* inline code block */ 'i', `dst.length`]
						]]
					]]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getChars(int,int,char[],int)', [
			[/* method description */
				[/* text */ 't', `Copies characters from this string into the destination character
 array.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The first character to be copied is at index `],
					[/* inline code block */ 'i', `srcBegin`],
					[/* text */ 't', `;
 the last character to be copied is at index `],
					[/* inline code block */ 'i', `srcEnd-1`],
					[/* text */ 't', `
 (thus the total number of characters to be copied is
 `],
					[/* inline code block */ 'i', `srcEnd-srcBegin`],
					[/* text */ 't', `). The characters are copied into the
 subarray of `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', ` starting at index `],
					[/* inline code block */ 'i', `dstBegin`],
					[/* text */ 't', `
 and ending at index:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', `     dstBegin + (srcEnd-srcBegin) - 1
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'srcBegin', [/* parameter description */
					[/* text */ 't', `index of the first character in the string
                        to copy.`]
				]],
				[/* parameter */ 'srcEnd', [/* parameter description */
					[/* text */ 't', `index after the last character in the string
                        to copy.`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `the destination array.`]
				]],
				[/* parameter */ 'dstBegin', [/* parameter description */
					[/* text */ 't', `the start offset in the destination array.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If any of the following
            is true:
            `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcBegin`],
							[/* text */ 't', ` is negative.
            `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcBegin`],
							[/* text */ 't', ` is greater than `],
							[/* inline code block */ 'i', `srcEnd`]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcEnd`],
							[/* text */ 't', ` is greater than the length of this
                string
            `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `dstBegin`],
							[/* text */ 't', ` is negative
            `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `dstBegin+(srcEnd-srcBegin)`],
							[/* text */ 't', ` is larger than
                `],
							[/* inline code block */ 'i', `dst.length`]
						]]
					]]
				]]
			],
			/* return */ UDF
		]]
	],
]);
