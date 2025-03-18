import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.UncheckedIOException', [
	[/* class description */
		[/* text */ 't', `Wraps an `],
		[/* reference */ 'r', `java.io.IOException`, `IOException`],
		[/* text */ 't', ` with an unchecked exception.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.io.IOException)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class.`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `IOException`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the cause is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.io.IOException)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message, can be null`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `IOException`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the cause is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getCause()', [
			[/* method description */
				[/* text */ 't', `Returns the cause of this exception.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` which is the cause of this exception.`]
			]
		]]
	],
	/* enum values */ UDF
]);
