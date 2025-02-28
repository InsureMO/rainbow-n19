import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.StringIndexOutOfBoundsException', [
	[/* class description */
		[/* text */ 't', `Thrown by `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', ` methods to indicate that an index is either negative
 or greater than the size of the string.  For some methods such as the
 `],
		[/* external link */ 'a', `String.html#charAt(int)`, `charAt`],
		[/* text */ 't', ` method, this exception also is thrown when the
 index is equal to the size of the string.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `StringIndexOutOfBoundsException`],
				[/* text */ 't', ` with no detail
 message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `StringIndexOutOfBoundsException`],
				[/* text */ 't', ` with the specified
 detail message.`]
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
				[/* inline code block */ 'i', `StringIndexOutOfBoundsException`],
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
