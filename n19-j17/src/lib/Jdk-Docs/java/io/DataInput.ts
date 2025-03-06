import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.DataInput', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `DataInput`],
		[/* text */ 't', ` interface provides
 for reading bytes from a binary stream and
 reconstructing from them data in any of
 the Java primitive types. There is also
 a
 facility for reconstructing a `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `
 from data in
 `],
		[/* text */ 't', `modified UTF-8`],
		[/* text */ 't', `
 format.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 It is generally true of all the reading
 routines in this interface that if end of
 file is reached before the desired number
 of bytes has been read, an `],
			[/* inline code block */ 'i', `EOFException`],
			[/* text */ 't', `
 (which is a kind of `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', `)
 is thrown. If any byte cannot be read for
 any reason other than end of file, an `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', `
 other than `],
			[/* inline code block */ 'i', `EOFException`],
			[/* text */ 't', ` is
 thrown. In particular, an `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', `
 may be thrown if the input stream has been
 closed.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `modified-utf-8`, `Modified UTF-8`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Implementations of the DataInput and DataOutput interfaces represent
 Unicode strings in a format that is a slight modification of UTF-8.
 (For information regarding the standard UTF-8 format, see section
 `],
			[/* text */ 't', `3.9 Unicode Encoding Forms`],
			[/* text */ 't', ` of `],
			[/* text */ 't', `The Unicode Standard, Version
 4.0`],
			[/* text */ 't', `)

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Characters in the range `],
				[/* inline code block */ 'i', `'\\u0001'`],
				[/* text */ 't', ` to
         `],
				[/* inline code block */ 'i', `'\\u007F'`],
				[/* text */ 't', ` are represented by a single byte.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The null character `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', ` and characters
         in the range `],
				[/* inline code block */ 'i', `'\\u0080'`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `'\\u07FF'`],
				[/* text */ 't', ` are
         represented by a pair of bytes.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Characters in the range `],
				[/* inline code block */ 'i', `'\\u0800'`],
				[/* text */ 't', `
         to `],
				[/* inline code block */ 'i', `'\\uFFFF'`],
				[/* text */ 't', ` are represented by three bytes.
 `]
			]]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Encoding of UTF-8 values`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 1, 2, [
						[/* text */ 't', `Value`]
					]],
					[/* table header cell */ 'thc', 1, 2, [
						[/* text */ 't', `Byte`]
					]],
					[/* table header cell */ 'thc', 8, 1, [
						[/* text */ 't', `Bit Values`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 7 `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 6 `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 5 `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 4 `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 3 `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 2 `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 1 `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 0 `]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
         `],
						[/* inline code block */ 'i', `\\u0001`],
						[/* text */ 't', ` to `],
						[/* inline code block */ 'i', `\\u007F`],
						[/* text */ 't', ` `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 1 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0
       `]
					]],
					[/* table cell */ 'tbc', 7, 1, [
						[/* text */ 't', `bits 6-0
     `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 1, 2, [
						[/* text */ 't', `
           `],
						[/* inline code block */ 'i', `\\u0000`],
						[/* text */ 't', `,`],
						[/* new line */ 'n'],
						[/* text */ 't', `
           `],
						[/* inline code block */ 'i', `\\u0080`],
						[/* text */ 't', ` to `],
						[/* inline code block */ 'i', `\\u07FF`],
						[/* text */ 't', ` `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 1 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0
       `]
					]],
					[/* table cell */ 'tbc', 5, 1, [
						[/* text */ 't', `bits 10-6
     `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 2 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0
       `]
					]],
					[/* table cell */ 'tbc', 6, 1, [
						[/* text */ 't', `bits 5-0
     `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 1, 3, [
						[/* text */ 't', `
         `],
						[/* inline code block */ 'i', `\\u0800`],
						[/* text */ 't', ` to `],
						[/* inline code block */ 'i', `\\uFFFF`],
						[/* text */ 't', ` `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 1 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0
       `]
					]],
					[/* table cell */ 'tbc', 4, 1, [
						[/* text */ 't', `bits 15-12
     `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 2 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0
       `]
					]],
					[/* table cell */ 'tbc', 6, 1, [
						[/* text */ 't', `bits 11-6
     `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` 3 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0
       `]
					]],
					[/* table cell */ 'tbc', 6, 1, [
						[/* text */ 't', `bits 5-0
     `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The differences between this format and the
 standard UTF-8 format are the following:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The null byte `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', ` is encoded in 2-byte format
     rather than 1-byte, so that the encoded strings never have
     embedded nulls.
 `]
			]],
			[/* block */ 'b', `Only the 1-byte, 2-byte, and 3-byte formats are used.
 `],
			[/* block */ 'b', [
				[/* reference */ 'r', `java.lang.Character#unicode`, `Supplementary characters`],
				[/* text */ 't', `
     are represented in the form of surrogate pairs.
 `]
			]]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'readBoolean()', [
			[/* method description */
				[/* text */ 't', `Reads one input byte and returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if that byte is nonzero,
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if that byte is zero.
 This method is suitable for reading
 the byte written by the `],
				[/* inline code block */ 'i', `writeBoolean`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readByte()', [
			[/* method description */
				[/* text */ 't', `Reads and returns one input byte.
 The byte is treated as a signed value in
 the range `],
				[/* inline code block */ 'i', `-128`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `127`],
				[/* text */ 't', `,
 inclusive.
 This method is suitable for
 reading the byte written by the `],
				[/* inline code block */ 'i', `writeByte`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 8-bit value read.`]
			]
		]],
		[/* method */ 'readChar()', [
			[/* method description */
				[/* text */ 't', `Reads two input bytes and returns a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.
 Let `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 be the first byte read and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 be the second byte. The value
 returned is:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(char)((a << 8) | (b & 0xff))`]
				]],
				[/* text */ 't', `
 This method
 is suitable for reading bytes written by
 the `],
				[/* inline code block */ 'i', `writeChar`],
				[/* text */ 't', ` method of interface
 `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readDouble()', [
			[/* method description */
				[/* text */ 't', `Reads eight input bytes and returns
 a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value. It does this
 by first constructing a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 value in exactly the manner
 of the `],
				[/* inline code block */ 'i', `readLong`],
				[/* text */ 't', `
 method, then converting this `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 value to a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` in exactly
 the manner of the method `],
				[/* inline code block */ 'i', `Double.longBitsToDouble`],
				[/* text */ 't', `.
 This method is suitable for reading
 bytes written by the `],
				[/* inline code block */ 'i', `writeDouble`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readFloat()', [
			[/* method description */
				[/* text */ 't', `Reads four input bytes and returns
 a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value. It does this
 by first constructing an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 value in exactly the manner
 of the `],
				[/* inline code block */ 'i', `readInt`],
				[/* text */ 't', `
 method, then converting this `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 value to a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` in
 exactly the manner of the method `],
				[/* inline code block */ 'i', `Float.intBitsToFloat`],
				[/* text */ 't', `.
 This method is suitable for reading
 bytes written by the `],
				[/* inline code block */ 'i', `writeFloat`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readInt()', [
			[/* method description */
				[/* text */ 't', `Reads four input bytes and returns an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value. Let `],
				[/* inline code block */ 'i', `a-d`],
				[/* text */ 't', `
 be the first through fourth bytes read. The value returned is:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(((a & 0xff) << 24) | ((b & 0xff) << 16) |
  ((c & 0xff) <<  8) | (d & 0xff))`]
				]],
				[/* text */ 't', `
 This method is suitable
 for reading bytes written by the `],
				[/* inline code block */ 'i', `writeInt`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readUnsignedByte()', [
			[/* method description */
				[/* text */ 't', `Reads one input byte, zero-extends
 it to type `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, and returns
 the result, which is therefore in the range
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
 through `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `.
 This method is suitable for reading
 the byte written by the `],
				[/* inline code block */ 'i', `writeByte`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `
 if the argument to `],
				[/* inline code block */ 'i', `writeByte`],
				[/* text */ 't', `
 was intended to be a value in the range
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the unsigned 8-bit value read.`]
			]
		]],
		[/* method */ 'readUnsignedShort()', [
			[/* method description */
				[/* text */ 't', `Reads two input bytes and returns
 an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value in the range `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
 through `],
				[/* inline code block */ 'i', `65535`],
				[/* text */ 't', `. Let `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 be the first byte read and
 `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 be the second byte. The value returned is:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(((a & 0xff) << 8) | (b & 0xff))`]
				]],
				[/* text */ 't', `
 This method is suitable for reading the bytes
 written by the `],
				[/* inline code block */ 'i', `writeShort`],
				[/* text */ 't', ` method
 of interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `  if
 the argument to `],
				[/* inline code block */ 'i', `writeShort`],
				[/* text */ 't', `
 was intended to be a value in the range
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `65535`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the unsigned 16-bit value read.`]
			]
		]],
		[/* method */ 'skipBytes(int)', [
			[/* method description */
				[/* text */ 't', `Makes an attempt to skip over
 `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes
 of data from the input
 stream, discarding the skipped bytes. However,
 it may skip
 over some smaller number of
 bytes, possibly zero. This may result from
 any of a
 number of conditions; reaching
 end of file before `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes
 have been skipped is
 only one possibility.
 This method never throws an `],
				[/* inline code block */ 'i', `EOFException`],
				[/* text */ 't', `.
 The actual
 number of bytes skipped is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of bytes actually skipped.`]
			]
		]],
		[/* method */ 'readLine()', [
			[/* method description */
				[/* text */ 't', `Reads the next line of text from the input stream.
 It reads successive bytes, converting
 each byte separately into a character,
 until it encounters a line terminator or
 end of
 file; the characters read are then
 returned as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. Note
 that because this
 method processes bytes,
 it does not support input of the full Unicode
 character set.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If end of file is encountered
 before even one byte can be read, then `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 is returned. Otherwise, each byte that is
 read is converted to type `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `
 by zero-extension. If the character `],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `
 is encountered, it is discarded and reading
 ceases. If the character `],
					[/* inline code block */ 'i', `'\\r'`],
					[/* text */ 't', `
 is encountered, it is discarded and, if
 the following byte converts  to the
 character `],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `, then that is
 discarded also; reading then ceases. If
 end of file is encountered before either
 of the characters `],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `'\\r'`],
					[/* text */ 't', ` is encountered, reading
 ceases. Once reading has ceased, a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `
 is returned that contains all the characters
 read and not discarded, taken in order.
 Note that every character in this string
 will have a value less than `],
					[/* inline code block */ 'i', `\\u0100`],
					[/* text */ 't', `,
 that is, `],
					[/* inline code block */ 'i', `(char)256`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next line of text from the input stream,
         or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the end of file is
         encountered before a byte can be read.`]
			]
		]],
		[/* method */ 'readUTF()', [
			[/* method description */
				[/* text */ 't', `Reads in a string that has been encoded using a
 `],
				[/* text */ 't', `modified UTF-8`],
				[/* text */ 't', `
 format.
 The general contract of `],
				[/* inline code block */ 'i', `readUTF`],
				[/* text */ 't', `
 is that it reads a representation of a Unicode
 character string encoded in modified
 UTF-8 format; this string of characters
 is then returned as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, two bytes are read and used to
 construct an unsigned 16-bit integer in
 exactly the manner of the `],
					[/* inline code block */ 'i', `readUnsignedShort`],
					[/* text */ 't', `
 method . This integer value is called the
 `],
					[/* text */ 't', `UTF length`],
					[/* text */ 't', ` and specifies the number
 of additional bytes to be read. These bytes
 are then converted to characters by considering
 them in groups. The length of each group
 is computed from the value of the first
 byte of the group. The byte following a
 group, if any, is the first byte of the
 next group.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the first byte of a group
 matches the bit pattern `],
					[/* inline code block */ 'i', `0xxxxxxx`],
					[/* text */ 't', `
 (where `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', ` means "may be `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `"), then the group consists
 of just that byte. The byte is zero-extended
 to form a character.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the first byte
 of a group matches the bit pattern `],
					[/* inline code block */ 'i', `110xxxxx`],
					[/* text */ 't', `,
 then the group consists of that byte `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', `
 and a second byte `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `. If there
 is no byte `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` (because byte
 `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` was the last of the bytes
 to be read), or if byte `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` does
 not match the bit pattern `],
					[/* inline code block */ 'i', `10xxxxxx`],
					[/* text */ 't', `,
 then a `],
					[/* inline code block */ 'i', `UTFDataFormatException`],
					[/* text */ 't', `
 is thrown. Otherwise, the group is converted
 to the character:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(char)(((a & 0x1F) << 6) | (b & 0x3F))`]
				]],
				[/* text */ 't', `
 If the first byte of a group
 matches the bit pattern `],
				[/* inline code block */ 'i', `1110xxxx`],
				[/* text */ 't', `,
 then the group consists of that byte `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 and two more bytes `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', `.
 If there is no byte `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', ` (because
 byte `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` was one of the last
 two of the bytes to be read), or either
 byte `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', ` or byte `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', `
 does not match the bit pattern `],
				[/* inline code block */ 'i', `10xxxxxx`],
				[/* text */ 't', `,
 then a `],
				[/* inline code block */ 'i', `UTFDataFormatException`],
				[/* text */ 't', `
 is thrown. Otherwise, the group is converted
 to the character:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(char)(((a & 0x0F) << 12) | ((b & 0x3F) << 6) | (c & 0x3F))`]
				]],
				[/* text */ 't', `
 If the first byte of a group matches the
 pattern `],
				[/* inline code block */ 'i', `1111xxxx`],
				[/* text */ 't', ` or the pattern
 `],
				[/* inline code block */ 'i', `10xxxxxx`],
				[/* text */ 't', `, then a `],
				[/* inline code block */ 'i', `UTFDataFormatException`],
				[/* text */ 't', `
 is thrown.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If end of file is encountered
 at any time during this entire process,
 then an `],
					[/* inline code block */ 'i', `EOFException`],
					[/* text */ 't', ` is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 After every group has been converted to
 a character by this process, the characters
 are gathered, in the same order in which
 their corresponding groups were read from
 the input stream, to form a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `,
 which is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `writeUTF`],
					[/* text */ 't', `
 method of interface `],
					[/* inline code block */ 'i', `DataOutput`],
					[/* text */ 't', `
 may be used to write data that is suitable
 for reading by this method.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end
               before reading all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]],
				[/* throw */ 'java.io.UTFDataFormatException', [/* throw description */
					[/* text */ 't', `if the bytes do not represent a
               valid modified UTF-8 encoding of a string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Unicode string.`]
			]
		]],
		[/* method */ 'readLong()', [
			[/* method description */
				[/* text */ 't', `Reads eight input bytes and returns
 a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value. Let `],
				[/* inline code block */ 'i', `a-h`],
				[/* text */ 't', `
 be the first through eighth bytes read.
 The value returned is:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(((long)(a & 0xff) << 56) |
  ((long)(b & 0xff) << 48) |
  ((long)(c & 0xff) << 40) |
  ((long)(d & 0xff) << 32) |
  ((long)(e & 0xff) << 24) |
  ((long)(f & 0xff) << 16) |
  ((long)(g & 0xff) <<  8) |
  ((long)(h & 0xff)))`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is suitable
 for reading bytes written by the `],
					[/* inline code block */ 'i', `writeLong`],
					[/* text */ 't', `
 method of interface `],
					[/* inline code block */ 'i', `DataOutput`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readShort()', [
			[/* method description */
				[/* text */ 't', `Reads two input bytes and returns
 a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value. Let `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `
 be the first byte read and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 be the second byte. The value
 returned
 is:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(short)((a << 8) | (b & 0xff))`]
				]],
				[/* text */ 't', `
 This method
 is suitable for reading the bytes written
 by the `],
				[/* inline code block */ 'i', `writeShort`],
				[/* text */ 't', ` method of
 interface `],
				[/* inline code block */ 'i', `DataOutput`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
               all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 16-bit value read.`]
			]
		]],
		[/* method */ 'readFully(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads some bytes from an input
 stream and stores them into the buffer
 array `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `. The number of bytes
 read is equal
 to the length of `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This method blocks until one of the
 following conditions occurs:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `b.length`],
						[/* text */ 't', `
 bytes of input data are available, in which
 case a normal return is made.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `End of
 file is detected, in which case an `],
						[/* inline code block */ 'i', `EOFException`],
						[/* text */ 't', `
 is thrown.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `An I/O error occurs, in
 which case an `],
						[/* inline code block */ 'i', `IOException`],
						[/* text */ 't', ` other
 than `],
						[/* inline code block */ 'i', `EOFException`],
						[/* text */ 't', ` is thrown.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
 a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown.
 If `],
					[/* inline code block */ 'i', `b.length`],
					[/* text */ 't', ` is zero, then
 no bytes are read. Otherwise, the first
 byte read is stored into element `],
					[/* inline code block */ 'i', `b[0]`],
					[/* text */ 't', `,
 the next one into `],
					[/* inline code block */ 'i', `b[1]`],
					[/* text */ 't', `, and
 so on.
 If an exception is thrown from
 this method, then it may be that some but
 not all bytes of `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` have been
 updated with data from the input stream.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
          all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readFully(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', `
 bytes from
 an input stream.
 `],
				[/* block */ 'b', `
 This method
 blocks until one of the following conditions
 occurs:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `len`],
						[/* text */ 't', ` bytes
 of input data are available, in which case
 a normal return is made.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `End of file
 is detected, in which case an `],
						[/* inline code block */ 'i', `EOFException`],
						[/* text */ 't', `
 is thrown.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `An I/O error occurs, in
 which case an `],
						[/* inline code block */ 'i', `IOException`],
						[/* text */ 't', ` other
 than `],
						[/* inline code block */ 'i', `EOFException`],
						[/* text */ 't', ` is thrown.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
 a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown.
 If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `
 is negative, or `],
					[/* inline code block */ 'i', `off+len`],
					[/* text */ 't', ` is
 greater than the length of the array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `,
 then an `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`],
					[/* text */ 't', `
 is thrown.
 If `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is zero,
 then no bytes are read. Otherwise, the first
 byte read is stored into element `],
					[/* inline code block */ 'i', `b[off]`],
					[/* text */ 't', `,
 the next one into `],
					[/* inline code block */ 'i', `b[off+1]`],
					[/* text */ 't', `,
 and so on. The number of bytes read is,
 at most, equal to `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `an int specifying the offset in the data array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `an int specifying the number of bytes to read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
          `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
          `],
					[/* inline code block */ 'i', `b.length - off`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this stream reaches the end before reading
          all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
