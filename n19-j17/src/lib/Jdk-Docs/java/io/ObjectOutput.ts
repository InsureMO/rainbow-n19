import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectOutput', [
	[/* class description */
		[/* text */ 't', `ObjectOutput extends the DataOutput interface to include writing of objects.
 DataOutput includes methods for output of primitive types, ObjectOutput
 extends that interface to include objects, arrays, and Strings.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the stream. This method must be called
 to release any resources associated with the
 stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream. This will write any buffered
 output bytes.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes an array of bytes. This method will block until the bytes
 are actually written.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a sub array of bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes that are written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a byte. This method will block until the byte is actually
 written.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeObject(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Write an object to the underlying storage or stream.  The
 class that implements this interface defines how the object is
 written.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `Any of the usual Input/Output related exceptions.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
