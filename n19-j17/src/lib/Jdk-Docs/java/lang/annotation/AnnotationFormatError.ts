import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.AnnotationFormatError', [
	[/* class description */
		[/* text */ 't', `Thrown when the annotation parser attempts to read an annotation
 from a class file and determines that the annotation is malformed.
 This error can be thrown by the `],
		[/* reference */ 'r', `java.lang.reflect.AnnotatedElement`, `API used to read annotations reflectively`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `AnnotationFormatError`],
				[/* text */ 't', ` with the specified
 detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `AnnotationFormatError`],
				[/* text */ 't', ` with the specified
 detail message and cause.  Note that the detail message associated
 with `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', ` is `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` automatically incorporated in
 this error's detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is permitted, and
     indicates that the cause is nonexistent or unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `AnnotationFormatError`],
				[/* text */ 't', ` with the specified
 cause and a detail message of
 `],
				[/* inline code block */ 'i', `(cause == null ? null : cause.toString())`],
				[/* text */ 't', ` (which
 typically contains the class and detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is permitted, and
     indicates that the cause is nonexistent or unknown.)`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
