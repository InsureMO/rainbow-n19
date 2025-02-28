import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FilterWriter', [
	[/* class description */
		[/* text */ 't', `Abstract class for writing filtered character streams.
 The abstract class `],
		[/* inline code block */ 'i', `FilterWriter`],
		[/* text */ 't', ` itself
 provides default methods that pass all requests to the
 contained stream. Subclasses of `],
		[/* inline code block */ 'i', `FilterWriter`],
		[/* text */ 't', `
 should override some of these methods and may also
 provide additional methods and fields.`]
	],
	[/* fields */
		[/* field */ 'out', [
			[/* field description */
				[/* text */ 't', `The underlying character-output stream.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.Writer)', [
			[/* constructor description */
				[/* text */ 't', `Create a new filtered writer.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `a Writer object to provide the underlying stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a portion of a string.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `String to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start reading characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the values of the `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` parameters
          cause the corresponding method of the underlying `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `
          to throw an `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a portion of an array of characters.`]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `Buffer of characters to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start reading characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the values of the `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` parameters
          cause the corresponding method of the underlying `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `
          to throw an `],
					[/* inline code block */ 'i', `IndexOutOfBoundsException`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a single character.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `int specifying a character to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* block */ 'b', `Closes the stream, flushing it first. Once the stream has been closed,
 further write() or flush() invocations will cause an IOException to be
 thrown. Closing a previously closed stream has no effect.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
