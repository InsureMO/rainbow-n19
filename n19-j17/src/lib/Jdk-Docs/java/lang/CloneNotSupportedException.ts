import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.CloneNotSupportedException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that the `],
		[/* inline code block */ 'i', `clone`],
		[/* text */ 't', ` method in class
 `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` has been called to clone an object, but that
 the object's class does not implement the `],
		[/* inline code block */ 'i', `Cloneable`],
		[/* text */ 't', `
 interface.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Applications that override the `],
			[/* inline code block */ 'i', `clone`],
			[/* text */ 't', ` method can also
 throw this exception to indicate that an object could not or
 should not be cloned.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `CloneNotSupportedException`],
				[/* text */ 't', ` with no
 detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `CloneNotSupportedException`],
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
