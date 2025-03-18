import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.CheckedInputStream', [
	[/* class description */
		[/* text */ 't', `An input stream that also maintains a checksum of the data being read.
 The checksum can then be used to verify the integrity of the input data.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream,java.util.zip.Checksum)', [
			[/* constructor description */
				[/* text */ 't', `Creates an input stream using the specified Checksum.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream`]
				]],
				[/* parameter */ 'cksum', [/* parameter description */
					[/* text */ 't', `the Checksum`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a byte. Will block if no input is available.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the byte read, or -1 if the end of the stream is reached.`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads into an array of bytes. If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is not zero, the method
 blocks until some input is available; otherwise, no
 bytes are read and `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the destination array `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `buf`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
 `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
 `],
					[/* inline code block */ 'i', `buf.length - off`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, or -1 if the end
            of the stream is reached.`]
			]
		]],
		[/* method */ 'getChecksum()', [
			[/* method description */
				[/* text */ 't', `Returns the Checksum for this input stream.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the Checksum value`]
			]
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips specified number of bytes of input.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to skip`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped`]
			]
		]]
	],
	/* enum values */ UDF
]);
