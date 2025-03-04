import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FilterOutputStream', [
	[/* class description */
		[/* text */ 't', `This class is the superclass of all classes that filter output
 streams. These streams sit on top of an already existing output
 stream (the `],
		[/* text */ 't', `underlying`],
		[/* text */ 't', ` output stream) which it uses as its
 basic sink of data, but possibly transforming the data along the
 way or providing additional functionality.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The class `],
			[/* inline code block */ 'i', `FilterOutputStream`],
			[/* text */ 't', ` itself simply overrides
 all methods of `],
			[/* inline code block */ 'i', `OutputStream`],
			[/* text */ 't', ` with versions that pass
 all requests to the underlying output stream. Subclasses of
 `],
			[/* inline code block */ 'i', `FilterOutputStream`],
			[/* text */ 't', ` may further override some of these
 methods as well as provide additional methods and fields.`]
		]]
	],
	[/* fields */
		[/* field */ 'out', [
			[/* field description */
				[/* text */ 't', `The underlying output stream to be filtered.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates an output stream filter built on top of the specified
 underlying output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the underlying output stream to be assigned to
                the field `],
					[/* inline code block */ 'i', `this.out`],
					[/* text */ 't', ` for later use, or
                `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this instance is to be
                created without an underlying stream.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this output stream and releases any system resources
 associated with the stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When not already closed, the `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `FilterOutputStream`],
					[/* text */ 't', ` calls its `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` method, and then
 calls the `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` method of its underlying output stream.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this output stream and forces any buffered output bytes
 to be written out to the stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `FilterOutputStream`],
					[/* text */ 't', `
 calls the `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` method of its underlying output stream.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes to this output stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `FilterOutputStream`],
					[/* text */ 't', `
 calls its `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of three arguments with the
 arguments `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `b.length`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this method does not call the one-argument
 `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of its underlying output stream with
 the single argument `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data to be written.`]
				]]
			],
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
				[/* text */ 't', ` bytes from the specified
 `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` array starting at offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to
 this output stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `FilterOutputStream`],
					[/* text */ 't', `
 calls the `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of one argument on each
 `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` to output.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this method does not call the `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method
 of its underlying output stream with the same arguments. Subclasses
 of `],
					[/* inline code block */ 'i', `FilterOutputStream`],
					[/* text */ 't', ` should provide a more efficient
 implementation of this method.`]
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
				[/* text */ 't', `Writes the specified `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` to this output stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `FilterOutputStream`],
					[/* text */ 't', `
 calls the `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of its underlying output stream,
 that is, it performs `],
					[/* inline code block */ 'i', `out.write(b)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Implements the abstract `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `OutputStream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', `.`]
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
]);
