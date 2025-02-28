import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.LinkageError', [
	[/* class description */
		[/* text */ 't', `Subclasses of `],
		[/* inline code block */ 'i', `LinkageError`],
		[/* text */ 't', ` indicate that a class has
 some dependency on another class; however, the latter class has
 incompatibly changed after the compilation of the former class.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LinkageError`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LinkageError`],
				[/* text */ 't', ` with the specified detail
 message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LinkageError`],
				[/* text */ 't', ` with the specified detail
 message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause, may be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
