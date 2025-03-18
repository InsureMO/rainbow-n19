import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.InterruptedIOException', [
	[/* class description */
		[/* text */ 't', `Signals that an I/O operation has been interrupted. An
 `],
		[/* inline code block */ 'i', `InterruptedIOException`],
		[/* text */ 't', ` is thrown to indicate that an
 input or output transfer has been terminated because the thread
 performing it was interrupted. The field `],
		[/* text */ 't', `bytesTransferred`],
		[/* text */ 't', `
 indicates how many bytes were successfully transferred before
 the interruption occurred.`]
	],
	[/* fields */
		[/* field */ 'bytesTransferred', [
			[/* field description */
				[/* text */ 't', `Reports how many bytes had been transferred as part of the I/O
 operation before it was interrupted.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InterruptedIOException`],
				[/* text */ 't', ` with
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its error detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InterruptedIOException`],
				[/* text */ 't', ` with the
 specified detail message. The string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` can be
 retrieved later by the
 `],
				[/* reference */ 'r', `java.lang.Throwable#getMessage()`, `Throwable.getMessage()`],
				[/* text */ 't', `
 method of class `],
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
	/* methods */,
	/* enum values */ UDF
]);
