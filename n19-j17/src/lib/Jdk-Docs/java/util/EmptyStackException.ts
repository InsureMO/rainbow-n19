import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.EmptyStackException', [
	[/* class description */
		[/* text */ 't', `Thrown by methods in the `],
		[/* inline code block */ 'i', `Stack`],
		[/* text */ 't', ` class to indicate
 that the stack is empty.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `EmptyStackException`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 as its error message string.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
