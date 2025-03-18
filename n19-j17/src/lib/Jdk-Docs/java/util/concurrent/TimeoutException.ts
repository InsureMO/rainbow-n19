import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.TimeoutException', [
	[/* class description */
		[/* text */ 't', `Exception thrown when a blocking operation times out.  Blocking
 operations for which a timeout is specified need a means to
 indicate that the timeout has occurred. For many such operations it
 is possible to return a value that indicates timeout; when that is
 not possible or desirable then `],
		[/* inline code block */ 'i', `TimeoutException`],
		[/* text */ 't', ` should be
 declared and thrown.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `TimeoutException`],
				[/* text */ 't', ` with no specified detail
 message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `TimeoutException`],
				[/* text */ 't', ` with the specified detail
 message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
