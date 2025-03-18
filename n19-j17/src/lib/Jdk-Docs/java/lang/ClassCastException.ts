import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ClassCastException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that the code has attempted to cast an object
 to a subclass of which it is not an instance. For example, the
 following code generates a `],
		[/* inline code block */ 'i', `ClassCastException`],
		[/* text */ 't', `:
 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', `     Object x = new Integer(0);
     System.out.println((String)x);
 `]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ClassCastException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ClassCastException`],
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
