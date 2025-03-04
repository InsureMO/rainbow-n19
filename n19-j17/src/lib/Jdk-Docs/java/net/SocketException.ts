import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.SocketException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that there is an error creating or accessing a Socket.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `SocketException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `SocketException`],
				[/* text */ 't', ` with the
 specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
