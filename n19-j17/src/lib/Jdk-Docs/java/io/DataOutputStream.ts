import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.DataOutputStream', [
	[/* class description */
		[/* text */ 't', `A data output stream lets an application write primitive Java data
 types to an output stream in a portable way. An application can
 then use a data input stream to read the data back in.
 `],
		[/* block */ 'b', `
 A DataOutputStream is not safe for use by multiple concurrent
 threads. If a DataOutputStream is to be used by more than one
 thread then access to the data output stream should be controlled
 by appropriate synchronization.`]
	],
	[/* fields */
		[/* field */ 'written', [
			[/* field description */
				[/* text */ 't', `The number of bytes written to the data output stream so far.
 If this counter overflows, it will be wrapped to Integer.MAX_VALUE.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new data output stream to write data to the specified
 underlying output stream. The counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is
 set to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the underlying output stream, to be saved for later
                use.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the current value of the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', `,
 the number of bytes written to this data output stream so far.
 If the counter overflows, it will be wrapped to Integer.MAX_VALUE.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` field.`]
			]
		]],
		[/* method */ 'writeBoolean(boolean)', [
			[/* method description */
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` to the underlying output stream as
 a 1-byte value. The value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` is written out as the
 value `],
				[/* inline code block */ 'i', `(byte)1`],
				[/* text */ 't', `; the value `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` is
 written out as the value `],
				[/* inline code block */ 'i', `(byte)0`],
				[/* text */ 't', `. If no exception is
 thrown, the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by
 `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `boolean`],
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
		[/* method */ 'writeByte(int)', [
			[/* method description */
				[/* text */ 't', `Writes out a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` to the underlying output stream as
 a 1-byte value. If no exception is thrown, the counter
 `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `byte`],
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
		[/* method */ 'writeBytes(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes out the string to the underlying output stream as a
 sequence of bytes. Each character in the string is written out, in
 sequence, by discarding its high eight bits. If no exception is
 thrown, the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by the
 length of `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a string of bytes to be written.`]
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
				[/* text */ 't', ` to the underlying output stream as a
 2-byte value, high byte first. If no exception is thrown, the
 counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by `],
				[/* inline code block */ 'i', `2`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
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
		[/* method */ 'writeChars(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a string to the underlying output stream as a sequence of
 characters. Each character is written to the data output stream as
 if by the `],
				[/* inline code block */ 'i', `writeChar`],
				[/* text */ 't', ` method. If no exception is
 thrown, the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by twice
 the length of `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `String`],
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
				[/* text */ 't', `Converts the double argument to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` using the
 `],
				[/* inline code block */ 'i', `doubleToLongBits`],
				[/* text */ 't', ` method in class `],
				[/* inline code block */ 'i', `Double`],
				[/* text */ 't', `,
 and then writes that `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value to the underlying
 output stream as an 8-byte quantity, high byte first. If no
 exception is thrown, the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is
 incremented by `],
				[/* inline code block */ 'i', `8`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
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
		[/* method */ 'writeFloat(float)', [
			[/* method description */
				[/* text */ 't', `Converts the float argument to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` using the
 `],
				[/* inline code block */ 'i', `floatToIntBits`],
				[/* text */ 't', ` method in class `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `,
 and then writes that `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value to the underlying
 output stream as a 4-byte quantity, high byte first. If no
 exception is thrown, the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is
 incremented by `],
				[/* inline code block */ 'i', `4`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
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
		[/* method */ 'writeInt(int)', [
			[/* method description */
				[/* text */ 't', `Writes an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` to the underlying output stream as four
 bytes, high byte first. If no exception is thrown, the counter
 `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by `],
				[/* inline code block */ 'i', `4`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` to be written.`]
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
				[/* text */ 't', ` to the underlying output stream as eight
 bytes, high byte first. In no exception is thrown, the counter
 `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by `],
				[/* inline code block */ 'i', `8`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` to be written.`]
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
				[/* text */ 't', `Writes a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` to the underlying output stream as two
 bytes, high byte first. If no exception is thrown, the counter
 `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by `],
				[/* inline code block */ 'i', `2`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` to be written.`]
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
				[/* text */ 't', `Writes a string to the underlying output stream using
 `],
				[/* reference */ 'r', `java.io.DataInput#modified-utf-8`, `modified UTF-8`],
				[/* text */ 't', `
 encoding in a machine-independent manner.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 First, two bytes are written to the output stream as if by the
 `],
					[/* inline code block */ 'i', `writeShort`],
					[/* text */ 't', ` method giving the number of bytes to
 follow. This value is the number of bytes actually written out,
 not the length of the string. Following the length, each character
 of the string is output, in sequence, using the modified UTF-8 encoding
 for the character. If no exception is thrown, the counter
 `],
					[/* inline code block */ 'i', `written`],
					[/* text */ 't', ` is incremented by the total number of
 bytes written to the output stream. This will be at least two
 plus the length of `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', `, and at most two plus
 thrice the length of `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a string to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UTFDataFormatException', [/* throw description */
					[/* text */ 't', `if the modified UTF-8 encoding of
             `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', ` would exceed 65535 bytes in length`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if some other I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from the specified byte array
 starting at offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to the underlying output stream.
 If no exception is thrown, the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is
 incremented by `],
				[/* inline code block */ 'i', `len`],
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
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified byte (the low eight bits of the argument
 `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `) to the underlying output stream. If no exception
 is thrown, the counter `],
				[/* inline code block */ 'i', `written`],
				[/* text */ 't', ` is incremented by
 `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Implements the `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `OutputStream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this data output stream. This forces any buffered output
 bytes to be written out to the stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `DataOutputStream`],
					[/* text */ 't', `
 calls the `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` method of its underlying output stream.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
