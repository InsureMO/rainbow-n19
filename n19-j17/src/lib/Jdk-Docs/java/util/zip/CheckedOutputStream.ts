import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.CheckedOutputStream', [
	[/* class description */
		[/* text */ 't', `An output stream that also maintains a checksum of the data being
 written. The checksum can then be used to verify the integrity of
 the output data.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream,java.util.zip.Checksum)', [
			[/* constructor description */
				[/* text */ 't', `Creates an output stream with the specified Checksum.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'cksum', [/* parameter description */
					[/* text */ 't', `the checksum`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes an array of bytes. Will block until the bytes are
 actually written.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a byte. Will block until the byte is actually written.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getChecksum()', [
			[/* method description */
				[/* text */ 't', `Returns the Checksum for this output stream.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Checksum`]
			]
		]]
	],
]);
