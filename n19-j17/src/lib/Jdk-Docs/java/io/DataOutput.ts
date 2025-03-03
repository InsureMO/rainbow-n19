import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.DataOutput', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `DataOutput`],
		[/* text */ 't', ` interface provides
 for converting data from any of the Java
 primitive types to a series of bytes and
 writing these bytes to a binary stream.
 There is  also a facility for converting
 a `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', ` into
 `],
		[/* reference */ 'r', `.DataInput#modified-utf-8`],
		[/* text */ 't', `
 format and writing the resulting series
 of bytes.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 For all the methods in this interface that
 write bytes, it is generally true that if
 a byte cannot be written for any reason,
 an `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', ` is thrown.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from array
 `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `, in order,  to
 the output stream.  If `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, a `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', `
 is thrown.  If `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` is negative,
 or `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is negative, or `],
				[/* inline code block */ 'i', `off+len`],
				[/* text */ 't', `
 is greater than the length of the array
 `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `, then an `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
				[/* text */ 't', `
 is thrown.  If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is zero,
 then no bytes are written. Otherwise, the
 byte `],
				[/* inline code block */ 'i', `b[off]`],
				[/* text */ 't', ` is written first,
 then `],
				[/* inline code block */ 'i', `b[off+1]`],
				[/* text */ 't', `, and so on; the
 last byte written is `],
				[/* inline code block */ 'i', `b[off+len-1]`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to write.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes to the output stream all the bytes in array `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.
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
 no bytes are written. Otherwise, the byte
 `],
				[/* inline code block */ 'i', `b[0]`],
				[/* text */ 't', ` is written first, then
 `],
				[/* inline code block */ 'i', `b[1]`],
				[/* text */ 't', `, and so on; the last byte
 written is `],
				[/* inline code block */ 'i', `b[b.length-1]`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes to the output stream the eight
 low-order bits of the argument `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.
 The 24 high-order  bits of `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `
 are ignored.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeInt(int)', [
			[/* method description */
				[/* text */ 't', `Writes an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value, which is
 comprised of four bytes, to the output stream.
 The byte values to be written, in the  order
 shown, are:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(byte)(0xff & (v >> 24))
 (byte)(0xff & (v >> 16))
 (byte)(0xff & (v >>  8))
 (byte)(0xff & v)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The bytes written by this method may be read
 by the `],
					[/* inline code block */ 'i', `readInt`],
					[/* text */ 't', ` method of interface
 `],
					[/* inline code block */ 'i', `DataInput`],
					[/* text */ 't', `, which will then
 return an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` equal to `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeUTF(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes two bytes of length information
 to the output stream, followed
 by the
 `],
				[/* reference */ 'r', `.DataInput#modified-utf-8`],
				[/* text */ 't', `
 representation
 of  every character in the string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `.
 If `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `,
 a `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', ` is thrown.
 Each character in the string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `
 is converted to a group of one, two, or
 three bytes, depending on the value of the
 character.`],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a character `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', `
 is in the range `],
					[/* inline code block */ 'i', `\\u0001`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `\\u007f`],
					[/* text */ 't', `, it is represented
 by one byte:
 `]
				]],
				[/* code block */ 'c', `(byte)c `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If a character `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `\\u0000`],
					[/* text */ 't', `
 or is in the range `],
					[/* inline code block */ 'i', `\\u0080`],
					[/* text */ 't', `
 through `],
					[/* inline code block */ 'i', `\\u07ff`],
					[/* text */ 't', `, then it is
 represented by two bytes, to be written
 in the order shown: `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(byte)(0xc0 | (0x1f & (c >> 6)))
 (byte)(0x80 | (0x3f & c))`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` If a character
 `],
					[/* inline code block */ 'i', `c`],
					[/* text */ 't', ` is in the range `],
					[/* inline code block */ 'i', `\\u0800`],
					[/* text */ 't', `
 through `],
					[/* inline code block */ 'i', `uffff`],
					[/* text */ 't', `, then it is
 represented by three bytes, to be written
 in the order shown: `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(byte)(0xe0 | (0x0f & (c >> 12)))
 (byte)(0x80 | (0x3f & (c >>  6)))
 (byte)(0x80 | (0x3f & c))`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` First,
 the total number of bytes needed to represent
 all the characters of `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is
 calculated. If this number is larger than
 `],
					[/* inline code block */ 'i', `65535`],
					[/* text */ 't', `, then a `],
					[/* inline code block */ 'i', `UTFDataFormatException`],
					[/* text */ 't', `
 is thrown. Otherwise, this length is written
 to the output stream in exactly the manner
 of the `],
					[/* inline code block */ 'i', `writeShort`],
					[/* text */ 't', ` method;
 after this, the one-, two-, or three-byte
 representation of each character in the
 string `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is written.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `  The
 bytes written by this method may be read
 by the `],
					[/* inline code block */ 'i', `readUTF`],
					[/* text */ 't', ` method of interface
 `],
					[/* inline code block */ 'i', `DataInput`],
					[/* text */ 't', `, which will then
 return a `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` equal to `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeBytes(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a string to the output stream.
 For every character in the string
 `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `,  taken in order, one byte
 is written to the output stream.  If
 `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, a `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', `
 is thrown.`],
				[/* block */ 'b', [
					[/* text */ 't', `  If `],
					[/* inline code block */ 'i', `s.length`],
					[/* text */ 't', `
 is zero, then no bytes are written. Otherwise,
 the character `],
					[/* inline code block */ 'i', `s[0]`],
					[/* text */ 't', ` is written
 first, then `],
					[/* inline code block */ 'i', `s[1]`],
					[/* text */ 't', `, and so on;
 the last character written is `],
					[/* inline code block */ 'i', `s[s.length-1]`],
					[/* text */ 't', `.
 For each character, one byte is written,
 the low-order byte, in exactly the manner
 of the `],
					[/* inline code block */ 'i', `writeByte`],
					[/* text */ 't', ` method . The
 high-order eight bits of each character
 in the string are ignored.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string of bytes to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeChar(int)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value, which
 is comprised of two bytes, to the
 output stream.
 The byte values to be written, in the  order
 shown, are:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(byte)(0xff & (v >> 8))
 (byte)(0xff & v)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The bytes written by this method may be
 read by the `],
					[/* inline code block */ 'i', `readChar`],
					[/* text */ 't', ` method
 of interface `],
					[/* inline code block */ 'i', `DataInput`],
					[/* text */ 't', `, which
 will then return a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` equal
 to `],
					[/* inline code block */ 'i', `(char)v`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeFloat(float)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value,
 which is comprised of four bytes, to the output stream.
 It does this as if it first converts this
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 in exactly the manner of the `],
				[/* inline code block */ 'i', `Float.floatToIntBits`],
				[/* text */ 't', `
 method  and then writes the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 value in exactly the manner of the  `],
				[/* inline code block */ 'i', `writeInt`],
				[/* text */ 't', `
 method.  The bytes written by this method
 may be read by the `],
				[/* inline code block */ 'i', `readFloat`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `,
 which will then return a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 equal to `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeBoolean(boolean)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value to this output stream.
 If the argument `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, the value `],
				[/* inline code block */ 'i', `(byte)1`],
				[/* text */ 't', `
 is written; if `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `,
 the  value `],
				[/* inline code block */ 'i', `(byte)0`],
				[/* text */ 't', ` is written.
 The byte written by this method may
 be read by the `],
				[/* inline code block */ 'i', `readBoolean`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `,
 which will then return a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', `
 equal to `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the boolean to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeByte(int)', [
			[/* method description */
				[/* text */ 't', `Writes to the output stream the eight low-order
 bits of the argument `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', `.
 The 24 high-order bits of `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', `
 are ignored. (This means  that `],
				[/* inline code block */ 'i', `writeByte`],
				[/* text */ 't', `
 does exactly the same thing as `],
				[/* inline code block */ 'i', `write`],
				[/* text */ 't', `
 for an integer argument.) The byte written
 by this method may be read by the `],
				[/* inline code block */ 'i', `readByte`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `,
 which will then return a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `
 equal to `],
				[/* inline code block */ 'i', `(byte)v`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the byte value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeShort(int)', [
			[/* method description */
				[/* text */ 't', `Writes two bytes to the output
 stream to represent the value of the argument.
 The byte values to be written, in the  order
 shown, are:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(byte)(0xff & (v >> 8))
 (byte)(0xff & v)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The bytes written by this method may be
 read by the `],
					[/* inline code block */ 'i', `readShort`],
					[/* text */ 't', ` method
 of interface `],
					[/* inline code block */ 'i', `DataInput`],
					[/* text */ 't', `, which
 will then return a `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` equal
 to `],
					[/* inline code block */ 'i', `(short)v`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeLong(long)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value, which is
 comprised of eight bytes, to the output stream.
 The byte values to be written, in the  order
 shown, are:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(byte)(0xff & (v >> 56))
 (byte)(0xff & (v >> 48))
 (byte)(0xff & (v >> 40))
 (byte)(0xff & (v >> 32))
 (byte)(0xff & (v >> 24))
 (byte)(0xff & (v >> 16))
 (byte)(0xff & (v >>  8))
 (byte)(0xff & v)`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The bytes written by this method may be
 read by the `],
					[/* inline code block */ 'i', `readLong`],
					[/* text */ 't', ` method
 of interface `],
					[/* inline code block */ 'i', `DataInput`],
					[/* text */ 't', `, which
 will then return a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` equal
 to `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeDouble(double)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value,
 which is comprised of eight bytes, to the output stream.
 It does this as if it first converts this
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 in exactly the manner of the `],
				[/* inline code block */ 'i', `Double.doubleToLongBits`],
				[/* text */ 't', `
 method  and then writes the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 value in exactly the manner of the  `],
				[/* inline code block */ 'i', `writeLong`],
				[/* text */ 't', `
 method. The bytes written by this method
 may be read by the `],
				[/* inline code block */ 'i', `readDouble`],
				[/* text */ 't', `
 method of interface `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `,
 which will then return a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
 equal to `],
				[/* inline code block */ 'i', `v`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeChars(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes every character in the string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `,
 to the output stream, in order,
 two bytes per character. If `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, a `],
				[/* inline code block */ 'i', `NullPointerException`],
				[/* text */ 't', `
 is thrown.  If `],
				[/* inline code block */ 'i', `s.length`],
				[/* text */ 't', `
 is zero, then no characters are written.
 Otherwise, the character `],
				[/* inline code block */ 'i', `s[0]`],
				[/* text */ 't', `
 is written first, then `],
				[/* inline code block */ 'i', `s[1]`],
				[/* text */ 't', `,
 and so on; the last character written is
 `],
				[/* inline code block */ 'i', `s[s.length-1]`],
				[/* text */ 't', `. For each character,
 two bytes are actually written, high-order
 byte first, in exactly the manner of the
 `],
				[/* inline code block */ 'i', `writeChar`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string value to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
