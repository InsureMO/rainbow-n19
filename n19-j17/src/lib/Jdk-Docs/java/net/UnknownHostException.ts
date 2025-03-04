import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.UnknownHostException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that the IP address of a host could not be determined.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `UnknownHostException`],
				[/* text */ 't', ` with no detail
 message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `UnknownHostException`],
				[/* text */ 't', ` with the
 specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
