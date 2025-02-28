import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.DateTimeException', [
	[/* class description */
		[/* text */ 't', `Exception used to indicate a problem while calculating a date-time.
 `],
		[/* block */ 'b', `
 This exception is used to indicate problems with creating, querying
 and manipulating date-time objects.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new date-time exception with the specified message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the message to use for this exception, may be null`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new date-time exception with the specified message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the message to use for this exception, may be null`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause of the exception, may be null`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
