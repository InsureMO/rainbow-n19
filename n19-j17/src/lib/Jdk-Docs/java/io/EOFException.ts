import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.EOFException', [
	[/* class description */
		[/* text */ 't', `Signals that an end of file or end of stream has been reached
 unexpectedly during input.
 `],
		[/* block */ 'b', `
 This exception is mainly used by data input streams to signal end of
 stream. Note that many other input operations return a special value on
 end of stream rather than throwing an exception.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `EOFException`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 as its error detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `EOFException`],
				[/* text */ 't', ` with the specified detail
 message. The string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` may later be retrieved by the
 `],
				[/* reference */ 'r', `java.Throwable#getMessage()`],
				[/* text */ 't', ` method of class
 `],
				[/* inline code block */ 'i', `java.lang.Throwable`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
