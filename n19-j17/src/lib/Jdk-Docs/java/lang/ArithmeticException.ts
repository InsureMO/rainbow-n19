import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ArithmeticException', [
	[/* class description */
		[/* text */ 't', `Thrown when an exceptional arithmetic condition has occurred. For
 example, an integer "divide by zero" throws an
 instance of this class.

 `],
		[/* inline code block */ 'i', `ArithmeticException`],
		[/* text */ 't', ` objects may be constructed by the
 virtual machine as if `],
		[/* reference */ 'r', `java.lang.Throwable#<init>(java.lang.String,java.lang.Throwable,boolean,boolean)`, `suppression were disabled and/or the stack trace was not writable`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` with no detail
 message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` with the specified
 detail message.`]
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
