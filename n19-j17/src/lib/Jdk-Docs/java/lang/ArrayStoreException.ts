import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ArrayStoreException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that an attempt has been made to store the
 wrong type of object into an array of objects. For example, the
 following code generates an `],
		[/* inline code block */ 'i', `ArrayStoreException`],
		[/* text */ 't', `:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     Object x[] = new String[3];
     x[0] = new Integer(0);
 `]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ArrayStoreException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ArrayStoreException`],
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
