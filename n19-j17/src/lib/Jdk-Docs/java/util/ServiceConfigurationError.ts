import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.ServiceConfigurationError', [
	[/* class description */
		[/* text */ 't', `Error thrown when something goes wrong while locating, loading, or
 instantiating a service provider.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new instance with the specified message.`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `The message, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new instance with the specified message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `The message, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if there is no message`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `The cause, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the cause is nonexistent
                or unknown`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
