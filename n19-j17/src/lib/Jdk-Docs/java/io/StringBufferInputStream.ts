import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.StringBufferInputStream', [
	/* class description */ UDF,
	[/* fields */
		[/* field */ 'buffer', [
			[/* field description */
				[/* text */ 't', `The string from which bytes are read.`]
			],
		]],
		[/* field */ 'pos', [
			[/* field description */
				[/* text */ 't', `The index of the next character to read from the input stream buffer.`]
			],
		]],
		[/* field */ 'count', [
			[/* field description */
				[/* text */ 't', `The number of valid characters in the input stream buffer.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a string input stream to read data from the specified string.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the underlying input buffer.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from this input stream
 into an array of bytes.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `StringBufferInputStream`],
					[/* text */ 't', ` cannot block. It copies the
 low eight bits from the characters in this input stream's buffer into
 the byte array argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total number of bytes read into the buffer, or
             `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no more data because the end of
             the stream has been reached.`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads the next byte of data from this input stream. The value
 byte is returned as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` in the range
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `. If no byte is available
 because the end of the stream has been reached, the value
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `StringBufferInputStream`],
					[/* text */ 't', ` cannot block. It returns the
 low eight bits of the next character in this input stream's buffer.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next byte of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
             stream is reached.`]
			]
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes of input from this input stream. Fewer
 bytes might be skipped if the end of the input stream is reached.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes that can be read from the input
 stream without blocking.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of `],
				[/* inline code block */ 'i', `count - pos`],
				[/* text */ 't', `, which is the
             number of bytes remaining to be read from the input buffer.`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the input stream to begin reading from the first character
 of this input stream's underlying buffer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
