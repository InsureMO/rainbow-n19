import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.OutputStream', [
	[/* class description */
		[/* text */ 't', `This abstract class is the superclass of all classes representing
 an output stream of bytes. An output stream accepts output bytes
 and sends them to some sink.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Applications that need to define a subclass of
 `],
			[/* inline code block */ 'i', `OutputStream`],
			[/* text */ 't', ` must always provide at least a method
 that writes one byte of output.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this output stream and forces any buffered output bytes
 to be written out. The general contract of `],
				[/* inline code block */ 'i', `flush`],
				[/* text */ 't', ` is
 that calling it is an indication that, if any bytes previously
 written have been buffered by the implementation of the output
 stream, such bytes should immediately be written to their
 intended destination.
 `],
				[/* block */ 'b', `
 If the intended destination of this stream is an abstraction provided by
 the underlying operating system, for example a file, then flushing the
 stream guarantees only that bytes previously written to the stream are
 passed to the operating system for writing; it does not guarantee that
 they are actually written to a physical device such as a disk drive.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `OutputStream`],
					[/* text */ 't', ` does nothing.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes from the specified byte array
 to this output stream. The general contract for `],
				[/* inline code block */ 'i', `write(b)`],
				[/* text */ 't', `
 is that it should have exactly the same effect as the call
 `],
				[/* inline code block */ 'i', `write(b, 0, b.length)`],
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
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from the specified byte array
 starting at offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to this output stream.
 The general contract for `],
				[/* inline code block */ 'i', `write(b, off, len)`],
				[/* text */ 't', ` is that
 some of the bytes in the array `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', ` are written to the
 output stream in order; element `],
				[/* inline code block */ 'i', `b[off]`],
				[/* text */ 't', ` is the first
 byte written and `],
				[/* inline code block */ 'i', `b[off+len-1]`],
				[/* text */ 't', ` is the last byte written
 by this operation.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `OutputStream`],
					[/* text */ 't', ` calls
 the write method of one argument on each of the bytes to be
 written out. Subclasses are encouraged to override this method and
 provide a more efficient implementation.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or
 `],
					[/* inline code block */ 'i', `off+len`],
					[/* text */ 't', ` is greater than the length of the array
 `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, then an `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`],
					[/* text */ 't', ` is thrown.`]
				]]
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
					[/* text */ 't', `if an I/O error occurs. In particular,
             an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` is thrown if the output
             stream is closed.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified byte to this output stream. The general
 contract for `],
				[/* inline code block */ 'i', `write`],
				[/* text */ 't', ` is that one byte is written
 to the output stream. The byte to be written is the eight
 low-order bits of the argument `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `. The 24
 high-order bits of `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', ` are ignored.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Subclasses of `],
					[/* inline code block */ 'i', `OutputStream`],
					[/* text */ 't', ` must provide an
 implementation for this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs. In particular,
             an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` may be thrown if the
             output stream has been closed.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this output stream and releases any system resources
 associated with this stream. The general contract of `],
				[/* inline code block */ 'i', `close`],
				[/* text */ 't', `
 is that it closes the output stream. A closed stream cannot perform
 output operations and cannot be reopened.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `OutputStream`],
					[/* text */ 't', ` does nothing.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'nullOutputStream()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `OutputStream`],
				[/* text */ 't', ` which discards all bytes.  The
 returned stream is initially open.  The stream is closed by calling
 the `],
				[/* inline code block */ 'i', `close()`],
				[/* text */ 't', ` method.  Subsequent calls to `],
				[/* inline code block */ 'i', `close()`],
				[/* text */ 't', ` have
 no effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` While the stream is open, the `],
					[/* inline code block */ 'i', `write(int)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `write(byte[])`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `write(byte[], int, int)`],
					[/* text */ 't', ` methods do nothing.
 After the stream has been closed, these methods all throw `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `flush()`],
					[/* text */ 't', ` method does nothing.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OutputStream`],
				[/* text */ 't', ` which discards all bytes`]
			]
		]]
	],
]);
