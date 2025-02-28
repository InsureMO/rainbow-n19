import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.CompletionHandler', [
	[/* class description */
		[/* text */ 't', `A handler for consuming the result of an asynchronous I/O operation.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The asynchronous channels defined in this package allow a completion
 handler to be specified to consume the result of an asynchronous operation.
 The `],
			[/* reference */ 'r', `completed`],
			[/* text */ 't', ` method is invoked when the I/O operation
 completes successfully. The `],
			[/* reference */ 'r', `failed`],
			[/* text */ 't', ` method is invoked if the
 I/O operations fails. The implementations of these methods should complete
 in a timely manner so as to avoid keeping the invoking thread from dispatching
 to other completion handlers.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'completed(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Invoked when an operation has completed.`]
			],
			[/* parameters */
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `The result of the I/O operation.`]
				]],
				[/* parameter */ 'attachment', [/* parameter description */
					[/* text */ 't', `The object attached to the I/O operation when it was initiated.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'failed(java.lang.Throwable,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Invoked when an operation fails.`]
			],
			[/* parameters */
				[/* parameter */ 'exc', [/* parameter description */
					[/* text */ 't', `The exception to indicate why the I/O operation failed`]
				]],
				[/* parameter */ 'attachment', [/* parameter description */
					[/* text */ 't', `The object attached to the I/O operation when it was initiated.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
