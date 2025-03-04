import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.InvocationTargetException', [
	[/* class description */
		[/* text */ 't', `InvocationTargetException is a checked exception that wraps
 an exception thrown by an invoked method or constructor.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InvocationTargetException`],
				[/* text */ 't', ` with
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as the target exception.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a InvocationTargetException with a target exception.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target exception`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a InvocationTargetException with a target exception
 and a detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the target exception`]
				]],
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getCause()', [
			[/* method description */
				[/* text */ 't', `Returns the cause of this exception (the thrown target exception,
 which may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the cause of this exception.`]
			]
		]],
		[/* method */ 'getTargetException()', [
			[/* method description */
				[/* text */ 't', `Get the thrown target exception.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the thrown target exception (cause of this exception).`]
			]
		]]
	],
]);
