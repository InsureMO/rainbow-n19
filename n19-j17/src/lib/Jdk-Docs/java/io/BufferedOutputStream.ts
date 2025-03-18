import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.BufferedOutputStream', [
	[/* class description */
		[/* text */ 't', `The class implements a buffered output stream. By setting up such
 an output stream, an application can write bytes to the underlying
 output stream without necessarily causing a call to the underlying
 system for each byte written.`]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `The internal buffer where data is stored.`]
			],
		]],
		[/* field */ 'count', [
			[/* field description */
				[/* text */ 't', `The number of valid bytes in the buffer. This value is always
 in the range `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `buf.length`],
				[/* text */ 't', `; elements
 `],
				[/* inline code block */ 'i', `buf[0]`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `buf[count-1]`],
				[/* text */ 't', ` contain valid
 byte data.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new buffered output stream to write data to the
 specified underlying output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the underlying output stream.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new buffered output stream to write data to the
 specified underlying output stream with the specified buffer
 size.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the underlying output stream.`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the buffer size.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if size <= 0.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this buffered output stream. This forces any buffered
 output bytes to be written out to the underlying output stream.`]
			],
			/* parameters */,
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
				[/* text */ 't', ` to this buffered output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Ordinarily this method stores bytes from the given array into this
 stream's buffer, flushing the buffer to the underlying output stream as
 needed.  If the requested length is at least as large as this stream's
 buffer, however, then this method will flush the buffer and write the
 bytes directly to the underlying output stream.  Thus redundant
 `],
					[/* inline code block */ 'i', `BufferedOutputStream`],
					[/* text */ 't', `s will not copy data unnecessarily.`]
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
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified byte to this buffered output stream.`]
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
		]]
	],
	/* enum values */ UDF
]);
