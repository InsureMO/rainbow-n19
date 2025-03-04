import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectInput', [
	[/* class description */
		[/* text */ 't', `ObjectInput extends the DataInput interface to include the reading of
 objects. DataInput includes methods for the input of primitive types,
 ObjectInput extends that interface to include objects, arrays, and Strings.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes that can be read
 without blocking.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of available bytes.`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a byte of data. This method will block if no input is
 available.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the byte read, or -1 if the end of the
          stream is reached.`]
			]
		]],
		[/* method */ 'read(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads into an array of bytes.  This method will
 block until some input is available.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, -1 is
          returned when the end of the stream is reached.`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads into an array of bytes.  This method will
 block until some input is available.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, -1 is
          returned when the end of the stream is reached.`]
			]
		]],
		[/* method */ 'readObject()', [
			[/* method description */
				[/* text */ 't', `Read and return an object. The class that implements this interface
 defines where the object is "read" from.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `If the class of a serialized
            object cannot be found.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If any of the usual Input/Output
            related exceptions occur.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object read from the stream`]
			]
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips n bytes of input.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the input stream. Must be called
 to release any resources associated with
 the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
