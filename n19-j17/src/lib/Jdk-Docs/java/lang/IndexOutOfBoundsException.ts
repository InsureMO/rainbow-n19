import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.IndexOutOfBoundsException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that an index of some sort (such as to an array, to a
 string, or to a vector) is out of range.
 `],
		[/* block */ 'b', `
 Applications can subclass this class to indicate similar exceptions.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
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
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
				[/* text */ 't', ` with the specified detail
 message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
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
	/* methods */,
	/* enum values */ UDF
]);
