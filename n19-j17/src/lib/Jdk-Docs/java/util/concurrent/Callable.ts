import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.Callable', [
	[/* class description */
		[/* text */ 't', `A task that returns a result and may throw an exception.
 Implementors define a single method with no arguments called
 `],
		[/* inline code block */ 'i', `call`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `Callable`],
			[/* text */ 't', ` interface is similar to `],
			[/* reference */ 'r', `java.lang.Runnable`, `Runnable`],
			[/* text */ 't', `, in that both are designed for classes whose
 instances are potentially executed by another thread.  A
 `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', `, however, does not return a result and cannot
 throw a checked exception.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `java.util.concurrent.Executors`, `Executors`],
			[/* text */ 't', ` class contains utility methods to
 convert from other common forms to `],
			[/* inline code block */ 'i', `Callable`],
			[/* text */ 't', ` classes.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'call()', [
			[/* method description */
				[/* text */ 't', `Computes a result, or throws an exception if unable to do so.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.Exception', [/* throw description */
					[/* text */ 't', `if unable to compute a result`]
				]]
			],
			[/* return description */
				[/* text */ 't', `computed result`]
			]
		]]
	],
	/* enum values */ UDF
]);
