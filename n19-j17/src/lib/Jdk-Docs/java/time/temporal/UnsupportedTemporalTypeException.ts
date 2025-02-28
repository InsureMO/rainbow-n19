import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.UnsupportedTemporalTypeException', [
	[/* class description */
		[/* text */ 't', `UnsupportedTemporalTypeException indicates that a ChronoField or ChronoUnit is
 not supported for a Temporal class.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new UnsupportedTemporalTypeException with the specified message.`]
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
				[/* text */ 't', `Constructs a new UnsupportedTemporalTypeException with the specified message and cause.`]
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
