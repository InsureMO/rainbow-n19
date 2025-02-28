import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.NoClassDefFoundError', [
	[/* class description */
		[/* text */ 't', `Thrown if the Java Virtual Machine or a `],
		[/* inline code block */ 'i', `ClassLoader`],
		[/* text */ 't', ` instance
 tries to load in the definition of a class (as part of a normal method call
 or as part of creating a new instance using the `],
		[/* inline code block */ 'i', `new`],
		[/* text */ 't', ` expression)
 and no definition of the class could be found.
 `],
		[/* block */ 'b', `
 The searched-for class definition existed when the currently
 executing class was compiled, but the definition can no longer be
 found.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoClassDefFoundError`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoClassDefFoundError`],
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
