import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.LambdaConversionException', [
	[/* class description */
		[/* text */ 't', `LambdaConversionException`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LambdaConversionException`],
				[/* text */ 't', ` with a message,
 cause, and other settings.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause`]
				]],
				[/* parameter */ 'enableSuppression', [/* parameter description */
					[/* text */ 't', `whether or not suppressed exceptions are enabled`]
				]],
				[/* parameter */ 'writableStackTrace', [/* parameter description */
					[/* text */ 't', `whether or not the stack trace is writable`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LambdaConversionException`],
				[/* text */ 't', ` with a cause.`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LambdaConversionException`],
				[/* text */ 't', ` with a message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LambdaConversionException`],
				[/* text */ 't', ` with a message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `LambdaConversionException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
