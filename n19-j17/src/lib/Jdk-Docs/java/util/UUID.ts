import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.UUID', [
	[/* class description */
		[/* text */ 't', `A class that represents an immutable universally unique identifier (UUID).
 A UUID represents a 128-bit value.

 `],
		[/* block */ 'b', ` There exist different variants of these global identifiers.  The methods
 of this class are for manipulating the Leach-Salz variant, although the
 constructors allow the creation of any variant of UUID (described below).

 `],
		[/* block */ 'b', ` The layout of a variant 2 (Leach-Salz) UUID is as follows:

 The most significant long consists of the following unsigned fields:
 `],
		[/* code block */ 'c', ` 0xFFFFFFFF00000000 time_low
 0x00000000FFFF0000 time_mid
 0x000000000000F000 version
 0x0000000000000FFF time_hi
 `],
		[/* text */ 't', `
 The least significant long consists of the following unsigned fields:
 `],
		[/* code block */ 'c', ` 0xC000000000000000 variant
 0x3FFF000000000000 clock_seq
 0x0000FFFFFFFFFFFF node
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The variant field contains a value which identifies the layout of the
 `],
			[/* inline code block */ 'i', `UUID`],
			[/* text */ 't', `.  The bit layout described above is valid only for a `],
			[/* inline code block */ 'i', `UUID`],
			[/* text */ 't', ` with a variant value of 2, which indicates the Leach-Salz variant.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The version field holds a value that describes the type of this `],
			[/* inline code block */ 'i', `UUID`],
			[/* text */ 't', `.  There are four different basic types of UUIDs: time-based, DCE
 security, name-based, and randomly generated UUIDs.  These types have a
 version value of 1, 2, 3 and 4, respectively.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` For more information including algorithms used to create `],
			[/* inline code block */ 'i', `UUID`],
			[/* text */ 't', `s,
 see `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc4122.txt`, `RFC 4122: A Universally Unique IDentifier (UUID) URN Namespace`],
			[/* text */ 't', `, section 4.2
 "Algorithms for Creating a Time-Based UUID".`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(long,long)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` using the specified data.  `],
				[/* inline code block */ 'i', `mostSigBits`],
				[/* text */ 't', ` is used for the most significant 64 bits of the `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `leastSigBits`],
				[/* text */ 't', ` becomes the least significant 64 bits of
 the `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'mostSigBits', [/* parameter description */
					[/* text */ 't', `The most significant bits of the `],
					[/* inline code block */ 'i', `UUID`]
				]],
				[/* parameter */ 'leastSigBits', [/* parameter description */
					[/* text */ 't', `The least significant bits of the `],
					[/* inline code block */ 'i', `UUID`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object to the specified object.  The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, is a `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `
 object, has the same variant, and contains the same value, bit for bit,
 as this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are the same; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
          otherwise`]
			]
		]],
		[/* method */ 'clockSequence()', [
			[/* method description */
				[/* text */ 't', `The clock sequence value associated with this UUID.

 `],
				[/* block */ 'b', ` The 14 bit clock sequence value is constructed from the clock
 sequence field of this UUID.  The clock sequence field is used to
 guarantee temporal uniqueness in a time-based UUID.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `clockSequence`],
					[/* text */ 't', ` value is only meaningful in a time-based
 UUID, which has version type 1.  If this UUID is not a time-based UUID
 then this method throws UnsupportedOperationException.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this UUID is not a version 1 UUID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The clock sequence of this `],
				[/* inline code block */ 'i', `UUID`]
			]
		]],
		[/* method */ 'compareTo(java.util.UUID)', [
			[/* method description */
				[/* text */ 't', `Compares this UUID with the specified UUID.

 `],
				[/* block */ 'b', ` The first of two UUIDs is greater than the second if the most
 significant field in which the UUIDs differ is greater for the first
 UUID.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `UUID`],
					[/* text */ 't', ` to which this `],
					[/* inline code block */ 'i', `UUID`],
					[/* text */ 't', ` is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `-1, 0 or 1 as this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` is less than, equal to, or
          greater than `],
				[/* inline code block */ 'i', `val`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A hash code value for this `],
				[/* inline code block */ 'i', `UUID`]
			]
		]],
		[/* method */ 'variant()', [
			[/* method description */
				[/* text */ 't', `The variant number associated with this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.  The variant
 number describes the layout of the `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.

 The variant number has the following meaning:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `0    Reserved for NCS backward compatibility
 `],
					[/* block */ 'b', [
						[/* text */ 't', `2    `],
						[/* external link */ 'a', `http://www.ietf.org/rfc/rfc4122.txt`, `IETF RFC 4122`],
						[/* text */ 't', `
 (Leach-Salz), used by this class
 `]
					]],
					[/* block */ 'b', `6    Reserved, Microsoft Corporation backward compatibility
 `],
					[/* block */ 'b', `7    Reserved for future definition
 `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The variant number of this `],
				[/* inline code block */ 'i', `UUID`]
			]
		]],
		[/* method */ 'version()', [
			[/* method description */
				[/* text */ 't', `The version number associated with this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.  The version
 number describes how this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` was generated.

 The version number has the following meaning:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `1    Time-based UUID
 `],
					[/* block */ 'b', `2    DCE security UUID
 `],
					[/* block */ 'b', `3    Name-based UUID
 `],
					[/* block */ 'b', `4    Randomly generated UUID
 `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The version number of this `],
				[/* inline code block */ 'i', `UUID`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` The UUID string representation is as described by this BNF:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `UUID                   = <time_low> "-" <time_mid> "-"
                          <time_high_and_version> "-"
                          <variant_and_sequence> "-"
                          <node>
 time_low               = 4*<hexOctet>
 time_mid               = 2*<hexOctet>
 time_high_and_version  = 2*<hexOctet>
 variant_and_sequence   = 2*<hexOctet>
 node                   = 6*<hexOctet>
 hexOctet               = <hexDigit><hexDigit>
 hexDigit               =
       "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
       | "a" | "b" | "c" | "d" | "e" | "f"
       | "A" | "B" | "C" | "D" | "E" | "F"`]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string representation of this `],
				[/* inline code block */ 'i', `UUID`]
			]
		]],
		[/* method */ 'getLeastSignificantBits()', [
			[/* method description */
				[/* text */ 't', `Returns the least significant 64 bits of this UUID's 128 bit value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The least significant 64 bits of this UUID's 128 bit value`]
			]
		]],
		[/* method */ 'getMostSignificantBits()', [
			[/* method description */
				[/* text */ 't', `Returns the most significant 64 bits of this UUID's 128 bit value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The most significant 64 bits of this UUID's 128 bit value`]
			]
		]],
		[/* method */ 'node()', [
			[/* method description */
				[/* text */ 't', `The node value associated with this UUID.

 `],
				[/* block */ 'b', ` The 48 bit node value is constructed from the node field of this
 UUID.  This field is intended to hold the IEEE 802 address of the machine
 that generated this UUID to guarantee spatial uniqueness.

 `],
				[/* block */ 'b', ` The node value is only meaningful in a time-based UUID, which has
 version type 1.  If this UUID is not a time-based UUID then this method
 throws UnsupportedOperationException.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this UUID is not a version 1 UUID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The node value of this `],
				[/* inline code block */ 'i', `UUID`]
			]
		]],
		[/* method */ 'timestamp()', [
			[/* method description */
				[/* text */ 't', `The timestamp value associated with this UUID.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The 60 bit timestamp value is constructed from the time_low,
 time_mid, and time_hi fields of this `],
					[/* inline code block */ 'i', `UUID`],
					[/* text */ 't', `.  The resulting
 timestamp is measured in 100-nanosecond units since midnight,
 October 15, 1582 UTC.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The timestamp value is only meaningful in a time-based UUID, which
 has version type 1.  If this `],
					[/* inline code block */ 'i', `UUID`],
					[/* text */ 't', ` is not a time-based UUID then
 this method throws UnsupportedOperationException.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this UUID is not a version 1 UUID`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The timestamp of this `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'fromString(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` from the string standard representation as
 described in the `],
				[/* reference */ 'r', `#toString()`, `toString()`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `A string that specifies a `],
					[/* inline code block */ 'i', `UUID`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If name does not conform to the string representation as
          described in `],
					[/* reference */ 'r', `#toString()`, `toString()`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` with the specified value`]
			]
		]],
		[/* method */ 'nameUUIDFromBytes(byte[])', [
			[/* method description */
				[/* text */ 't', `Static factory to retrieve a type 3 (name based) `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` based on
 the specified byte array.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `A byte array to be used to construct a `],
					[/* inline code block */ 'i', `UUID`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` generated from the specified array`]
			]
		]],
		[/* method */ 'randomUUID()', [
			[/* method description */
				[/* text */ 't', `Static factory to retrieve a type 4 (pseudo randomly generated) UUID.

 The `],
				[/* inline code block */ 'i', `UUID`],
				[/* text */ 't', ` is generated using a cryptographically strong pseudo
 random number generator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A randomly generated `],
				[/* inline code block */ 'i', `UUID`]
			]
		]]
	],
]);
