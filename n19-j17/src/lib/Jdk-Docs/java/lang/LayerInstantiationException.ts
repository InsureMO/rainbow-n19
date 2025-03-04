import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.LayerInstantiationException', [
	[/* class description */
		[/* text */ 't', `Thrown when creating a `],
		[/* reference */ 'r', `java.lang.ModuleLayer`],
		[/* text */ 't', ` fails.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LayerInstantiationException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LayerInstantiationException`],
				[/* text */ 't', ` with the given detail
 message.`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `The detail message; can be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LayerInstantiationException`],
				[/* text */ 't', ` with the given detail
 message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `The detail message; can be `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `The cause; can be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LayerInstantiationException`],
				[/* text */ 't', ` with the given cause.`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `The cause; can be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
