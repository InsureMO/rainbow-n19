import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.InputMismatchException', [
	[/* class description */
		[/* text */ 't', `Thrown by a `],
		[/* inline code block */ 'i', `Scanner`],
		[/* text */ 't', ` to indicate that the token
 retrieved does not match the pattern for the expected type, or
 that the token is out of range for the expected type.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 as its error message string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InputMismatchException`],
				[/* text */ 't', `, saving a reference
 to the error message string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` for later retrieval by the
 `],
				[/* inline code block */ 'i', `getMessage`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
