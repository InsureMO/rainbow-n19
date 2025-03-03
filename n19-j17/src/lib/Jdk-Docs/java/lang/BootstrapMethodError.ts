import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.BootstrapMethodError', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that an `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', ` instruction or a dynamic
 constant failed to resolve its bootstrap method and arguments,
 or for `],
		[/* inline code block */ 'i', `invokedynamic`],
		[/* text */ 't', ` instruction the bootstrap method has failed to
 provide a
 `],
		[/* reference */ 'r', `java.lang.invoke.CallSite`],
		[/* text */ 't', ` with a
 `],
		[/* reference */ 'r', `.CallSite#getTarget()`],
		[/* text */ 't', `
 of the correct `],
		[/* reference */ 'r', `.MethodHandle#type()`],
		[/* text */ 't', `,
 or for a dynamic constant the bootstrap method has failed to provide a
 constant value of the required type.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `BootstrapMethodError`],
				[/* text */ 't', ` with the specified
 cause.`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause, may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `BootstrapMethodError`],
				[/* text */ 't', ` with the specified
 detail message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause, may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `BootstrapMethodError`],
				[/* text */ 't', ` with the specified
 detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `BootstrapMethodError`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
