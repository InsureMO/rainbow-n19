import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.IllegalThreadStateException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that a thread is not in an appropriate state
 for the requested operation. See, for example, the
 `],
		[/* inline code block */ 'i', `suspend`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `resume`],
		[/* text */ 't', ` methods in class
 `],
		[/* inline code block */ 'i', `Thread`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IllegalThreadStateException`],
				[/* text */ 't', ` with no
 detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IllegalThreadStateException`],
				[/* text */ 't', ` with the
 specified detail message.`]
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
