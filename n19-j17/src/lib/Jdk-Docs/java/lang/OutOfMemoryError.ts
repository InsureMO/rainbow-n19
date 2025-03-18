import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.OutOfMemoryError', [
	[/* class description */
		[/* text */ 't', `Thrown when the Java Virtual Machine cannot allocate an object
 because it is out of memory, and no more memory could be made
 available by the garbage collector.

 `],
		[/* inline code block */ 'i', `OutOfMemoryError`],
		[/* text */ 't', ` objects may be constructed by the virtual
 machine as if `],
		[/* reference */ 'r', `java.lang.Throwable#<init>(java.lang.String,java.lang.Throwable,boolean,boolean)`, `suppression were disabled and/or the stack trace was not writable`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `OutOfMemoryError`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `OutOfMemoryError`],
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
