import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.CRC32C', [
	[/* class description */
		[/* text */ 't', `A class that can be used to compute the CRC-32C of a data stream.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 CRC-32C is defined in `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc3720.txt`, `RFC 3720`],
			[/* text */ 't', `: Internet Small Computer Systems Interface (iSCSI).
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a method in this class will cause a
 `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to be thrown.
 `]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new CRC32C object.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Returns CRC-32C value.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current checksum value`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets CRC-32C to initial value.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'update(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Updates the CRC-32C checksum with the specified array of bytes.`]
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
				[/* text */ 't', `Updates the CRC-32C checksum with the specified byte (the low eight bits
 of the argument b).`]
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
				[/* text */ 't', `Updates the CRC-32C checksum with the bytes from the specified buffer.

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
