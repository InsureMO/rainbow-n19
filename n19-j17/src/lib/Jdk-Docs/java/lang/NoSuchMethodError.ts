import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.NoSuchMethodError', [
	[/* class description */
		[/* text */ 't', `Thrown if an application tries to call a specified method of a
 class (either static or instance), and that class no longer has a
 definition of that method.
 `],
		[/* block */ 'b', `
 Normally, this error is caught by the compiler; this error can
 only occur at run time if the definition of a class has
 incompatibly changed.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoSuchMethodError`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoSuchMethodError`],
				[/* text */ 't', ` with the
 specified detail message.`]
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
