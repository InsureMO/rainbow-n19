import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.Adler32', [
	[/* class description */
		[/* text */ 't', `A class that can be used to compute the Adler-32 checksum of a data
 stream. An Adler-32 checksum is almost as reliable as a CRC-32 but
 can be computed much faster.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a method in this class will cause
 a `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new Adler32 object.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Returns the checksum value.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current checksum value`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the checksum to initial value.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'update(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Updates the checksum with the specified array of bytes.`]
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
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or
         `],
					[/* inline code block */ 'i', `off+len`],
					[/* text */ 't', ` is negative or greater than the length of
         the array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'update(int)', [
			[/* method description */
				[/* text */ 't', `Updates the checksum with the specified byte (the low eight
 bits of the argument b).`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte to update the checksum with`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'update(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Updates the checksum with the bytes from the specified buffer.

 The checksum is updated with the remaining bytes in the buffer, starting
 at the buffer's position. Upon return, the buffer's position will be
 updated to its limit; its limit will not have been changed.`]
			],
			[/* parameters */
				[/* parameter */ 'buffer', [/* parameter description */
					[/* text */ 't', `the ByteBuffer to update the checksum with`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
