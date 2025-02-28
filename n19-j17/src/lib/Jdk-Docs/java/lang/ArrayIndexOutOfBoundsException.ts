import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ArrayIndexOutOfBoundsException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that an array has been accessed with an illegal index. The
 index is either negative or greater than or equal to the size of the array.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ArrayIndexOutOfBoundsException`],
				[/* text */ 't', ` with no detail
 message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ArrayIndexOutOfBoundsException`],
				[/* text */ 't', ` class with the
 specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `ArrayIndexOutOfBoundsException`],
				[/* text */ 't', ` class with an
 argument indicating the illegal index.

 `],
				[/* block */ 'b', `The index is included in this exception's detail message.  The
 exact presentation format of the detail message is unspecified.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the illegal index.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
