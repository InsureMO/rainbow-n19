import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.IllegalAccessException', [
	[/* class description */
		[/* text */ 't', `An IllegalAccessException is thrown when an application tries
 to reflectively create an instance (other than an array),
 set or get a field, or invoke a method, but the currently
 executing method does not have access to the definition of
 the specified class, field, method or constructor.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IllegalAccessException`],
				[/* text */ 't', ` without a
 detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IllegalAccessException`],
				[/* text */ 't', ` with a detail message.`]
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
