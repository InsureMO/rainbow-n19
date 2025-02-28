import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ClassCircularityError', [
	[/* class description */
		[/* text */ 't', `Thrown when the Java Virtual Machine detects a circularity in the
 superclass hierarchy of a class being loaded.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ClassCircularityError`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ClassCircularityError`],
				[/* text */ 't', ` with the specified detail
 message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `The detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
