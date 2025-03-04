import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.Checksum', [
	[/* class description */
		[/* text */ 't', `An interface representing a data checksum.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Returns the current checksum value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current checksum value`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the checksum to its initial value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'update(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Updates the current checksum with the specified array of bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte array to update the checksum with`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to use for the update`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'update(int)', [
			[/* method description */
				[/* text */ 't', `Updates the current checksum with the specified byte.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte to update the checksum with`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'update(byte[])', [
			[/* method description */
				[/* text */ 't', `Updates the current checksum with the specified array of bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the array of bytes to update the checksum with`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'update(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Updates the current checksum with the bytes from the specified buffer.

 The checksum is updated with the remaining bytes in the buffer, starting
 at the buffer's position. Upon return, the buffer's position will be
 updated to its limit; its limit will not have been changed.`]
			],
			[/* parameters */
				[/* parameter */ 'buffer', [/* parameter description */
					[/* text */ 't', `the ByteBuffer to update the checksum with`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `buffer`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
