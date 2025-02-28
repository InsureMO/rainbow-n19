import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.InstantiationException', [
	[/* class description */
		[/* text */ 't', `Thrown when an application tries to create an instance of a class
 using the `],
		[/* inline code block */ 'i', `newInstance`],
		[/* text */ 't', ` method in class
 `],
		[/* inline code block */ 'i', `Class`],
		[/* text */ 't', `, but the specified class object cannot be
 instantiated.  The instantiation can fail for a variety of
 reasons including but not limited to:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` the class object represents an abstract class, an interface,
      an array class, a primitive type, or `],
				[/* inline code block */ 'i', `void`]
			]],
			[/* block */ 'b', ` the class has no nullary constructor
`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InstantiationException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InstantiationException`],
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
	/* methods */ UDF,
]);
