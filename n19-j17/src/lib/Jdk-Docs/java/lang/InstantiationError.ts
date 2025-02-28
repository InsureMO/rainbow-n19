import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.InstantiationError', [
	[/* class description */
		[/* text */ 't', `Thrown when an application tries to use the Java `],
		[/* inline code block */ 'i', `new`],
		[/* text */ 't', `
 construct to instantiate an abstract class or an interface.
 `],
		[/* block */ 'b', `
 Normally, this error is caught by the compiler; this error can
 only occur at run time if the definition of a class has
 incompatibly changed.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InstantiationError`],
				[/* text */ 't', ` with no detail  message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InstantiationError`],
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
	/* methods */ UDF,
]);
