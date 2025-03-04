import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.charset.Charset', [
	[/* class description */
		[/* text */ 't', `A named mapping between sequences of sixteen-bit Unicode `],
		[/* text */ 't', `code units`],
		[/* text */ 't', ` and sequences of
 bytes.  This class defines methods for creating decoders and encoders and
 for retrieving the various names associated with a charset.  Instances of
 this class are immutable.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` This class also defines static methods for testing whether a particular
 charset is supported, for locating charset instances by name, and for
 constructing a map that contains every charset for which support is
 available in the current Java virtual machine.  Support for new charsets can
 be added via the service-provider interface defined in the `],
			[/* reference */ 'r', `java.nio.charset.spi.CharsetProvider`],
			[/* text */ 't', ` class.

 `]
		]],
		[/* block */ 'b', ` All of the methods defined in this class are safe for use by multiple
 concurrent threads.


 `],
		[/* block */ 'b', [
			[/* text */ 't', `Charset names`]
		]],
		[/* block */ 'b', ` Charsets are named by strings composed of the following characters:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The uppercase letters `],
				[/* inline code block */ 'i', `'A'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'Z'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u0041'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u005a'`],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The lowercase letters `],
				[/* inline code block */ 'i', `'a'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'z'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u0061'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u007a'`],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The digits `],
				[/* inline code block */ 'i', `'0'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'9'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u0030'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u0039'`],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The dash character `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u002d'`],
				[/* text */ 't', `, `],
				[/* text */ 't', `HYPHEN-MINUS`, 'small'],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The plus character `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u002b'`],
				[/* text */ 't', `, `],
				[/* text */ 't', `PLUS SIGN`, 'small'],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The period character `],
				[/* inline code block */ 'i', `'.'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u002e'`],
				[/* text */ 't', `, `],
				[/* text */ 't', `FULL STOP`, 'small'],
				[/* text */ 't', `),

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The colon character `],
				[/* inline code block */ 'i', `':'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u003a'`],
				[/* text */ 't', `, `],
				[/* text */ 't', `COLON`, 'small'],
				[/* text */ 't', `), and

   `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The underscore character `],
				[/* inline code block */ 'i', `'_'`],
				[/* text */ 't', `
        (`],
				[/* inline code block */ 'i', `'\\u005f'`],
				[/* text */ 't', `, `],
				[/* text */ 't', `LOW LINE`, 'small'],
				[/* text */ 't', `).

 `]
			]]
		]],
		[/* text */ 't', `

 A charset name must begin with either a letter or a digit.  The empty string
 is not a legal charset name.  Charset names are not case-sensitive; that is,
 case is always ignored when comparing charset names.  Charset names
 generally follow the conventions documented in `],
		[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2278.txt`, `RFC 2278: IANA Charset Registration Procedures`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Every charset has a `],
			[/* text */ 't', `canonical name`],
			[/* text */ 't', ` and may also have one or more
 `],
			[/* text */ 't', `aliases`],
			[/* text */ 't', `.  The canonical name is returned by the `],
			[/* reference */ 'r', `#name()`, `name`],
			[/* text */ 't', ` method
 of this class.  Canonical names are, by convention, usually in upper case.
 The aliases of a charset are returned by the `],
			[/* reference */ 'r', `#aliases()`, `aliases`],
			[/* text */ 't', `
 method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Some charsets have an historical name that is defined for compatibility with previous versions of the Java platform.`],
			[/* text */ 't', `  A charset's
 historical name is either its canonical name or one of its aliases.  The
 historical name is returned by the `],
			[/* inline code block */ 'i', `getEncoding()`],
			[/* text */ 't', ` methods of the
 `],
			[/* reference */ 'r', `java.nio.InputStreamReader#getEncoding()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.nio.OutputStreamWriter#getEncoding()`],
			[/* text */ 't', ` classes.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ``],
			[/* text */ 't', `If a charset listed in the `],
			[/* external link */ 'a', `http://www.iana.org/assignments/character-sets`, `IANA Charset Registry`],
			[/* text */ 't', ` is supported by an implementation of the Java platform then
 its canonical name must be the name listed in the registry. Many charsets
 are given more than one name in the registry, in which case the registry
 identifies one of the names as `],
			[/* text */ 't', `MIME-preferred`],
			[/* text */ 't', `.  If a charset has more
 than one registry name then its canonical name must be the MIME-preferred
 name and the other names in the registry must be valid aliases.  If a
 supported charset is not listed in the IANA registry then its canonical name
 must begin with one of the strings `],
			[/* inline code block */ 'i', `"X-"`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `"x-"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ` The IANA charset registry does change over time, and so the canonical
 name and the aliases of a particular charset may also change over time.  To
 ensure compatibility it is recommended that no alias ever be removed from a
 charset, and that if the canonical name of a charset is changed then its
 previous canonical name be made into an alias.


 `],
		[/* block */ 'b', [
			[/* text */ 't', `Standard charsets`]
		]],
		[/* block */ 'b', ` Every implementation of the Java platform is required to support the
 following standard charsets.  Consult the release documentation for your
 implementation to see if any other charsets are supported.  The behavior
 of such optional charsets may differ between implementations.

 `],
		[/* block */ 'b', [
			[/* table */ 'tbl',
				[/* caption */ 'tc'],
				[/* table header */ 'th', [
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* text */ 't', `Charset`]
						]],
						[/* table header cell */ 'thc', [
							[/* text */ 't', `Description`]
						]]
					]]
				]],
				[/* table body */ 'tb', [
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `US-ASCII`]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Seven-bit ASCII, a.k.a. `],
							[/* inline code block */ 'i', `ISO646-US`],
							[/* text */ 't', `,
         a.k.a. the Basic Latin block of the Unicode character set`]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `ISO-8859-1`]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `ISO Latin Alphabet No. 1, a.k.a. `],
							[/* inline code block */ 'i', `ISO-LATIN-1`]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `UTF-8`]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Eight-bit UCS Transformation Format`]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `UTF-16BE`]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Sixteen-bit UCS Transformation Format,
         big-endian byte order`]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `UTF-16LE`]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Sixteen-bit UCS Transformation Format,
         little-endian byte order`]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `UTF-16`]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Sixteen-bit UCS Transformation Format,
         byte order identified by an optional byte-order mark`]
						]]
					]]
				]],
			]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `UTF-8`],
			[/* text */ 't', ` charset is specified by `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2279.txt`, `RFC 2279`],
			[/* text */ 't', `; the
 transformation format upon which it is based is specified in
 Amendment 2 of ISO 10646-1 and is also described in the `],
			[/* external link */ 'a', `http://www.unicode.org/standard/standard.html`, `Unicode Standard`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `UTF-16`],
			[/* text */ 't', ` charsets are specified by `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2781.txt`, `RFC 2781`],
			[/* text */ 't', `; the
 transformation formats upon which they are based are specified in
 Amendment 1 of ISO 10646-1 and are also described in the `],
			[/* external link */ 'a', `http://www.unicode.org/standard/standard.html`, `Unicode Standard`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `UTF-16`],
			[/* text */ 't', ` charsets use sixteen-bit quantities and are
 therefore sensitive to byte order.  In these encodings the byte order of a
 stream may be indicated by an initial `],
			[/* text */ 't', `byte-order mark`],
			[/* text */ 't', ` represented by
 the Unicode character `],
			[/* inline code block */ 'i', `'\\uFEFF'`],
			[/* text */ 't', `.  Byte-order marks are handled
 as follows:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` When decoding, the `],
					[/* inline code block */ 'i', `UTF-16BE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `UTF-16LE`],
					[/* text */ 't', `
   charsets interpret the initial byte-order marks as a `],
					[/* text */ 't', `ZERO-WIDTH NON-BREAKING SPACE`, 'small'],
					[/* text */ 't', `; when encoding, they do not write
   byte-order marks. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` When decoding, the `],
					[/* inline code block */ 'i', `UTF-16`],
					[/* text */ 't', ` charset interprets the
   byte-order mark at the beginning of the input stream to indicate the
   byte-order of the stream but defaults to big-endian if there is no
   byte-order mark; when encoding, it uses big-endian byte order and writes
   a big-endian byte-order mark. `]
				]]
			]]
		]],
		[/* text */ 't', `

 In any case, byte order marks occurring after the first element of an
 input sequence are not omitted since the same code is used to represent
 `],
		[/* text */ 't', `ZERO-WIDTH NON-BREAKING SPACE`, 'small'],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Every instance of the Java virtual machine has a default charset, which
 may or may not be one of the standard charsets.  The default charset is
 determined during virtual-machine startup and typically depends upon the
 locale and charset being used by the underlying operating system. `],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `java.nio.charset.StandardCharsets`],
			[/* text */ 't', ` class defines constants for each of the
 standard charsets.

 `]
		]],
		[/* block */ 'b', `Terminology`],
		[/* block */ 'b', [
			[/* text */ 't', ` The name of this class is taken from the terms used in
 `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2278.txt`, `RFC 2278`],
			[/* text */ 't', `.
 In that document a `],
			[/* text */ 't', `charset`],
			[/* text */ 't', ` is defined as the combination of
 one or more coded character sets and a character-encoding scheme.
 (This definition is confusing; some other software systems define
 `],
			[/* text */ 't', `charset`],
			[/* text */ 't', ` as a synonym for `],
			[/* text */ 't', `coded character set`],
			[/* text */ 't', `.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `coded character set`],
			[/* text */ 't', ` is a mapping between a set of abstract
 characters and a set of integers.  US-ASCII, ISO 8859-1,
 JIS X 0201, and Unicode are examples of coded character sets.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Some standards have defined a `],
			[/* text */ 't', `character set`],
			[/* text */ 't', ` to be simply a
 set of abstract characters without an associated assigned numbering.
 An alphabet is an example of such a character set.  However, the subtle
 distinction between `],
			[/* text */ 't', `character set`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `coded character set`],
			[/* text */ 't', `
 is rarely used in practice; the former has become a short form for the
 latter, including in the Java API specification.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `character-encoding scheme`],
			[/* text */ 't', ` is a mapping between one or more
 coded character sets and a set of octet (eight-bit byte) sequences.
 UTF-8, UTF-16, ISO 2022, and EUC are examples of
 character-encoding schemes.  Encoding schemes are often associated with
 a particular coded character set; UTF-8, for example, is used only to
 encode Unicode.  Some schemes, however, are associated with multiple
 coded character sets; EUC, for example, can be used to encode
 characters in a variety of Asian coded character sets.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` When a coded character set is used exclusively with a single
 character-encoding scheme then the corresponding charset is usually
 named for the coded character set; otherwise a charset is usually named
 for the encoding scheme and, possibly, the locale of the coded
 character sets that it supports.  Hence `],
			[/* inline code block */ 'i', `US-ASCII`],
			[/* text */ 't', ` is both the
 name of a coded character set and of the charset that encodes it, while
 `],
			[/* inline code block */ 'i', `EUC-JP`],
			[/* text */ 't', ` is the name of the charset that encodes the
 JIS X 0201, JIS X 0208, and JIS X 0212
 coded character sets for the Japanese language.

 `]
		]],
		[/* block */ 'b', ` The native character encoding of the Java programming language is
 UTF-16.  A charset in the Java platform therefore defines a mapping
 between sequences of sixteen-bit UTF-16 code units (that is, sequences
 of chars) and sequences of bytes. `]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String[])', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new charset with the given canonical name and alias
 set.`]
			],
			[/* parameters */
				[/* parameter */ 'canonicalName', [/* parameter description */
					[/* text */ 't', `The canonical name of this charset`]
				]],
				[/* parameter */ 'aliases', [/* parameter description */
					[/* text */ 't', `An array of this charset's aliases, or null if it has no aliases`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.charset.IllegalCharsetNameException', [/* throw description */
					[/* text */ 't', `If the canonical name or any of the aliases are illegal`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'contains(java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this charset contains the given charset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A charset `],
					[/* text */ 't', `C`],
					[/* text */ 't', ` is said to `],
					[/* text */ 't', `contain`],
					[/* text */ 't', ` a charset `],
					[/* text */ 't', `D`],
					[/* text */ 't', ` if,
 and only if, every character representable in `],
					[/* text */ 't', `D`],
					[/* text */ 't', ` is also
 representable in `],
					[/* text */ 't', `C`],
					[/* text */ 't', `.  If this relationship holds then it is
 guaranteed that every string that can be encoded in `],
					[/* text */ 't', `D`],
					[/* text */ 't', ` can also be
 encoded in `],
					[/* text */ 't', `C`],
					[/* text */ 't', ` without performing any replacements.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` That `],
					[/* text */ 't', `C`],
					[/* text */ 't', ` contains `],
					[/* text */ 't', `D`],
					[/* text */ 't', ` does not imply that each character
 representable in `],
					[/* text */ 't', `C`],
					[/* text */ 't', ` by a particular byte sequence is represented
 in `],
					[/* text */ 't', `D`],
					[/* text */ 't', ` by the same byte sequence, although sometimes this is the
 case.

 `]
				]],
				[/* block */ 'b', ` Every charset contains itself.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method computes an approximation of the containment relation:
 If it returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the given charset is known to be
 contained by this charset; if it returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, however, then
 it is not necessarily the case that the given charset is not contained
 in this charset.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `The given charset`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given charset is contained in this charset`]
			]
		]],
		[/* method */ 'newDecoder()', [
			[/* method description */
				[/* text */ 't', `Constructs a new decoder for this charset.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new decoder for this charset`]
			]
		]],
		[/* method */ 'newEncoder()', [
			[/* method description */
				[/* text */ 't', `Constructs a new encoder for this charset.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this charset does not support encoding`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new encoder for this charset`]
			]
		]],
		[/* method */ 'canEncode()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this charset supports encoding.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Nearly all charsets support encoding.  The primary exceptions are
 special-purpose `],
					[/* text */ 't', `auto-detect`],
					[/* text */ 't', ` charsets whose decoders can determine
 which of several possible encoding schemes is in use by examining the
 input byte sequence.  Such charsets do not support encoding because
 there is no way to determine which encoding should be used on output.
 Implementations of such charsets should override this method to return
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this charset supports encoding`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this object is equal to another.

 `],
				[/* block */ 'b', ` Two charsets are equal if, and only if, they have the same canonical
 names.  A charset is never equal to any other type of object.  `]
			],
			[/* parameters */
				[/* parameter */ 'ob', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this charset is equal to the
          given object`]
			]
		]],
		[/* method */ 'isRegistered()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this charset is registered in the `],
				[/* external link */ 'a', `http://www.iana.org/assignments/character-sets`, `IANA Charset Registry`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this charset is known by its
          implementor to be registered with the IANA`]
			]
		]],
		[/* method */ 'compareTo(java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Compares this charset to another.

 `],
				[/* block */ 'b', ` Charsets are ordered by their canonical names, without regard to
 case. `]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The charset to which this charset is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer as this charset
         is less than, equal to, or greater than the specified charset`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hashcode for this charset.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An integer hashcode`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns this charset's canonical name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The canonical name of this charset`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this charset.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string describing this charset`]
			]
		]],
		[/* method */ 'encode(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Convenience method that encodes a string into bytes in this charset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method upon a charset `],
					[/* inline code block */ 'i', `cs`],
					[/* text */ 't', ` returns the
 same result as the expression

 `]
				]],
				[/* code block */ 'c', `     cs.encode(CharBuffer.wrap(s)); `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `The string to be encoded`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A byte buffer containing the encoded characters`]
			]
		]],
		[/* method */ 'encode(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Convenience method that encodes Unicode characters into bytes in this
 charset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method upon a charset `],
					[/* inline code block */ 'i', `cs`],
					[/* text */ 't', ` returns the
 same result as the expression

 `]
				]],
				[/* code block */ 'c', `     cs.newEncoder()
       .onMalformedInput(CodingErrorAction.REPLACE)
       .onUnmappableCharacter(CodingErrorAction.REPLACE)
       .encode(bb); `],
				[/* text */ 't', `

 except that it is potentially more efficient because it can cache
 encoders between successive invocations.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always replaces malformed-input and unmappable-character
 sequences with this charset's default replacement string.  In order to
 detect such sequences, use the `],
					[/* reference */ 'r', `.CharsetEncoder#encode(java.nio.CharBuffer)`],
					[/* text */ 't', ` method directly.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cb', [/* parameter description */
					[/* text */ 't', `The char buffer to be encoded`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A byte buffer containing the encoded characters`]
			]
		]],
		[/* method */ 'decode(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Convenience method that decodes bytes in this charset into Unicode
 characters.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method upon a charset `],
					[/* inline code block */ 'i', `cs`],
					[/* text */ 't', ` returns the
 same result as the expression

 `]
				]],
				[/* code block */ 'c', `     cs.newDecoder()
       .onMalformedInput(CodingErrorAction.REPLACE)
       .onUnmappableCharacter(CodingErrorAction.REPLACE)
       .decode(bb); `],
				[/* text */ 't', `

 except that it is potentially more efficient because it can cache
 decoders between successive invocations.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always replaces malformed-input and unmappable-character
 sequences with this charset's default replacement byte array.  In order
 to detect such sequences, use the `],
					[/* reference */ 'r', `.CharsetDecoder#decode(java.nio.ByteBuffer)`],
					[/* text */ 't', ` method directly.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bb', [/* parameter description */
					[/* text */ 't', `The byte buffer to be decoded`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A char buffer containing the decoded characters`]
			]
		]],
		[/* method */ 'aliases()', [
			[/* method description */
				[/* text */ 't', `Returns a set containing this charset's aliases.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An immutable set of this charset's aliases`]
			]
		]],
		[/* method */ 'displayName()', [
			[/* method description */
				[/* text */ 't', `Returns this charset's human-readable name for the default locale.

 `],
				[/* block */ 'b', ` The default implementation of this method simply returns this
 charset's canonical name.  Concrete subclasses of this class may
 override this method in order to provide a localized display name. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The display name of this charset in the default locale`]
			]
		]],
		[/* method */ 'displayName(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns this charset's human-readable name for the given locale.

 `],
				[/* block */ 'b', ` The default implementation of this method simply returns this
 charset's canonical name.  Concrete subclasses of this class may
 override this method in order to provide a localized display name. `]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `The locale for which the display name is to be retrieved`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The display name of this charset in the given locale`]
			]
		]],
		[/* method */ 'isSupported(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tells whether the named charset is supported.`]
			],
			[/* parameters */
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The name of the requested charset; may be either
         a canonical name or an alias`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.charset.IllegalCharsetNameException', [/* throw description */
					[/* text */ 't', `If the given charset name is illegal`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given `],
					[/* inline code block */ 'i', `charsetName`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, support for the named charset
          is available in the current Java virtual machine`]
			]
		]],
		[/* method */ 'defaultCharset()', [
			[/* method description */
				[/* text */ 't', `Returns the default charset of this Java virtual machine.

 `],
				[/* block */ 'b', ` The default charset is determined during virtual-machine startup and
 typically depends upon the locale and charset of the underlying
 operating system.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A charset object for the default charset`]
			]
		]],
		[/* method */ 'forName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a charset object for the named charset.`]
			],
			[/* parameters */
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The name of the requested charset; may be either
         a canonical name or an alias`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.charset.IllegalCharsetNameException', [/* throw description */
					[/* text */ 't', `If the given charset name is illegal`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given `],
					[/* inline code block */ 'i', `charsetName`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.nio.charset.UnsupportedCharsetException', [/* throw description */
					[/* text */ 't', `If no support for the named charset is available
          in this instance of the Java virtual machine`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A charset object for the named charset`]
			]
		]],
		[/* method */ 'availableCharsets()', [
			[/* method description */
				[/* text */ 't', `Constructs a sorted map from canonical charset names to charset objects.

 `],
				[/* block */ 'b', ` The map returned by this method will have one entry for each charset
 for which support is available in the current Java virtual machine.  If
 two or more supported charsets have the same canonical name then the
 resulting map will contain just one of them; which one it will contain
 is not specified. `],
				[/* block */ 'b', [
					[/* text */ 't', ` The invocation of this method, and the subsequent use of the
 resulting map, may cause time-consuming disk or network I/O operations
 to occur.  This method is provided for applications that need to
 enumerate all of the available charsets, for example to allow user
 charset selection.  This method is not used by the `],
					[/* reference */ 'r', `#forName(java.lang.String)`, `forName`],
					[/* text */ 't', ` method, which instead employs an efficient incremental lookup
 algorithm.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method may return different results at different times if new
 charset providers are dynamically made available to the current Java
 virtual machine.  In the absence of such changes, the charsets returned
 by this method are exactly those that can be retrieved via the `],
					[/* reference */ 'r', `#forName(java.lang.String)`, `forName`],
					[/* text */ 't', ` method.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An immutable, case-insensitive map from canonical charset names
         to charset objects`]
			]
		]]
	],
]);
